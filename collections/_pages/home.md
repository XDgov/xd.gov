---
permalink: /
image: /assets/img/pages/index/xd-og.png
layout: home
title: Home
---

{% for hero in site.data.heroes limit:1 %}
  {% include components/homepage-banner.html hero=hero %}
{% endfor %}

<section class="mission">
  <div class="grid-container">
    <div class="breadcrumb">About xD</div>
    <h2>
      xD is an emerging technologies group that’s advancing the delivery of 
      data-driven services through new and transformative technologies.
    </h2>
    <a class="square-link" href="{{ site.baseurl }}/about">Learn More<span class="visually-hidden"> about xD</span></a>
  </div>
</section>

<section class="projects">
  <div class="grid-container">
    <div class="breadcrumb">Select Projects</div>
    <div class="grid-row grid-gap-lg">
      {% assign site_projects = site.projects | where: 'featured', 'false' | where: 'active', 'true' %}
      {% for project in site_projects limit:3 %}
        {% include components/project-card.html project=project %}
      {% endfor %}
    </div>
    <a class="usa-button usa-button-black" href="{{ site.baseurl }}/projects">View All<span class="visually-hidden"> xD projects</span></a>
  </div>
</section>

<section class="news">
  <div class="grid-container">
    <div class="breadcrumb">Recent News</div>
    <div class="grid-row grid-gap-lg home-news-items">
      {% assign site_news = site.news | sort: 'publish_date' | reverse %}
      {% for news in site_news limit:1 %}
        <div class="col-12 tablet:grid-col-6 featured-news-col">
          {% include components/featured-news-item.html news=news %}  
        </div>
      {% endfor %}
      <div class="col-12 tablet:grid-col-6">
        {% for news in site_news limit:3 offset:1 %}
          {% include components/news-item.html news=news %}
        {% endfor %}
      </div>
    </div> 
  </div>
</section>

<section class="more-news">
  <div class="grid-container">
    <div class="breadcrumb">More News</div>
    <div class="grid-row home-more-news">
      <div id="more_news">
        <!-- JS rendered content from Airbase goes here -->
      </div>
    </div>     
  </div>
</section>