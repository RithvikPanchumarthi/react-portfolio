import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 dark:text-gray-500 py-8 border-t border-gray-800 dark:border-gray-700">
        <div className="container-max text-center">
          <p className="mb-4">
            © 2024 Rithvik Panchumarthi. Built with React & Tailwind CSS.
          </p>
          <p className="text-sm">
            "Data is the new oil, but unlike oil, data is reusable and grows more valuable with use."
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
