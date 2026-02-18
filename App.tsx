
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MusicSection from './components/MusicSection';
import Gallery from './components/Gallery';
import TourSection from './components/TourSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-600 selection:text-white">
      <Header />
      <main>
        <Hero />
        <MusicSection />
        <Gallery />
        <TourSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
