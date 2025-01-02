---
title: Demonstrating privacy-preserving model auditing
publish_date: 2025-01-15
permalink: /blog/privacy-preserving-model-auditing/
img_alt_text: Example Cryptographic Protocol
image: /assets/img/news/demonstrating-privacy-preserving-model-auditing.jpg
image_accessibility: Example Cryptographic Protocol
layout: blog
post_author: Tomo Lazovich
---

Have you ever wanted to check your machine learning (ML) model for disparities in performance across demographic groups, 
but you haven't had access to the sensitive data that would be necessary to do that evaluation? Earlier this year, we here at xD closed out Phase 3 of a 
project with the [10x team](https://10x.gsa.gov/), building a demo of a privacy-enhancing technology (PET) applied to the model auditing use case! In this post, I will
go through the basics of what we built, while future posts will dive into more of the technical details. 

## The Protocol

Many of the privacy preservation methods in use at the Census Bureau now focus on either obscuring values or adding noise to individual-level microdata 
(for example, with techniques like differential privacy). In this demo, we wanted to try something new, and so we chose a cryptography-based PET, the open-source
cryptographic protcol from Google called [Private Join and Compute](https://security.googleblog.com/2019/06/helping-organizations-do-more-without-collecting-more-data.html) (PJC).
Mathematically, this protocol is a [Private Set Intersection with Sum and Cardinality](https://eprint.iacr.org/2019/723). For the non-mathematicians, that's a fancy way of
saying that if we have two sets of IDs, we can get all of the following in a privacy-preserving fashion:

- The number of IDs that are shared between the two sets (aka the _cardinality_ of the _intersection_)
- The sum of a feature associated with those IDs, specifically for the IDs that were in the intersection

The cryptographic magic means that we can get those quantities without either party knowing who was actually in the other's dataset! The example that Google gives is an
illustrative one. Imagine you have a city that has credit card numbers of people who have ridden the train (we'll call them party A). You also have a business that has credit
card numbers for people who have spent money there, along with the amount of money spent on that credit card (we'll call them party B). After running their datasets through
the PJC protocol, both parties would know the number of people who both rode the train and spent money at the business. Party B would also get the total amount of money spent
at their business by people who rode the train. Pretty cool!

## The Implementation

At this point, you may be wondering what this has to do with ML models and model auditing. Well, when we inspect the inputs and outputs of the protocol, we see that we can use a bit of a mathematical trick to calculate model metrics. Imagine that we have trained a model and evaluated it on an evaluation set. For each instance in the evaluation dataset, we have a column that is a 1 if the model prediction matched the ground truth and a 0 if it didn't. We now want to see if there are any demographic disparities in the model's performance. Let's think about what happens if we use our column of 1s and 0s as the associated feature for the PJC protocol. First, let's assume that Party A is an entity that has a list of some individuals of interest - a subset of the evaluation set. Party B submits their evaluation results to the protocol. Remember that the PJC protocol sums the associated feature for individuals that are in the intersection, so in this case:

- Both parties learn the number of individuals who are in both of their datasets N, and
- Party B gets a sum of the column, which is the number of individuals that had a correct prediction from the model and are in both datasets, which we'll call K.

In this case, the accuracy can then be computed as K / N - and this is the accuracy **for the specific sub-group of interest**, without either party seeing each other's datasets. 

Now let's think about how we would apply this to measuring demographic disparity. Now let's say Party A is an agency like the Census Bureau that has individual demographic information and Party B is another government agency that has built a model but does not collect demographics. If the Census Bureau were to divide its dataset up by demographic and Party B ran the protocol once for each demographic group, they end up with a per-demographic accuracy measure! We can visualize this in the following diagram: 

![cloud configuration]({{ site.baseurl }}/assets/img/news/demonstrating-privacy-preserving-model-auditing.jpg)

Now, when Party B wants to compute the difference in model accuracy across demographic groups, they run the PJC protocol for each group and compare the results. In practice, we built a demo of this on the [cloud.gov](cloud.gov) infrastructure, and we'll have a future post going into more of the technical details. 

## The Vision

The long-term vision of this project is to have an agency like the Census Bureau providing something like "Demographic Disparities as a Service", where trusted partners can bring their encrypted datasets and run them against demographic groups to understand differences. While this demo on public data is only a first step in that direction, we are optimistic that long-term the Census Bureau can enable model auditing and beyond with its data. 