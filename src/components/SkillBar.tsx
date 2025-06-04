import React from 'react';
import { Skill } from '../types';

interface SkillBarProps {
  skill: Skill;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
        <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
          {skill.proficiency}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <div
          className="h-2.5 rounded-full transition-all duration-1000 ease-out bg-black dark:bg-red-500"
          style={{
            width: `${skill.proficiency}%`,
            transform: 'translateX(-100%)',
            animation: 'slideIn 1.5s forwards',
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
