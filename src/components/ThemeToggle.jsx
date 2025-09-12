import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

/**
 * ThemeToggle Component
 * 
 * A responsive and accessible dark/light mode toggle button with:
 * - Sun/Moon icons that animate on toggle
 * - localStorage persistence across sessions
 * - Programmatic theme switching with consistent design language
 * - Full keyboard accessibility
 * - Responsive design for mobile and desktop
 */
const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Initialize theme on component mount
  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    setTheme(initialTheme);
    updateTheme(initialTheme);
  }, []);

  // Update theme in DOM and localStorage
  const updateTheme = (newTheme) => {
    const root = window.document.documentElement;
    
    if (newTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    localStorage.setItem('theme', newTheme);
  };

  // Handle theme toggle
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    updateTheme(newTheme);
  };

  // Handle keyboard navigation
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleTheme();
    }
  };

  return (
    <button
      onClick={toggleTheme}
      onKeyDown={handleKeyDown}
      className={`
        relative inline-flex items-center justify-center
        w-12 h-12 rounded-full
        bg-gray-200 dark:bg-gray-700
        hover:bg-gray-300 dark:hover:bg-gray-600
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        dark:focus:ring-offset-gray-800
        transition-all duration-300 ease-in-out
        transform hover:scale-105 active:scale-95
        shadow-lg hover:shadow-xl
      `}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Sun Icon - visible in dark mode */}
      <Sun 
        className={`
          absolute w-5 h-5 text-yellow-500
          transition-all duration-300 ease-in-out
          ${theme === 'dark'
            ? 'opacity-100 rotate-0 scale-100' 
            : 'opacity-0 rotate-90 scale-75'
          }
        `}
      />
      
      {/* Moon Icon - visible in light mode */}
      <Moon 
        className={`
          absolute w-5 h-5 text-gray-700 dark:text-gray-300
          transition-all duration-300 ease-in-out
          ${theme === 'light'
            ? 'opacity-100 rotate-0 scale-100' 
            : 'opacity-0 -rotate-90 scale-75'
          }
        `}
      />
    </button>
  );
};

export default ThemeToggle;
