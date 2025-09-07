import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
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
