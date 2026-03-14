---
layout: page
title: games
permalink: /portfolio/games/
description: Game projects from my portfolio.
nav: true
nav_order: 2
---

<div class="projects">
  {% assign filtered_projects = site.projects | where: "category", "games" | sort: "date" | reverse %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in filtered_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>
