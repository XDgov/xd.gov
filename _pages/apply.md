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
                    <strong>
                        Applications for the Spring 2022 Cohort of the ETF are
                        now closed.
                    </strong>
                    Future openings will be listed on this page when we have
                    more information to share.
                </p>
            </div>
        </div>
    </div>
</section>

<section class="apply-overview">
    <div class="grid-container">
        <div class="section-breadcrumb">Initial Projects</div>
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
                <h3>Deploying Privacy-Enhancing Technologies</h3>
                <p>
                    What if researchers could answer questions by accessing data from around the globe
                    that they never actually touch or "see"? How do we transform the use of private data while keeping it
                    entirely secure? The Deploying Privacy-Enhancing Technology (PET) projects seeks to increase our
                    understanding of remote execution, federated learning, secure multi-party computation, homomorphic
                    encryption, and differential privacy. This project will create a roadmap for deployments of these
                    technologies to transform how the Census Bureau collects, shares, and computes data and is being done
                    in partnership with the United Nations, other federal agencies and thought leaders in the field.
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
                  <li>Applications are due March 21, 2022.</li>
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
