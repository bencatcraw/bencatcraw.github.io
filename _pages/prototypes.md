---
layout: grid
title: prototypes
permalink: /portfolio/prototypes/
description: Proof of concept projects
nav: true
nav_order: 3
---

<div class="projects">
  {% assign filtered_projects = site.projects | where: "category", "prototypes" | sort: "date" | reverse %}
  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
    {% for project in filtered_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>
