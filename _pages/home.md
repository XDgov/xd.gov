---
permalink: /
layout: home
title: Home
---

<section class="home-hero">
  <div class="grid-row">
    <div class="hero-left grid-col-7">
      <div class="hero-left-content">
        <div class="section-breadcrumb">Case Study</div>
        <h1>Combating Bias in AI</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Morbi hendrerit leo at diam suscipit mattis. Sed sagittis cursus
          euismod. Aliquam at volutpat ipsum. Maecenas faucibus purus sed sem
          euismod auctor.
        </p>
        <a class="square-link" href="/projects/combating-bias">View Case Study</a>
        <div class="gray-box"></div>
      </div>
    </div>
    <div class="hero-right grid-col-5">
      <div class="hero-right-content">
        <img src="assets/img/projects/combating-bias/combating-bias-banner.png" alt="An isometric 3 by 5 grid is formed by square blocks. 4 blocks in the bottom-right are joined by a line and are in a different color demonstrating a focus, or bias, to the bottom-right of the grid.">
      </div>
    </div>
  </div>
</section>
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
    <div class="section-breadcrumb">Case Studies</div>
    <div class="grid-row grid-gap-lg">
      {% for project in site.projects limit:3 %}
        {% include components/project-card.html project=project %}
      {% endfor %}
    </div>
    <a class="usa-button usa-button-black" href="/projects">View All</a>
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