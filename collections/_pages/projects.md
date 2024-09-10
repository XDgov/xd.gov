---
permalink: /projects/
image: /assets/img/pages/index/xd-og.png
layout: page
title: Projects
seo_excerpt: View projects built by and with xD.
---
<section class="intro">
    <div class="grid-container">
        <div class="breadcrumb">projects</div>
        <h1>Project Portfolios</h1>
        <p>
          At xD, we organize our work in “portfolios” of projects. All projects within a portfolio share a common theme, such as responsible AI or applying privacy enhancing technologies (PETs) to government data-sharing challenges. This approach allows for easier knowledge sharing between projects so that the lessons learned from one project benefit all projects within a portfolio. In addition to the project portfolios, xD has a number of incubation projects that investigate new emerging technologies and project ideas.
        </p>
        <p>Current xD portfolios include:</p>
        <ul>
            <li>
              <p>
                <strong>Privacy Enhancing Technologies (PETs):</strong> xD’s ongoing PETs projects are deploying PETs to address data sharing challenges in a range of different government contexts.
              </p>
            </li>
            <li>
              <p>
                <strong>Deploying Responsible AI:</strong> This portfolio has evolved to encompass researching technical techniques to promote transparency and explainability as well as analyzing existing federal policy and AI strategies to develop recommendations for implementing these policies.
              </p>
            </li>
            <li>
              <p>
                <strong>Data Transformation:</strong> xD’s data transformation projects are collaborations with other Census teams to migrate data and build new data architecture for key government services.
              </p>
            </li>
            <li>
              <p>
                <strong>Project Incubation:</strong> This portfolio is for exploratory projects that investigate new emerging technologies and/or new applications of emerging technologies.
              </p>
            </li>
        </ul>
    </div>
</section>
<section class="projects-page">
  <div class="grid-container">
    <h2>Privacy Enhancing Technology (PETs) Portfolio</h2>
    <div>
      <p>The goal of this work is to leverage the potential for Privacy Enhancing Technologies to enable new data-driven insights while improving privacy protections.</p>
      <p>What are Privacy Enhancing Technologies? PETs resources can be found here.</p>
      <p>PETs allow for data analysis without revealing private information, but there are trade-offs between data fidelity, privacy, and computation cost. Examples of PETs include Secure Multi-Party Computation, Remote Execution, Homomorphic Encryption, and Differential Privacy.</p>
      <img class="portfolio-img" alt="Chart of PET categories comparing information revealed versus computation fidelity, highlighting where xD invests its resources" src="{{ site.baseurl }}/assets/img/projects/portfolios/pets-chart.jpg" />
      <p>XD projects primarily focus on techniques that reveal the least amount of private information while maintaining computation fidelity (left—hand side of the chart – SMPC, FHE, synthetic data, and Differential privacy).</p>
    </div>
  </div>
</section>

<section class="projects-page active-projects">
  <div class="grid-container">
    <h3>Ongoing Projects</h3>
    <h4>Project DELPHI (Demonstration Environment for Learning Privacy enHancIng technologies). </h4>
    <div class="project-data">Launched July 2023</div>
    <div class="project-data">xD Team Members: Mike Walton, Curtis Mitchell</div>
    <div class="project-data">About the project (objective and why it is important):</div>
    <div class="project-data description">Privacy-enhancing techniques have a range of potential benefits for data sharing and research within the federal government; however, government agencies are still learning about PETs and their applications. Project DELPHI facilitates PETs adoption by providing a research environment that allows users to:</div>
    <ul class="usa-list">
      <li>Explore documentation</li>
      <li>Understand use cases</li>
      <li>Experiment with hands-on examples of PETs deployed in a sandbox environment.</li>
    </ul>
    <div class="project-data">Partners: NIST</div>
    <div class="project-data">Additional Resources</div>
  </div>
</section>

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
