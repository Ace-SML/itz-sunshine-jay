
export interface Song {
  id: string;
  title: string;
  duration: string;
  album: string;
  coverUrl: string;
  spotifyTrackId: string;
}

export interface TourDate {
  id: string;
  date: string;
  venue: string;
  location: string;
  status: 'Tickets' | 'Sold Out' | 'Canceled';
}

export interface LyricGenerationResponse {
  lyrics: string;
  mood: string;
  inspiration: string;
}
