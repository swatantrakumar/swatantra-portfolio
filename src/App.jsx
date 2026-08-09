import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Swatantra Kumar. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
