
import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'collaboration',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/xdaldzwz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', type: 'collaboration', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <footer id="contact" className="bg-black pt-24 pb-12 border-t border-blue-900/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-serif italic font-bold text-blue-500 mb-6 uppercase tracking-tighter blue-glow">Sunshine Jay</h2>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              From the streets of Lagos to global stages. Sunshine Jay is redefining the Afro-fusion sound. For bookings and press, use the inquiry form.
            </p>
            <div className="flex flex-col gap-6">
               <div className="flex gap-4">
                <a href="https://www.instagram.com/itzsunshine_jay/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:border-blue-500 hover:text-blue-500 hover:scale-110 transition-all">
                  <i className="fa-brands fa-instagram text-xl"></i>
                </a>
                <a href="https://www.tiktok.com/@itzsunshine_jay01" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:border-blue-500 hover:text-blue-500 hover:scale-110 transition-all">
                  <i className="fa-brands fa-tiktok text-xl"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCUK8KXh_6Ht3xo1apsALq9g" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:border-blue-500 hover:text-blue-500 hover:scale-110 transition-all">
                  <i className="fa-brands fa-youtube text-xl"></i>
                </a>
              </div>
              
              <div className="flex items-center gap-6 pt-2">
                <span className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">Streaming Platforms</span>
                <div className="flex gap-5">
                  <a href="https://open.spotify.com/artist/5oNjj0gB4kmdyR47ZbehM0" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-blue-400 transition-colors" title="Spotify"><i className="fa-brands fa-spotify text-2xl"></i></a>
                  <a href="https://music.apple.com/us/artist/sunshine-jay/1850957880" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-blue-400 transition-colors" title="Apple Music"><i className="fa-brands fa-apple text-2xl"></i></a>
                  <a href="https://audiomack.com/itzsunshine_jay" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-blue-400 transition-colors flex items-center font-bold" title="Audiomack">
                    <span className="border border-zinc-500 rounded px-1 text-[10px]">AUDIOMACK</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-zinc-500">Navigation</h4>
            <ul className="space-y-4 font-semibold uppercase tracking-tight">
              <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#music" className="text-gray-400 hover:text-blue-400 transition-colors">Music</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-blue-400 transition-colors">Gallery</a></li>
              <li><a href="#tour" className="text-gray-400 hover:text-blue-400 transition-colors">Tour</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-zinc-500">Professional Inquiries</h4>
            <form 
              className="space-y-3" 
              onSubmit={handleSubmit}
              action="https://formspree.io/f/xdaldzwz"
              method="POST"
            >
              <input 
                type="text" 
                name="name"
                required
                placeholder="Name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all text-white placeholder-zinc-600 text-sm"
              />
              <input 
                type="email" 
                name="email"
                required
                placeholder="Email Address" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all text-white placeholder-zinc-600 text-sm"
              />
              <select 
                name="type"
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value})}
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all text-white cursor-pointer text-sm appearance-none"
              >
                <option value="collaboration" className="bg-zinc-900">Collaboration</option>
                <option value="sponsorship" className="bg-zinc-900">Sponsorship</option>
                <option value="record_deal" className="bg-zinc-900">Record Deal</option>
                <option value="booking" className="bg-zinc-900">Booking / Event</option>
              </select>
              <textarea 
                name="message"
                placeholder="Tell us more..." 
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all text-white placeholder-zinc-600 text-sm resize-none"
              ></textarea>
              
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className={`w-full ${status === 'sending' ? 'bg-zinc-700' : 'bg-blue-600 hover:bg-blue-500'} text-white font-bold py-3 rounded-xl transition-all uppercase tracking-widest text-xs shadow-lg flex items-center justify-center gap-2`}
              >
                {status === 'sending' ? (
                  <>
                    <i className="fa-solid fa-spinner animate-spin"></i> Sending...
                  </>
                ) : 'Send Inquiry'}
              </button>

              {status === 'success' && (
                <p className="text-green-500 text-xs text-center font-bold mt-2 animate-pulse">
                  <i className="fa-solid fa-circle-check"></i> Message sent successfully!
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-xs text-center font-bold mt-2">
                  <i className="fa-solid fa-circle-exclamation"></i> Error sending message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 text-xs">
          <p className="font-bold tracking-wider">&copy; {new Date().getFullYear()} SUNSHINE JAY MUSIC. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 uppercase tracking-widest font-semibold">
            <a href="#" className="hover:text-blue-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Management</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
