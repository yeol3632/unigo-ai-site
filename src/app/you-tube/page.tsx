// /src/app/you-tube/page.tsx
import React from 'react';
import Image from 'next/image';

interface Video {
  id: { videoId: string };
  snippet: {
    title: string;
    thumbnails: { medium: { url: string } };
  };
}

export const revalidate = 60; // ISR: 60초마다 재빌드

export default async function YouTubePage() {
  const apiKey = process.env.YOUTUBE_API_KEY!;
  const channelId = 'UCEb4bMByADeC5y0KWFtkaCw'; 
  const maxResults = 8;

  // YouTube Data API v3: Search endpoint
  const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}` +
              `&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error('YouTube API fetch failed');
  const json = await res.json();
  const videos: Video[] = json.items;

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">유니고TV 영상</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {videos.map((v) => (
          <a
            key={v.id.videoId}
            href={`https://www.youtube.com/watch?v=${v.id.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="relative w-full h-0 pb-[56.25%]">
              <Image
                src={v.snippet.thumbnails.medium.url}
                alt={v.snippet.title}
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-sm font-medium">{v.snippet.title}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
