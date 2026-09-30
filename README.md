# Mahesh Pujari - Professional Portfolio

This is the source code for my professional engineering portfolio, designed to highlight my experience in Java, Spring Boot, Full Stack Development, and production ERP systems.

## Features

- **Modern Architecture**: Built with Next.js (App Router), TypeScript, and Tailwind CSS.
- **Data-Driven**: All content (experience, projects, skills) is decoupled from UI components into the `src/data/` directory for easy maintainability.
- **Subtle Animations**: Uses Framer Motion for scroll reveals, hover effects, and a responsive experience timeline.
- **Fully Responsive**: Optimized for Mobile, Tablet, and Desktop displays.
- **Premium Design**: Dark engineering aesthetic avoiding generic templates.

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Project Structure

```text
├── src/
│   ├── app/            # Next.js App Router (layout, page, globals.css)
│   ├── components/     # Reusable UI components and page sections
│   └── data/           # Typed data files (profile, experience, skills, etc.)
├── public/             # Static assets (including resume.pdf)
└── README.md
```

## Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Managing Content

To update the portfolio content, you do **not** need to edit the React components. Simply update the files in `src/data/`:
- `profile.ts`: Contact info and about me summary.
- `experience.ts`: Job roles and bullet points.
- `highlights.ts`: Engineering highlights grid.
- `skills.ts`: Technologies used.
- `projects.ts`: Independent projects.

### Updating Your Resume

1. Place your latest resume inside the `public/` folder.
2. Ensure the file is exactly named `resume.pdf`.
3. The "Download Resume" buttons will automatically link to it.

## Deployment (Vercel)

This project is configured to be deployed directly to Vercel with zero configuration.

1. Push this repository to your GitHub account.
2. Log in to [Vercel](https://vercel.com/).
3. Click **Add New Project** and select your GitHub repository.
4. Leave all build settings as default (`npm run build`).
5. Click **Deploy**.

## Author

**Mahesh Pujari**
- [GitHub](https://github.com/maheshpujari0476)
- [LinkedIn](https://www.linkedin.com/in/maheshpujari04/)
