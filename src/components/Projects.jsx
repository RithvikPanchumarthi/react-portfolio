import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Code, Database, BarChart3, FileSpreadsheet } from 'lucide-react';
import { projects } from '../data/projects.js';
import { themeConfig, getThemeClass } from '../utils/themeConfig.js';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Listen for theme changes from other components
  useEffect(() => {
    const handleThemeChange = () => {
      const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      setTheme(currentTheme);
    };

    // Initial check
    handleThemeChange();

    // Listen for class changes on document element
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });

    return () => observer.disconnect();
  }, []);
  
  const getIcon = (technologies) => {
    if (technologies.some(tech => tech.includes('SQL'))) return <Database className="w-6 h-6" />;
    if (technologies.some(tech => tech.includes('Python'))) return <Code className="w-6 h-6" />;
    if (technologies.some(tech => tech.includes('Tableau') || tech.includes('Power BI'))) return <BarChart3 className="w-6 h-6" />;
    if (technologies.some(tech => tech.includes('Excel'))) return <FileSpreadsheet className="w-6 h-6" />;
    return <Code className="w-6 h-6" />;
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => 
        filter === 'featured' ? project.featured : 
        project.technologies.some(tech => tech.toLowerCase().includes(filter.toLowerCase()))
      );

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'featured', label: 'Featured' },
    { key: 'sql', label: 'SQL' },
    { key: 'python', label: 'Python' },
    { key: 'visualization', label: 'Visualization' }
  ];

  return (
    <section id="projects" className={`section-padding ${getThemeClass(theme, 'backgroundProjects')} transition-all duration-300`}>
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${getThemeClass(theme, 'headingProjects')} mb-4`}>
            Featured Projects
          </h2>
          <p className={`text-xl ${getThemeClass(theme, 'textSecondary')} max-w-3xl mx-auto`}>
            A showcase of data engineering projects demonstrating expertise in ETL pipelines, 
            data analysis, and business intelligence solutions.
          </p>
        </div>

        {/* Filter Buttons - Consistent theming with accent colors */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filterOption) => (
            <button
              key={filterOption.key}
              onClick={() => setFilter(filterOption.key)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                filter === filterOption.key
                  ? getThemeClass(theme, 'filterActive')
                  : getThemeClass(theme, 'filterInactive')
              }`}
            >
              {filterOption.label}
            </button>
          ))}
        </div>

        {/* Projects Grid - Consistent theming for both light and dark modes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`${getThemeClass(theme, 'card')} rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 p-6 group animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 group-hover:brightness-110"
                />
                {/* Icon overlay with consistent theming */}
                <div className={`absolute top-3 left-3 p-2 ${getThemeClass(theme, 'iconCyan')} rounded-lg backdrop-blur-sm`}>
                  {getIcon(project.technologies)}
                </div>
                {project.featured && (
                  <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-medium rounded-full shadow-lg">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content - Consistent theming */}
              <div className="space-y-4">
                <h3 className={`text-xl font-bold ${getThemeClass(theme, 'textPrimary')} group-hover:${getThemeClass(theme, 'accentViolet')} transition-colors`}>
                  {project.title}
                </h3>
                
                <p className={`${getThemeClass(theme, 'textSecondary')} text-sm leading-relaxed`}>
                  {project.description}
                </p>

                {/* Technologies - Consistent accent colors across themes */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => {
                    const tagTypes = ['tagEmerald', 'tagCyan', 'tagViolet', 'tagAmber'];
                    const tagClass = tagTypes[techIndex % tagTypes.length];
                    return (
                      <span
                        key={tech}
                        className={`px-3 py-1 ${getThemeClass(theme, tagClass)} text-xs font-medium rounded-full transition-all duration-300 hover:scale-105`}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>

                {/* Action Buttons - Consistent theming */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 ${getThemeClass(theme, 'buttonSecondary')} rounded-lg transition-all duration-300 text-sm font-medium transform hover:scale-105`}
                  >
                    <Github size={16} />
                    View Code
                  </a>
                  
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 ${getThemeClass(theme, 'buttonDemo')} rounded-lg transition-all duration-300 text-sm font-medium transform hover:scale-105`}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action - Consistent theming */}
        <div className="text-center mt-16">
          <p className={`${getThemeClass(theme, 'textSecondary')} mb-6`}>
            Interested in seeing more of my work or discussing a collaboration?
          </p>
          <a
            href="https://github.com/RithvikPanchumarthi"
            target="_blank"
            rel="noopener noreferrer"
            className={`${getThemeClass(theme, 'buttonPrimary')} inline-flex items-center gap-2`}
          >
            <Github size={20} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
