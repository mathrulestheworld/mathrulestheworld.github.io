---
layout: page
permalink: /publications/
title: publications
description: complete publication record, grouped by publication type and ordered reverse chronologically.
nav: true
nav_order: 2
---

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
