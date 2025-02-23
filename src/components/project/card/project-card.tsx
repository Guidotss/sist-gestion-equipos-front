import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";



export const ProjectCard = ({ project }: { project: any }) => {
  return (
    <Link href="/projects/mobile-app">
      <Card className="hover:bg-muted/50 transition-colors">
        <CardHeader className="pb-4">
          <div>
            <CardTitle>{project.name}</CardTitle>
            <CardDescription>{project.description as string}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">
                  {project.progress as number}%
                </span>
              </div>
              <Progress value={project.progress as number} />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                <Avatar className="border-2 border-background">
                  <AvatarImage
                    src="/placeholder.svg?height=32&width=32"
                    alt="Team member"
                  />
                  <AvatarFallback>C</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-background">
                  <AvatarImage
                    src="/placeholder.svg?height=32&width=32"
                    alt="Team member"
                  />
                  <AvatarFallback>D</AvatarFallback>
                </Avatar>
              </div>
              <span className="text-sm text-muted-foreground">
                Due {project.dueDate as string}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
