// /src/app/you-tube/page.tsx
import YouTubeGrid from './YouTubeGridClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '유니고TV 영상',
};

export default async function YouTubePage() {
  const apiKey = process.env.YOUTUBE_API_KEY!;
  const channelId = process.env.YOUTUBE_CHANNEL_ID!;
  
  // 1) 플레이리스트 가져오기
  const plRes = await fetch(
    `https://www.googleapis.com/youtube/v3/playlists?` +
    `key=${apiKey}&channelId=${channelId}&part=snippet&maxResults=50`,
    { cache: 'no-store' }
  );
  if (!plRes.ok) throw new Error('Playlists 호출 실패');
  const plData = await plRes.json();
  const playlists = plData.items as any[]; // { id, snippet.title }

  // 2) 전체 영상(채널 업로드) 가져오기
  const vidRes = await fetch(
    `https://www.googleapis.com/youtube/v3/search?` +
    `key=${apiKey}&channelId=${channelId}&part=snippet&order=date&maxResults=50`,
    { cache: 'no-store' }
  );
  if (!vidRes.ok) throw new Error('Videos 호출 실패');
  const vidData = await vidRes.json();
  // filter out only 실제 videoId 있는 항목만
  const allItems = (vidData.items as any[]).filter(i => i.id.videoId);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">유니고TV 영상</h1>
      <YouTubeGrid playlists={playlists} initialItems={allItems} />
    </main>
  );
}
