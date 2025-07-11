'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface YouTubeItem {
  id: { videoId: string };
  snippet: {
    title: string;
    thumbnails: { high: { url: string } };
  };
}

interface Playlist {
  id: string;
  snippet: { title: string };
}

export default function YouTubeGrid({
  playlists,
  initialItems,
}: {
  playlists: Playlist[];
  initialItems: YouTubeItem[];
}) {
  const [selectedPl, setSelectedPl] = useState<string>('all');
  const [items, setItems] = useState<YouTubeItem[]>(initialItems);

  useEffect(() => {
    if (selectedPl === 'all') {
      setItems(initialItems);
    } else {
      const fetchForPl = async () => {
        const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY!;
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?` +
          `key=${apiKey}&playlistId=${selectedPl}` +
          `&part=snippet&maxResults=50`
        );
        if (!res.ok) {
          console.error('playlistItems 호출 실패');
          return;
        }
        const data = await res.json();
        // playlistItems API 구조에 맞춰서 mapping
        const plItems = (data.items as any[])
          .map(i => ({
            id: { videoId: i.snippet.resourceId.videoId },
            snippet: {
              title: i.snippet.title,
              thumbnails: { high: { url: i.snippet.thumbnails.high.url } },
            },
          }));
        setItems(plItems);
      };
      fetchForPl();
    }
  }, [selectedPl, initialItems]);

  return (
    <>
      {/* 탭 */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={() => setSelectedPl('all')}
          className={`px-4 py-2 rounded ${
            selectedPl === 'all'
              ? 'bg-[#003478] text-white'
              : 'bg-gray-200'
          }`}
        >
          전체
        </button>
        {playlists.map(pl => (
          <button
            key={pl.id}
            onClick={() => setSelectedPl(pl.id)}
            className={`px-4 py-2 rounded ${
              selectedPl === pl.id
                ? 'bg-[#003478] text-white'
                : 'bg-gray-200'
            }`}
          >
            {pl.snippet.title}
          </button>
        ))}
      </div>

      {/* 영상 그리드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(item => (
          <Link
            key={item.id.videoId}
            href={`https://www.youtube.com/watch?v=${item.id.videoId}`}
            target="_blank"
          >
            <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <Image
                src={item.snippet.thumbnails.high.url}
                width={320}
                height={180}
                alt={item.snippet.title}
                className="w-full object-cover"
              />
              <p className="mt-2 text-sm font-medium leading-snug">
                {item.snippet.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
