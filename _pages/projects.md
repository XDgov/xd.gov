---
permalink: /projects/
layout: page
title: Projects
---
<section class="projects-projects">
  <div class="grid-container">
    <div class="section-breadcrumb">Select Projects</div>
    <div class="grid-row grid-gap-lg">
      {% assign site_projects = site.projects %}
      {% for project in site_projects %}
        {% include components/project-card.html project=project %}
      {% endfor %}
    </div>
  </div>
</section>
