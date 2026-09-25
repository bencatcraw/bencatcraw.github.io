---
layout: grid
title: games
permalink: /portfolio/games/
description: Released games I made or worked on
nav: true
nav_order: 2
---

<div class="projects">
  {% assign filtered_projects = site.projects | where: "category", "games" | sort: "date" | reverse %}
  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
    {% for project in filtered_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>
