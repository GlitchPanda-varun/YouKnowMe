# 📝 Portfolio Content Editing Guide

This guide tells you exactly which file and field to edit to change any content on your portfolio website.

---

## 🗂️ Main Content File

**All portfolio content lives in a single file:**

```
src/data/resume.tsx
```

Open this file to edit any section below.

---

## Section-by-Section Editing Reference

### 👤 Profile / Hero (Sidebar)

| Field | What it controls | Example |
|-------|-----------------|---------|
| `name` | Your display name | `"Varun Pandey"` |
| `gamerTag` | Tag shown below name (e.g. @GlitchPanda) | `"GlitchPanda"` |
| `description` | One-line tagline below your name | `"Building at the intersection of tech and management"` |
| `avatarUrl` | Profile picture (path relative to `/public`) | `"/me.png"` |
| `url` | Your website URL (used for SEO) | `"https://varunpandey.dev"` |
| `location` | Your location | `"India"` |

**To change your profile picture:** Replace the file at `public/me.png` with your own image (keep the same filename, or update `avatarUrl`).

---

### 📖 About Section

| Field | What it controls |
|-------|-----------------|
| `summary` | The paragraph in the "About" section. Supports **Markdown** (bold, italic, links). |

**Example:**
```tsx
summary: "I'm a developer and builder with a strong foundation in **computer science**..."
```

---

### 🛠️ Skills Section

| Field | What it controls |
|-------|-----------------|
| `skills` | Array of skill objects with `name` |

**Example:**
```tsx
skills: [
  { name: "C++" },
  { name: "React" },
  { name: "Next.js" },
  // Add more here...
],
```

---

### 💼 Positions of Responsibility (Work/Experience)

| Field | What it controls |
|-------|-----------------|
| `work` | Array of work experience objects |

**Each work entry has:**
```tsx
{
  company: "XYZ Tech Club",        // Organization name
  href: "https://...",              // Link to org website
  badges: [],                       // Optional badges (not currently shown)
  location: "University",           // Location
  title: "Technical Lead",          // Your role/title
  logoUrl: "/company-logo.png",    // Logo (place in /public folder)
  start: "2024",                    // Start date
  end: "Present",                   // End date (or "Present")
  description: "Led the technical team..." // Description (shown on expand)
}
```

**To add a company logo:** Place the image in the `public/` folder and set `logoUrl` to `"/filename.png"`.

---

### 🚀 Projects Section

| Field | What it controls |
|-------|-----------------|
| `projects` | Array of project objects |

**Each project entry has:**
```tsx
{
  title: "Project Name",
  href: "https://project-url.com",    // Main project link
  dates: "2024",                       // Year/date
  active: true,                        // true = active, false = archived
  description: "A description...",     // Supports Markdown
  technologies: ["Next.js", "React"],  // Tech tags shown as badges
  links: [                             // Action buttons on the card
    {
      type: "Website",
      href: "https://...",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Source",
      href: "https://github.com/...",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/project-screenshot.png",    // Project image (place in /public)
  video: "",                           // Or a video URL instead of image
}
```

---

### 🎓 Education Section

| Field | What it controls |
|-------|-----------------|
| `education` | Array of education objects |

**Each education entry has:**
```tsx
{
  school: "MMMUT, Gorakhpur",
  href: "https://mmmut.ac.in",        // Link to institution
  degree: "B.Tech — Computer Science", // Your degree
  logoUrl: "/mmmut-logo.png",         // Logo (place in /public)
  start: "2022",
  end: "2026",
}
```

---

### 🎯 Interests & Hobbies

| Field | What it controls |
|-------|-----------------|
| `interests` | Simple array of strings |

**Example:**
```tsx
interests: [
  "Gaming",
  "Competitive Programming",
  "Reading about Business Strategy",
],
```

---

### 💻 Competitive Programming

| Field | What it controls |
|-------|-----------------|
| `competitiveProgramming` | Array of platform objects |

**Each entry has:**
```tsx
{
  platform: "Codeforces",
  handle: "your_handle",
  url: "https://codeforces.com/profile/your_handle",
}
```

---

### 🏆 Events & Experiences (Hackathons)

| Field | What it controls |
|-------|-----------------|
| `hackathons` | Array of event/hackathon objects |

**Each entry has:**
```tsx
{
  title: "AI Summit",
  dates: "2024 — Delhi",
  location: "Delhi",
  description: "Attended the AI Summit...",
  image: "/event-photo.png",    // Optional image (place in /public)
  links: [],                     // Optional links
}
```

---

### 📬 Contact Section

| Field | What it controls |
|-------|-----------------|
| `contact.email` | Your email address |
| `contact.tel` | Your phone (currently empty) |
| `contact.social` | Social media links |

**Social links structure:**
```tsx
social: {
  GitHub: {
    name: "GitHub",
    url: "https://github.com/YOUR_USERNAME",
    icon: Icons.github,
    navbar: true,  // true = show in top navbar dock
  },
  // Same pattern for LinkedIn, X, Instagram, email...
}
```

---

### 🧭 Top Navbar Links

| Field | What it controls |
|-------|-----------------|
| `navbar` | Array of navigation items in the top dock |

**Each entry has:**
```tsx
{
  href: "/",                    // URL or anchor like "/#about"
  icon: HomeIcon,               // Lucide icon component
  label: "Home",                // Tooltip label
}
```

---

## 🖼️ Where to Put Images

All images go in the **`public/`** folder at the project root:

```
public/
├── me.png              ← Your profile picture
├── company-logo.png    ← Company/org logos
├── project-screenshot.png ← Project images
└── event-photo.png     ← Event/hackathon images
```

Reference them in the data file as `"/filename.png"` (with leading slash, no `public/` prefix).

---

## 📁 Other Files You Might Want to Edit

| File | Purpose |
|------|---------|
| `src/data/resume.tsx` | **All content data** (this is the main one!) |
| `src/components/section/contact-section.tsx` | Contact section layout & text |
| `src/components/section/projects-section.tsx` | Projects section heading & description |
| `src/components/section/hackathons-section.tsx` | Events section heading & description |
| `src/app/globals.css` | Global styles & theme colors |
| `src/app/layout.tsx` | SEO metadata, site title, description |
| `public/favicon.ico` | Browser tab icon |

---

## ⚡ Quick Start

1. Open `src/data/resume.tsx`
2. Find the section you want to edit (search for the field names above)
3. Change the values
4. Save the file
5. Your dev server will auto-refresh with the changes!

> **Tip:** Search for `YOUR_HANDLE` or `PLACEHOLDER` in the file to find all placeholder content that needs to be replaced.
