---
layout: page
permalink: /publications/
title: publications
description: complete publication record, grouped by publication type and ordered reverse chronologically.
nav: true
nav_order: 2
---

## Publication profile

**10 peer-reviewed publications: 8 conference papers and 2 journal articles, plus 2 additional public research preprints.**

My conference publication record is concentrated in leading theoretical computer science venues. Six of the eight peer-reviewed conference papers appeared at conferences ranked A* by [ICORE 2026](https://portal.core.edu.au/conf-ranks/?by=for&page=1&search=4613&sort=arank&source=ICORE2026), where [A* denotes a recognized flagship conference](https://www.core.edu.au/icore-portal/icore-portal-2026-rankings-updates). The remaining two appeared at APPROX/RANDOM, an ICORE A venue. Thus, all eight conference publications appeared at A* or A-ranked conferences.

The journal record includes *Mathematical Programming*, a peer-reviewed journal of the [Mathematical Optimization Society](https://mathopt.org/), and *ACM Transactions on Algorithms*. The latter was rated A in the [final CORE journal ranking in 2020](https://portal.core.edu.au/jnl-ranks/281/); CORE has since [discontinued journal rankings](https://portal.core.edu.au/jnl-ranks/). The two preprints below are public manuscripts and are not included in the peer-reviewed publication count.

{% include bib_search.liquid %}

## Peer-reviewed journal articles

<div class="publications">
{% bibliography --group_by none --query @article %}
</div>

## Peer-reviewed conference papers

<div class="publications">
{% bibliography --group_by none --query @inproceedings %}
</div>

## Additional public preprints

<div class="publications">
{% bibliography --group_by none --query @unpublished %}
</div>
