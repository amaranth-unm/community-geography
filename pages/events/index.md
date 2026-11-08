---
title: Events
permalink: /events/
# Old addresses that now land here.
redirect_from:
  - /events/upcoming
  - /events/archive
  - /events/index1.html
  - /events/index2.html
summary: Upcoming Mallory Center events, and every past event by its flyer, newest first.
masthead_image: /assets/images/community-geography/lexicon/community-gis-day-2025.jpg
masthead_position: 50% 12%
---

# Events

## Upcoming

{% comment %} Lists events that have not ended yet. Past events drop off when the site is next published. {% endcomment %}
{% include community/upcoming-events.html %}

## Past events

Our past events by their flyers, newest first. Select a flyer for the event's date, place and details.

{% comment %} Every event that has already happened, grouped by year. {% endcomment %}
{% include community/event-flyers.html skip-upcoming=true %}
