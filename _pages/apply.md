---
permalink: /apply/
layout: page
title: Apply
seo_excerpt:
  We’re looking for purpose-driven technologists and innovators to be part
  of our growing emerging technologies team.
---
<section class="apply-overview">
  <div class="grid-container">
    <div class="section-breadcrumb">Apply to xD</div>
    <h2>
      We’re looking for purpose-driven technologists and innovators to be part
      of our growing emerging technologies team.
    </h2>
    <div class="grid-row grid-gap-lg">
      <div class="tablet:grid-col-6">
        <h3>Overview</h3>
        <p>
          Come join xD at the U.S. Census Bureau for a tour of civic service 
          that enables you to bring your unique perspective and expertise to a 
          diversity of high-impact transformative projects. <strong>Emerging
          Technology Fellowship</strong> positions are non-permanent and offered
          for up to four years of service. For more information, see our FAQs.
        </p>
      </div>
      <div class="tablet:grid-col-6">
        <h3>How to Apply</h3>
        <p>
          To apply for this position, please send your <strong>resume and cover letter</strong> to: <a class="usa-link long-link" href="mailto:HRD.Schedule.A.Expert.Intern.Fellows.Hiring@census.gov?subject=Emerging Technology Fellowship Application">HRD.Schedule.A.Expert.Intern.Fellows.Hiring@census.gov</a> with the subject line "Emerging Technology Fellowship Application."
        </p>
        <p>
          For more information about the Emerging Technology Fellowship, please visit the official 
          <a class="usa-link" href="https://www.census.gov/about/census-careers/opportunities/programs/etf.html" target="_blank">Census.gov page</a>. If you have additional questions, please reach out to <a class="usa-link long-link" href="mailto:inquiries@xd.gov">inquiries@xd.gov</a>.
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

<section class="apply-overview apply-faq">
  <div class="grid-container">
    <div class="section-breadcrumb">Frequently Asked Questions</div>
    <div class="grid-row">
      <div class="grid-col-12">
        <div class="faq">
          <h3>What is an Emerging Technology Fellow?</h3>
          <p>
            The Emerging Technology Fellowship (ETF) recruits the best and 
            brightest technologists with expertise in emerging data technology 
            trends to drive data innovation at the U.S. Census Bureau and other 
            federal agencies. This fellowship brings together experts in data 
            science and artificial intelligence (AI), design, and product 
            management with innovators across the federal government to solve 
            pressing technology problems, save taxpayer money, and position the 
            Census Bureau as a leader in federal data innovation.
          </p>
        </div>
        <div class="faq">
          <h3>How do I apply?</h3>
          <p>
            To apply for this position, please send your <strong>resume and cover letter</strong> to: <a class="usa-link long-link" href="mailto:HRD.Schedule.A.Expert.Intern.Fellows.Hiring@census.gov?subject=Emerging Technology Fellowship Application">HRD.Schedule.A.Expert.Intern.Fellows.Hiring@census.gov</a> with the subject line "Emerging Technology Fellowship Application."
          </p>
        </div>
        <div class="faq">
          <h3>How should my resume be formatted?</h3>
          <p>
            We recommend formatting resumes based on best practices listed on the <a class="usa-link" href="https://www.usajobs.gov/Help/faq/application/documents/resume/what-to-include/" target="_blank">USAJOBS website</a>. Additional guidance has been published by the <a class="usa-link" href="https://handbook.tts.gov/resume/" target="_blank">Technology Transformation Service (TTS)</a>.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
