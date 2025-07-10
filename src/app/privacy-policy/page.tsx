// src/app/privacy-policy/page.tsx
import React from 'react';

export const metadata = {
  title: '개인정보 처리방침 | 유니고 AI',
  description: '유니고 AI의 개인정보 처리방침 안내 페이지입니다.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-6 text-center">㈜유니고 개인정보처리방침</h1>

      <section className="space-y-6 text-[16px] leading-7">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. 총칙</h2>
          <p>개인정보: 생존하는 개인을 식별할 수 있는 모든 정보(다른 정보와 결합하여 식별 가능한 정보 포함).</p>
          <p>법령 준수: 개인정보보호법, 정보통신망법 등 관련 법령을 준수.</p>
          <p>방침 변경: 법률, 정부 지침, 보안 정책 변경 시 홈페이지 공지.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. 수집하는 개인정보 항목 및 이용목적</h2>
          <p>회원가입/정보수정 시 수집</p>
          <ul className="list-disc ml-5">
            <li>학생/학부모: 아이디, 비밀번호, 이름, 휴대전화, 이메일(선택), 생활기록부 정보(학적, 출결, 수상, 자격증 등)</li>
            <li>선생님: 아이디, 비밀번호, 이름, 휴대전화, 이메일</li>
          </ul>
          <p>서비스 이용 중 생성</p>
          <ul className="list-disc ml-5">
            <li>진로희망, 창의적 체험, 교과학습, 독서, 행동특성, 종합의견 등</li>
            <li>대학 합격여부(대학명, 전형 등)</li>
          </ul>
          <p>결제 및 환불</p>
          <ul className="list-disc ml-5">
            <li>카드정보, 계좌정보, 세금계산서 발행 시 담당자 정보</li>
          </ul>
          <p>기타: IP, 쿠키, 방문일시, 서비스 이용기록 등 자동수집</p>
          <p>수집방법: 홈페이지, 상담, 이벤트 응모, 자동수집장치 등</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. 개인정보 보유 및 이용기간</h2>
          <ul className="list-disc ml-5">
            <li>원칙: 이용 목적 달성 시 지체 없이 파기(ID는 중복 방지 위해 보관)</li>
            <li>계약/청약철회, 결제기록: 5년</li>
            <li>불만/분쟁처리: 3년</li>
            <li>방문기록: 3개월</li>
            <li>세법상 증빙자료: 5년</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. 개인정보 파기절차 및 방법</h2>
          <p>절차: 목적 달성 후 별도 DB로 이동, 보관 후 파기</p>
          <p>방법: 종이는 분쇄/소각, 전자파일은 복구 불가 방식 삭제</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. 쿠키 사용</h2>
          <p>목적: 맞춤 서비스 제공, 방문/이벤트 분석</p>
          <p>설정: 브라우저에서 쿠키 허용/거부 가능(거부 시 일부 서비스 제한)</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. 제3자 제공 및 위탁</h2>
          <p>원칙: 동의 없이 제3자 제공 불가(예외: 법령, 동의 등)</p>
          <p>위탁: 홈페이지에 고지, 주요 위탁사: ㈜케이지이니시스(결제), SMS 발송 등</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. 개인정보 열람·정정·동의철회</h2>
          <p>열람/정정: 홈페이지에서 직접 가능</p>
          <p>동의철회(회원탈퇴): MY페이지 또는 담당자 연락, 즉시 삭제 및 통지</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">8. 보호 대책</h2>
          <ul className="list-disc ml-5">
            <li>기술적: 암호화, 백신, 침입차단, SSL 등</li>
            <li>관리적: 접근권한 최소화, 정기 교육, 보안서약, 분리보관, 출입통제</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">9. 이용자 권리 및 의무</h2>
          <p>정확한 정보 입력 및 관리 책임</p>
          <p>타인 정보 도용·허위정보 입력 시 회원자격 상실</p>
          <p>비밀번호 등 본인 정보 보호 의무</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">10. 아동 개인정보 보호</h2>
          <p>만 14세 미만 아동 회원가입 불가</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">11. 광고성 정보 전송</h2>
          <p>수신거부 의사에 반해 광고성 정보 미전송</p>
          <p>광고 표시 및 수신거부 방법 명확히 안내</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">12. 의견수렴 및 불만처리</h2>
          <p>담당부서: 공식 이메일(official@vibeon.ai), 전화(02-565-5600)</p>
          <p>외부기관: 개인정보침해신고센터(118), 분쟁조정위원회 등</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">13. 방침 변경</h2>
          <p>변경 시 홈페이지 공지</p>
          <p>시행일: 2025년 7월 1일</p>
        </div>

        <p className="text-sm text-gray-500">※ 자세한 내용은 (주)유니고 홈페이지에서 확인 가능합니다.</p>
      </section>
    </main>
  );
}
