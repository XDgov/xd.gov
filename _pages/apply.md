---
permalink: /apply/
layout: page
title: Apply
---
<section class="apply-overview">
  <div class="grid-container">
    <div class="section-breadcrumb">Apply to xD</div>
    <h2>
      We’re looking for purpose-driven technologists and innovators to be part
      of our growing emerging technology team.
    </h2>
    <div class="grid-row grid-gap-lg">
      <div class="tablet:grid-col-6">
        <h3>Overview</h3>
        <p>
          xD’ers join government for tours of civic service that help bring new
          perspectives and expertise to our team while they work on a diversity
          of high-impact projects. Positions are remote-first, non-permanent, and
          offered for up to four years of service.
        </p>
      </div>
      <div class="tablet:grid-col-6">
        <h3>What to Expect</h3>
        <p>
          We love a good challenge;....
        </p>
      </div>
    </div>
  </div>
</section>
<section class="apply-openings">
  <div class="grid-container">
    <div class="section-breadcrumb">Openings</div>
    <div class="grid-row">
      {% for position in site.positions %}
        {% include components/position.html position=position %}
      {% endfor %}
    </div>
  </div>
</section>