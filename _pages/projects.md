---
permalink: /projects/
layout: page
title: Projects
---
<section class="projects-projects">
  <div class="grid-container">
    {% assign site_portfolios = site.portfolios | where: "featured", "true" %}
    {% for portfolio in site_portfolios %}
      <div>
	<h1>{{ portfolio.title }}</h1>
	<h5>{{ portfolio.content }}</h5>
      </div>
    <div class="grid-row grid-gap-lg">
      {% assign site_projects = site.projects | where: "portfolio", portfolio.portfolio %}
      {% for project in site_projects %}
        {% include components/project-card.html project=project %}
      {% endfor %}
    </div>
    {% endfor %}
  </div>
</section>

