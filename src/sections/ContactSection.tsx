import React, { useRef } from 'react';
import { useIsVisible } from '../utils/hooks';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(sectionRef);

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-blue-700 dark:text-blue-400" />,
      title: 'Location',
      details: 'Gudalur, TN, IND'
    },
    {
      icon: <Mail className="w-6 h-6 text-red-600 dark:text-red-400" />,
      title: 'Email',
      details: 'mohammedamjid1217@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-700 dark:text-blue-400" />,
      title: 'Phone',
      details: '+91 94884 65646'
    },
    {
      icon: <Clock className="w-6 h-6 text-red-600 dark:text-red-400" />,
      title: 'Working Hours',
      details: 'Mon - Fri: 9AM - 7PM'
    }
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100 dark:bg-red-900/20 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's talk about your project"
        />

        <div className="flex flex-col lg:flex-row gap-12">
          <div
            className={`lg:w-1/3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
          >
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 shadow-md h-full">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4"
                  >
                    <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-700 to-red-600 rounded-lg text-white">
                <h4 className="text-lg font-semibold mb-2">
                  Ready to start a project?
                </h4>
                <p className="mb-4 text-white/90">
                  I'm available for freelance work. Reach out and let's create something amazing together.
                </p>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=mohammedamjid1217@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-blue-700 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
                  aria-label="Email"
                >
                  Email Me
                </a>
              </div>
            </div>
          </div>

          <div
            className={`lg:w-2/3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
          >
            <div className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send Me a Message
              </h3>

              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;