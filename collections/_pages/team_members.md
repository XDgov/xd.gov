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

<script src="https://d3js.org/d3-selection.v1.min.js"></script>
<script src="https://d3js.org/d3-array.v1.min.js"></script>
<script src="https://d3js.org/d3-geo.v1.min.js"></script>
<script src="https://unpkg.com/topojson@3.0.2/dist/topojson.min.js"></script>
<script src="/helpers/albersUsaPr.js"></script>
<script src="/helpers/states.js"></script>
  <script>
    var feature = topojson.feature(states, states.objects.states_20m_2017);
    var projection = d3.geoAlbersUsaPr(),
        path = d3.geoPath().projection(projection);

    var container = d3.select("#team-map");
    var aspect_ratio = 0.582,
        width,
        height;

    var svg = container.append("svg");
    var stateIds = ["CA", "MD", "MA", "MO", "NY", "PA", "VA", "WA"]

    var paths_states = svg.selectAll(".state")
        .data(feature.features)
      .enter().append("path")
        .attr("class", "state")
        .attr('class', function(d) {
            return stateIds.includes(d.properties["STUSPS"]) ? "team-state" : "state";
        });



    draw();

    window.addEventListener("resize", draw);

    function draw(){
      width = container.node().getBoundingClientRect().width;
      height = width * aspect_ratio > window.innerHeight ? window.innerHeight : width * aspect_ratio;
      svg
          .attr("width", width)
          .attr("height", height);
      fitSize([width, height], feature);
      paths_states.attr("d", path);

      d3.select
    }

    function fitSize(size, object){
      var width = size[0],
          height = size[1];

      projection
          .scale(1)
          .translate([0, 0]);

      var b = path.bounds(object),
          s = 1 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height),
          t = [(width - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];

      projection
          .scale(s)
          .translate(t);
    }
  </script>
