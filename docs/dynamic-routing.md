# Dynamic Routing in Next.js

## What is it?

Dynamic routing lets one file handle many URLs by using a variable segment in the folder name.

Instead of creating `app/writing/minimax/page.tsx`, `app/writing/homelab/page.tsx` etc. — you create one file:

```
app/writing/[slug]/page.tsx
```

Next.js captures whatever is in that URL position and gives it to your component as `params.slug`.

---

## How it works

```
/writing/minimax      → params.slug = "minimax"
/writing/homelab      → params.slug = "homelab"
/writing/anything     → params.slug = "anything"
```

One file, infinite pages.

---

## Basic example

```tsx
// app/writing/[slug]/page.tsx

export default function PostPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Post: {params.slug}</h1>
    </div>
  )
}
```

This alone makes every `/writing/*` URL render something.

---

## Connecting it to real content

The full blog flow looks like this:

### 1. Your markdown file
```
content/posts/minimax.md
```
```md
---
title: "Minimax"
date: "April 20"
description: "How to use minimax in coding"
---

Your post content goes here...
```

The `---` block at the top is called **frontmatter** — it holds metadata about the post.

### 2. Reading files on the writing page

Instead of a hardcoded array, you read the `content/posts/` folder and build the list automatically:

```tsx
import fs from "fs"
import path from "path"
import matter from "gray-matter"

export default function WritingPage() {
  const folder = path.join(process.cwd(), "content/posts")
  const files = fs.readdirSync(folder)

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "")
    const raw = fs.readFileSync(path.join(folder, filename), "utf-8")
    const { data } = matter(raw)
    return { slug, ...data }
  })

  return (
    <div>
      {posts.map((post) => (
        <a key={post.slug} href={`/writing/${post.slug}`}>
          <h2>{post.title}</h2>
          <p>{post.date}</p>
        </a>
      ))}
    </div>
  )
}
```

### 3. Rendering the post

```tsx
// app/writing/[slug]/page.tsx
import fs from "fs"
import path from "path"
import matter from "gray-matter"

export default function PostPage({ params }: { params: { slug: string } }) {
  const filepath = path.join(process.cwd(), "content/posts", `${params.slug}.md`)
  const raw = fs.readFileSync(filepath, "utf-8")
  const { data, content } = matter(raw)

  return (
    <article>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <div>{content}</div>
    </article>
  )
}
```

---

## Key concepts to know

| Concept | What it means |
|---|---|
| `[slug]` | A dynamic segment — the value comes from the URL |
| `params` | The object Next.js passes to your page with the captured values |
| `frontmatter` | Metadata at the top of a markdown file between `---` |
| `gray-matter` | A library that parses frontmatter from markdown files |
| `fs.readdirSync` | Node.js method to list files in a folder |

---

## Assignment

Work through these in order — each one builds on the last.

### Level 1 — Make the links work
In `app/writing/page.tsx`, update your `PreviewFile` cards so they are wrapped in a `Link` that points to `/writing/{slug}`.

Replace the `id` field in your array with a `slug` string:
```tsx
{ slug: "minimax", title: "Minimax", ... }
```

### Level 2 — Create the dynamic route
Create the file `app/writing/[slug]/page.tsx`.
For now just render `params.slug` on the page to confirm routing works.
Visit `/writing/minimax` in your browser and see the slug appear.

### Level 3 — Create real markdown files
Create a `content/posts/` folder at the root of your project.
Move your existing post content into `content/posts/minimax.md`.
Add proper frontmatter (title, date, description) at the top.

### Level 4 — Read files instead of hardcoding
Install `gray-matter`:
```
npm install gray-matter
```
Update `app/writing/page.tsx` to read from `content/posts/` using `fs` instead of the hardcoded array.

### Level 5 — Render the post content
Update `app/writing/[slug]/page.tsx` to read the matching markdown file and display the title, date, and body content.

---

## What to google when you get stuck

- "Next.js dynamic routes app router"
- "gray-matter frontmatter parsing"
- "Next.js fs readFileSync server component"
