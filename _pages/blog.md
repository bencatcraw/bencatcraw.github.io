---
layout: default
permalink: /blog/
title: blog
nav: true
nav_order: 5
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3 # The number of links after the current page
---

{% assign blog_name_size = site.blog_name | size %}
{% assign blog_description_size = site.blog_description | size %}

<div class="page-intro">
  <h1 class="page-intro-title">{% if blog_name_size > 0 %}{{ site.blog_name }}{% else %}{{ page.title }}{% endif %}</h1>
  {% if blog_description_size > 0 %}
    <p class="page-intro-description">{{ site.blog_description }}</p>
  {% endif %}
</div>

{% if site.display_tags and site.display_tags.size > 0 or site.display_categories and site.display_categories.size > 0 %}
<ul class="tag-strip">
  {% for tag in site.display_tags %}
    <li><a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}"><i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}</a></li>
  {% endfor %}
  {% for category in site.display_categories %}
    <li><a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}"><i class="fa-solid fa-tag fa-sm"></i> {{ category }}</a></li>
  {% endfor %}
</ul>
{% endif %}

{% assign featured_posts = site.posts | where: "featured", "true" %}
{% if featured_posts.size > 0 %}
<br>

<div class="container featured-posts">
{% assign is_even = featured_posts.size | modulo: 2 %}
<div class="row row-cols-{% if featured_posts.size <= 2 or is_even == 0 %}2{% else %}3{% endif %}">
{% for post in featured_posts %}
<div class="col mb-4">
<a href="{{ post.url | relative_url }}">
<div class="card hoverable">
<div class="row g-0">
<div class="col-md-12">
<div class="card-body">
<div class="float-right">
<i class="fa-solid fa-thumbtack fa-xs"></i>
</div>
<h3 class="card-title text-lowercase">{{ post.title }}</h3>
<p class="card-text">{{ post.description }}</p>

                    {% if post.external_source == blank %}
                      {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
                    {% else %}
                      {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
                    {% endif %}
                    {% assign year = post.date | date: "%Y" %}

                    <p class="post-meta">
                      {{ read_time }} min read &nbsp; &middot; &nbsp;
                      <a href="{{ year | prepend: '/blog/' | relative_url }}">
                        <i class="fa-solid fa-calendar fa-sm"></i> {{ year }} </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      {% endfor %}
      </div>
    </div>

{% endif %}

{% if page.pagination.enabled %}
  {% assign postlist = paginator.posts %}
{% else %}
  {% assign postlist = site.posts %}
{% endif %}

<div class="post-feed">
{% for post in postlist %}
  {% if post.external_source == blank %}
    {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
  {% else %}
    {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
  {% endif %}
  {% if post.redirect == blank %}
    {% assign post_url = post.url | relative_url %}
  {% elsif post.redirect contains '://' %}
    {% assign post_url = post.redirect %}
  {% else %}
    {% assign post_url = post.redirect | relative_url %}
  {% endif %}

  <article class="feed-post">
    <header class="feed-post-header">
      <div class="feed-post-title">
        <h2><a href="{{ post_url }}">{{ post.title }}</a></h2>
        <time class="feed-post-date" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%B %d, %Y' }}</time>
      </div>
    </header>

    <div class="feed-post-body{% unless post.thumbnail %} feed-post-body-text-only{% endunless %}">
      {% if post.thumbnail %}
        <a class="feed-post-image" href="{{ post_url }}">
          <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}">
        </a>
      {% endif %}

      <div class="feed-post-text">
        {% if post.description %}
          <p class="feed-post-description">{{ post.description }}</p>
        {% endif %}

        <footer class="feed-post-footer">
          <span class="feed-post-category">{{ read_time }} min read</span>
          {% for tag in post.tags %}
            <a class="feed-post-category" href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">#{{ tag }}</a>
          {% endfor %}
          <a class="btn-outline-hairline" href="{{ post_url }}">Read More</a>
        </footer>
      </div>
    </div>
  </article>
{% endfor %}
</div>

{% if page.pagination.enabled %}
  {% include pagination.liquid %}
{% endif %}
