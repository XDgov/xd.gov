---
permalink: /projects/
layout: page
title: Projects
seo_excerpt: View select projects from our team.
---
<section class="projects-page active-projects">
  <div class="grid-container">
    <div class="section-breadcrumb">Select Projects</div>
    <div class="grid-row grid-gap-lg">
      {% assign site_projects = site.projects | where: "active", "true" %}
      {% for project in site_projects %}
        {% include components/project-card.html project=project %}
      {% endfor %}
    </div>
  </div>
</section>

<section class="projects-page all-projects">
  <div class="grid-container">
    <div class="section-breadcrumb">Previous Projects</div>
    <div class="grid-row grid-gap-lg">
      {% assign site_projects = site.projects | where: "active", "false" %}
      {% for project in site_projects %}
        {% include components/project-card.html project=project %}
      {% endfor %}
    </div>
  </div>
</section>
