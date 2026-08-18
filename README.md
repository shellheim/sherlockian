# The Complete Sherlock Holmes

> _"Data! Data! Data!" he cried impatiently. "I can't make bricks without clay."_
> — _The Adventure of the Copper Beeches_

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/885f4e02-74ea-48a3-9f3d-0d0c2769affa" width="100%"></td>
    <td><img src="https://github.com/user-attachments/assets/a61cfcf2-7244-43d4-9a1e-038b7ce46b88" width="100%"></td>
    <td><img src="https://github.com/user-attachments/assets/c3184879-ab16-4d79-a20f-d6a4ab0dc93e" width="100%"></td>
</table>


It is not, I confess, without some hesitation that I set down an account of this
undertaking, for the matter is technical where my own gifts run more naturally
to narrative. And yet the case — if I may so style it — is a simple one at
its heart: to gather the whole of the canon, four novels and fifty-six
tales, into a single library; to arrange them as a reader might wish to
walk through them, whether in the order the world received them or in the
order the stories themselves occurred; and to do this cleanly, quietly, and
without ornament for its own sake.

What follows is the record of how it was built, offered in the hope that
whoever next takes up the case will find the trail well marked.

**Live:** [Sherlockian](https://sherlockian.vercel.app/)

---

## The Case at Hand

This is a [Hugo](https://gohugo.io) static site presenting the complete
Sherlock Holmes canon — the four novels and five short-story collections
Arthur Conan Doyle set down between 1887 and 1927, as a single, readable
library. Its distinguishing habit is that it does not insist on one reading
order: a visitor may walk the canon chronologically, as it was published, or
novels-first-then-stories, and the site remembers which they preferred.

## The Lay of the Land

```
.
├── config/_default/hugo.yaml   # site config, params (favicons, description, ...)
├── content/
│   ├── novels/                 # the four novels, one folder each
│   │   └── <slug>/
│   │       ├── _index.md       # work_type: 'novel', title, year
│   │       └── chapter-01.md   # chapter: N, subtitle, year
│   └── stories/                # the five short-story collections
│       └── <slug>/
│           ├── _index.md       # work_type: 'collection', title, year
│           └── <story-slug>.md # release_order: N, year
├── data/
│   └── canon.yaml               # the single source of reading order — see below
├── layouts/
│   ├── _default/
│   │   ├── baseof.html          # shared <head>, meta tags, favicons
│   │   ├── list.html            # renders a novel's chapters / a collection's stories
│   │   └── single.html          # renders one chapter or one story
│   ├── index.html               # home page (hero + the canon ledger)
│   └── partials/
│       └── canon.html           # the sortable ledger of all nine works
└── static/
    ├── css/main.css
    └── images/
```

## A Note on Front Matter

Every content file carries a small, deliberate set of fields, nothing is
inferred that isn't stated plainly, in the manner Holmes himself would
insist upon.

**A work's `_index.md`** (one per novel, one per collection):

```yaml
---
title: 'The Adventures of Sherlock Holmes'
year: '1892'
work_type: 'collection' # or 'novel'
layout: 'list'
---
```

**A novel's chapter:**

```yaml
---
title: 'A Study in Scarlet' # the novel's title, not the chapter's
chapter: 1
year: '1887'
subtitle: 'Mr. Sherlock Holmes' # optional
layout: 'single'
---
```

**A collection's story:**

```yaml
---
title: 'A Scandal in Bohemia'
release_order: 1
year: '1892'
layout: 'single'
---
```

Chapters are ordered by `chapter`; stories by `release_order`. Neither
requires the files themselves to sit in any particular order on disk,
the number put upon the front matter is the only authority.

## The Order of Things

`data/canon.yaml` is the single ledger from which every ordering on the
site is drawn. It holds two lists, each a plain
sequence of `<section>/<slug>` paths:

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

## Setting Up an Investigation

```bash
git clone <your-repo-url>
cd <project>
hugo server -D
```

The site will be available at `http://localhost:1313`. `-D` includes any
draft content — useful while a chapter is still being transcribed.

To produce a production build:

```bash
hugo --minify
```

## A Word on Attribution

The text of the canon itself belongs to no one, Sir Arthur Conan Doyle's
works are now in the public domain. The code that presents them here is
offered under the humble [MIT License](LICENSE); do with it what you will,
though a note of thanks would not go amiss.

## In Closing

I am aware that a README is no place for sentiment, and Holmes' cold and
analytical mind would no doubt call this preamble a waste of ink better
spent on the particulars of the code. But there is, I think, something quite
satisfying in seeing the whole of the canon, which was my introduction to
the singular personality of Mr. Holmes, gathered under one roof at
he begins to work the case himself.

_— with apologies to chief chronicler Dr. Watson_
