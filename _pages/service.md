---
layout: page
permalink: /service/
title: professional service
description: peer-review service for theoretical computer science conferences and journals.
nav: true
nav_order: 5
---

## Peer reviewing

I have completed **{{ site.data.reviewing.overall_total }} peer reviews of research manuscripts**, including {{ site.data.reviewing.conference_total }} invited external reviewer or subreviewer assignments for theoretical computer science conferences and {{ site.data.reviewing.journal_total }} journal-referee assignments. {{ site.data.reviewing.icore_astar_total }} of the conference reviews were for ICORE 2026 A* venues.

These were external reviewing assignments, not Program Committee memberships. The public summary below includes only venues, years, roles, and aggregate counts; it omits confidential manuscript information.

### Conference reviews

<div class="table-responsive">
  <table class="table table-sm">
    <thead>
      <tr>
        <th scope="col">Venue</th>
        <th scope="col">Years</th>
        <th scope="col">Reviews</th>
        <th scope="col">Role</th>
        <th scope="col">Ranking</th>
      </tr>
    </thead>
    <tbody>
      {% for review in site.data.reviewing.conference_reviews %}
        <tr>
          <td>{{ review.venue }} ({{ review.acronym }})</td>
          <td>{{ review.years }}</td>
          <td>{{ review.count }}</td>
          <td>{{ review.role }}</td>
          <td>
            {% if review.rank_url %}<a href="{{ review.rank_url }}">{{ review.rank }}</a>{% else %}Not stated{% endif %}
          </td>
        </tr>
      {% endfor %}
    </tbody>
    <tfoot>
      <tr>
        <th scope="row">Conference total</th>
        <td></td>
        <th>{{ site.data.reviewing.conference_total }}</th>
        <td></td>
        <td></td>
      </tr>
    </tfoot>
  </table>
</div>

### Journal reviews

<div class="table-responsive">
  <table class="table table-sm">
    <thead>
      <tr>
        <th scope="col">Journal</th>
        <th scope="col">Year</th>
        <th scope="col">Reviews</th>
        <th scope="col">Role</th>
        <th scope="col">Ranking note</th>
      </tr>
    </thead>
    <tbody>
      {% for review in site.data.reviewing.journal_reviews %}
        <tr>
          <td>{{ review.venue }} ({{ review.acronym }})</td>
          <td>{{ review.years }}</td>
          <td>{{ review.count }}</td>
          <td>{{ review.role }}</td>
          <td>
            {% if review.rank_url %}<a href="{{ review.rank_url }}">{{ review.rank }}</a>{% else %}Not stated{% endif %}
          </td>
        </tr>
      {% endfor %}
    </tbody>
    <tfoot>
      <tr>
        <th scope="row">Journal total</th>
        <td></td>
        <th>{{ site.data.reviewing.journal_total }}</th>
        <td></td>
        <td></td>
      </tr>
    </tfoot>
  </table>
</div>

ICORE rankings apply to conferences. The JMLR note refers to the final [CORE journal ranking from 2020](https://portal.core.edu.au/jnl-ranks/); CORE discontinued journal rankings in 2022.
