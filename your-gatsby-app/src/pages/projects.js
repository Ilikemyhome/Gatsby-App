import * as React from "react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "React Router Blog",
      description: "A small blog app with dynamic routes.",
    },
    {
      title: "Next.js Landing Page",
      description: "A simple landing page built with Next.js.",
    },
    {
      title: "Gatsby Portfolio",
      description: "This portfolio site built with Gatsby.",
    },
  ];

  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>My Projects</h1>
      <p>Here are a few things I’ve built recently:</p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {projects.map((p) => (
          <li
            key={p.title}
            style={{
              marginBottom: "24px",
              padding: "16px",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          >
            <h2 style={{ margin: "0 0 8px 0" }}>{p.title}</h2>
            <p style={{ margin: 0 }}>{p.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}