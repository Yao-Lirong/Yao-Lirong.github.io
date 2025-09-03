---
layout: page
title: Aphelion Defense
description: "Space-themed online mobile RTS game"
img: assets/img/aphelion-defense-logo.jpg
importance: 2
category: Cornell
---

![Aphelion Defense]({{ "/assets/img/aphelion-defense-banner.jpg" | relative_url }}){:class="img-fluid rounded z-depth-1"}

This was the course project of [CS4152: Advanced Game Design](https://www.cs.cornell.edu/courses/cs5152/2023sp/) with professor Walker White. Since freshman year, I had wanted to take Cornell's most popular project-based class. With all the unexpected brought by COVID, I didn't find time to take it till my very last semester.

We built [Aphelion Defense](https://web.archive.org/web/20230620225349/https://gdiac.cs.cornell.edu/gdiac/showcase/gallery/apheliondefense/), a space-themed multi-player RTS game. In the game, you will spawn units on your planet, send them to opponents' planet, and conquer all their territory to claim victory. You want to take planets in the strategic positions first, so you can get more of the most important but scare resource in game - sunlight. You can also upgrade your planet, shoot meteroids to destroy your enemy, and there's a lot more to explore. The game was built with [Cornell University Game Library](https://www.cs.cornell.edu/courses/cs5152/2023sp/resources/engine/).

Students were supposed to work in a group of 10 on a single mobile game throughout the semester, with a setup of at least 5 programmers and 3 designers. We started off with 6 programmers and 3 designers. However, one of our designers dropped the class, while another started to ghost us since week 2, putting great pressure on the only designer we had left and slowing down the whole devleopment process.

{% include figure.liquid loading="eager" path="assets/img/aphelion-defense-team.jpg" class="img-fluid rounded z-depth-1" %} 
<div class="caption">
    Our Fabulous Team
</div>

In hindsight, there were also some technical issues we could avoid from the start. The most salient one to me is that we didn't take the idea of "online" game too serious when outlining the code structure. Specifically, I didn't oppose strong enough to the idea of simulating each unit on their own, which turned out to be a huge burden on the internet communication. Instead, we should've had a concept of unit group from the beginning, and let users control the unit group only. We should've also separated the view and control more - to have the battle results determined as long as two opposing unit groups meet and let the graphics of units dying appear whatever they want later. Setting each unit an independent probability to die and making each calculate its own dying status at every frame rate caused some serious desync issues in the game.

I was first assigned to audio design and offline in-game AI. However, as the project progresses, we discovered networking posed too many issues for us to develop another offline mode, so we abandoned the offline computer AI and I was moved to help with other aspects as needed: fix networking issues, implement sunlight generation, develop some tutorial UI, etc, in addition to my audio job. I also made a promotion video for our game in the final showcase, in which the background music, composed by me, is the main soundtrack of the game.

Despite all the fiasco mentioned, we pulled through: we managed to fix all the bugs at showcase. The gameplay turned out to be very interesting and much more intense than I imagined. You can find our game's page in the link above ([also pasted here](https://web.archive.org/web/20230620225349/https://gdiac.cs.cornell.edu/gdiac/showcase/gallery/apheliondefense/)). We published the game through Apple's TestFlight and Google Play's Beta. However, the game is no longer up as Cornell does not allow us to use its server (yeah, because of money) and we figured it's a horrible idea to keep a cannot-go-online online-only game online.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/aphelion-defense-pv.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    </div>
</div>
<div class="caption">
    Promotional video for our game Aphelon Defense
</div>
