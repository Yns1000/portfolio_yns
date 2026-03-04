# Younes Boughriet - Portfolio

Personal portfolio showcasing projects, experience, and background as an IT & Industrial Engineer. Built with Next.js, Tailwind CSS, Framer Motion, and Sanity.

## Tech Stack

- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Animations: Framer Motion
- Content Management: Sanity CMS
- Internationalization: Native dynamic routing (fr, en, ar)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm package manager

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

The project requires specific environment variables for Sanity and email handling (Resend). Create a `.env.local` file at the root of the project:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
RESEND_API_KEY=your_resend_api_key
```

## Project Structure

- `/app`: Next.js app router configuration, API routing, and language dynamic routes.
- `/components`: Reusable UI components (Hero, About, Experience, Projects, Contact).
- `/lib`: Utility functions and static internationalization dictionaries.
- `/sanity`: Sanity schema definitions, configuration, and Groq queries.
- `/types`: Global TypeScript type definitions.

## Deployment

Optimized for deployment on Vercel. Connect the GitHub repository to a Vercel project, configure the environment variables, and the build will execute automatically :)))))
