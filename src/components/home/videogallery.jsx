'use client';

import React from 'react';

const videoData = [
  {
    title: 'Campus View',
    src: 'https://www.youtube.com/embed/rHtOHANYLC4',
  },
  {
    title: 'Student Interview',
    src: 'https://www.youtube.com/embed/QS_amt6LaT8',
  },
  {
    title: 'Computer Class',
    src: 'https://www.youtube.com/embed/Pz9Ij5Xne2U',
  },
  {
    title: 'NCC Parade',
    src: 'https://www.youtube.com/embed/GhxNHWLXGeU',
  },
];

export default function VideoGallery() {
  return (
    <section className="bg-[#f5f9ff] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-[#1a264f] mb-10">
          Video Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {videoData.map((video, index) => (
            <div key={index} className="w-full aspect-video">
              <iframe
                src={video.src}
                title={video.title}
                allowFullScreen
                className="w-full h-80  shadow-md"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
