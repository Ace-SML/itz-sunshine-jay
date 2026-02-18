import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MusicSection from "./components/MusicSection";
import Gallery from "./components/Gallery";
import TourSection from "./components/TourSection";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#ff3300a9",
        backgroundSize: "cover",
        color: "#ffffff",
      }}
    >
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
