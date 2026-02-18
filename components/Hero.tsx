
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Image/Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Sunshine Jay Afrobeat" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-blue-500 font-semibold tracking-[0.4em] uppercase mb-4 text-sm md:text-base animate-pulse">
            The Afro-Fusion Sensation
          </h2>
          <h1 className="text-6xl md:text-8xl font-serif italic font-extrabold mb-6 leading-tight">
            Sunshine <span className="text-blue-600">Jay</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-lg">
            Infusing traditional African rhythms with modern blue vibrations. Experience the pulse of the continent through a new lens.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <a 
              href="https://open.spotify.com/artist/5oNjj0gB4kmdyR47ZbehM0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              LISTEN NOW
              <i className="fa-solid fa-play group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Available On:</span>
            <div className="flex gap-4">
              <a href="https://open.spotify.com/artist/5oNjj0gB4kmdyR47ZbehM0" target="_blank" rel="noopener noreferrer" className="text-2xl text-zinc-400 hover:text-blue-400 transition-colors" title="Spotify"><i className="fa-brands fa-spotify"></i></a>
              <a href="https://music.apple.com/us/artist/sunshine-jay/1850957880" target="_blank" rel="noopener noreferrer" className="text-2xl text-zinc-400 hover:text-blue-400 transition-colors" title="Apple Music"><i className="fa-brands fa-apple"></i></a>
              <a href="https://audiomack.com/itzsunshine_jay" target="_blank" rel="noopener noreferrer" className="text-2xl text-zinc-400 hover:text-blue-400 transition-colors" title="Audiomack">
                <span className="font-black italic flex items-center justify-center border-2 border-zinc-400 rounded w-6 h-6 text-[10px] group-hover:border-blue-400">A</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#music">
          <i className="fa-solid fa-chevron-down text-blue-500 text-2xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
