---
permalink: /news/
image: /assets/img/pages/index/xd-og.png
layout: home
title: News
---

<div class="news-list">
  <section class="mission">
    <div class="grid-container">
      <div class="breadcrumb">News</div>
    </div>
  </section>

  <section class="news">
    <div class="grid-container">
      <div class="grid-row grid-gap-lg home-news-items">
        {% assign site_news = site.news | sort: 'publish_date' | reverse %}
        {% assign full_list = true %}
        {% for news in site_news %}
          {% include components/news-item.html news=news full_list=full_list %}
        {% endfor %}
      </div>
    </div>
  </section>
</div>