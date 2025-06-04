import React, { useRef } from 'react';
import { useIsVisible } from '../utils/hooks';
import SectionHeading from '../components/SectionHeading';
import { Code, Server, Layers, GraduationCap, Code2, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(sectionRef);

// Education

  const education = [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Anna University",
      duration: "2020 - 2024",
      percentage: "80.5%",
      description: "Focused on web technologies, algorithms, and software engineering principles.",
      icon: <GraduationCap className="w-6 h-6 text-blue-600 dark:text-red-400" />
    },
    {
      degree: "HSC - MPC",
      institution: "Tamilnadu State Board",
      duration: "2018 - 2020",
      percentage: "70%",
      description: "Completed Higher Secondary with emphasis on Mathematics, Physics, and Chemistry (MPC)",
      icon: <Code2 className="w-6 h-6 text-blue-600 dark:text-red-400" />
    },
    {
      degree: "SSLC",
      institution: "Tamilnadu State Board",
      duration: "2017 - 2018",
      percentage: "81%",
      description: "Completed SSLC with a strong foundation in core subjects including Mathematics, Science, and Social Studies",
      icon: <Code2 className="w-6 h-6 text-blue-600 dark:text-red-400" />
    }
  ];

  const certifications = [
    {
      name: "Python for Data Science",
      issuer: "IIT Madras Through NPTEL",
      description: "Completed a comprehensive program covering Data manipulation, analysis, and visualization techniques.",
      icon: <Award className="w-6 h-6 text-blue-600 dark:text-red-400" />
    },
    {
      name: "Software Testing",
      issuer: "IIT Kharagpur Through NPTEL",
      description: "Gained basics of test design, validation, debugging, and quality assurance.",
      icon: <Award className="w-6 h-6 text-blue-600 dark:text-red-400" />
    },
    {
      name: "Full Stack with Python Programming",
      issuer: "Guvi",
      description: "Learned to build full-stack web apps using Python,Deep Dive into JavaScript, Comprehensive training in React.js and related technologies. including fetching real-time data via APIs.",
      icon: <Award className="w-6 h-6 text-blue-600 dark:text-red-400" />
    },
    {
      name: "AWS Cloud Practitioner Essentials",
      issuer: "AWS",
      description: "Gained foundational knowledge in cloud computing, core AWS services, security, and cloud architecture best practices.",
      icon: <Award className="w-6 h-6 text-blue-600 dark:text-red-400" />
    }
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8 text-blue-600 dark:text-red-400" />,
      title: 'Web Development',
      description: 'Creating responsive and performant websites using modern frameworks and best practices.'
    },

    {
      icon: <Server className="w-8 h-8 text-blue-600 dark:text-red-400" />,
      title: 'API Integration',
      description: 'Connecting your application to third-party services and APIs for enhanced functionality.'
    },
    {
      icon: <Layers className="w-8 h-8 text-blue-600 dark:text-red-400" />,
      title: 'Responsive Design',
      description: 'Building websites that work seamlessly across all devices and screen sizes.'
    }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 dark:bg-blue-900/20 rounded-bl-full opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-red-100 dark:bg-red-900/20 rounded-tr-full opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* About Me */}
        <SectionHeading
          title="About Me"
          subtitle="Get to know more about me and what I do"
        />
      </div>
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          A passionate Web Developer based in TamilNadu, IND
        </h3>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          I'm a web developer with a passion for creating beautiful, functional,
          and user-centered digital experiences. I am always looking to learn new
          technologies and stay updated with the latest industry trends.
        </p>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          With 1+ years of experience in web development, I am dedicated to
          delivering high-quality solutions that meet client needs and exceed
          expectations. I believe in clean code, attention to detail, and
          continuous improvement.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-gray-600 dark:text-gray-400">
              <strong className="text-gray-900 dark:text-white">Name:</strong> Mohammed Amjid S
            </p>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-400">
              <strong className="text-gray-900 dark:text-white">Email:</strong> mohammedamjid1217@gmail.com
            </p>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-400">
              <strong className="text-gray-900 dark:text-white">Location:</strong> Gudalur, TN, IND
            </p>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-400">
              <strong className="text-gray-900 dark:text-white">Available:</strong> Freelance
            </p>
          </div>
        </div>
      </div>

      {/* Education & Certifications */}
      <div className="mt-20">
        <SectionHeading
          title="Education"
          subtitle="My academic background and learning journey"
        />


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 p-2">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-black-400 dark:text-red-400 flex items-center gap-2">
              <GraduationCap className="text-black-400 dark:text-red-400 w-6 h-6" />
              Qualification
            </h2>
            {education.map((edu, index) => (
              <div key={index} className="bg-[#334155] p-4 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                <p className="text-blue-300 text-sm">{edu.institution}</p>
                <p className="text-white font-semibold text-sm">{edu.percentage}</p>
                <p className="text-gray-400 text-sm mb-2">{edu.duration}</p>
                <p className="text-gray-300 text-sm">{edu.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-black-400 dark:text-red-400 flex items-center gap-2">
              <Award className="text-black-400 dark:text-red-400 w-6 h-6" />
              Certifications
            </h2>
            {certifications.map((cert, index) => (
              <div key={index} className="bg-[#334155] p-4 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
                <p className="text-blue-300 text-sm">{cert.issuer}</p>
                <p className="text-gray-300 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mt-20">
          <SectionHeading
            title="What I Do"
            subtitle="Here are the services I offer"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-500 hover:shadow-lg hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="mb-4">{service.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
