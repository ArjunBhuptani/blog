---
title: Obsidian Vault Template
description: I use Obsidian to think, take notes, write essays, and publish this site. This is my bottom-up approach to note-taking and organizing things I am interested in. It embraces chaos and laziness to create emergent structure.
tags:
  - Obsidian
  - Writing
  - Dev
pubDate: 2024-04-16
---

I use [Obsidian](https://stephango.com/obsidian) to think, take notes, write essays, and publish this site. This is my bottom-up approach to note-taking and organizing things I am interested in. It embraces chaos and laziness to create emergent structure.

In Obsidian, a “vault” is simply a folder of files. This is important because it adheres to my [File over app](https://stephango.com/file-over-app) philosophy. If you want to create digital artifacts that last, they must be files you can control, in formats that are easy to retrieve and read. Obsidian gives you that freedom.

The following is in no way dogmatic, just one example of how you can use Obsidian. Take the parts you like.

## Get started
1. [Download the vault](https://github.com/kepano/kepano-obsidian/archive/refs/heads/main.zip) or clone it from [the Github repo](https://github.com/kepano/kepano-obsidian)
2. Unzip the `.zip` file to a folder of your choosing
3. In Obsidian open the folder as a vault

## Theme and related tools

- My theme [Minimal](https://stephango.com/minimal)
- My [web clipper](https://stephango.com/obsidian-web-clipper) to save articles and pages from the web
- [Obsidian Sync](https://obsidian.md/sync) to sync notes between my desktop, phone and tablet

## Plugins
Some of my templates depend on plugins:

- [Dataview](https://github.com/blacksmithgu/obsidian-dataview) for overview notes
- [Leaflet](https://github.com/javalent/obsidian-leaflet) for maps

## Folders
I use very few folders. I avoid folders because many of my entries belong to more than one area of thought. My system is oriented towards speed and laziness. I don’t want the overhead of having to consider where something should go.

My personal notes are in the root of my vault. These are my journal entries, essays, [evergreen](https://stephango.com/evergreen-notes) notes, and personal ideas. If a note is in the root I know it’s something I came up with. I do not use the file explorer much for navigation, instead I navigate mostly using the quick switcher or clicking links.

If you want to use this vault as a starting point the Categories and Templates folders contain everything you need.

The folders I use:

- **Attachments** for images, audio, videos, PDFs, etc.
- **Clippings** for articles and web pages captured with my web clipper written by other people.
- **Daily** for my daily notes, all named YYYY-MM-DD.md.
- **References** for anything that refers to something that exists outside of my vault, e.g. books, movies, places, people, podcasts, etc.
- **Templates** for templates. In my real personal vault the “Templates” folder is nested under “Meta” which also contains my personal style guide and other random notes about the vault.

The folders I don’t use, but have created here for the sake of clarity. The notes in these folders would be in the root of my personal vault:
- **Categories** contains top-level overviews of notes per category (e.g. books, movies, podcasts, etc).
- **Notes** contains example notes.


## Structure, categories, and tags
My notes are primarily organized using the category property. Categories are always links which makes it easy to get back to my top-level overviews. Some other rules I follow in my vault:

- Avoid splitting content into multiple vaults.
- Avoid folders for organization.
- Avoid non-standard Markdown.
- Always pluralize categories and tags.
- Use `YYYY-MM-DD` dates everywhere.

Having a [consistent style](https://stephango.com/style) collapses hundreds of future decisions into one, and gives me focus. I always pluralize tags so I never have to wonder what to name new tags. Choose the rules that feel comfortable to you.

## Templates and properties

Almost every note I create starts from a [template](https://github.com/kepano/kepano-obsidian/tree/main/Templates). I use templates heavily because they allow me to lazily add information that will help me find the note later. I have a template for every category with properties at the top, to capture data such as:

- Dates — created, start, end, published
- People — author, director, artist, cast, host, guests
- Themes — grouping by genre, type, topic, related notes
- Locations — neighborhood, city, coordinates
- Ratings — more on this below

A few rules I follow for properties:
- Property names and values should aim to be reusable across categories. This allows me to find things across categories, e.g. genre is shared across all media types, which means I can see an archive of Sci-fi books, movies and shows in one place.
- Templates should aim to be composable, e.g. Person and Author are two different templates that can be added to the same note.
- Short property names are faster to type, e.g. start instead of startdate.
- Default to list type properties instead of text if there is any chance it might contain more than one link or value in the future.

The [.obsidian/types.json](https://github.com/kepano/kepano-obsidian/blob/main/.obsidian/types.json) file lists which properties are assigned to which types (i.e. date, number, text, etc).

## Rating system
Anything with a rating uses an integer from 1 to 7:

- 7 — Perfect, must try, life-changing, go out of your way to seek this out
- 6 — Excellent, worth repeating
- 5 — Good, don’t go out of your way, but enjoyable
- 4 — Passable, works in a pinch
- 3 — Bad, don’t do this if you can
- 2 — Atrocious, actively avoid, repulsive
- 1 — Evil, life-changing in a bad way

Why this scale? I like rating out of 7 better than 4 or 5 because I need more granularity at the top, for the good experiences, and 10 is too granular.

## Publishing to the web
This site is written, edited, and published directly from Obsidian. To do this, I break one of my rules listed above — I have a separate vault for my site. I use a static site generator called [Jekyll](https://jekyllrb.com/) to automatically compile my notes into a website and convert them from Markdown to HTML.

My publishing flow is easy to use, but a bit technical to set up. This is because I like to have full control over every aspect of my site’s layout. If you don’t need full control you might consider [Obsidian Publish](https://obsidian.md/publish) which is more user-friendly, and what I use for my [Minimal documentation site](https://minimal.guide/publish/download).

For this site, I push notes from Obsidian to a GitHub repo using the [Obsidian Git](https://obsidian.md/plugins?id=obsidian-git) plugin. The notes are then automatically compiled using [Jekyll ](https://jekyllrb.com/)with my web host [Netlify](https://www.netlify.com/). I also use my [Permalink Opener](https://stephango.com/permalink-opener) plugin to quickly open notes in the browser so I can compare the draft and live versions.

The color palette is [Flexoki](https://stephango.com/flexoki), which I created for this site. My Jekyll template is not public, but you can get similar results from [this template](https://github.com/maximevaillancourt/digital-garden-jekyll-template) by Maxime Vaillancourt. There are also many alternatives to Jekyll you can use to compile your site such as [Quartz](https://quartz.jzhao.xyz/), [Astro](https://astro.build/), [Eleventy](https://www.11ty.dev/), and [Hugo](https://gohugo.io/).

:::info
From [Obsidian Vault Template](https://stephango.com/vault)
:::