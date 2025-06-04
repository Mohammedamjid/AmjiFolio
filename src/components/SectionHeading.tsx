import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  alignment = 'center' 
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <div className={`mb-12 ${alignmentClasses[alignment]}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white relative inline-block">
        {title}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-700 to-red-600 transform -translate-y-2"></span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;