var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var parallelize = require("concurrent-transform");
var runSequence = require('run-sequence');
var cleanhtml = require('gulp-cleanhtml');
var plugins = require('gulp-load-plugins')();

function copyPartials() {
     gulp.src('layouts/partials/header_master.html').pipe(plugins.rename('header.html'))
        .pipe(gulp.dest('layouts/partials'));
    return gulp.src('layouts/partials/footer_master.html').pipe(plugins.rename('footer.html'))
        .pipe(gulp.dest('layouts/partials'))
}

gulp.task('less', function () {
    return gulp.src('assets/less/gi.less')
        .pipe(plugins.less({compress: true}))
        .pipe(gulp.dest('static/assets/css'));
});

gulp.task('scripts', function () {
    return gulp.src(['assets/js/vendor/socialite.js', 'assets/js/**/*.js'])
        .pipe(plugins.concat('gi.js'))
        .pipe(plugins.uglify())
        .pipe(gulp.dest('static/assets/js'));
});


gulp.task('clean-static', function () {
    return gulp.src(["static/assets/css/*.css", "static/assets/js/*.js"], {read: false})
        .pipe(plugins.clean());
});


gulp.task('clean-dist', function () {
    return gulp.src(["dist"], {read: false})
        .pipe(plugins.clean());
});

/* There may be more elegant ways to do this, but we need to work with unversioned resources with Hugo's livereload running. */
gulp.task('copy', [], function () {
    return copyPartials();
});

gulp.task('build-static', ['clean-static', 'less', 'scripts', 'copy'], function () {
    return gulp.src(['static/assets/js/gi.js', 'static/assets/css/gi.css', 'layouts/partials/header.html','layouts/partials/footer.html'], {base: path.join(process.cwd(), 'static')})
        .pipe(plugins.revAll({
            ignore: [/^\/favicon.ico$/g, /.*fonts.*/, '.png', '.html', /.*vendor.*/, /.*nano.*/, /.*favicon.*/]

        }))
        .pipe(gulp.dest('static'))
});

gulp.task('build', function (callback) {
    runSequence( ['build-static', 'clean-dist'], 'hugo', 'html-clean', callback)
});


gulp.task('hugo', function (cb) {
    plugins.run('hugo --source=. --destination=dist').exec(cb);

});

gulp.task('html-clean', function() {
    gulp.src('./dist/**/*.html')
        .pipe(plugins.uglifyInline())
        .pipe(cleanhtml())
        .pipe(gulp.dest('./dist/'))
});


gulp.task('aws-publish', ['build'], function () {

    var publisher = plugins.awspublish.create(JSON.parse(fs.readFileSync(process.env.HOME + '/.aws/greatide.as.json')));

    return gulp.src('./dist/**')
        .pipe(plugins.awspublishRouter({
            cache: {
                // cache for 5 minutes by default
                cacheTime: 300
            },

            routes: {
                "^assets/(?:.+)\\.(?:js|css|svg|ttf)$": {
                    // don't modify original key. this is the default
                    key: "$&",
                    // use gzip for assets that benefit from it
                    gzip: true,
                    // cache static assets for 2 years
                    cacheTime: 630720000
                },

                "^assets/.+$": {
                    // cache static assets for 2 years
                    cacheTime: 630720000
                },

                "^.+\\.html": {
                    gzip: true
                },


                "^README$": {
                    // specify extra headers
                    headers: {
                        "Content-Type": "text/plain"
                    }
                },

                // pass-through for anything that wasn't matched by routes above, to be uploaded with default options
                "^.+$": "$&"
            }
        }))
        .pipe(parallelize(publisher.publish(), 10))
        .pipe(publisher.sync())
        .pipe(publisher.cache())
        .pipe(plugins.awspublish.reporter({
            states: ['create', 'update', 'delete']
        }));
});


gulp.task('deploy', ['aws-publish'], function () {

    // get it back into dev shape again
    return copyPartials();

});


gulp.task('watch', ['copy', 'less', 'scripts'], function () {
    gulp.watch('assets/less/*.less', ['less']);
    gulp.watch('assets/js/**/*.js', ['scripts']);
});

/* This is all we need for dev. */
gulp.task('default', ['watch']);