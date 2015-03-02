---
Categories:
- Ideas
Tags:
- Information Technology
- Robotics
date: 2016-03-01T10:13:27+01:00
title: Google's Self-Driven Source Tree
slug: googles-self-driven-source-tree
title_main: |
           Google's *Self-Driven* <br/>Source Tree
images:
- /img/2016/Google_self_driving_car_at_the_Googleplex.jpg
---
**Google stores all their source code in *google3*, a single source tree. This contains Google Search and the code driving the self-driven car.  Last month *that* software decided to crash into a bus.** 
<!--more-->

"It may be the first instance of a Google autonomous car being at fault in an accident," writes engadget.com.[^g-accident-engadget]

{{< img  src="/img/2016/Google_self_driving_car_at_the_Googleplex.jpg" caption="A Google self driving car drives past a double-deck commuter bus at Google's headquarters in Mountain View, CA, USA. Photo:  	Michael Shick (CCA 4.0)" >}}

>“We clearly bear some responsibility, because if our car hadn’t moved, there wouldn’t have been a collision.”<cite>Google</cite>

Google said in a statement on Monday that "we clearly bear some responsibility, because if our car hadn’t moved, there wouldn’t have been a collision." [^reuters]

Google holds most of their cards tight to their chest, but there are several sources online that confirm *google3*, their single source tree for *everything* inside Google: [^g3-1] [^g3-2]

**More than 2,000 software projects, hundreds of millions code lines, used and changed by 5,000 developers.**

--  It can take months before an engineer can navigate *google3* easily, says Nick Falkner.

Google's source code is a mix of Java, C++, Python, and Go (aka Golang). These interact with other libraries -- internal and external -- both statically and dynamically linked.

**A software module has its own set of defects, but it also inherits all the bugs the cat dragged in.**  

The solution to this is, of course, rigid source control and testing, testing, testing. And then some more testing.

>Nothing is more human than a human hipster developer, punching his C-code slightly hung over after a night falling off the wagon.

And this blows a big hole in the prophecies about robots and artificial intelligence taking over. These robots are programmed by humans. Nothing is more human than a human hipster developer, punching his C-code slightly hung over after a night falling off the wagon.

Then mistakes happen. And car crashes.

See also:  [self-driving cars and the survival of the fittest](/self-driving-cars-and-the-survival-of-the-fittest/).

[^g3-1]:  [Development at the Speed and Scale of Google] (http://www.infoq.com/presentations/Development-at-Google)
[^g3-2]: Nick Falkner's [notes](http://nickfalkner.com/2014/04/08/aswec-2014-day-2-keynote-innovation-at-google-aswec2014-adeled-scruzin-sallyannw/)  from ASWEC 2014, Day 2.
[^g-accident-engadget]: engadget.com: [Google self-driving car crashes into a bus (update: statement)](http://www.engadget.com/2016/02/29/google-self-driving-car-accident/)
[^reuters]: http://www.reuters.com/article/us-google-selfdrivingcar-idUSKCN0W22DG
