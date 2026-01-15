"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
// IMPORTS
import { projectDatas } from "@/datas/project-datas";
import { Code, EllipsisVertical, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// COMPONENT
export default function PortfolioPage() {
  const [projects] = useState(projectDatas);

  return (
    <>
      <div className="mb-8">
        <p>Find all my projects</p>
      </div>
      <div className="grid grid-cols-12 gap-4 xl:gap-6 2xl:gap-8">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="col-span-12 xl:col-span-6 min-h-50"
          >
            <CardHeader>
              <h2 className="text-xl font-semibold">{project.name}</h2>
              <CardAction>
                <Badge
                  variant="outline"
                  className="cursor-pointer"
                >
                  <EllipsisVertical />
                </Badge>
              </CardAction>
            </CardHeader>
            <CardContent className="flex gap-4">
              <Image
                src={project.imgUrl}
                alt={project.name}
                width={150}
                height={150}
                className="mb-2 rounded"
              />
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex-col items-start gap-4">
              <div className="flex gap-2">
                {project.technologies.map((technology) => (
                  <Badge
                    key={technology}
                    variant="outline"
                    className="cursor-default"
                  >
                    {technology}
                  </Badge>
                ))}
              </div>
              <ButtonGroup>
                <Button
                  variant="outline"
                  asChild
                >
                  <Link href={`/portfolio/${project.id}`}>View more</Link>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                  >
                    <Code />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                  >
                    <Eye />
                  </Link>
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
