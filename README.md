## SEO checklist implemented (Module 1 - Lesson 4)

- **Proper website structure**
  - Clear homepage hub (`index.html`) with consistent navigation to internal pages.
  - Logical internal linking across `about.html`, `skills.html`, `contact.html`.

- **Meta tags optimization**
  - Added/normalized **Title**, **Meta Description**, **Robots meta**, **Canonical**, and **Open Graph / Twitter** tags on all pages.
  - Fixed social preview image URL to use `images/profile.jpg` (was pointing to a non-existent `/profile.jpg`).
  - Ensured each page has exactly one **H1** (inner pages use a styled `.page-title`).

- **Sitemap creation**
  - Updated `sitemap.xml` to use the homepage canonical (`https://jessacadion.netlify.app/`) and included an image entry for the profile photo.

- **Robots**
  - Updated `robots.txt` to point to the correct **HTTPS** sitemap URL.

## Website analysis (Analytics tools)

To measure traffic and SEO performance, connect one of these:

- **Google Analytics (recommended)**
  - Create a GA4 property and get your Measurement ID (looks like `G-XXXXXXX`).
  - Paste the official GA snippet into the `<head>` of each HTML page (or create a shared include if you later move to a templating system).

- **Mixpanel / Keen / Kissmetrics**
  - Create a project and paste their tracking snippet into the `<head>` of each page.

## Broken links checking

Regularly check for 404s and broken internal/external links:

- **Manual**: click through nav + buttons after each update.
- **Automated**: use any link checker (example: online “broken link checker” tools) and fix any dead URLs immediately.