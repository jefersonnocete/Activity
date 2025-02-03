import React from 'react';
import Contact from './assets/Components/Contact';
import Skills from './assets/Components/Skills';
import Work from './assets/Components/Work';
import About from './assets/Components/About';



const App = () => {
  return (
    <div className="App">
      <header className="bg-gray-900 text-white p-10 text-center">
        <h1 className="text-4xl font-bold">My Resume</h1>
      
      </header>
      
      <main className="py-0">
        <About/>
        <Contact />
        <Skills />
        <Work />
      
      
      
        
      </main>
    </div>
  );
}

export default App;
