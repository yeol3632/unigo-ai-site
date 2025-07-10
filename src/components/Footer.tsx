import React from "react";
import Image from "next/image";

const Footer = () => {
  const imagesLinks = {
    message: "/icons/footer/messages.svg",
    talk: "/icons/footer/talk.svg",
    mail: "/icons/footer/mail.svg",
  };

  return (
    <footer className="bg-[#1F1F1F] text-white py-[4rem] px-4 border-t ">
  <div className="max-w-7xl mx-auto">
    <div className="mb-8">
      <h5 className="md:text-[40px] font-[500] text-[32px] ">
        질문이 있으세요? <br />
        유니고 AI에게 무엇이든지 물어보세요!
      </h5>
    </div>

    <div className="flex gap-4 flex-wrap sm:flex-nowrap">
      {Object.entries(imagesLinks).map(([key, value]) => (
        <div
          key={key}
          className="bg-[#313131] rounded-[9px] p-4 flex items-center justify-center"
        >
          <Image src={value} alt={key} width={50} height={50} />
        </div>
      ))}
    </div>

    <div className="mt-10 md:text-[20px] text-[16px] ">
      <p>
        상호명: (주)유니고 ㅣ대표: 전열 
        ㅣ 전화: 02-558-5052 ㅣ사업자등록번호: 107-65-00348 <br /> 주소: 서울시
        강남구 대치동 912-10 ㅣ 고객센터 운영시간: 평일 10:00 – 18:00
        (점심시간 12:00 – 13:00)
      </p>
    </div>
    <p className="mt-7 md:text-[16px] text-[14px] ">
  © 2025 유니고 AI, Inc. All rights reserved.
</p>

  <p className="mt-3 text-[14px] text-blue-300 underline">
    <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
      개인정보 처리방침 보기
    </a>
    
  </p><p className="mt-3 text-[14px] text-blue-300 underline">
  <a href="/terms-of-service" className="underline">서비스 이용약관</a>
</p>
  </div>
</footer>


  );
};

export default Footer;
