// /src/components/Login.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import PageTitle from '../PageTitle';

export default function Login() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/profile');
  };

  return (
    <section className="py-20 lg:py-[113px]">
      <div className="container">
        <PageTitle title="로그인" />
        <form className="mt-20 mx-auto max-w-[295px]" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <input type="text" placeholder="아이디" className="custom-input" />
            <input type="password" placeholder="비밀번호" className="custom-input" />

            <div className="flex justify-between text-xs">
              <Link href="/find-id" className="px-2 text-[#868686]">
                아이디 찾기
              </Link>
              <div className="border-r border-[#868686]" />
              <Link href="/reset-password" className="px-2 text-[#868686]">
                비밀번호 재설정
              </Link>
              <div className="border-r border-[#868686]" />
              <Link href="/register" className="px-2 text-[#868686]">
                회원가입
              </Link>
            </div>

            <button type="submit" className="login-btn mt-5">
              로그인
            </button>

            <button type="button" className="kakao-btn mt-12">
              <Image src="/images/kakao-talk-line.svg" width={20} height={20} alt="Kakao" />
              Continue with Kakao
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
