# Community Geography

The website of the R.H. Mallory Center for Community Geography at the University of New Mexico, published at <https://amaranth.unm.edu/community-geography/>.

It is a Jekyll site built with [Xanthan](https://amaranth.unm.edu/public-scholarship/xanthan), Amaranth's framework for academic websites, and UNM branding. GitHub Pages builds and publishes the site from the `main` branch every time it changes. There are no custom plugins or build workflows.

- **Editing the site:** [HOW-TO-EDIT-THIS-WEBSITE.md](HOW-TO-EDIT-THIS-WEBSITE.md)
- **Page elements (images, alerts, bands, maps, photo stories):** [Xanthan's documentation](https://xanthan-web.github.io/docs/)
- **Image optimizer:** [scripts/README.md](scripts/README.md)

## Xanthan in this site

Page elements come from Xanthan, so its [Component Library](https://xanthan-web.github.io/docs/reference/component-library) and [Typography](https://xanthan-web.github.io/docs/reference/typography) guides apply here as written. The site has these of Xanthan's elements:

| Elements | Files |
| --- | --- |
| Standalone image, image + text, image carousel, before/after slider, jumbotron | `_includes/images/` |
| Alert box, pull quote | `_includes/typography/` |
| Audio player | `_includes/media/` |
| Section band, feature grid, feature row (a call to action with a button) | `_includes/layout/` |
| Interactive map, historic map, story map | `_includes/nav/map.html`, `_includes/maps/` |
| ScrollStory sequence (a photo story), ScrollStory backgrounds | `_includes/scrollstory/`, `_includes/scrollybox/` |
| Lede, section intro, field note, metadata strip, feature band | styles in `assets/css/typography.css` |

Xanthan has more elements than these. Not here: cards (and the tag pages built from them), the gallery grid, breadcrumbs, the scrollspy table of contents, the left and profile menu layouts, the homepage sections (home hero, profile intro, split intro, feature block, picks, link index), the museum and essay pieces, and the teaching demos (editorial demo, ScrollStory source demo). A page that includes one of them stops the site from building, with the error "Could not locate the included file". To add one, copy its include, stylesheet, and any script from Xanthan unchanged, and link the stylesheet in `_includes/html/html-head.html`.

`layout: default` and `layout: base`, which Xanthan's guides use, both mean the Center's page layout (`base-unm`). Xanthan's header images (`header-image:` in the front matter) work only on pages with `layout: scrollstory`. Footnotes work, but appear at the bottom of the page instead of in Xanthan's pop-ups.

### Keeping up with Xanthan

The files above match Xanthan's `main` branch of 26 October 2026 (commit `69921a0`), except for:

- `_includes/layout/feature-row.html`, `_includes/media/audio.html`, and `assets/css/story-sequence.css`: fixes marked "Local fix", not yet in Xanthan.
- `_includes/images/carousel.html` and `juxtapose.html`: each loads its library only on pages that use it.
- `_includes/maps/map-assets.html` and `_includes/nav/map.html`: Leaflet pinned to version 1.9.4.
- The shared stylesheets (`base.css`, `typography.css`, `images.css`, `nav.css`), the page head, the menu, and the layouts, which are trimmed or adapted for the Center's UNM design.

To take a newer version of an element, copy its files from Xanthan over these and reapply the changes listed. Comments in Xanthan's files sometimes mention Xanthan files this site doesn't have, such as `home.css`.

The Center's own design is in three files: `assets/css/themes/unm.css` (UNM's colors and fonts), `assets/css/community.css` (everything the Center's pages add), and `assets/css/unm-header-footer.css` (UNM's header and footer). `community.css` also holds the few rules that fit Xanthan's full-width elements (jumbotron, feature band, section bands, ScrollStory sequence) into the Center's page layout. Maps stay the width of the text column on ordinary pages, including a map given `class="map-wrap--wide"` and the story map; on `layout: scrollstory` pages the story map spans the window.
