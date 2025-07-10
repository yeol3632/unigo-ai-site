// /src/app/terms-of-service/page.tsx

'use client';

import React from 'react';

const TermsOfServicePage = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-sm leading-relaxed text-gray-800">
      <h1 className="text-2xl font-bold mb-6">서비스 이용약관 (2025년 7월 10일 시행)</h1>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">제1조 (목적)</h2>
        <p>
          이 약관은 ㈜유니고(이하 "회사")가 제공하는 AI 분석 및 입시 컨설팅 서비스(이하 "서비스")의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 절차 등을 규정함을 목적으로 합니다.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">제2조 (용어의 정의)</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>"서비스"란 회사가 제공하는 AI 기반 입시 진단, 리포트 제공, 학생부 분석, 컨설팅 등 일체의 온라인/모바일 기반 서비스를 의미합니다.</li>
          <li>"이용자"란 본 약관에 따라 회사가 제공하는 서비스를 이용하는 회원 및 비회원을 말합니다.</li>
          <li>"회원"이란 회사와 서비스 이용 계약을 체결하고, 아이디(ID)와 비밀번호를 부여받아 지속적으로 서비스를 이용하는 자를 의미합니다.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">제3조 (약관의 효력 및 변경)</h2>
        <ol className="list-decimal pl-5 space-y-1">
          <li>본 약관은 서비스 화면 또는 기타 방법을 통해 게시함으로써 효력을 발생합니다.</li>
          <li>회사는 관련 법령을 위반하지 않는 범위에서 약관을 변경할 수 있으며, 변경 시 적용일자 및 변경사유를 명시하여 최소 7일 전에 공지합니다.</li>
          <li>회원에게 불리한 내용으로 변경될 경우 최소 30일 전에 공지합니다.</li>
          <li>이용자는 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단하고 탈퇴할 수 있으며, 공지 기간 내에 거부 의사를 표시하지 않고 서비스를 계속 이용할 경우, 변경된 약관에 동의한 것으로 간주합니다.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">제4조 (약관 외 준칙)</h2>
        <p>이 약관에서 정하지 아니한 사항은 관계 법령 및 회사의 서비스별 안내에 따릅니다.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">제5조 (회원가입 및 자격)</h2>
        <ol className="list-decimal pl-5 space-y-1">
          <li>회원가입은 이용자가 본 약관에 동의하고 회사가 정한 절차에 따라 신청하고, 회사가 이를 승인함으로써 성립합니다.</li>
          <li>회사는 다음 각 호의 사유가 있는 경우 회원가입을 거절하거나 사후에 자격을 제한 또는 박탈할 수 있습니다.
            <ul className="list-disc pl-5">
              <li>이전에 회원 자격을 상실한 적이 있는 경우</li>
              <li>허위 정보를 기재하거나 타인의 정보를 도용한 경우</li>
              <li>기타 기술적/운영상 불가피한 사유가 있는 경우</li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">제6조 (서비스의 제공 및 변경)</h2>
        <ol className="list-decimal pl-5 space-y-1">
          <li>회사는 다음과 같은 서비스를 제공합니다.
            <ul className="list-disc pl-5">
              <li>AI 기반의 학생부 분석 및 입시 진단</li>
              <li>대학, 전형, 모집단위 추천</li>
              <li>리포트 생성 및 컨설팅 정보 제공</li>
            </ul>
          </li>
          <li>회사는 운영상·기술상의 이유로 제공하는 서비스의 전부 또는 일부를 변경하거나 중단할 수 있으며, 사전에 공지합니다.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">제7조 (유료 서비스 및 결제)</h2>
        <ol className="list-decimal pl-5 space-y-1">
          <li>회사는 일부 서비스에 대해 유료로 제공할 수 있으며, 해당 요금 및 결제 방식은 별도의 안내를 통해 고지합니다.</li>
          <li>이용자는 유료 서비스에 대해 계약 후 일정 기간 내 청약철회가 가능하며, 사용 내역에 따라 환불 여부 및 금액은 회사 정책에 따릅니다.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">제8조 (게시물 및 콘텐츠의 권리)</h2>
        <ol className="list-decimal pl-5 space-y-1">
          <li>이용자가 작성한 게시물의 저작권은 원칙적으로 이용자 본인에게 귀속됩니다.</li>
          <li>단, 회사는 서비스 운영, 홍보, 개선 및 신규 서비스 개발을 위한 목적으로 해당 게시물을 비독점적으로 사용(복제, 배포, 전시 등)할 수 있는 권리를 가집니다.</li>
          <li>회사는 약관에 위배되거나 불법적인 게시물을 사전 통지 없이 삭제하거나 비공개 처리할 수 있습니다.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">제9조 (회원 탈퇴 및 자격 상실)</h2>
        <ol className="list-decimal pl-5 space-y-1">
          <li>회원은 언제든지 회사에 요청하여 탈퇴할 수 있으며, 회사는 지체 없이 처리합니다.</li>
          <li>다음 각 호의 경우, 회사는 회원 자격을 제한하거나 박탈할 수 있습니다.
            <ul className="list-disc pl-5">
              <li>타인의 정보를 도용한 경우</li>
              <li>서비스 운영을 방해한 경우</li>
              <li>기타 약관을 위반한 경우</li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">제10조 (개인정보 보호)</h2>
        <p>회사는 관련 법령에 따라 회원의 개인정보를 보호하며, 개인정보 처리방침에 따라 그 수집, 이용, 보관, 파기 등을 처리합니다.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">제11조 (면책 조항)</h2>
        <ol className="list-decimal pl-5 space-y-1">
          <li>회사가 제공하는 AI 분석 결과, 리포트, 입시 컨설팅 등은 참고 자료로 제공되는 것이며, 회사는 해당 정보의 완전한 정확성 또는 특정 대학의 합격을 보장하지 않습니다.</li>
          <li>서비스 이용 및 제공된 정보를 활용한 최종적인 의사 결정은 전적으로 이용자 본인의 책임입니다.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">제12조 (준거법 및 관할법원)</h2>
        <ol className="list-decimal pl-5 space-y-1">
          <li>본 약관은 대한민국 법률에 따라 해석 및 적용됩니다.</li>
          <li>회사와 이용자 간 발생한 분쟁에 대해 소송이 제기될 경우, 민사소송법상 관할법원으로 합니다.</li>
        </ol>
      </section>

      <p className="text-sm text-gray-500 mt-8">[부칙] 본 약관은 2025년 7월 10일부터 시행됩니다.</p>
    </main>
  );
};

export default TermsOfServicePage;