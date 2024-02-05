---
permalink: /team/
image: /assets/img/pages/index/xd-og.png
layout: page
title: xD Team
seo_excerpt: xD team members
---
<section class="mission">
  <div class="grid-container">
    <div class="breadcrumb">Our Team</div>
    <div>The xD team represents an array of disciplines and skillsets. We're a remote-first team based in 8 states across the country.</div>
  </div>
  <div id="team-map"></div>
</section>

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

<script>
  const spec = "{{ site.url }}{{ site.baseurl }}/assets/data/maps/team-map.json";
  const actions = {renderer: "svg", actions: false};
  vegaEmbed("#team-map", spec, actions)
    // result.view provides access to the Vega View API
    .then(result => console.log(result))
    .catch(console.warn);
</script>
