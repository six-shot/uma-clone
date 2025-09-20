import React from "react";
import { Icon1, Icon3, Icon4, Icon5, Icon6, Icon8 } from "./ui/icons";
import { Icon2, Icon7 } from "./ui/icons";
import { IoArrowBack } from "react-icons/io5";

// Define the project type
interface Project {
  id: number;
  icon: React.ComponentType;
  title: string;
  size: "small" | "medium" | "large";
}

// Project data array
const projectsData: Project[] = [
  {
    id: 1,
    icon: Icon1,
    title: "Across",
    size: "large", // for the 2x2 grid items
  },
  {
    id: 2,
    icon: Icon2,
    title: "Poly Market",

    size: "large",
  },
  {
    id: 3,
    icon: Icon3,
    title: "Story Protocol",
    size: "small",
  },
  {
    id: 4,
    icon: Icon4,
    title: "Rated",

    size: "medium",
  },
  {
    id: 5,
    icon: Icon5,
    title: "Shapeshift",

    size: "small",
  },
  {
    id: 6,
    icon: Icon6,
    title: "Predict.fun",
    size: "small",
  },
  {
    id: 7,
    icon: Icon7,
    title: "Snapshot",
    size: "small",
  },
  {
    id: 8,
    icon: Icon8,
    title: "Sherlock",
    size: "small",
  },
];

// Project Card Component
const ProjectCard = ({
  project,
  height,
}: {
  project: Project;
  height: string;
}) => {
  const IconComponent = project.icon;

  return (
    <div
      className={`w-full ${height} border border-[#AFAEB2] flex flex-col justify-center items-center relative group hover:border-red-500 transition-all duration-300 cursor-pointer`}
    >
      <div className="group-hover:-translate-y-2 transition-transform duration-300 project-icon-hover">
        <IconComponent />
      </div>

      {/* Text that appears under icon on hover */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center"
        style={{ bottom: "20%" }}
      >
        <h3 className="text-[#FF4D4D] uppercase text-nowrap">
          {project.title}
        </h3>
      </div>

      {/* Arrow icon in top right */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-6 h-6 flex justify-center items-center bg-red-500 rounded-[6px]">
          <IoArrowBack className="text-white text-xl rotate-150" />
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  // Separate projects by size for different grid layouts
  const largeProjects = projectsData.filter(
    (project) => project.size === "large"
  );
  const otherProjects = projectsData.filter(
    (project) => project.size !== "large"
  );

  return (
    <div className="md:pt-[128px] md:pb-[128px] pt-[92px] pb-[128px] lg:px-0 px-4">
      <div className="max-w-[1148px] mx-auto">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
          <div className="order-2 md:order-1">
            {/* Large projects grid (2x2) */}
            <div className="grid grid-cols-2 h-[280px]">
              {largeProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  height="h-full"
                />
              ))}
            </div>

            {/* Other projects grid (3 columns) */}
            <div className="grid grid-cols-3">
              {otherProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  height={project.size === "medium" ? "h-full" : "h-[187px]"}
                />
              ))}
            </div>
          </div>
          <div className="flex md:justify-end md:px-[50px] px-0 order-1 md:order-2">
            {" "}
            <h2 className="text-[36px] lg:text-6xl  text-[#272528] ">
              Projects built <br className="md:flex hidden" /> with the OO
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
