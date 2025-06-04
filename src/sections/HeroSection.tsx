import React, { useEffect, useRef } from 'react';
import { ChevronDown, Linkedin, Mail, } from 'lucide-react';
import Button from '../components/Button';
import AmjidImage from '../assets/Amjid_cp.jpg';
import myPdf from '../assets/MohammedAmjid_Resume.pdf';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();

      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      heroRef.current.style.setProperty('--x-offset', `${x * 20}px`);
      heroRef.current.style.setProperty('--y-offset', `${y * 20}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16"
      style={{
        backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(30, 58, 138, 0.15), transparent), radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.15), transparent)'
      }}
    >
      <div
        className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5"
        style={{
          backgroundImage: `linear-gradient(to right, #1e3a8a1a 1px, transparent 1px), linear-gradient(to bottom, #1e3a8a1a 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>

      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/20 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-red-600/20 dark:bg-red-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
            <span className="block">Hi, I'm</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-red-600">
              Mohammed Amjid
            </span>
          </h1>

          <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-8">
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-600 to-red-600 rounded-full opacity-20 dark:opacity-30 blur-lg"
              style={{
                transform: 'translate(var(--x-offset, 0), var(--y-offset, 0))',
                transition: 'transform 0.1s ease-out'
              }}
            ></div>

            <div
              className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg"
              style={{
                transform: 'translate(calc(var(--x-offset, 0) * -0.5), calc(var(--y-offset, 0) * -0.5))',
                transition: 'transform 0.1s ease-out'
              }}
            >
             <img src={AmjidImage} alt="My Image" />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300 mb-6">
            Web Developer
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            I craft responsive websites where technology meets creativity.
            As a web developer, I'm passionate about building exceptional digital
            experiences that live on the internet.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="primary" size="lg">
              <a href="#projects">
                View My Work
              </a>
            </Button>
            <Button variant="outline" size="lg">
               <a href={myPdf} target="_blank" rel="noopener noreferrer">View Resume</a>
            </Button>
          </div>


          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/mohammedamjid"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#about"
              className="p-1 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
              aria-label="Scroll down"
            >
              <ChevronDown className="w-6 h-6 text-blue-700 dark:text-blue-400 animate-bounce" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=mohammedamjid1217@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;