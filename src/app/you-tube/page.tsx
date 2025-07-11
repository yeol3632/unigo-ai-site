// /src/app/you-tube/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '유니고TV 영상',
};

interface YouTubeItem {
  id: { videoId: string };
  snippet: {
    title: string;
    thumbnails: {
      high: { url: string };
    };
  };
}

export default async function YouTubePage() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID; 
  const maxResults = 200;

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search`
    + `?key=${apiKey}`
    + `&channelId=${channelId}`
    + `&part=snippet`
    + `&order=date`
    + `&maxResults=${maxResults}`,
    { next: { revalidate: 60 * 10 } } 
  );

  if (!res.ok) {
    throw new Error('YouTube API 호출에 실패했습니다');
  }

  const data = await res.json();
  const items: YouTubeItem[] = data.items.filter((i: any) => i.id.videoId);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">유니고TV 영상</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <Link key={item.id.videoId} href={`https://www.youtube.com/watch?v=${item.id.videoId}`} target="_blank">
            <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition">
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
    </main>
  );
}
