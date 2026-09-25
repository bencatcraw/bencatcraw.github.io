---
layout: grid
title: other
permalink: /portfolio/other/
description: other cool stuff I've worked on
nav: true
nav_order: 4
---

<div class="projects">
  {% assign filtered_projects = site.projects | where: "category", "other" | sort: "date" | reverse %}
  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
    {% for project in filtered_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>
