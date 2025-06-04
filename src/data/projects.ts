import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A fully responsive e-commerce platform built with React and Node.js. Features include product filtering, cart functionality, and user authentication.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'CSS'],
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoLink: '#',

  },
  {
    id: 2,
    title: 'Weather Dashboard',
    description: 'An interactive weather application that displays current and forecasted weather data from multiple locations using a third-party API.',
    tags: ['React','JavaScript', 'HTML', 'CSS', 'API Integration'],
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoLink: 'https://amji-forecastweatherapp.netlify.app/',

  },
   {
    id: 4,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website designed and developed to showcase my projects and skills in web development.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoLink: 'https://amjifolio.netlify.app/',
  }
];

export default projects;