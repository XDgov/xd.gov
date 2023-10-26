---
permalink: /apply/
image: /assets/img/pages/apply/apply-og.png
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
          We’re looking for purpose-driven technologists and innovators to join this unique fellowship experience with xD at the Census Bureau. <strong>The Emerging Technology Fellowship (ETF)</strong> recruits the best and brightest technologists with expertise in emerging data technology trends to build a better government for everyone.
        </p>
        <div class="usa-alert usa-alert--info">
            <div class="usa-alert__body">
                <h4 class="usa-alert__heading">Apply to the Fellowship</h4>
                <p class="usa-alert__text">
                    Applications are being accepted until <strong>November 30th, 2023</strong>. See details below.
                </p>
            </div>
        </div>
        {% for position in site.positions %}
            {% include components/position.html position=position %}
        {% endfor %}
    </div>
</section>

<section class="apply-overview">
  <div class="grid-container">
    <div class="grid-row">
      <div class="section-breadcrumb">Who should apply to the Fellowship?</div>
    </div>
    <div class="grid-row">
      <p>
        We’re looking for teammates who are motivated by curiosity and have a desire to make lasting positive impact. Emerging Technology Fellows bring an entrepreneurial spirit and expertise in emerging technologies to solve some of the most pressing federal data challenges of the 21st century. If you love a challenge, have demonstrated leadership in your career, and you’re looking to apply your talents towards high-impact projects, you may be a great fit for the Emerging Technology Fellowship!
      </p>
    </div>
    {%
      include components/praise.html
      content="Working at xD gives an opportunity to work on interesting data problems with interesting people from within one of the most quietly important agencies in the U.S. There is no shortage of issues in government that can be improved with better collection, management, and use of data, and xD gives exposure to a bunch of them."
      author="Aidan Feldman"
      author_title="2017 Fellow. Technologist, Dancer, Adjunct Assistant Professor of Public Service NYU|Wagner"
      image_path="/assets/img/praise/feldman.jpeg"
    %}
    <div class="grid-row">
      <div class="section-breadcrumb">What Specialized Experience Are We Looking For?</div>
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
          {% include components/icon-list-item.html content="Privacy-enhancing Technologies" %}
          {% include components/icon-list-item.html content="Algorithmic Bias" %}
          {% include components/icon-list-item.html content="Technical Project Management" %}
        </ul>
      </div>
      <div class="tablet:grid-col">
        <ul class="usa-icon-list usa-icon-list--primary">
          {% include components/icon-list-item.html content="Data Science" %}
          {% include components/icon-list-item.html content="Machine Learning" %}
          {% include components/icon-list-item.html content="Natural Language Processing" %}
          {% include components/icon-list-item.html content="Responsible AI " %}
        </ul>
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
