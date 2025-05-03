---
layout: page
title: Evolving Artificial Life Simulation
description: "Critter World: my first real computer engineering project"
img: assets/img/critter-world.jpg
importance: 1
category: Cornell
---

This was the final course project of [CS2112: OOP and Data Structures (Honors)](https://www.cs.cornell.edu/courses/cs2112/2019fa/) with professor Andrew Myers. I took this class in 19FA, my first semester at Cornell. The followings list what we did in each mileston:

- Built a simulation of a hexagonal critter world where critters of different species move, eat, reproduce, and evolve
- Coded a parser in Java that converts critter’s genome to an abstract syntax tree and an interpreter to execute the corresponding program
- Designed a GUI that allows users to place, view, and kill critters as the world advances automatically or following user's command
- Implemented a distributed client-server system, permitting multi-user to view and interact with the model concurrently through GUI

This 8-week-long project ended up having 7000+ lines of codes in Java. I am very pround to include it on my homepage even long after I graduated because except the GUI part, I led the whole project's structure design and guided my two teammates on its implementation. (Unfortunately I still can't wrap my head around how all the listeners in GUI works till today)

In addition to standard object oriented programming concepts like interface specification, read write split, etc, to make each milestone possible, I learned basics of compiler, designing abstract syntax tree, API communication, concurrent programming, and a lot more. Our implmentation of the server excelled in responding speed among all teams, many of which have years of programming experiences before taking this class.

Attached is a demo of the critter world (For reasons I couldn't figure out, the file may fail to play on FireFox. Try using a chrome-based browser if it so happens to you)

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/critter-world-demo.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    </div>
</div>
<div class="caption">
    Demo of critter world
</div>
