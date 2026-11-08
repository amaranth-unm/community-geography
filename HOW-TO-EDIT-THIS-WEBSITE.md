# How to Edit the Community Geography Website

**No coding experience needed.** This guide walks you through everything step by step.
Everything is done in your web browser. You do not need to install anything.

---

## Table of Contents

1. [The 5-minute version](#1-the-5-minute-version)
2. [Editing with GitHub and VS Code in your browser](#2-editing-with-github-and-vs-code-in-your-browser)
3. [Where things live (a map of the website files)](#3-where-things-live)
4. [General edits: text, links, images, page elements, colors, sizes](#4-general-edits)
5. [Add a news story](#5-add-a-news-story)
6. [Add an event](#6-add-an-event)
7. [Add a project](#7-add-a-project)
8. [When a project ends](#8-when-a-project-ends)
9. [Add or edit a person](#9-add-or-edit-a-person)
10. [Other things to know](#10-other-things-to-know)
11. [Troubleshooting](#11-troubleshooting)
12. [Cheat sheet](#12-cheat-sheet)

---

## 1. The 5-minute version

1. Go to the repository on GitHub and press the **period key (`.`)** on your keyboard. This opens the editor in your browser. (Or see Section 2 for other ways.)
2. Find the file you want in the left-hand list and click it.
3. Make your change and save with **Ctrl+S** (Mac: **Cmd+S**).
4. Click the **Source Control** icon on the left (it looks like a branch with dots).
5. Type a short message such as "Add spring workshop event" and click **Commit & Push**.
6. Wait 2-5 minutes. Check the **Actions** tab on GitHub for a green check mark. Your change is now on the website.

> **Important:** Saving a file does NOT publish it. You must **Commit & Push** (step 5).

---

## 2. Editing with GitHub and VS Code in your browser

### What you need
- A free [GitHub](https://github.com) account.
- Permission to edit the repository. Ask the website owner to add you as a collaborator if you don't have it.

### Opening the editor
Pick whichever is easiest:

- **Easiest:** Open the repository on GitHub and press the **`.`** (period) key.
- Or change `github.com` to `github.dev` in the web address.
- Or use this link: <https://github.dev/amaranth-unm/community-geography>

(If the repository has moved, use the address of wherever this repository lives now.)

A screen that looks like a code editor will open. This is "VS Code in the browser."

### Finding your way around

| Area | What it does |
| --- | --- |
| **Left side, Explorer (two pages icon)** | A list of all the website's files and folders. Click a folder to open it. |
| **Search (magnifying glass)** | Find text across all files. Useful for finding a sentence you want to change. |
| **Source Control (branch icon)** | Where you save and publish your changes. A number badge shows how many files you changed. |
| **Middle** | The file you are editing. |

**Tip:** Press **Ctrl+P** (Mac: **Cmd+P**) and start typing a file name to jump straight to it.

### Making and publishing a change

1. **Open the file** you want to change.
2. **Edit it.** Click in the text and type like you would in a document.
3. **Save** with **Ctrl+S** (Mac: **Cmd+S**).
4. Click the **Source Control** icon on the left.
5. You will see your changed files listed. Click the **+** next to a file to "stage" it (or click **+** next to "Changes" to stage everything).
6. Type a short description in the message box (for example, "Fix typo on mission page").
7. Click **Commit & Push** (or the checkmark, then **Sync Changes**).
8. If it asks which branch, choose the main one (`main`). If you're unsure, stay on `main` for small edits.

### Checking that it worked

1. On the GitHub page for the repository, click the **Actions** tab.
2. Find your most recent entry named **pages build and deployment**.
3. A **yellow circle** means it is still working. A **green check** means it is live. A **red X** means something went wrong (see [Troubleshooting](#11-troubleshooting)).
4. It usually takes 2-5 minutes. Refresh the live website to see the change.

### Made a mistake?

- **Before you commit:** In Source Control, click the small **undo arrow** next to the file to throw away your changes.
- **After you commit:** Nothing is lost. GitHub keeps the full history. Ask a teammate for help, or edit the file again and commit the fix.

### A word about the "front matter"

Many files start with a block between two lines of three dashes:

```
---
title: Community mapping workshop
start_date: 2027-03-12
---
```

This is "front matter." It is information the website uses (title, dates, pictures). **Edit only the words after the colon.** Do not delete the dashes or the words before the colons. Everything below the second `---` is the normal text of the page.

---

## 3. Where things live

| I want to change... | Go to this folder |
| --- | --- |
| Start a new story, event, project, or person | `_templates/` (files to copy; never shown on the website) |
| A news story | `_news/` (inside a year folder, like `_news/2026/`) |
| An event | `_events/` (inside a year folder, like `_events/2026/`) |
| A project, current or past | `_projects/` |
| A person on the People page | `_people/` |
| A word in the Community Geography lexicon | `_lexicon/` (one file per word) |
| Other pages (About, Funding, Donate, etc.) | `pages/` |
| Pictures | `assets/images/` |
| PDFs and flyers | `assets/documents/` |
| The menu at the top of the site | `_data/nav-top.yml` |
| Site-wide settings (title, email) | `_config.yml` |
| Colors and fonts | `assets/css/themes/unm.css` |
| Text sizes | top of `assets/css/community.css` |

**Folders starting with `_` (underscore) are special.** Leave their names alone.

---

## 4. General edits

### Changing text

Open the page file, find the words, and type. Page text is written in **Markdown**, a simple way to format text:

| You type | You get |
| --- | --- |
| `# Big heading` | A large heading |
| `## Smaller heading` | A medium heading |
| `### Smallest heading` | A small heading |
| `**bold text**` | **bold text** |
| `*italic text*` | *italic text* |
| `- item` (at the start of a line) | A bullet list |
| `1. item` | A numbered list |
| `[link words](https://example.com)` | A clickable link |

Leave a **blank line** between paragraphs, or they will run together.

### Adding a link

```
[Visit the UNM website](https://www.unm.edu)
```

To link to another page on this website, start the address with `{{ site.baseurl }}` and then the page's address:

```
[See our projects]({{ site.baseurl }}/projects/)
[Read about our mission]({{ site.baseurl }}/about/)
```

Keep `{{ site.baseurl }}` exactly as shown. It fills in the first part of the website's address. Page addresses have no `.html` on the end; a section's main page ends in `/`.

### Adding an image

**Step 1: Prepare the image.**
- Use a clear file name with lowercase letters, numbers and dashes, and no spaces. Example: `spring-workshop-flyer.jpg`.
- Keep files reasonably small (under about 1 MB if you can). Photos are best as `.jpg`; logos and flyers as `.png`.

**Step 2: Upload it.**
1. In the Explorer, open the right folder under `assets/images/` (for example `assets/images/news/` for news pictures, `assets/images/events/` for event flyers, `assets/images/projects/project/` for project pictures).
2. **Drag and drop** the image from your computer into that folder in the Explorer. (Or right-click the folder and choose **Upload**.)

**Step 3: Show it on the page.** Every picture on the site uses the same block. Put it where you want the picture, with a blank line above and below:

```
{% include images/figure.html
  image-path="/assets/images/news/spring-workshop-flyer.jpg"
  image-width="50%"
  alt-text="Flyer for the spring workshop on March 12"
%}
```

- `image-path` is your file's path. Write it starting with `/assets/`; don't add `{{ site.baseurl }}` here.
- `image-width` is how much of the text column the picture fills: `100%` for full width, `50%` for half.
- `alt-text` is a short description for people who use screen readers. **Always fill it in**, and describe the picture rather than giving its file name.
- Optional lines you can add:
  - `caption="Photo by Jane Doe"` shows a caption under the picture. Without `alt-text`, the caption is used as the description too.
  - `image-position="left"` or `image-position="right"` puts the picture to one side so the paragraphs after it wrap around it. Leave it out to center the picture. A picture on the left can be up to `35%` wide, on the right up to `45%`. On phones, pictures always fill the screen width.
  - `link="https://example.com"` makes clicking the picture open that page. Without it, clicking opens the full-size picture.
- To set a picture beside one block of text in two neat columns, use [Image + Text](https://xanthan-web.github.io/docs/reference/component-library#image--text-figure-wrap) instead (see [Adding other page elements](#adding-other-page-elements)).

> Some pages (events, news, projects) have special spots for pictures. Those are covered in Sections 5-7. Just give the file's path.

**Step 4:** Commit and push as usual (the uploaded image counts as a change).

The site has an **Optimize Images** tool that shrinks large pictures. On GitHub go to **Actions → Optimize Images → Run workflow**.

### Adding a PDF or document

1. Drag the PDF into `assets/documents/` (use the matching subfolder such as `news` or `funding`).
2. Link to it:

```
[Download the flyer (PDF)]({{ site.baseurl }}/assets/documents/news/my-flyer.pdf)
```

### Adding other page elements

The website is built on [Xanthan](https://amaranth.unm.edu/public-scholarship/xanthan), and Xanthan's documentation shows each page element with an example you can copy. To add a box, a quote, a band of color, a map, or a photo story:

1. Find the element in Xanthan's [Component Library](https://xanthan-web.github.io/docs/reference/component-library), or in [Typography](https://xanthan-web.github.io/docs/reference/typography#editorial-rhythm) for text styles such as a lede paragraph or a field note.
2. Copy its example into your page where you want the element.
3. Change the words, and change any file paths to your own files. **Inside these elements, start paths with `/assets/...` and leave out `{{ site.baseurl }}`.** The element adds the first part of the address itself, so `{{ site.baseurl }}` would add it twice and the picture wouldn't show.
4. Commit and push, then check the page.

The site has these elements from the Component Library:

- **Pictures:** [Standalone Image](https://xanthan-web.github.io/docs/reference/component-library#standalone-image), [Image + Text](https://xanthan-web.github.io/docs/reference/component-library#image--text-figure-wrap), [Jumbotron](https://xanthan-web.github.io/docs/reference/component-library#jumbotron) (a full-width picture with a heading), [Before/After Slider](https://xanthan-web.github.io/docs/reference/component-library#beforeafter-slider), [Image Carousel](https://xanthan-web.github.io/docs/reference/component-library#image-carousel)
- **Text:** [Alert Box](https://xanthan-web.github.io/docs/reference/component-library#alert-box), [Pull Quote](https://xanthan-web.github.io/docs/reference/component-library#pull-quote), and the styles under [Editorial Rhythm](https://xanthan-web.github.io/docs/reference/typography#editorial-rhythm) in Typography
- **Page sections:** [Section Band](https://xanthan-web.github.io/docs/reference/component-library#section-band) (a band of color behind part of a page), [Feature Grid](https://xanthan-web.github.io/docs/reference/component-library#feature-grid), [Feature Row](https://xanthan-web.github.io/docs/reference/component-library#feature-row) (a short pitch with a button)
- **Maps:** [Interactive Map](https://xanthan-web.github.io/docs/reference/component-library#interactive-map), [Historic Map](https://xanthan-web.github.io/docs/reference/component-library#historic-map), [Story Map](https://xanthan-web.github.io/docs/reference/component-library#story-map)
- **Stories and sound:** [ScrollStory Sequence](https://xanthan-web.github.io/docs/reference/component-library#scrollstory-sequence) (a photo story told as the reader scrolls), the [ScrollStory backgrounds](https://xanthan-web.github.io/docs/scrollstories/), [Audio Player](https://xanthan-web.github.io/docs/reference/component-library#audio-player)

The other elements on those pages (cards, the gallery grid, breadcrumbs, the table of contents, the homepage sections, and the museum pieces) are not part of this site. A page that uses one won't build (see [Troubleshooting](#11-troubleshooting)). If you need one, ask whoever looks after the site's code; `README.md` explains how to add it.

A few things work differently here than Xanthan's guides say:

- Where a guide says `layout: default`, that gives this site's normal page.
- Header images (the Component Library's **Page Header**) work only on pages with `layout: scrollstory`.
- [Footnotes](https://xanthan-web.github.io/docs/reference/typography#footnotes) appear as a numbered list at the bottom of the page instead of as pop-ups.

### Changing colors

Xanthan's [Colors & Fonts](https://xanthan-web.github.io/docs/reference/colors-and-fonts) guide explains how the color names work and has a color picker to try them out. That guide says to edit `base.css`, but on this website make the change in `assets/css/themes/unm.css` instead: its UNM colors replace the ones in `base.css`. Near the top of `unm.css` you will see lines like:

```
--accent-primary: #007a86;
--interactive-hover: #ba0c2f;
--bg-page: #f8f8f6;
```

The part after the colon (like `#007a86`) is a **color code**. Replace it with another color code and the whole site changes. Find color codes at [htmlcolorcodes.com](https://htmlcolorcodes.com/) (copy the "HEX" value, including the `#`).

| Line starts with | Changes |
| --- | --- |
| `--accent-primary` | Main teal color (buttons, links) |
| `--interactive-hover` | Cherry red (hover and focus color) |
| `--bg-page` | Page background |
| `--bg-nav` | Top menu background |
| `--bg-footer` | Background of the Center footer (the band with the address) |
| `--text-body` | Main text color |
| `--text-h1`, `--text-h2`, `--text-h3` | Heading colors |

**Tip:** Change one color at a time and check the live site afterward. This stops a typo from breaking many things at once. Keep the `;` at the end of each line.

> The site uses UNM's official brand colors. Check with the Center director before changing them.

### Changing text size or fonts

Fonts are set in the same file, `assets/css/themes/unm.css`, under `--font-body` and `--font-heading`. They are UNM's Gotham and Vitesse, which load from UNM's servers, so skip the part of Xanthan's guide about adding Google Fonts. For text size in particular:

- **Page titles, home page section titles, and small text** (labels, buttons, dates) are set by the `--center-size-...` lines at the top of `assets/css/community.css`. Each line controls that size everywhere on the site.
- **Headings inside a page's text** (the `##` and `###` headings) and normal body text are in `assets/css/typography.css`.
- Sizes look like `1.125rem` or `clamp(2.25rem, 4vw, 3.5rem)`. A **bigger number = bigger text**. `1rem` is normal size. In a `clamp(...)`, the first number is the smallest size (phones) and the last is the largest (wide screens).
- Change a number by small steps (for example, `1rem` to `1.1rem`).

Sizes and colors belong in these files, not in a page, so the whole site stays consistent.

### Leaving a note for the next editor

To explain something in a page without it showing on the website, wrap the note in `{% comment %}` and `{% endcomment %}`:

```
{% comment %} The photos for this page are listed in _data/gis-day-gallery.yml. {% endcomment %}
```

These notes are removed when the site is built, so they never reach the published page. (An HTML comment, `<!-- like this -->`, also hides text, but it is still sent to every visitor and can be seen with "View source", so don't use it for notes.) In the front matter block at the top of a file, start a note line with `#` instead:

```
---
title: Place Lexicon Word
# The word, as shown on its card and its page
word: Place
---
```

### Changing the top menu

Open `_data/nav-top.yml`. Each menu has a `title` (what visitors see) and a `url` (where it goes). Keep the spacing (indentation) and the dashes exactly as they are. Spaces matter in this file.

### Changing the photo at the top of a page

Every page except the home page has a band at the top with the Center's name and one photo of people fading in from the right. There are no defaults: a page with no `masthead_image` line shows the band with the name and no photo. To give a page one, add two lines to its top block:

```
masthead_image: /assets/images/masthead/my-photo.jpg
masthead_position: 50% 40%
```

`masthead_position` is the part of the photo to keep in view when it is cropped to the band: the first number is left to right, the second top to bottom. It is optional. Choose a photo with the people right of center, because the left third fades out behind the name.

### Changing the contact email or site title

Open `_config.yml`. Edit the `title`, `description`, or `email` lines. Do not change other lines unless you know what they do.

---

## 5. Add a news story

1. In the Explorer, open `_news/` and then the folder for the current year (for example `_news/2026/`). If the year's folder doesn't exist yet, right-click `_news` and choose **New Folder**.
2. Right-click the year folder and choose **New File**.
3. Name it with lowercase words separated by dashes and ending in `.md`. Example: `new-fellows-announced.md`.
4. Paste this template into the file and fill it in:

```
---
title: New Fellows Announced
published_date: 2026-09-15
---

Write your story here. Leave a blank line between paragraphs.

You can add a [link](https://example.com), **bold text**, and pictures
(see the "Adding an image" section above).
```

5. Save, then **Commit & Push**.

**Notes**
- `title` is the headline.
- The web address comes from the file name: `new-fellows-announced.md` is published at `/news/new-fellows-announced`. Choose the file name carefully, because renaming the file later changes the address.
- `published_date` is the date written `YYYY-MM-DD`.
- If you only know the year, use `published_year: 2026` instead of `published_date`.
- The news page updates by itself. You do not need to edit any list.
- **Optional lead picture:** add two lines to the top block: `image: /assets/images/news/my-photo.jpg` and `image_alt: A short description`.
- News is no longer shown on the homepage; it lives under **News & Events** in the menu.

**Easiest way:** copy `_templates/news-story.md` into the year folder (right-click it → **Copy**, then right-click the year folder → **Paste**), rename the copy, and replace the text. Older stories have extra lines such as `permalink` that keep their addresses from the old website working; leave those in the old files, and don't copy them into new ones.

---

## 6. Add an event

1. Open `_events/` and the folder for the year **the event starts in** (for example `_events/2027/`). Create the folder if needed.
2. Create a new file named like `community-mapping-workshop.md`.
3. Paste and fill in this template:

```
---
title: Community Mapping Workshop
start_date: 2027-03-12
end_date: 2027-03-12
start_time: 2:00 pm
end_time: 4:00 pm
location: UNM Bandelier East 105
presenter: Jane Doe
---

Describe the event here. Include who it is for, what will happen, and
how to register.
```

4. Save, then **Commit & Push**.

**Notes**
- Dates are written `YYYY-MM-DD`. For a one-day event, `start_date` and `end_date` are the same day.
- Write times the usual way: `2:00 pm`, `9:30 am`. (Older events write times like `'14:00'`, in quote marks; that works too. Without the quote marks, `14:00` shows as "time to be confirmed".)
- Put the file in the folder matching its start year.
- The web address comes from the file name: `community-mapping-workshop.md` is published at `/events/community-mapping-workshop`.
- If you don't know the time, location, or presenter, **delete that line**. Don't guess.
- **Flyer picture:** upload it to `assets/images/events/` (see Section 4) and add two lines at the top:
  ```
  image: /assets/images/events/my-flyer.png
  image_alt: Flyer for the Community Mapping Workshop on March 12
  ```
- The **Events** page lists upcoming events at the top (those whose date hasn't passed yet) and every past event below by its flyer.
The site is rebuilt every morning, so a finished event drops off the next day.
- Events are never deleted. They stay on the **Events** page under Past events, which shows each event's flyer (its `image`). An event without a flyer shows its date and title there instead.

**Easiest way:** copy `_templates/event.md` into the year folder, rename the copy, and edit it. Older events have extra lines (like `permalink` and `heading_id`) that keep old links working; don't copy those into new events.

---

## 7. Add a project

Every project, current or past, is one file in `_projects/`. A project is listed at the top of the **Projects** page, as a large card, until its `end_date` has passed. It then moves to the **Past projects** section lower on the same page, as a small card, by itself.

A new project is added by creating one file. The cards on the Projects page, and the project page's title, picture, and dates/faculty/partners box, are all built from the information at the top of the file.

1. Upload the project's picture to `assets/images/projects/project/` (see Section 4).
2. Open `_projects/`, create a new file named like `my-new-project.md`.
3. Paste and fill in this template:

```
---
title: My New Project
image: /assets/images/projects/project/my-new-project.jpg
start_date: 2027-01-15
end_date: Ongoing
faculty:
  - Dr. Jane Doe
community_organization:
  - Example Community Group
community_contact:
  - Alex Rivera
summary: Two or three sentences that describe the project. This shows on the project card.
---

Write the full description of the project here.
```

4. Save, then **Commit & Push**.

**Notes**
- `image` is the project's picture. It appears on the project's card and at the top of its page. To describe it for screen readers, add `image_alt: A short description` (without it, the project title is used).
- The web address comes from the file name: `my-new-project.md` is published at `/projects/project/my-new-project`.
- `start_date` is written `YYYY-MM-DD`.
- For a project that hasn't ended, write `end_date: Ongoing`. When it ends, change that to the end date (see [Section 8](#8-when-a-project-ends)).
- Don't know the faculty or organization? Use `- TBD`. `community_contact` is the person to ask for at the organization; leave the lines out if there isn't one yet and the card simply omits that row.
- A logo, map or flyer as the picture would be cropped on the large project cards. Add `image_fit: contain` under `image:` to show it whole.
- The Projects page sorts current projects with the newest start date first.
- Past projects are sorted alphabetically by title.

**Easiest way:** copy `_templates/project.md` into `_projects/`, rename it, and replace the information.

---

## 8. When a project ends

1. Open the project's file in `_projects/`.
2. Change `end_date: Ongoing` to the real end date, such as `end_date: 2027-05-15`.
3. **Commit & Push**.

That's it. The project moves from the large cards at the top of the **Projects** page to the **Past projects** section below by itself. If you give a date that hasn't come yet, it moves over the morning after that date. The project's web address does not change, so existing links still work. **Do not rename the file**, and if it has a `permalink` line, leave it alone.

To move a project back, change its `end_date` back to `Ongoing`.

---

## 9. Add or edit a person

People appear on the **People** page, under **Our Team** and **Faculty Affiliates**. Each person is one file in `_people/`.

Template:

```
---
name: Jane Doe
role: Graduate Fellow
affiliation: Department of Geography and Environmental Studies
groups: [team]
display_order: 20
anchor: jane-doe
image: /assets/images/about/jane-doe.jpg
image_alt: Portrait of Jane Doe
---

A short biography goes here.
```

- Use `groups: [team]` for staff or `groups: [affiliates]` for affiliates.
- `display_order` is a number that decides the order on the page. Smaller numbers come first. To fit someone between 2 and 3, use 2.5. People with the same number appear in file-name order, and someone with no number goes at the end.
- `anchor` must be unique. Use the person's name with dashes.
- The photo is optional. Upload it to `assets/images/about/`.
- To remove someone, delete their file (right-click it → **Delete**).

**Easiest way:** copy `_templates/person.md` into `_people/`, name the copy after the person (for example `jane-doe.md`), and fill it in.

---

## 10. Other things to know

- **Nothing is live until it is committed and pushed.** The Actions tab shows progress.
- **Check the live site after every change.** Open the page and make sure it looks right.
- **Search updates itself.** New events, news, and people become searchable automatically.
- **Two pages cannot have the same address.** If two files have the same name in the same kind of folder, or the same `permalink`, one silently replaces the other.
- **Never delete the dashes (`---`) that surround the top block** of a page.
- **Do not put passwords or private information** in any file. This repository and website may be public.
- **Photos of people:** get permission before posting.
- **Keep file names simple:** lowercase, dashes instead of spaces, no special characters.
- **Folders starting with `_`, and the `scripts/` and `.github/` folders:** leave them alone unless you know what you're doing. The technical notes are in `README.md` (how the site uses Xanthan) and `scripts/README.md` (the image tools).
- **Analytics and UNM footer/header:** these are managed by UNM. Do not edit files inside `_includes/unm/` without checking first.
- **Lexicon words:** each word is one file in `_lexicon/`, and its front matter holds the whole page: the definition, the wide photo, the related ideas, and the `story` (its quotes, passages and photos, in order). To change a quote or swap a photo, edit those lines. To add a word, copy an existing word's file.
- **Old pages are kept.** Instead of deleting an old story, event, or project, leave it. Events move to the archive on their own, and projects move to "past."
- **New year?** Start a new year folder in `_news/` and `_events/` (for example `_news/2027/`) to keep the files tidy. The folders don't change anything on the website, and nothing else needs setting up for a new year.
- **Backups:** GitHub stores every version of every file. You can look at the history of any file by right-clicking it and choosing **Open Timeline**.
- **Handing over the site?** Add the new editor as a collaborator on the GitHub repository (Settings → Collaborators) and point them to this guide.

---

## 11. Troubleshooting

| Problem | What to do |
| --- | --- |
| I saved but the website didn't change | You must **Commit & Push** in Source Control. Then wait a few minutes and refresh (Ctrl+F5). |
| The Actions tab shows a red X | Click the failed run, then click **build**. Read the red lines for the file name and message. Fix that file in the browser, then Commit & Push again. The old website stays online meanwhile. |
| Error mentions "Liquid" | Something between `{% %}` or `{{ }}` is mistyped. Compare with a working file. |
| An event says "time to be confirmed" | Its time is written like `14:00` without quote marks. Write it as `2:00 pm`. |
| Error mentions "front matter" or "YAML" | Something in the top block between the `---` lines is off: a missing colon, a missing dash, or odd spacing. Compare with a working file. |
| My picture doesn't show | Check the file name, the folder, and capital letters. `Photo.JPG` and `photo.jpg` are different. In a Xanthan element (an `{% include ... %}` line), start the path with `/assets/...` and leave out `{{ site.baseurl }}`. |
| Error says "Could not locate the included file" | The page uses an element this site doesn't have, or the name after `include` is mistyped. Compare it with the list in [Adding other page elements](#adding-other-page-elements). |
| My event isn't in the Upcoming list on the Events page | The date might be in the past, or the file has `date_review: true`. Delete that line. (The list is refreshed every morning, so a finished event can linger until the next day.) |
| My text looks like one big paragraph | Add a blank line between paragraphs. |
| I can't push my changes | You may not have permission. Ask the website owner to add you as a collaborator. |
| Nothing works | Stop, don't delete anything, and ask for help. All past versions can be restored. |

---

## 12. Cheat sheet

| I want to... | Do this |
| --- | --- |
| Open the editor | Press `.` on the GitHub repository page |
| Find a file fast | Ctrl+P (Cmd+P), then type its name |
| Save a file | Ctrl+S (Cmd+S) |
| Publish my changes | Source Control → message → **Commit & Push** |
| Check if it's live | GitHub → **Actions** tab → green check |
| Start a new page | Copy a file from `_templates/` |
| Add news | New file in `_news/YEAR/` |
| Add an event | New file in `_events/YEAR/` |
| Add a project | New file in `_projects/` |
| Finish a project | Change its `end_date` from `Ongoing` to the end date |
| Add a person | New file in `_people/` |
| Edit a lexicon word | Its file in `_lexicon/` |
| Add a picture | Drag into `assets/images/...`, then reference its path |
| Add a box, quote, band, map, or photo story | Copy its example from Xanthan's [Component Library](https://xanthan-web.github.io/docs/reference/component-library) |
| Change colors | `assets/css/themes/unm.css` |
| Change the menu | `_data/nav-top.yml` |

*Last updated: November 2026. If something in this guide is out of date, please fix it. This file is `HOW-TO-EDIT-THIS-WEBSITE.md` in the main folder of the repository.*
