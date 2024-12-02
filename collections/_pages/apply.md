---
permalink: /apply/
image: /assets/img/pages/apply/apply-og.png
layout: page
title: Apply
seo_excerpt:
  We’re looking for purpose-driven technologists and innovators to be part
  of our growing emerging technologies team.
---

<section class="intro">
    <div class="grid-container">
        <div class="breadcrumb">Apply to xD</div>
        <h1>Emerging Technology Fellowship</h1>
        <p>
          We’re looking for purpose-driven technologists and innovators to join this unique fellowship experience with xD at the Census Bureau. <strong>The Emerging Technology Fellowship (ETF)</strong> recruits the best and brightest technologists with expertise in emerging data technology trends to build a better government for everyone.
        </p>
        <div class="usa-alert usa-alert--info">
            <div class="usa-alert__body">
                <h4 class="usa-alert__heading">Application Period Closed</h4>
                <p class="usa-alert__text">
                    Applications for the fellowship are now closed. Future openings will be listed on this page when we have more information to share.
                </p>
            </div>
        </div>
    </div>
</section>

<section class="fellowship-details">
  <div class="grid-container">
    <div class="grid-row">
      <div class="breadcrumb">Who should apply to the Fellowship?</div>
    </div>
    <div class="grid-row">
      <p>
        We’re looking for teammates who are motivated by curiosity and have a desire to make lasting positive impact. Emerging Technology Fellows bring an entrepreneurial spirit and expertise in emerging technologies to solve some of the most pressing federal data challenges of the 21st century. If you love a challenge, have demonstrated leadership in your career, and you’re looking to apply your talents towards high-impact projects, you may be a great fit for the Emerging Technology Fellowship!
      </p>
    </div>
    {%
      include components/praise.html
      content="Being an Emerging Technology Fellow with xD at the Census Bureau has been such an honor. I get to work with the best and brightest in America. I'm challenged to think outside of the box and discover creative solutions to drive improvement. The best part about being an xD Fellow would be the camaraderie amongst the cohort of fellows. Each fellow has helped broaden my perspective on how to solve such complex issues while being a safe space to ask questions when I don't know what to do next."
      author="Diamond Nwankwo"
      author_title="Fellow, Technologist, Problem Solver, Adjunct Instructor of Data Analytics, Mom, Wife, Author"
      image_path="/assets/img/praise/DiamondNwankwo.png"
    %}
    <div class="grid-row">
      <div class="breadcrumb">What Specialized Experience Are We Looking For?</div>
    </div>
    <div class="grid-row">
      <p>
        Qualified candidates demonstrate experience exercising a high degree of creativity and seasoned judgment and apply agile, lean, open-source, and human-centered design principles to develop new concepts, products, and services in response to challenges faced by the Census Bureau and other Federal agency partners; writing code in programming languages such as Python, SQL, R, Java, JavaScript, Go, Scala, C, C++, Julia, or MatLab; drafting policy for emerging technologies such as data science, privacy-enhancing technologies, and AI/machine learning; authoring publications and presenting at conferences; and managing technical projects as a project manager, technical lead, product manager, or team lead.
      </p>
      <div class="usa-alert usa-alert--info">
        <div class="usa-alert__body">
          <p class="usa-alert__text">
            <strong>
              If you have the specialized experience above, please ensure it is reflected in your resume as it will be used to determine your qualifications.
            </strong>
          </p>
        </div>
      </div>
      <p>
        Ideal candidates have professional experiences in the following
        categories:
      </p>
    </div>
    <div class="grid-row grid-gap">
      <div class="tablet:grid-col">
        <ul class="usa-icon-list usa-icon-list--primary">
          {% include components/icon-list-item.html content="Data Governance & AI Policy" %}
          {% include components/icon-list-item.html content="Privacy-Enhancing Technologies (PETs)" %}
          {% include components/icon-list-item.html content="Transparency and Accountability" %}
          {% include components/icon-list-item.html content="Technical Project Management" %}
        </ul>
      </div>
      <div class="tablet:grid-col">
        <ul class="usa-icon-list usa-icon-list--primary">
          {% include components/icon-list-item.html content="Data Science" %}
          {% include components/icon-list-item.html content="Machine Learning" %}
          {% include components/icon-list-item.html content="Natural Language Processing" %}
          {% include components/icon-list-item.html content="Artificial Intelligence (AI)" %}
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="faq">
    <div class="grid-container">
        <div class="breadcrumb">Frequently Asked Questions</div>
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
