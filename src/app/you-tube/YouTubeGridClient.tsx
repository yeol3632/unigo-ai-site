// File: src/app/you-tube/YouTubeGridClient.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

type VideoItem = {
  id: { videoId: string };
  snippet: {
    title: string;
    thumbnails: { high: { url: string } };
    publishedAt?: string;
    viewCount?: string;
    likeCount?: string;
  };
};

export default function YouTubeGridClient({ initialItems }: { initialItems: VideoItem[] }) {
  const categories = [
    { id: '전체', label: '전체' },
    { id: 'PLs14ujgw-QQPNWh4IN28gA8T3pzzjpM6d', label: '입시정보 전달' },
    { id: 'PLs14ujgw-QQPTjAObwq4v6GYVuNNQfOhu', label: '생기부를 부탁해[생기부 평가단]' },
    { id: 'PLs14ujgw-QQPynsauIzb6nGZXLJ_8nczQ', label: '전일권 대표' },
  ];

  const [selected, setSelected] = useState<string>('전체');
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY!;

  useEffect(() => {
    const fetchItems = async () => {
      try {
        let items: VideoItem[] = [];

        if (selected === '전체') {
          items = initialItems;
        } else {
          const res = await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?` +
              `key=${apiKey}` +
              `&playlistId=${selected}` +
              `&part=snippet&maxResults=50`,
            { cache: 'no-store' }
          );
          if (!res.ok) throw new Error('PlaylistItems 호출 실패');
          const data = await res.json();
          items = (data.items as any[])
            .filter(item => item.snippet.resourceId?.videoId)
            .map(item => ({
              id: { videoId: item.snippet.resourceId.videoId },
              snippet: {
                title: item.snippet.title,
                thumbnails: { high: { url: item.snippet.thumbnails.high.url } },
              },
            }));
        }

        if (items.length === 0) {
          setVideos([]);
          return;
        }

        const ids = items.map(i => i.id.videoId).join(',');
        const statsRes = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?` +
            `key=${apiKey}` +
            `&id=${ids}` +
            `&part=snippet,statistics`,
          { cache: 'no-store' }
        );
        if (!statsRes.ok) throw new Error('Videos 호출 실패');
        const statsData = await statsRes.json();
        const statsMap = (statsData.items as any[]).reduce((acc, v) => {
          acc[v.id] = {
            publishedAt: v.snippet.publishedAt,
            viewCount: v.statistics.viewCount,
            likeCount: v.statistics.likeCount,
          };
          return acc;
        }, {} as Record<string, { publishedAt: string; viewCount: string; likeCount: string }>);

        const enriched = items.map(it => {
          const stat = statsMap[it.id.videoId] || {};
          return {
            ...it,
            snippet: {
              ...it.snippet,
              publishedAt: stat.publishedAt,
              viewCount: stat.viewCount,
              likeCount: stat.likeCount,
            },
          };
        });

        setVideos(enriched);
      } catch (e) {
        console.error(e);
        setVideos([]);
      }
    };

    fetchItems();
  }, [selected, apiKey, initialItems]);

  return (
    <>
      {/* 카테고리 버튼 */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`px-4 py-2 rounded ${selected === cat.id ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setSelected(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 비디오 그리드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {videos.map(item => (
          <Link key={item.id.videoId} href={`https://youtube.com/watch?v=${item.id.videoId}`} target="_blank">
            <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition-transform hover:scale-105">
              <Image
                src={item.snippet.thumbnails.high.url}
                width={320}
                height={180}
                alt={item.snippet.title}
                className="w-full object-cover"
              />
              <div className="p-2">
                <p className="text-sm font-medium leading-snug">{item.snippet.title}</p>
                {item.snippet.viewCount && (
                  <p className="mt-1 text-xs text-gray-500">
                    조회수 {Number(item.snippet.viewCount).toLocaleString()}회{' '}
                    {item.snippet.likeCount && `· 좋아요 ${Number(item.snippet.likeCount).toLocaleString()}개`} ·{' '}
                    {formatDistanceToNow(new Date(item.snippet.publishedAt!), { addSuffix: true })}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
