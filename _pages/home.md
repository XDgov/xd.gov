---
permalink: /
layout: home
title: Home
---

{% assign site_banner = site.projects | where: 'featured', 'true' %}
{% for project in site_banner limit:1 %}
  {% include components/homepage-banner.html project=project %}
{% endfor %}
<section class="home-mission">
  <div class="grid-container">
    <div class="section-breadcrumb">Our Mission</div>
    <h2>
      xD is an emerging technology group at the U.S. Census Bureau that helps federal agencies apply artificial intelligence solutions to complex challenges. We're working to do this thing, that thing, and some other stuff too.
    </h2>
    <a class="square-link" href="/mission">Learn More</a>
  </div>
</section>
<section class="home-projects">
  <div class="grid-container">
    <div class="section-breadcrumb">Active Projects</div>
    <div class="grid-row grid-gap-lg">
      {% assign site_projects = site.projects | where: 'featured', 'false' %}
      {% for project in site_projects limit:3 %}
        {% include components/project-card.html project=project %}
      {% endfor %}
    </div>
    <a class="usa-button usa-button-black" href="{{ site.baseurl }}/projects">View All</a>
  </div>
</section>
<section class="home-news">
  <div class="grid-container">
    <div class="section-breadcrumb">Recent News</div>
    <div class="grid-row grid-gap-lg home-news-items">
      {% assign site_news = site.news | sort: 'date' | reverse %}
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