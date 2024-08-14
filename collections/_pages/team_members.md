---
permalink: /team/
image: /assets/img/pages/index/xd-og.png
layout: page
title: xD Team
seo_excerpt: meet the members of the xD team
---
<div class="page-bios">
  <div class="grid-container">
    <div class="grid-row">
      <div class="tablet:grid-col-5">
        <section class="mission">
          <div class="grid-container">
            <div class="breadcrumb">Our Team</div>
            <div>The xD team represents an array of disciplines and skillsets. We're a remote-first team based in ten states across the country.</div>
          </div>
        </section>
      </div>
      <div class="tablet:grid-col-7 margin-1 margin-left-neg-1 tablet:margin-0">
        <section>
          <div id="team-map"></div>
        </section>
      </div>
  </div>

  <section class="bios-content">
    <div class="grid-container">
      <div class="breadcrumb">Meet the Team</div>
      <div class="grid-row grid-gap-6">
        {% assign team_members = site.team_members %}
        {% for member in team_members %}
          {% include components/team-member-card.html member=member %}
        {% endfor %}
      </div>
    </div>
  </section>
</div>

<script src="{{ site.baseurl }}/helpers/mapBundle.js"></script>
