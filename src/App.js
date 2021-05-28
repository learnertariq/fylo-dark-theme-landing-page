import { useState } from "react";
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Features from './components/Features';
import Productive from './components/Productive';
import Testimonials from './components/Testimonials';
import Callout from './components/Callout';
import Footer from './components/Footer';
import Toggler from './components/common/Toggler';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(true);
  function getDarkClasses() {
    let classes = 'all-wrapper '
    return isDark ? classes + 'dark': classes;
  }
  return (
    <div className={getDarkClasses()}>
      <Navbar isDark={isDark} onToggleDark={() => setIsDark(!isDark)} />
      <Intro />
      <Features />
      <Productive />
      <Testimonials />
      <Callout />
      <Footer />
    </div>
  );
}

export default App;
