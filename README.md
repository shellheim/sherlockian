# The Complete Sherlock Holmes

<img src="https://github.com/user-attachments/assets/d162b7fc-f4bd-42f0-a071-def27db7c9ae" width="100%"/>

I put together this project because I wanted all four novels and fifty-six stories of the Sherlock Holmes canon in one clean, simple library.

Here is how the project is structured for anyone who wants to take a look under the hood.

**Live Site:** [Sherlockian](https://sherlockian.vercel.app/)

---

## Overview

This is a [Hugo](https://gohugo.io) static site containing the complete Sherlock Holmes canon published by Arthur Conan Doyle between 1887 and 1927. Readers can switch between reading chronologically or following the traditional novel/story grouping, and the layout updates automatically.

## Project Structure

```text
.
├── config/_default/hugo.yaml    # Site config and parameters
├── content/
│   ├── novels/                  # The four novels, one folder each
│   │   └── <slug>/
│   │       ├── _index.md        # Novel metadata (title, year)
│   │       └── chapter-01.md    # Chapter details
│   └── stories/                 # The five short-story collections
│       └── <slug>/
│           ├── _index.md        # Collection metadata
│           └── <story-slug>.md  # Story details
├── data/
│   └── canon.yaml               # Single source of truth for reading order
├── layouts/
│   ├── _default/
│   │   ├── baseof.html          # Shared head, meta tags, and favicons
│   │   ├── list.html            # Renders chapters or stories
│   │   └── single.html          # Renders a single chapter or story
│   ├── index.html               # Home page
│   └── partials/
│       └── canon.html           # Sortable ledger of all nine works
└── static/
    ├── css/main.css
    └── images/

```

## Front Matter Format

<p align="center">
<img src="https://github.com/user-attachments/assets/fb2a9339-e5f3-41b7-9179-77538638f01f" width="80%"/>
</p>

Each content file uses straightforward front matter fields:

**Novel or Collection Index (`_index.md`):**

```yaml
---
title: 'The Adventures of Sherlock Holmes'
year: '1892'
work_type: 'collection' # or 'novel'
layout: 'list'
---
```

**Novel Chapter:**

```yaml
---
title: 'A Study in Scarlet'
chapter: 1
year: '1887'
subtitle: 'Mr. Sherlock Holmes'
layout: 'single'
---
```

**Short Story:**

```yaml
---
title: 'A Scandal in Bohemia'
release_order: 1
year: '1892'
layout: 'single'
---
```

Files do not need to be in a specific order on disk; the numbers defined in the front matter of stories define their ordering _within_ different collections.

## Reading Order

<p align="center">
<img src="https://github.com/user-attachments/assets/4e866159-7cb5-48de-a92c-7c4090092e64" width="80%"/>
" width="80%"/>
</p>

The file `data/canon.yaml` controls how the site orders everything else. It lists the file paths in sequence:

```yaml
chronological:
  - novels/study-in-scarlet
  - novels/sign-of-four
  - stories/adventures
  ...

grouped:
  - novels/study-in-scarlet
  - novels/sign-of-four
  - novels/hound-of-the-baskervilles
  - novels/valley-of-fear
  - stories/adventures
  ...

```

## License

Sir Arthur Conan Doyle's original texts are in the public domain. The source code for this site is available under the [MIT License](/LICENSE).

---

_— with apologies to Dr. Watson_
