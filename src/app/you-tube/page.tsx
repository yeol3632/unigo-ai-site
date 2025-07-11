// File: /src/app/you-tube/page.tsx
import YouTubeGridClient from './YouTubeGridClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '유니고TV 영상',
};

export default async function YouTubePage() {
  const apiKey = process.env.YOUTUBE_API_KEY!;
  const channelId = process.env.YOUTUBE_CHANNEL_ID!;
  const maxResults = 50;

  const vidRes = await fetch(
    `https://www.googleapis.com/youtube/v3/search?` +
      `key=${apiKey}` +
      `&channelId=${channelId}` +
      `&part=snippet` +
      `&order=date` +
      `&maxResults=${maxResults}`,
    { cache: 'no-store' }
  );
  if (!vidRes.ok) throw new Error('Videos 호출 실패');
  const vidData = await vidRes.json();
  const allItems = (vidData.items as any[])
    .filter(item => item.id.videoId)
    .map(item => ({
      id: { videoId: item.id.videoId },
      snippet: {
        title: item.snippet.title,
        thumbnails: { high: { url: item.snippet.thumbnails.high.url } },
      },
    }));

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">유니고TV 영상</h1>
      <YouTubeGridClient initialItems={allItems} />
    </main>
  );
}
