---
permalink: /team/
image: /assets/img/pages/index/xd-og.png
layout: page
title: xD Team
seo_excerpt: xD team members
---
<section class="projects-page active-projects">
  <div class="grid-container">
    <div class="breadcrumb">Meet the Team</div>
    <div class="grid-row grid-gap-lg">
      {% assign team_members = site.team_members %}
      {% for member in team_members %}
        {% include components/team-member-card.html member=member %}
      {% endfor %}
    </div>
  </div>
</section>
