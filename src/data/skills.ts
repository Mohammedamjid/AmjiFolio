import { Skill } from '../types';

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML', icon: 'html', proficiency: 90, category: 'frontend' },
  { name: 'CSS', icon: 'css', proficiency: 85, category: 'frontend' },
  { name: 'JavaScript', icon: 'javascript', proficiency: 80, category: 'frontend' },
  { name: 'React JS', icon: 'react', proficiency: 70, category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'tailwind', proficiency: 75, category: 'frontend' },
  { name: 'Bootstrap', icon: 'bootstrap', proficiency: 85, category: 'frontend' },

   // Tools
  { name: 'Git', icon: 'git', proficiency: 75, category: 'tools' },
  { name: 'VS Code', icon: 'vscode', proficiency: 85, category: 'tools' },
  { name: 'AWS', icon: 'aws', proficiency: 60, category: 'tools' },
  { name: 'MS Office', icon: 'ms office', proficiency: 80, category: 'tools' },
  { name: 'Figma', icon: 'figma', proficiency: 60, category: 'tools' },
  
  // Backend
  { name: 'Node.js', icon: 'nodejs', proficiency: 65, category: 'backend' },
  { name: 'Express.js', icon: 'express', proficiency: 60, category: 'backend' },
  { name: 'RESTful APIs', icon: 'restful api', proficiency: 70, category: 'backend' },

  // Database
  { name: 'MySQL', icon: 'mysql', proficiency: 80, category: 'database' },
  { name: 'MongoDB', icon: 'mongo db', proficiency: 75, category: 'database' },
  
];