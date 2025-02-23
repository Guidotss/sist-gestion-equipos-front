"use client";
import { ProjectCard } from "@/components/project/card/project-card";
export function ProjectGrid() {
  const projects = [
    {
      id: 1,
      name: "Project 1",
      description: "Description 1",
      progress: 50,
      dueDate: "2024-01-01",
      teamMembers: [
        {
          id: 1,
          name: "John Doe",
        },
      ],
    },
    {
      id: 2,
      name: "Project 2",
      description: "Description 2",
      progress: 50,
      dueDate: "2024-01-01",
      teamMembers: [
        {
          id: 1,
          name: "John Doe",
        },
      ],
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
