---
layout: page
permalink: /talks/
title: talks
description: research talks and conference presentations in reverse chronological order.
nav: true
nav_order: 4
---

## Talks and presentations

Confirmed research presentations are listed in reverse chronological order. Conference dates are included only where an official program confirms them.

<ol class="list-unstyled">
  {% for talk in site.data.talks %}
    <li class="mb-4">
      <div><strong>{{ talk.title }}</strong></div>
      <div>{{ talk.kind }}, {{ talk.venue }}, {{ talk.date }}</div>
      <div>
        <a href="{{ talk.event_url }}">{{ talk.event_label }}</a>
        {% if talk.paper_url %} · <a href="{{ talk.paper_url }}">Paper</a>{% endif %}
        {% if talk.video_url %} · <a href="{{ talk.video_url }}">{{ talk.video_label }}</a>{% endif %}
      </div>
    </li>
  {% endfor %}
</ol>
