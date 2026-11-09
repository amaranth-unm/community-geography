(function () {
  'use strict';

  // The year buttons on the News page (community/news-list.html). Without this
  // script they jump to a year's heading and every year stays on the page; with
  // it, a button shows only that year, and /news/#year-2024 opens it filtered.
  var nav = document.querySelector('.news-year-nav');
  if (!nav) return;

  var list = nav.closest('.news-list');
  var groups = list.querySelectorAll('.news-year-group');
  var links = nav.querySelectorAll('a[data-news-year]');
  var status = list.querySelector('.news-filter-status');
  var allLink = nav.querySelector('a[data-news-year="all"]');

  function yearFromHash() {
    var match = /^#year-(\d{4})$/.exec(window.location.hash);
    return match ? match[1] : 'all';
  }

  function show(year, announce) {
    var shown = 0;
    groups.forEach(function (group) {
      var match = year === 'all' || group.getAttribute('data-year') === year;
      group.hidden = !match;
      if (match) shown += 1;
    });

    // A year with no stories (a stale link) shows everything instead of an empty page.
    if (!shown) {
      year = 'all';
      groups.forEach(function (group) { group.hidden = false; });
    }

    links.forEach(function (link) {
      if (link.getAttribute('data-news-year') === year) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });

    if (announce && status) {
      status.textContent = year === 'all' ? 'Showing news from all years.' : 'Showing news from ' + year + '.';
    }
    return year;
  }

  nav.addEventListener('click', function (event) {
    var link = event.target.closest('a[data-news-year]');
    if (!link) return;
    event.preventDefault();

    var year = show(link.getAttribute('data-news-year'), true);
    if (window.history && window.history.replaceState) {
      var address = year === 'all' ? window.location.pathname + window.location.search : '#year-' + year;
      window.history.replaceState(null, '', address);
    }
  });

  window.addEventListener('hashchange', function () { show(yearFromHash(), true); });

  if (allLink) allLink.hidden = false;
  show(yearFromHash(), false);
})();
