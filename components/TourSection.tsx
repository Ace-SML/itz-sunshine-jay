
import React from 'react';

const TourSection: React.FC = () => {
  return (
    <section id="tour" className="py-24 bg-zinc-950 border-y border-blue-900/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-semibold tracking-widest uppercase mb-2">Live Experience</h2>
          <h3 className="text-4xl md:text-5xl font-serif italic font-bold">Tour Dates</h3>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-zinc-900/20 border border-zinc-800 rounded-3xl p-16 text-center flex flex-col items-center gap-6 backdrop-blur-sm">
            <div className="w-20 h-20 rounded-full bg-blue-900/20 flex items-center justify-center mb-4">
              <i className="fa-solid fa-calendar-xmark text-3xl text-blue-500"></i>
            </div>
            <h4 className="text-2xl font-bold">No Tours For Now</h4>
            <p className="text-zinc-400 max-w-sm leading-relaxed">
              Sunshine Jay is currently in the studio crafting the next wave of Afrobeat rhythms. Join the newsletter to be the first to know when we hit the road.
            </p>
            <button className="mt-4 px-8 py-3 border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white rounded-full font-bold transition-all uppercase tracking-widest text-xs">
              Notify Me
            </button>
          </div>
        </div>
        
        <div className="mt-16 flex justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all">
          <img src="https://via.placeholder.com/120x40/000/3b82f6?text=FESTIVAL+X" alt="Partner" />
          <img src="https://via.placeholder.com/120x40/000/3b82f6?text=SOUND+CO" alt="Partner" />
          <img src="https://via.placeholder.com/120x40/000/3b82f6?text=LIVE+NATION" alt="Partner" />
        </div>
      </div>
    </section>
  );
};

export default TourSection;
