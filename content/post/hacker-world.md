---
Categories:
- Ideas
Tags:
- Information Technology
- Gaming
date: 2015-05-19T15:28:58+02:00
title: "New Game Idea: Hacker World"
title_lead: "New Game Idea:"
title_main: "**Hacker** World"
images:
- /img/2015/hack-the-world.png

---

**A world of Linux containers. Isolated countries equipped with a simple C compiler, last surviving account wins.**

<!--more-->

Upon registration the hacker is assigned a remote login to a Linux container. Think about this container as a country; so there will be many countries, fighting. The hacker may get country membership based on location, maybe the IP address used when signing up? The containers will be differently equipped, some are modern Ubuntu OSes with plenty of CPU and RAM, others some old kernel packed in a Slackware distro. Think of it as industrial countries vs developing countries.

{{< img src="/img/2015/hack-the-world.png" caption="Pkill hacker. Hacker Harakiri.">}}

But the containers will be bare boned, only the very basic tools installed: A C compiler, a Bash shell, and a simple text editor. The countries are network connected both internally and with the real world. **But all the ports are blocked.**

Some write small web-servers to promote their progress to the outside world. Some write fun games, or scripts to get elevated privileges on the OS. Eventually some of them with the right skill-set will break out of the container. And then they start looking for holes in the fences of their neighbors. 

**A core process runs on the host OS, tracks progress of the game and publishes score tables to the outside world. This process does so frequently, because it has no idea how long it will survive.**


The countries slowly fall apart. Their precious data is thrown into `/dev/null`.


**Until there is one hacker standing.**

## Epilogue

The main problem with this game is one of law and morale. Some hacker will eventually start breaking the law, and then who is to blame? The hacker or the owner of the hardware?
