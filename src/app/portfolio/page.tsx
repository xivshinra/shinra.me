"use client";
import Image from "next/image";
import Link from "next/link";

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
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SkillSection from "@/components/SkillSection";

// COMPONENT
export default function PortfolioPage() {
  const [projects] = useState(projectDatas);

  return (
    <>
      <div className="mb-8">
        <h2 className="text-xl font-bold">Mes projets</h2>
      </div>
      <div className="grid grid-cols-12 gap-4 lg:gap-6 2xl:gap-8">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="col-span-12 lg:col-span-6 min-h-50 hover:border-gray-100 dark:hover:border-gray-950 hover:shadow-xl transition-all duration-100"
          >
            <CardHeader>
              <h2 className="text-xl font-semibold font-exo">{project.name}</h2>
              <CardAction>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Badge
                      variant="outline"
                      className="cursor-pointer p-2 rounded-full"
                    >
                      <EllipsisVertical />
                    </Badge>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <Link
                          href={`/portfolio/${project.id}`}
                          title="Présentation du projet"
                        >
                          En savoir plus
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Code source
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Démo live
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Copier le lien</DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardAction>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row gap-4">
              <Image
                src={project.imgUrl}
                alt={project.name}
                width={120}
                height={120}
                draggable={false}
                className="mb-2 rounded aspect-square object-cover pointer-events-none"
              />
              <CardDescription className="leading-relaxed">
                {project.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="flex-col items-start gap-4">
              <div className="flex gap-2 lg:gap-4 mb-4">
                {project.technologies.map((technology) => (
                  <Badge
                    key={technology}
                    variant="outline"
                    className="cursor-pointer"
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
                  <Link href={`/portfolio/${project.id}`}>En savoir plus</Link>
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
      <SkillSection />
    </>
  );
}
