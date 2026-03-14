---
layout: page
title: other
permalink: /portfolio/other/
description: Other projects from my portfolio.
nav: true
nav_order: 4
---

<div class="projects">
  {% assign filtered_projects = site.projects | where: "category", "other" | sort: "date" | reverse %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in filtered_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>
