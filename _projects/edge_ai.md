---
layout: page
title: Edge AI
description: "Xiaomi Internet Business Department annual key project"
img: assets/img/k80-product-page-banner.png
importance: 1
category: Xiaomi
images:
  slider: true
---

{% include figure.liquid loading="eager" path="assets/img/mi-presentation2.jpg" class="img-fluid rounded z-depth-1" %}

<div class="caption">
    Me giving internal presentations at Xiaomi
</div>

In the middle of 2024, I was appointed on an urgent basis to kick start our department's annual key project - Edge AI. Starting off with the TensorFlow Lite (now LiteRT) most basic example of deploying MobileBERT on phone, we paved the way for further on-device AI applications. The project evolved to focus on two key sub-projects: 1. discovering new possibilities of revenue growth without transferring user's sensitive information to cloud 2. a gaming assistant that eventually featured in a flagship phone launch with 150M+ online viewers

Edge AI's whole idea started from the NPUs that all flagship chipset bundled with at the time, even though no phone manufacturers had a clear purpose for them. The senior management reasoned that the best way to use these NPUs is to process the private information that cannot be and should not be transferred to the cloud. These information is highly sensitive but at the same time contains some most valuable information for commercialization.

Therefore, I pioneered the company's first full pipeline to deploy transformer based text model on Android phone with TensorFlow Lite, which turned out to be the worst framework I've ever used in my entire programming career. (Find a full rant [on my blog](https://yao-lirong.github.io/blog/2024-09-22-Running-MobileBert-on-Android-with-TensorFlow-Lite/)) We then proceeded dealing with user's sensitive information for push information analysis, asset assessment, etc. With latency and energy use being a big concern of Edge AI, I applied distillation, quantization, and hyper-parameter search that in best case produced small models achieving same accuracy with 2% of original size and 50% latency.

{% include figure.liquid loading="eager" path="assets/img/k80-product-page.png" class="img-fluid rounded z-depth-1" %}

<div class="caption">
    Screenshot from Redmi K80 product page
</div>

Seeing the success in processing privacy-heavy data, the Internet Business Department (where I worked for) teamed up with the Phone Department (biggest department in Xiaomi because that's what this company was founded on) to build an on-device gaming assistant for Genshin Impact, LOL Mobile, etc. and make that a selling point for company's next flagship phone [Redmi K80](https://www.mi.com/prod/redmi-k80). The project is a combination of on-device CNN models to recognize in-game elements such as heroes, health, mana, etc and a cloud LLM that gives real-time tactic devices based on the information extracted by CNN.

This project became the first Internet Business Department project to be featured in a flagship phone launch and represented the department to compete in company's annual Million-Dollar Technology Award. My supervisor went to company's headquarter in Beijing and sat in the launch event himself. I didn't have the privilage to go there so I watched it online along with a total of 150 million Mi fans worldwide. I personally earned an internal "Rising Star Award" (top 5% among 150 new grads in Internet Business department) for this project and later delivered several 200+ attendee tech talks across the company.

<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/k80-launch-screenshot-1.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/k80-launch-screenshot-2.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/k80-launch-screenshot-3.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/k80-launch-screenshot-4.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/k80-launch-screenshot-5.jpg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
</swiper-container>
<div class="caption">
    Photos at K80 launch event, see full video <a href="https://www.youtube.com/live/gS6xtt392y4?t=2147s"> on YouTube </a>
</div>

BTW, this project was released one week earlier than the notorious [Microsoft Edge Game Assist](https://blogs.windows.com/msedgedev/2024/11/22/introducing-microsoft-edge-game-assist-preview/) and is probably the first released product of its kind.
