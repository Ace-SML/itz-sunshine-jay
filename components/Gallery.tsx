
import React from 'react';

const IMAGES = [
  'https://images.unsplash.com/photo-1514525253361-bee8718a300c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80',
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-semibold tracking-widest uppercase mb-2">Visuals</h2>
          <h3 className="text-4xl md:text-5xl font-serif italic font-bold">The Face Behind the Sound</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMAGES.map((src, idx) => (
            <div 
              key={idx} 
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800"
            >
              <img 
                src={src} 
                alt={`Sunshine Jay Gallery ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-500"></div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/30 rounded-2xl transition-all duration-500 m-2"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <a 
            href="https://www.instagram.com/itzsunshine_jay/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 border border-blue-900 text-blue-500 hover:bg-blue-600 hover:text-white rounded-full font-bold transition-all uppercase tracking-[0.2em] text-xs"
          >
              Follow on Instagram
           </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
