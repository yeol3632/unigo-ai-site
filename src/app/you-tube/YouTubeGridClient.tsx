// File: src/app/you-tube/YouTubeGridClient.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type VideoItem = {
  id: { videoId: string };
  snippet: {
    title: string;
    thumbnails: { high: { url: string } };
  };
};

interface YouTubeGridClientProps {
  initialItems: VideoItem[];
}

export default function YouTubeGridClient({ initialItems }: YouTubeGridClientProps) {
  const [selected, setSelected] = useState<string>('전체');
  const [videos, setVideos] = useState<VideoItem[]>(initialItems);
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

  
  const categories = [
    { id: '전체',      label: '전체' },
    { id: 'PLs14ujgw-QQPNWh4IN28gA8T3pzzjpM6d', label: '입시정보 전달' },
    { id: 'PLs14ujgw-QQPTjAObwq4v6GYVuNNQfOhu', label: '생기부를 부탁해' },
  ];

  useEffect(() => {
    if (selected === '전체') {
      setVideos(initialItems);
      return;
    }

    const fetchPlaylistVideos = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?` +
          `key=${apiKey}` +
          `&playlistId=${selected}` +
          `&part=snippet&maxResults=50`
        );
        if (!res.ok) throw new Error('PlaylistItems 호출 실패');
        const data = await res.json();
        const items = (data.items as any[])
          .filter(i => i.snippet.resourceId?.videoId)
          .map(i => ({
            id: { videoId: i.snippet.resourceId.videoId },
            snippet: {
              title: i.snippet.title,
              thumbnails: { high: { url: i.snippet.thumbnails.high.url } },
            },
          }));
        setVideos(items);
      } catch (err) {
        console.error(err);
        setVideos([]);
      }
    };

    fetchPlaylistVideos();
  }, [selected, apiKey, initialItems]);

  return (
    <>
      {/* 고정 카테고리 버튼 */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`px-4 py-2 rounded ${
              selected === cat.id ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setSelected(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 비디오 그리드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {videos.map(item => (
          <Link
            key={item.id.videoId}
            href={`https://www.youtube.com/watch?v=${item.id.videoId}`}
            target="_blank"
          >
            <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition-transform hover:scale-105">
              <Image
                src={item.snippet.thumbnails.high.url}
                width={320}
                height={180}
                alt={item.snippet.title}
                className="w-full object-cover"
              />
              <p className="mt-2 text-sm font-medium leading-snug">{item.snippet.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
