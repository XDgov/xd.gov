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
        <h1>Emerging Technology Fellowship</h1>
        <p>
          We’re looking for purpose-driven technologists and innovators to 
          join this unique fellowship experience with xD. The <b>Emerging 
          Technology Fellowship (ETF)</b> recruits the best and brightest
          technologists with expertise in emerging data technology trends to 
          drive data innovation at the U.S. Census Bureau and other federal agencies.
        </p>
        <div class="grid-row">
            <div class="grid-col-12">
                <h3>Our Next Cohort</h3>
                <p>
                  We are now accepting applications for the Spring 2022 Cohort
                  of the ETF. To apply, please send your <b>resume and 
                  one-page statement of interest</b> to 
                  <a href="mailto:HRD.Schedule.A.Expert.Intern.Fellows.Hiring@census.gov?subject=Emerging Technology Fellowship Application&body=Please find attached my resume and statement of interest for the Emerging Technology Fellowship application.">HRD.Schedule.A.Expert.Intern.Fellows.Hiring@census.gov</a> <b>by January 31, 2022</b>. To learn more about
                  qualifications, the application process, or the fellowship
                  in general, please see our FAQs below.
                </p>
                <p>
                <a 
                  class="usa-button usa-button-black" 
                  href="mailto:HRD.Schedule.A.Expert.Intern.Fellows.Hiring@census.gov?subject=Emerging Technology Fellowship Application&body=Please find attached my resume and statement of interest for the Emerging Technology Fellowship application.">
                  Apply Now
                </a>
                </p>
            </div>
        </div>
    </div>
</section>

<section class="apply-overview">
    <div class="grid-container">
        <div class="section-breadcrumb">What to Expect</div>
        <div class="grid-row">
            <div class="grid-col-12">
                <p>
                  While fellows will be hired with a project-focus in mind, 
                  we want you to have a well-rounded fellowship experience. 
                  Each fellow will have the opportunity to pitch new projects for funding, to meet practitioners across government working in data science and
                  AI, and to become involved more in the civic tech space. To
                  learn more about the initial project focus, see the description below:
                 </p>
                <h3>Automated Change Detection in Satellite Imagery</h3>
                <p>
                  How might we improve representation in Census Bureau surveys 
                  through automated change detection in satellite imagery? 
                  This project will focus on the application of machine 
                  learning and computer vision techniques to target updates to 
                  the Master Address File. This project is being done in 
                  partnership  with the Census Bureau’s Geography Division.
                </p>
            </div>
        </div>
    </div>
</section>

<section class="apply-overview">
    <div class="grid-container">
        <div class="section-breadcrumb">Our Timeline</div>
        <div class="grid-row">
            <div class="grid-col-12">
                <p>
                  Keeping in mind that this is our inaugural year, we may 
                  encounter some bumps along the way. We’ll do our best to 
                  keep you informed throughout the process, but here’s what we 
                  know so far:
                </p>
                <ul>
                  <li>Applications are due January 31st, 2022.</li>
                  <li>Our HR counterparts and team conduct resume reviews.</li>
                  <li>xD selects candidates for two interviews.</li>
                  <li>Final candidate selections will be made, and tentative offers, contingent on a background check, will be delivered by HR.</li>
                  <li>Background checks and security clearance begins. This typically takes several months.</li>
                  <li>Final offers are rendered and fellows are welcomed!</li>
                </ul>
                <p>
                  As we learn more about the timing of these processes, we will update this page and notify candidates where possible.
                </p>
            </div>
        </div>
    </div>
</section>

<section class="apply-overview apply-faq">
    <div class="grid-container">
        <div class="section-breadcrumb">Frequently Asked Questions</div>
        <div class="grid-row">
            <div class="grid-col-12">
                <br/>
                {% for faq in site.data.faqs %}
                    {% include components/faq.html faq=faq %}
                {% endfor %}
            </div>
        </div>
    </div>

</section>

<!--
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
            <div class="grid-col-12">
                {% for position in site.positions %}
                    {% include components/position.html position=position %}
                {% endfor %}
            </div>
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
</section>-->
