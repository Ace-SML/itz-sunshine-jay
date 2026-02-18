
import React, { useState } from 'react';
import { MOCK_SONGS } from '../constants';
import { Song } from '../types';

const MusicSection: React.FC = () => {
  const [currentSong, setCurrentSong] = useState<Song>(MOCK_SONGS[0]);

  const selectSong = (song: Song) => {
    setCurrentSong(song);
    if (window.innerWidth < 768) {
      const player = document.getElementById('spotify-player');
      player?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="music" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-blue-500 font-semibold tracking-widest uppercase mb-2">Discography</h2>
            <h3 className="text-4xl md:text-5xl font-serif italic font-bold">The Sounds of Sunshine</h3>
          </div>
          <div className="flex gap-4">
            <a 
              href="https://open.spotify.com/artist/5oNjj0gB4kmdyR47ZbehM0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors uppercase font-bold tracking-widest text-xs flex items-center gap-2 border border-blue-900/50 px-4 py-2 rounded-full"
            >
              Spotify <i className="fa-brands fa-spotify"></i>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Song List Selection */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4 px-2">Select a Track</p>
            {MOCK_SONGS.map((song) => (
              <button 
                key={song.id}
                onClick={() => selectSong(song)}
                className={`w-full group p-4 rounded-2xl border transition-all flex items-center gap-4 text-left ${
                  currentSong.id === song.id 
                    ? 'bg-blue-900/20 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.15)] scale-[1.02]' 
                    : 'bg-zinc-900/20 border-zinc-800 hover:border-blue-800/50 hover:bg-zinc-900/40'
                }`}
              >
                {/* Simplified img element as requested */}
                <img 
                  src={song.coverUrl} 
                  alt={song.title} 
                  className="w-14 h-14 rounded-xl object-cover flex-shrink-0 shadow-lg transition-transform duration-500 group-hover:scale-105" 
                />
                
                <div className="flex-grow">
                  <h4 className={`font-bold text-lg transition-colors ${currentSong.id === song.id ? 'text-blue-400' : 'text-white'}`}>
                    {song.title}
                  </h4>
                  <p className="text-zinc-500 text-xs uppercase tracking-widest font-semibold">{song.album}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[10px] text-zinc-600 font-mono">{song.duration}</span>
                  <i className={`fa-solid fa-chevron-right text-[10px] transition-transform ${currentSong.id === song.id ? 'text-blue-500 translate-x-1' : 'text-zinc-800'}`}></i>
                </div>
              </button>
            ))}
          </div>

          {/* Big Version / Spotify Embed Player */}
          <div id="spotify-player" className="lg:col-span-7 sticky top-32">
            <div className="bg-zinc-900/30 rounded-[2.5rem] p-4 md:p-8 border border-zinc-800/50 relative overflow-hidden backdrop-blur-xl shadow-2xl">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8 px-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_#3b82f6]"></div>
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-[0.3em]">Artist Showcase</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="w-1 h-4 bg-blue-500/20 rounded-full"></span>
                    <span className="w-1 h-6 bg-blue-500/40 rounded-full"></span>
                    <span className="w-1 h-3 bg-blue-500/60 rounded-full"></span>
                  </div>
                </div>

                {/* Spotify Embed Iframe */}
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-black min-h-[352px] border border-white/5 transition-all duration-700 ease-in-out">
                  <iframe 
                    key={currentSong.spotifyTrackId}
                    style={{ borderRadius: '12px' }} 
                    src={`https://open.spotify.com/embed/track/${currentSong.spotifyTrackId}?utm_source=generator&theme=0`} 
                    width="100%" 
                    height="352" 
                    frameBorder="0" 
                    allowFullScreen={true} 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                    className="animate-in fade-in zoom-in-95 duration-700"
                  ></iframe>
                </div>

                <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-6 px-2">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden border border-blue-500/20 shadow-lg">
                       <img src={currentSong.coverUrl} alt={currentSong.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-serif italic font-bold text-white mb-0.5 tracking-tight">{currentSong.title}</h3>
                      <p className="text-blue-500/80 text-xs font-bold uppercase tracking-widest">Sunshine Jay • Official</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href={`https://open.spotify.com/track/${currentSong.spotifyTrackId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 bg-white text-black text-xs font-black rounded-full hover:bg-blue-600 hover:text-white transition-all uppercase tracking-widest flex items-center gap-2 shadow-xl active:scale-95"
                    >
                      Play Full Track <i className="fa-brands fa-spotify"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="mt-8 text-center text-zinc-700 text-[9px] uppercase tracking-[0.4em] font-black italic">
              Experience the Blue Movement &bull; Lagos to the World
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
