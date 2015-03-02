#!/bin/bash

IFS=$'\n'  

TO=/home/bep/dev/greatide.as/static/img/2015/govreact

./dotall.sh | neato -Gsize=10,10\! -Tpng -o $TO/dotall.png
./dotsimple.sh | neato -Gsize=10,10\! -Tpng -o $TO/dotsimple.png
./sol1.sh | circo -Gsize=10,10\! -Tpng -o $TO/dotsol1.png
./sol2.sh | dot -Gsize=10,10\! -Tpng -o $TO/dotsol2.png

