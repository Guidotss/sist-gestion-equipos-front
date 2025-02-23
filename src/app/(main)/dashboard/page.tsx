import {
  SearchProjects,
  NewProjectButton,
  ProjectGrid,
} from "@/components/project";
export default function DashboardPage() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <div className="flex items-center gap-4">
          <SearchProjects />
          <NewProjectButton />
        </div>
      </div>
      <ProjectGrid />
    </div>
  );
}
