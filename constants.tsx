
import React from 'react';
import { Song, TourDate } from './types';

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Music', href: '#music' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Tour', href: '#tour' },
  { label: 'Contact', href: '#contact' },
];

export const MOCK_SONGS: Song[] = [
  {
    id: '1',
    title: 'Show You Love',
    duration: '3:05',
    album: 'Single',
    coverUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=400&q=80',
    spotifyTrackId: '6XIyldJEAH46bUJGYHdag0',
  },
  {
    id: '2',
    title: 'Cheerleader',
    duration: '3:24',
    album: 'Single',
    coverUrl: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&w=400&q=80',
    spotifyTrackId: '31eVnUv9h7G5q0TMCHJzgO',
  },
  {
    id: '3',
    title: 'Where Dem Dey',
    duration: '2:58',
    album: 'Single',
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80',
    spotifyTrackId: '6FfhsgyMuA4awwAg23Rih2',
  },
  {
    id: '4',
    title: 'Normal Things',
    duration: '3:12',
    album: 'Single',
    coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
    spotifyTrackId: '0lUx6Wjgv3Qf1wpLWsLDji',
  },
];

export const MOCK_TOUR: TourDate[] = [];
