import { Icons } from "@/components/icons";
import { HomeIcon, Lightbulb, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export type IconName =
  | "github"
  | "linkedin"
  | "x"
  | "globe"
  | "email"
  | "youtube"
  | "home"
  | "blog"
  | "ideas"
  | "python"
  | "cpp"
  | "react"
  | "nextjs"
  | "typescript"
  | "nodejs"
  | "postgresql"
  | "docker"
  | "golang"
  | "kubernetes"
  | "java"
  | "zscaler"
  | "aws"
  | "salesforce"
  | "servicenow"
  | "zerotrust";

const iconMap: Record<IconName, React.ComponentType<{ className?: string }>> = {
  github: Icons.github,
  linkedin: Icons.linkedin,
  x: Icons.x,
  globe: Icons.globe,
  email: Icons.email,
  youtube: Icons.youtube,
  home: HomeIcon,
  blog: NotebookIcon,
  ideas: Lightbulb,
  python: Python,
  cpp: Csharp,
  react: ReactLight,
  nextjs: NextjsIconDark,
  typescript: Typescript,
  nodejs: Nodejs,
  postgresql: Postgresql,
  docker: Docker,
  golang: Golang,
  kubernetes: Kubernetes,
  java: Java,
  zscaler: Icons.zscaler,
  aws: Icons.aws,
  salesforce: Icons.salesforce,
  servicenow: Icons.servicenow,
  zerotrust: Icons.zerotrust,
};

export function getIcon(name: string, className?: string): React.ReactNode {
  const Icon = iconMap[name as IconName];
  if (!Icon) return null;
  return <Icon className={className} />;
}
