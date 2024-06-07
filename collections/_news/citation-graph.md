---
title: "Mapping the AI Policy Landscape: Trustworthy AI Principles"
publish_date: 2024-06-05
permalink: /blog/citation-graph/
img_alt_text: Example Model Card
image: /assets/img/news/citation-graph.png
image_accessibility: Example Model Card
layout: blog
post_author: Anna Vasylytsya, Mike Walton
---

<head>

  <!-- <link rel="stylesheet" href="styles.css"> -->
          <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
          crossorigin="anonymous"
        ></script>

</head>

<div class="page-bios">
  <div class="grid-container">
    <div class="grid-row">
      <div class="tablet:grid-col-7 margin-1 margin-left-neg-1 tablet:margin-0">
        <section>
          <div id="citation-graph">
            <svg width="960" height="600"></svg>
          </div>
        </section>
      </div>
  </div>
  </div>

<style>

#citation-graph {
  .links line {
    stroke: #CCCCCC;
  }

  .nodes circle {
    fill: #6D619E;
    stroke: $color-white;
  }
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.9rem;
  letter-spacing: 1px;
  text-align: center;
}

caption {
  caption-side: top;
  padding: 10px;
  font-weight: bold;
}

thead,
tfoot {
  background-color: rgb(203, 195, 227);
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

th.highlight, td.highlight {
  background-color: red;
}

tbody > tr:nth-of-type(even) {
  background-color: rgb(237 238 242);
}

#mynetwork {
                 width: 100%;
                 height: 600px;
                 background-color: #ffffff;
                 border: 1px solid lightgray;
                 position: relative;
                 float: left;
             }



</style>

<div>
  <table id="document-table">
    <caption>
      Trustworthy AI Policy Documents, Frameworks, and Principles
    </caption>
    <thead>
      <tr>
        <th scope="col">Principle</th>
        <th scope="col">EO 13859</th>
        <th scope="col" class="eo_13960">EO 13960</th>
        <th scope="col">HR 2575</th>
        <th scope="col">HR 6216</th>
        <th scope="col">Blueprint for an AI Bill of Rights</th>
        <th scope="col" class="s_1353">S 1353</th>
        <th scope="col">NIST AI RMF</th>
        <th scope="col">GAO Accountability Framework</th>
        <th scope="col">EO 14110</th>
        <th scope="col">OMB M-24-10</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Transparency</th>
        <td></td>
        <td class="eo_13960">&#10004;</td>
        <td>&#10004;</td>
        <td></td>
        <td></td>
        <td class="s_1353"></td>
        <td>&#10004;</td>
        <td>&#10004;</td>
        <td></td>
        <td>&#10004;</td>
      </tr>
      <tr>
        <th scope="row">Accountability</th>
        <td></td>
        <td class="eo_13960">&#10004;</td>
        <td></td>
        <td>&#10004;</td>
        <td>&#10004;</td>
        <td class="s_1353"></td>
        <td>&#10004;</td>
        <td>&#10004;</td>
        <td>&#10004;</td>
        <td></td>
      </tr>
      <tr>
        <th scope="row">Privacy and confidentiality</th>
        <td>&#10004;</td>
        <td class="eo_13960">&#10004;</td>
        <td></td>
        <td>&#10004;</td>
        <td>&#10004;</td>
        <td class="s_1353">&#10004;</td>
        <td>&#10004;</td>
        <td>&#10004;</td>
        <td>&#10004;</td>
        <td></td>
      </tr>
      <tr>
        <th scope="row">Safety and security</th>
        <td>&#10004;</td>
        <td class="eo_13960">&#10004;</td>
        <td></td>
        <td>&#10004;</td>
        <td>&#10004;</td>
        <td class="s_1353"></td>
        <td>&#10004;</td>
        <td>&#10004;</td>
        <td>&#10004;</td>
        <td>&#10004;</td>
      </tr>
      <tr>
          <th scope="row">Resiliency</th>
          <td></td>
          <td class="eo_13960">&#10004;</td>
          <td></td>
          <td></td>
          <td></td>
          <td class="s_1353"></td>
          <td>&#10004;</td>
          <td></td>
          <td>&#10004;</td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Reliability</th>
          <td>&#10004;</td>
          <td class="eo_13960">&#10004;</td>
          <td></td>
          <td></td>
          <td>&#10004;</td>
          <td class="s_1353"></td>
          <td>&#10004;</td>
          <td>&#10004;</td>
          <td>&#10004;</td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Accuracy</th>
          <td></td>
          <td class="eo_13960">&#10004;</td>
          <td></td>
          <td></td>
          <td>&#10004;</td>
          <td class="s_1353"></td>
          <td>&#10004;</td>
          <td>&#10004;</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Responsibility</th>
          <td></td>
          <td class="eo_13960">&#10004;</td>
          <td></td>
          <td></td>
          <td></td>
          <td class="s_1353"></td>
          <td></td>
          <td></td>
          <td>&#10004;</td>
          <td>&#10004;</td>
        </tr>
        <tr>
          <th scope="row">Interpretability/understandability/traceability </th>
          <td>&#10004;</td>
          <td class="eo_13960">&#10004;</td>
          <td></td>
          <td></td>
          <td>&#10004;</td>
          <td class="s_1353"></td>
          <td>&#10004;</td>
          <td>&#10004;</td>
          <td></td>
          <td>&#10004;</td>
        </tr>
        <tr>
          <th scope="row">Reproducibility/repeatability </th>
          <td></td>
          <td class="eo_13960"></td>
          <td></td>
          <td></td>
          <td></td>
          <td class="s_1353"></td>
          <td></td>
          <td></td>
          <td>&#10004;</td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Testing/evaluation/audit </th>
          <td>&#10004;</td>
          <td class="eo_13960">&#10004;</td>
          <td></td>
          <td></td>
          <td>&#10004;</td>
          <td class="s_1353"></td>
          <td>&#10004;</td>
          <td>&#10004;</td>
          <td>&#10004;</td>
          <td>&#10004;</td>
        </tr>
        <tr>
          <th scope="row">Mitigating risks </th>
          <td>&#10004;</td>
          <td class="eo_13960">&#10004;</td>
          <td></td>
          <td></td>
          <td>&#10004;</td>
          <td class="s_1353"></td>
          <td>&#10004;</td>
          <td>&#10004;</td>
          <td>&#10004;</td>
          <td>&#10004;</td>
        </tr>
        <tr>
          <th scope="row">Algorithmic Bias </th>
          <td></td>
          <td class="eo_13960"></td>
          <td>&#10004;</td>
          <td></td>
          <td>&#10004;</td>
          <td class="s_1353"></td>
          <td>&#10004;</td>
          <td>&#10004;</td>
          <td>&#10004;</td>
          <td>&#10004;</td>
        </tr>
        <tr>
          <th scope="row">Disclosure of AI use</th>
          <td></td>
          <td class="eo_13960">&#10004;</td>
          <td></td>
          <td></td>
          <td>&#10004;</td>
          <td class="s_1353"></td>
          <td></td>
          <td>&#10004;</td>
          <td>&#10004;</td>
          <td>&#10004;</td>
        </tr>
        <tr>
          <th scope="row">Contestability of AI use</th>
          <td></td>
          <td class="eo_13960"></td>
          <td></td>
          <td></td>
          <td>&#10004;</td>
          <td class="s_1353"></td>
          <td></td>
          <td></td>
          <td>&#10004;</td>
          <td>&#10004;</td>
        </tr>
    </tbody>
  </table>
</div>


<script src="{{ site.baseurl }}/src/js/citation-graph.bundle.js"></script>
<script src="{{ site.baseurl }}/helpers/citationGraph.js"></script>