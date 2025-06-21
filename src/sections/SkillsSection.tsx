import { skills } from '../data/skills';
import SectionHeading from '../components/SectionHeading';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiMongodb, SiMysql, SiFigma, SiAmazon, SiNodedotjs, SiExpress, SiBootstrap, SiTailwindcss, SiApachenetbeanside, SiGithub } from 'react-icons/si';
import { FileSpreadsheet, Wrench, MonitorSpeakerIcon } from 'lucide-react';

const iconMap: Record<string, JSX.Element> = {
  html: <SiHtml5 className="w-5 h-5 text-orange-500" />,
  css: <SiCss3 className="text-blue-500 w-5 h-5" />,
  javascript: <SiJavascript className="text-yellow-500 w-5 h-5" />,
  react: <SiReact className="text-blue-500 w-5 h-5" />,
  bootstrap: <SiBootstrap className="w-5 h-5 text-purple-500" />,
  tailwind: <SiTailwindcss className="w-5 h-5 text-blue-500" />,
  node: <SiNodedotjs className="w-5 h-5 text-green-500" />,
  express: <SiExpress className="w-5 h-5 text-blue-400" />,
  api: <SiApachenetbeanside className="w-5 h-5 text-blue-400" />,
  mongo: <SiMongodb className="text-green-500 w-5 h-5" />,
  sql: <SiMysql className="text-blue-500 w-5 h-5" />,
  aws: <SiAmazon className="w-5 h-5 text-orange-400" />,
  git: <SiGithub className="w-5 h-5 text-black-500" />,
  figma: <SiFigma className="w-5 h-5 text-pink-500" />,
  vs: <MonitorSpeakerIcon className="w-5 h-5 text-blue-400" />,
  ms: <FileSpreadsheet className="w-5 h-5 text-orange-500" />,
};


const categoryLabels: Record<string, string> = {
  frontend: 'Frontend Development',
  backend: 'Backend Development',
  database: 'Database & Cloud',
  tools: 'Development Tools',
};

const SkillsSection = () => {
  const categories = ['frontend', 'backend', 'database', 'tools'];

  return (
    <section id="skills" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-500 hover:shadow-lg hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }` ">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Skills" subtitle="Technologies I Use" />

        {categories.map((category, index) => {
          const filteredSkills = skills.filter(skill => skill.category === category);
          if (!filteredSkills.length) return null;

          return (
            <div key={index} className="mt-10">
              <h3 className="text-center text-black dark:text-white bg-gray-200 dark:bg-gray-800 w-fit mx-auto px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
                {categoryLabels[category]}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, idx) => (
                  <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md flex items-start space-x-4 border border-gray-300 dark:border-gray-600">
                    <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                      {iconMap[skill.icon] || <Wrench />
                      }
                    </div>
                    <div>
                      <h4 className="text-md font-semibold text-gray-900 dark:text-white">{skill.name}</h4>
                      {skill.description && (
                        <p className="text-sm text-gray-600 dark:text-gray-300">{skill.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
