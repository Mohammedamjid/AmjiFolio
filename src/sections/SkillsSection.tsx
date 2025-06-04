import React, { useRef } from 'react';
import { useIsVisible } from '../utils/hooks';
import SectionHeading from '../components/SectionHeading';
import { Code2, Database, Wrench, Server } from 'lucide-react';
import { skills } from '../data/skills';

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(sectionRef);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code2 className="w-8 h-8 text-blue-600 dark:text-red-400" />,
      skills: skills.filter(skill => skill.category === 'frontend'),
      bgClass: 'bg-blue-50 dark:bg-red-900/20'
    },
    {
      title: 'Development Tools',
      icon: <Wrench className="w-8 h-8 text-blue-600 dark:text-red-400" />,
      skills: skills.filter(skill => skill.category === 'tools'),
      bgClass: 'bg-blue-50 dark:bg-red-900/20'
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-8 h-8 text-blue-600 dark:text-red-400" />,
      skills: skills.filter(skill => skill.category === 'backend'),
      bgClass: 'bg-blue-50 dark:bg-red-900/20'
    },
    {
      title: 'Database',
      icon: <Database className="w-8 h-8 text-blue-600 dark:text-red-400" />,
      skills: skills.filter(skill => skill.category === 'database'),
      bgClass: 'bg-blue-50 dark:bg-red-900/20'
    }
  ];


  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          title="My Skills"
          subtitle="Technologies and tools I work with"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`rounded-lg p-6 ${category.bgClass} transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-white dark:bg-gray-700 shadow-md mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div
                        className="h-2 rounded-full transition-all duration-1000 bg-gray-600 dark:bg-red-500"
                        style={{
                          width: isVisible ? `${skill.proficiency}%` : '0%'
                        }}
                      ></div>
                  </div>
                  </div>
                ))}
            </div>
            </div>
          ))}
      </div>
    </div>
    </section >
  );
};

export default SkillsSection;