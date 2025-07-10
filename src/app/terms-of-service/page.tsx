// src/app/terms-of-service/page.tsx

import React from "react";

const TermsOfServicePage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">이용약관</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">제1조 (목적)</h2>
        <p>
          이 약관은 ㈜유니고(이하 &quot;회사&quot;)가 제공하는 AI 진단 분석, 입시 컨설팅, 학습 관리 등 온라인 서비스(이하 &quot;서비스&quot;)의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 이용 조건 및 절차 등을 규정함을 목적으로 합니다.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">제2조 (용어의 정의)</h2>
        <ul className="list-disc pl-5">
          <li>“이용자”란 회사의 서비스에 접속하여 이 약관에 따라 서비스를 이용하는 자.</li>
          <li>“회원”이란 회사와 서비스 이용계약을 체결하고 ID와 비밀번호를 부여받은 자.</li>
          <li>“콘텐츠”란 회사가 제공하는 정보, 문서, 영상, 분석 결과 등 모든 자료.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">제3조 (약관의 효력 및 변경)</h2>
        <p>
          본 약관은 회사 웹사이트에 게시함으로써 효력을 발생하며, 회사는 관련 법령을 위반하지 않는 범위 내에서 개정할 수 있고 사전 공지합니다.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">제4조 (서비스의 제공)</h2>
        <ul className="list-disc pl-5">
          <li>AI 입시 진단 및 분석</li>
          <li>학생부 평가 및 리포트 생성</li>
          <li>입시 컨설팅 및 정보 제공</li>
          <li>기타 부가서비스</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">제5조 (회원가입 및 이용)</h2>
        <p>
          회원가입은 회사가 제공하는 양식에 따라 신청하고, 승인을 통해 성립됩니다. 14세 미만 아동은 가입할 수 없습니다.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">제6조 (개인정보 보호)</h2>
        <p>
          회사는 관련 법령에 따라 개인정보를 보호하며, 구체적인 사항은 <a href="/privacy-policy" className="text-blue-600 underline">개인정보처리방침</a>에 따릅니다.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">제7조 (이용자의 의무)</h2>
        <ul className="list-disc pl-5">
          <li>타인의 정보 도용 또는 허위 정보 등록</li>
          <li>콘텐츠 무단 복제, 배포, 판매</li>
          <li>서비스 운영을 방해하는 행위</li>
          <li>불법 게시물 작성</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">제8조 (회사의 의무)</h2>
        <p>
          회사는 법령 및 본 약관을 준수하며 안정적인 서비스 제공을 위해 노력합니다.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">제9조 (이용 제한)</h2>
        <p>
          회사는 약관 위반, 결제 문제, 법령 위반 시 이용을 제한하거나 탈퇴 처리할 수 있습니다.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">제10조 (지적재산권)</h2>
        <p>
          서비스 및 콘텐츠에 대한 저작권 등은 회사에 귀속되며, 무단 사용을 금합니다.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">제11조 (면책)</h2>
        <p>
          불가항력, 이용자의 과실 등으로 인한 서비스 장애에 대해 회사는 책임을 지지 않습니다.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">제12조 (분쟁 해결)</h2>
        <p>
          분쟁은 회사와 이용자 간 협의로 해결하며, 협의가 어려울 경우 회사 소재지의 관할 법원에 제소합니다.
        </p>
      </section>

      <section className="mt-10">
        <p className="text-sm text-gray-500">시행일: 2025년 7월 10일</p>
      </section>
    </div>
  );
};

export default TermsOfServicePage;
