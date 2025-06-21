export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoLink: string;
};

export type Skill = {
  name: string;
  icon: string;
  description: string;
  category: 'frontend' | 'backend' | 'tools' | 'cloud'  | 'database';
   color?: string;
};

export type NavLink = {
  id: string;
  title: string;
  path: string;
};