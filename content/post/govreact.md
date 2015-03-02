---
Categories:
- Ideas
Tags:
- Information Technology
date: 2015-04-28T13:45:10+02:00
title: Let Spider-Man Collect Your Citizen Profile
title_main: |
            Let Spider-Man Collect  
            **Your Citizen Profile**
slug: spider-man-citizen-profiling
images:
- /img/2015/govreact/greatide.as.spider-man-citizen-profiling.main-diagram.png
---

**Spider-Man bouncing through the data centers of the Norwegian government will restore their scattered mirror of CITIZEN ME.** 

<!--more-->

A know-it-all citizen registry may sound like George Orwell's [1984](https://en.wikipedia.org/wiki/Nineteen_Eighty-Four), or the Russian KGB from the cold war era -- but it is the right way. 

This is Spaghetti vs the Spider.

{{< img src="/img/2015/govreact/greatide.as.spider-man-citizen-profiling.main-diagram.png" caption="Spaghetti vs Spider. Two solutions to the same problem. One tangled up and very complex." >}}

But first, some background.

## To Reuse or Not to Reuse


Reuse is reuse of source code or binaries or data (via some API) between organizational blocks. It's not reusing some string function inside a given application, or even between applications in the same suite. That is covered by DRY.[^DRY] Reuse, in my definition of the term, is applicable when two different departments with two different sets of applications, with different release cycles and such, share substantial bulks of code or binaries and/or data. 

Often it can be tempting to have large, company-wide shared software blocks; but the requirements vary a lot and the cost of change management often outweigh the benefits. Generally it is better to just copy-paste the source code or replicate the data, and build from there.

There are exceptions.

## The Spaghetti Approach

The Norwegian government contains about 112 government agencies. Assume all have an IT department and each has one service of value to all the other 111. These agencies like to host their servers themselves, so the TCP packets fly in all directions. (112^2)-112 is 12432 integrations. With a wide range of endpoints, from good old SOAP  to more or less RESTful services -- and more or less standardized security protocols. These have to be documented on both sides of the fence. So each new integration is a new project with a project manager and a steering group. And with a fantasy estimate of two million Euros per project, the total bill for the graph below is 23 billion Euro, 194.4 billion NOK -- or 16 percent of the Norwegian national budget. That inner loop is a real drain in the wallet. And a boost to the algorithmic complexity 


{{< img src="/img/2015/govreact/greatide.as.spider-man-citizen-profiling.dotall.png" caption="No, this isn't phone lines in an Asian city. This is 112 government agencies (the houses) sharing IT services." >}}


This is hopefully unrealistic. But it makes a point. 

**Not only does the above cost piles of money -- it is also impossible to manage. Leaks of confidential data _will_ happen.**

And that drawing does not consider duplicate use of data sets inside the same agency, as shown in a recent internal report from NAV (Norwegian Labour and Welfare Administration)[^nav]:

>New data from the National Registry[^folkeregisteret] isn't updated only one place in NAV's IT systems. The changes must be applied many places -- some of them manually. "These local changes of copies of the National Registry is very time consuming".[^nav-report]

The following idea, however, isn't meant to replace the National Registry. That registry is one of the main sources.
	

## The Spider Approach


{{< img src="/img/2015/govreact/greatide.as.spider-man-citizen-profiling.dotsimple.png" caption="112 government agencies providing data to the rest. Everything gets simpler with one central repository. Some may even say this looks beautiful." >}}

The inner loop is removed from the equation and all is simple. This isn't SOA[^SOA] nor a data warehouse. 

**This is snapshots of your public life and it depends on a busy spider. Spider-oriented Architecture.[^spider]**

### Collecting the Data

{{< img src="/img/2015/govreact/greatide.as.spider-man-citizen-profiling.dotsol1.png" caption="Inspired by Google and co.'s crawlers on the World Wide Web, but with more or less structured citizen data." >}}

Google have used the model above to collect data with great success. And the terms above mirror those from their WWW-bot cousins:

* `govbots.txt` contains instructions about paths to crawl or avoid.[^robotstxt]
* `datamap.json` contains paths to and layouts of the top-level data nodes.[^sitemap] 

### Data Lookup

{{< img src="/img/2015/govreact/greatide.as.spider-man-citizen-profiling.dotsol2.png" caption="A simple view of how to get to the data." >}}

The drawing above is simplified. But as there was only one logical service collecting the data, there is only one endpoint to get to the data. This endpoint should provide both streaming services for larger data sets and functions to answer truthful to simple questions.

This may seem like "putting all the eggs in one basket", but the above is much easier to secure and manage than thousands of endpoints scattered around in the dark, moist basements of the government.

### Use Cases

A lot of tasks that are currently very hard, if possible at all, will become manageable. Some examples:

* *Find duplicates.* This is a well-known problem, people who acquire multiple identities to collect multiple social support packages, passports etc.
* *Detect identity thefts.*
* *Avoid frauds.* Works, but still gets unemployment benefits. Has no children, gets children support ...
* *Find alibis.* A major part of the police's detective work is the exclusion of suspects. 
* *Identify passive or historic citizens.* As the values stored are associated with both _the person_ and _a moment in time_, one could imagine seeing a person _leave the country, but not return_.
* *Avoid shadow registers.* When the main registry is lacking some information or is too hard to integrate with, you build your own.


Some of the data will be sensitive and shouldn't be shared widely. But vital answers could be given without revealing the backing data: 

* *Are person A and B duplicates?*, *Is person A duplicated?*"
* *What's the status of person A?* "Up and running", "passive" (not in the country anymore), "dead", "probably dead"...
* *Could person A have been at location B last Saturday at 9 PM?*
 

The most important use case is to provide a _broad enough overview of a citizen_ in the procedural applications of the different agencies. This should fit on a computer screen. A common problem is the left-foot-agency knowing very little about the steps taken by the right. The result is mistakes, same work done twice, duplicate payouts, and delays.


## Epilogue

There is a hot-headed and ongoing debate in Norway about government IT projects blowing their budgets. People write articles showing they know better. Some want executable deliveries every fortnight, let the users test it -- then adjust or throw it away. These people tell success-stories from commercial companies, often forgetting that these companies have spent billions getting to where they are, or that the applications they build are feather-light compared to the governments's. I can only imagine the complexities and scale of the [Norwegian pension reform](https://en.wikipedia.org/wiki/Pensions_in_Norway#The_New_Pension_Reform). It's not even remotely related to an application that sells classified ads.

The Directorate of Health in Norway recently released Core Medical Journal[^kjernejournal] for every citizen in Norway. This is a very good idea, but judging by the partly floppy-disk-based IT systems of their main source, I wouldn't bet on it being complete. If the column for allergies is blank I would interpret it as "maybe not". But medical data is sensitive and probably not a candidate for *the spider*. They do, however, have an option for the patient to fill in the blanks him- or herself.

The National Registry in Norway is in the process of modernizing their mostly Cobol-based application stack. In their well-written pre-plan report they evaluate different solutions, some of them decentralized, but seem to have landed on status quo:[^modernized-folkeregister]

{{< img src="/img/2015/govreact/new-folkeregister-in-out.png" caption="The data flows in the proposed modernized National Registry in Norway. In and out. Source: Skatteetaten.no" >}}

**This is probably a good choice, but watch out for that inner loop. And be bold.**

[^kjernejournal]: [https://helsenorge.no/kjernejournal](https://helsenorge.no/kjernejournal)
[^sitemap]: "The Sitemaps protocol allows a webmaster to inform search engines about URLs on a website that are available for crawling." [Wikipedia](https://en.wikipedia.org/wiki/Sitemaps)
[^robotstxt]: "Web site owners use the /robots.txt file to give instructions about their site to web robots; this is called The Robots Exclusion Protocol." [robotstxt.org](http://www.robotstxt.org/robotstxt.html)
[^modernized-folkeregister]: [Pre-plan report modernized National Registry](http://www.skatteetaten.no/upload/PDFer/Rapport_Modernisering_av_Folkeregisteret.pdf). 
[^folkeregisteret]: The Norwegian [national people registry](http://www.skatteetaten.no/en/Person/National-Registry/). "The registry forms the basis for the tax register, the electoral register and population statistics." 
[^nav]: NAV is the short name for the Norwegian Labour and Welfare Administration, see [https://www.nav.no/en/Home](https://www.nav.no/en/Home).
[^nav-report]: Internal NAV-report presented at [digi.no](http://www.dn.no/nyheter/politikkSamfunn/2015/04/23/2153/Nav/nav-trenger-400-millioner-ekstra).
[^SOA]: Wikipedia on [Service-oriented architecture](https://en.wikipedia.org/wiki/Service-oriented_architecture)
[^DRY]: According to [Wikipedia](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself), the DRY principle is stated as “every piece of knowledge must have a single, unambiguous, authoritative representation within a system.”
[^spider]: Spider on the internet as defined by [whatis.techtarget.com](http://whatis.techtarget.com/definition/spider): _"A spider is a program that visits Web sites and reads their pages and other information in order to create entries for a search engine index. The major search engines on the Web all have such a program, which is also known as a 'crawler' or a 'bot.'"_
 

