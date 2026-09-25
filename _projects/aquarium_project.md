---
layout: page
title: Interactive 3D Aquarium
description: create your own fish
img: assets/img/aquarium.gif
date: 2025-11-01
category: other
---

<div class="embed-responsive embed-responsive-16by9">
    {% include video.liquid path="https://www.youtube.com/embed/_1EYNdqgQZQ" class="img-fluid rounded z-depth-1" %}
</div>

<br>

<div class="row align-items-center">
    <div class="col-md-9">
        <p><strong>Interactive 3D Aquarium</strong> is an interactive exhibit created for the stereoscopic 3D display wall in the LAVA lab at UH Mānoa. Visitors scan a QR code to draw their own fish on their phone, then put on 3D glasses to watch it swim around the tank with everyone else's.</p>
        <p>Each drawing is applied as a texture onto a 3D fish model, so every fish in the tank was designed by someone who visited. Fish are saved as they are uploaded, so when the application is turned back on it brings in all the fish created by previous visitors and the tank keeps growing over time.</p>
        <p>Interactive 3D Aquarium was a project I was lead developer on at LAVA. I worked on the Unity aquarium and its stereoscopic rendering, the flocking (boids) system that drives the fish, the drawing webapp, and the server that sends new fish to the tank in real time over WebSockets.</p>
    </div>
    <div class="col-6 col-md-3 mx-auto mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/nemo.png" class="img-fluid rounded z-depth-1 d-block mx-auto" max-width="220px" %}
    </div>
</div>

<br>

**Live Demo** - Screen looks blurry because it's being rendered in stereoscopic 3D.

<div class="embed-responsive embed-responsive-16by9">
    {% include video.liquid path="https://www.youtube.com/embed/XC5Es39kwK8" class="img-fluid rounded z-depth-1" %}
</div>
