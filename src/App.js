import React from 'react';
import Navbar from './components/Navbar';
import EditorialHome from './components/EditorialHome';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="w-full max-w-full min-h-screen bg-[#F7F4EF] text-[#111111] antialiased selection:bg-[#111111] selection:text-[#FFAD5A] overflow-x-hidden">
      <Navbar />
      <main className="w-full max-w-full overflow-x-hidden">
        <EditorialHome />
        <About />
        <Portfolio />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

