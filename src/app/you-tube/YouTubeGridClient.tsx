'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Playlist = {
  id: string;
  snippet: { title: string };
};
type VideoItem = {
  id: { videoId: string };
  snippet: {
    title: string;
    thumbnails: { high: { url: string } };
  };
};

interface YouTubeGridClientProps {
  playlists: Playlist[];
  initialItems: VideoItem[];
}

export default function YouTubeGridClient({ playlists, initialItems }: YouTubeGridClientProps) {
  const [selected, setSelected] = useState<string>('전체');
  const [videos, setVideos] = useState<VideoItem[]>(initialItems);
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

  useEffect(() => {
    if (!apiKey) return;

    if (selected === '전체') {
      // 전체는 초기 채널 업로드 목록 그대로
      setVideos(initialItems);
      return;
    }

    // 선택된 플레이리스트 ID로 영상 가져오기
    const fetchPlaylistVideos = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?` +
            `key=${apiKey}` +
            `&playlistId=${selected}` +
            `&part=snippet&maxResults=50`,
          { cache: 'no-store' }
        );
        if (!res.ok) throw new Error('PlaylistItems 호출 실패');
        const data = await res.json();
        // 실제 videoId로 매핑
        const items = (data.items as any[]).map(item => ({
          id: { videoId: item.snippet.resourceId.videoId },
          snippet: {
            title: item.snippet.title,
            thumbnails: { high: { url: item.snippet.thumbnails.high.url } },
          },
        }));
        setVideos(items);
      } catch (e) {
        console.error(e);
        setVideos([]);
      }
    };

    fetchPlaylistVideos();
  }, [selected, apiKey, initialItems]);

  return (
    <>
      {/* 카테고리(플레이리스트) 버튼 */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          className={`px-4 py-2 rounded ${
            selected === '전체' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setSelected('전체')}
        >
          전체
        </button>
        {playlists.map(pl => (
          <button
            key={pl.id}
            className={`px-4 py-2 rounded ${
              selected === pl.id ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setSelected(pl.id)}
          >
            {pl.snippet.title}
          </button>
        ))}
      </div>

      {/* 영상 그리드 */}
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
