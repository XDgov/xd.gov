---
permalink: /projects/
image: /assets/img/pages/index/xd-og.png
layout: page
title: Projects
seo_excerpt: View projects built by and with xD.
---
<section class="projects-page active-projects">
  <div class="grid-container">
    <div class="breadcrumb">Select Projects</div>
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
    <div class="breadcrumb">Previous Projects</div>
    <div class="grid-row grid-gap-lg">
      {% assign site_projects = site.projects | where: "active", "false" %}
      {% for project in site_projects %}
        {% include components/project-card.html project=project %}
      {% endfor %}
    </div>
  </div>
</section>
