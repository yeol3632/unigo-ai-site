// /src/app/register/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [form, setForm] = useState({
    username: '',
    password: '',
    confirm: '',
    email: '',
    sources: [] as string[],
    otherSource: '',
    agreeAll: false,
    agreeTerms: false,
    agreePrivacy: false,
    agreeMarketing: false,
  });

  const sourceOptions = [
    '포털사이트(구글,네이버)검색', '뉴스기사', '카페/블로그', '인스타그램',
    '유튜브', '페이스북', '학교', '카카오톡',
    '선생님', '친구/선후배', '부모님', '기타'
  ];

  const toggleSource = (src: string) => {
    let next = form.sources.includes(src)
      ? form.sources.filter(s => s !== src)
      : [...form.sources, src];
    if (next.length > 3) return;
    setForm({ ...form, sources: next });
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (name === 'agreeAll') {
      setForm({
        ...form,
        agreeAll: checked,
        agreeTerms: checked,
        agreePrivacy: checked,
        agreeMarketing: checked,
      });
    } else {
      setForm({ ...form, [name]: checked });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: submit logic
    console.log(form);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col items-center py-10">
      <div className="w-full max-w-2xl px-4">
        {/* Step Indicator */}
        <div className="relative flex justify-center items-center mb-8">
          <div className="absolute top-1/2 transform -translate-y-1/2 h-1 w-1/3 bg-gray-300"></div>
          <div className="absolute top-1/2 transform -translate-y-1/2 h-1 w-1/3 bg-gradient-to-l from-[#003478] to-white left-1/3"></div>
          <div className="flex space-x-20">
            {[1,2,3].map((step) => (
              <div key={step} className={
                `flex items-center justify-center w-12 h-12 rounded-lg border text-xl font-bold ` +
                (step < 3
                  ? 'border-black text-black bg-white'
                  : 'bg-[#003478] text-white')
              }>{step}</div>
            ))}
          </div>
        </div>
        <h2 className="text-center text-2xl font-bold mb-6">회원 정보를 입력해 주세요.</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name & Phone (static) */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600">이름</label>
              <p className="mt-1 text-gray-800">김상수</p>
            </div>
            <div>
              <label className="block text-gray-600">휴대전화번호</label>
              <p className="mt-1 text-gray-800">010-222-3223</p>
            </div>
          </div>
          {/* Credentials */}
          <div>
            <label className="block text-gray-600">아이디</label>
            <input name="username" required className="mt-1 w-full border border-gray-400 px-3 py-2 rounded" onChange={handleChange} />
          </div>
          <div>
            <label className="block text-gray-600">비밀번호</label>
            <input name="password" type="password" required className="mt-1 w-full border border-gray-400 px-3 py-2 rounded" onChange={handleChange} />
          </div>
          <div>
            <label className="block text-gray-600">비밀번호 확인</label>
            <input name="confirm" type="password" required className="mt-1 w-full border border-gray-400 px-3 py-2 rounded" onChange={handleChange} />
          </div>
          <div>
            <label className="block text-gray-600">이메일</label>
            <input name="email" type="email" required className="mt-1 w-full border border-gray-400 px-3 py-2 rounded" onChange={handleChange} />
          </div>

          {/* Referral Sources */}
          <fieldset>
            <legend className="text-gray-600 mb-2">회원가입 경로</legend>
            <p className="text-sm text-[#003478] mb-2">최대 3개 선택</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {sourceOptions.map(src => (
                <label key={src} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={form.sources.includes(src)}
                    disabled={!form.sources.includes(src) && form.sources.length >= 3}
                    onChange={() => toggleSource(src)}
                  />
                  {src}
                </label>
              ))}
            </div>
            {form.sources.includes('기타') && (
              <input
                name="otherSource"
                placeholder="유니고 AI를 알게 된 경로를 입력해 주세요."
                className="mt-2 w-full border border-gray-400 px-3 py-2 rounded"
                onChange={handleChange}
              />
            )}
          </fieldset>

          {/* Agreements */}
          <fieldset className="border-t border-gray-200 pt-4">
            <legend className="text-gray-600 mb-2">약관동의</legend>
            <label className="inline-flex items-center mb-2">
              <input type="checkbox" name="agreeAll" className="mr-2" checked={form.agreeAll} onChange={handleCheck} />
              전체 약관동의
            </label>
            <div className="space-y-2 ml-6">
              <label className="inline-flex items-center">
                <input type="checkbox" name="agreeTerms" className="mr-2" checked={form.agreeTerms} onChange={handleCheck} />
                [필수] <Link href="/terms-of-service" className="underline text-gray-800">서비스 이용약관</Link> 보기
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" name="agreePrivacy" className="mr-2" checked={form.agreePrivacy} onChange={handleCheck} />
                [필수] <Link href="/privacy-policy" className="underline text-gray-800">개인정보 수집 및 이용동의</Link> 보기
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" name="agreeMarketing" className="mr-2" checked={form.agreeMarketing} onChange={handleCheck} />
                [선택] 고객 혜택 제공을 위한 개인정보 수집 및 이용 동의 보기
              </label>
            </div>
          </fieldset>

          <button type="submit" className="w-full bg-[#003478] text-white py-3 rounded font-semibold">
            가입하기
          </button>
        </form>
      </div>
    </main>
  );
}
