# Silas HAKUZWIMANA — Personal Portfolio & CV

> Full-Stack Software Engineer · Network Infrastructure Specialist · UR-CST Year III

---

## Overview

This repository contains the complete personal branding assets for **Silas HAKUZWIMANA** — a dual-domain engineer specializing in full-stack software development and Cisco-certified enterprise network infrastructure (CCNA I–III).

The project includes:

- A fully engineered single-page **portfolio website** (HTML/CSS/JS)
- A professionally formatted **CV** (`.docx`)

---

## Repository Structure

```
/
├── index.html                    # Single-page portfolio website
├── Silas_HAKUZWIMANA_CV.docx     # Professional CV (Word format)
└── README.md                     # This file
```

---

## Portfolio Website (`index.html`)

A dark-themed, single-page portfolio built with vanilla HTML, CSS, and JavaScript. No frameworks or build tools required — open directly in any browser.

### Sections

| Section          | Description                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------- |
| **Hero**         | Headline, tagline, stats strip (5 projects, 95% success rate, CCNA I–III, 3× capacity gains)      |
| **About**        | Background narrative connecting teaching, Class Rep, and engineering identity                     |
| **Stack**        | 6-card technical skills grid across Frontend, Backend, Networking, DevOps, Data, and Architecture |
| **Projects**     | 5 deployed solutions with impact metrics                                                          |
| **Case Studies** | Tabbed deep-dives: OTS, GS Mareba IMS, and Enterprise Network Audit                               |
| **Contact**      | Email and social links                                                                            |

### Design System

| Token         | Value             | Usage                   |
| ------------- | ----------------- | ----------------------- |
| Background    | `#0a0c0f`         | Page base               |
| Surface       | `#1a2233`         | Cards                   |
| Accent Green  | `#00e5a0`         | Primary CTA, highlights |
| Accent Blue   | `#0066ff`         | Networking domain       |
| Accent Orange | `#ff6b35`         | Data domain             |
| Heading Font  | Syne (800)        | All display text        |
| Body Font     | DM Sans (300/400) | Prose                   |
| Mono Font     | JetBrains Mono    | Labels, tags, badges    |

### Customization Checklist

Before deploying, update the following in `index.html`:

- [ ] Replace `silas.hakuzwimana@ur.ac.rw` with your real email address
- [ ] Replace `#` hrefs on GitHub and LinkedIn social links
- [ ] Update the `Download CV` link to point to your hosted `.docx` or `.pdf`

### Deployment

The portfolio is a single static HTML file. Deploy to any static host:

```bash
# Netlify (drag & drop index.html into app.netlify.com)
# Vercel
npx vercel deploy index.html

# GitHub Pages
# Push index.html to a repo, enable Pages in Settings → Pages
```

---

## CV (`Silas_HAKUZWIMANA_CV.docx`)

A structured, ATS-compatible Word document generated programmatically using the `docx` npm package.

### CV Sections

1. Name, tagline & contact bar
2. Professional Summary
3. Technical Skills (4-column table)
4. Projects & Engineering Impact (5 projects)
5. Professional Experience
6. Education & Certifications (CCNA I–III table)
7. Key Achievements
8. Languages

### Customization Checklist

- [ ] Update email address in the contact bar
- [ ] Add LinkedIn profile URL
- [ ] Add GitHub profile URL
- [ ] Verify date ranges on experience entries
- [ ] Export to PDF before sending (File → Save As → PDF in Word or LibreOffice)

### Regenerating the CV

The CV is generated from `/generate_cv.js`. To regenerate after edits:

```bash
npm install -g docx
node generate_cv.js
# Output: Silas_HAKUZWIMANA_CV.docx
```

---

## Tech Stack (This Project)

| Layer         | Technology                                   |
| ------------- | -------------------------------------------- |
| Portfolio UI  | HTML5, CSS3 (custom properties), Vanilla JS  |
| Fonts         | Google Fonts (Syne, DM Sans, JetBrains Mono) |
| Animations    | CSS `@keyframes` + `IntersectionObserver`    |
| CV Generation | Node.js · `docx` npm package                 |
| Validation    | `docx` schema validator                      |

---

## Projects Featured

| #   | Project                       | Domain          | Stack                       |
| --- | ----------------------------- | --------------- | --------------------------- |
| 01  | Online Transport System (OTS) | Logistics       | Laravel, Vue.js, PostgreSQL |
| 02  | GS Mareba IMS                 | Education       | PHP, MySQL, Bootstrap       |
| 03  | Mass Reader Scheduler         | Community       | Modern Web, Secure APIs     |
| 04  | iTechnology System            | Marketplace     | Modular Architecture        |
| 05  | Nyina Wa Jambo                | Media / Culture | CMS, Metadata Engine        |

---

## Contact

**Silas HAKUZWIMANA**  
Kigali, Rwanda · University of Rwanda — CST  
hakusilas@gmail.com || hakuzwimana_223001019@stud.ur.ac.rw

---

_Built with precision. Engineered for impact._
