# Gatsby-App

## Overview
This is a simple portfolio website built with Gatsby.
It includes:
- A homepage
- A projects page
- A custom 404 page
The goal of this project is to demonstrate basic Gatsby routing and page creation using the src/pages directory.

## Features
File‑based Routing
Gatsby automatically turns every file in src/pages into a route:
- src/pages/index.js → /
- src/pages/projects.js → /projects
- src/pages/404.js → /* (fallback)
 Simple Project List
The /projects page displays a small list of projects using static data.
 Minimal Styling
Inline styles keep the project clean and easy to understand.


## Running the Project
1. Install dependencies
npm install


2. Start the development server
npm run develop


3. Open the site
http://localhost:8000/


## Pages
Home Page (/)
A simple introduction with a link to the projects page.
Projects Page (/projects)
Displays a list of sample projects:
[
  { title: "React Router Blog", description: "A small blog app with dynamic routes." },
  { title: "Next.js Landing Page", description: "A simple landing page built with Next.js." },
  { title: "Gatsby Portfolio", description: "This portfolio site built with Gatsby." }
]

404 Page
A custom not‑found page required by Gatsby.
