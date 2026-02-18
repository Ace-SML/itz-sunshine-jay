import React from "react";
import { Song, TourDate } from "./types";
import showYouLove from "./assets/covers/show-you-love.jpg";
import cheerleader from "./assets/covers/cheerleader.jpg";
import whereDemDey from "./assets/covers/where-dem-dey.jpg";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Music", href: "#music" },
  { label: "Gallery", href: "#gallery" },
  { label: "Tour", href: "#tour" },
  { label: "Contact", href: "#contact" },
];

export const MOCK_SONGS: Song[] = [
  {
    id: "1",
    title: "Show You Love",
    duration: "2:48",
    album: "Single",
    coverUrl: showYouLove,
    spotifyTrackId: "6XIyldJEAH46bUJGYHdag0",
  },
  {
    id: "2",
    title: "Cheerleader",
    duration: "3:43",
    album: "Single",
    coverUrl: cheerleader,
    spotifyTrackId: "31eVnUv9h7G5q0TMCHJzgO",
  },
  {
    id: "3",
    title: "Where Dem Dey",
    duration: "3:03",
    album: "Single",
    coverUrl: whereDemDey,
    spotifyTrackId: "6FfhsgyMuA4awwAg23Rih2",
  },
  {
    id: "4",
    title: "Normal Things",
    duration: "3:12",
    album: "Single",
    coverUrl:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
    spotifyTrackId: "0lUx6Wjgv3Qf1wpLWsLDji",
  },
];

export const MOCK_TOUR: TourDate[] = [];
