"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "./button/Button";
import { useSidebarContext } from "./SidebarProvider";

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const { setIsSidebarOpen } = useSidebarContext();
	const pathname = usePathname();

	const navLinks = [
		{ label: "홈", href: "/" },
		{ label: "유니고 진단이란?", href: "/ai-intro" },
		{ label: "유니고AI 분석", href: "/ai-analysis", hasDropdown: true },
		/*{ label: "무료 분석", href: "/free-analysis" },*/
		{ label: "유니고 입시TV", href: "/you-tube" },
		{ label: "입시 커뮤니티", href: "/community" },
		{ label: "고객센터", href: "/support" },
	];



	const dropdownItems = [
		{ label: '교과 분석', href: '/academic-record' },
		{ label: '학종 매칭', href: '/admin-system' },
		{ label: '면접 코칭', href: '/interview-system' },
		{ label: '생기부진단(고1.2)', href: '/student-record' }
	  ];
	  const isActiveLink = (href: string) => {
		if (href === '/' && pathname === '/') return true;
		if (href !== '/' && pathname.startsWith(href)) return true;
		return false;
	  };

	return (
		<header className="bg-white border-b border-gray-100 relative z-50 h-[96px] text-[#333333] md:text-[18px] whitespace-nowrap">
			<div className="max-w-[1440px] mx-auto">
				<nav className="flex items-center justify-between px-4 [@media(min-width:1096px)]:px-8 py-[24px]">
					{/* Logo */}
					{/* <Link href="/" className="flex-shrink-0">
						<span className="font-[800] text-2xl md:text-[28px] ">
							유니고
						</span>
					</Link>*/}
<Link href="/" className="flex-shrink-0">
  <img
    src="/images/logo.png"
    alt="유니고 로고"
    className="h-18 w-auto" 
  />
</Link>
			{/* Desktop Navigation */}
<div className="hidden [@media(min-width:1096px)]:flex items-center space-x-8 font-medium">
  {navLinks.map((link, index) => {
    const isDividerPosition = link.label === "회사 소개";

    return (
      <div
        key={index}
        className={`relative ${link.hasDropdown ? "group" : ""}`}
      >
        {/* 무료 분석과 회사 소개 사이에 마진 추가 */}
        {isDividerPosition && <div className="ml-12" />}

        {link.hasDropdown ? (
          <>
            <button
              className={`flex items-center transition-colors duration-200 ${
                isActiveLink(link.href) ? "font-bold" : ""
              }`}
            >
              {link.label}
              <svg
                className="ml-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className="absolute top-full left-0 mt-2 w-48 
                        bg-white rounded-lg shadow-lg border border-gray-100 py-2
                        opacity-0 invisible
                        group-hover:opacity-100 group-hover:visible
                        transition-[opacity,visibility] duration-200"
            >
              {dropdownItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className={`block px-4 py-2 text-sm text-gray-700 
                              hover:bg-gray-50 hover:text-gray-900 
                              transition-colors duration-200 ${
                                isActiveLink(item.href) ? "font-bold" : ""
                              }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </>
        ) : (
          <Link
            href={link.href}
            className={`transition-colors duration-200 ${
              isActiveLink(link.href) ? "font-bold" : ""
            }`}
          >
            {link.label}
          </Link>
        )}
      </div>
    );
  })}
</div>

					{/* Action Buttons */}
					<div className="hidden [@media(min-width:1096px)]:flex items-center space-x-4">
						<Link href="/ai-analysis/start">
							<Button text="AI 분석 시작하기" variant="primary" />
						</Link>
						<Link href="/login">
							<Button text="로그인" variant="secondary" />
						</Link>
					</div>

					{/* Mobile Menu Button */}

					<button
						className="[@media(min-width:1096px)]:hidden p-2 "
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<svg
							className="h-6 w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							{isMenuOpen ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							)}
						</svg>
					</button>
				</nav>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<>
						{/* Menu Panel */}
						<div className="[@media(min-width:1096px)]:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-50">
							<div className="px-4 py-4 space-y-4 font-medium max-h-[calc(100vh-96px)] overflow-y-auto">
								{navLinks.map((link, index) => (
									<div className="" key={index}>
										{link.hasDropdown ? (
											<div>
												<button
													className={`w-full text-left transition-colors duration-200 flex items-center justify-between ${
														isActiveLink(link.href)
															? "font-bold"
															: ""
													}`}
													onClick={() => setIsDropdownOpen(!isDropdownOpen)}
												>
													{link.label}
													<svg
														className={`h-4 w-4 transition-transform duration-200 ${
															isDropdownOpen ? "rotate-180" : ""
														}`}
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M19 9l-7 7-7-7"
														/>
													</svg>
												</button>
											 {isDropdownOpen && (
                          <div className="mt-2 ml-4 space-y-2">
                            {dropdownItems.map((item, idx) => (
                              <Link
                                key={idx}
                                href={item.href}
                                className="block text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )} 
											</div>
										) : (
											<Link
												href={link.href}
												className={`block transition-colors duration-200 ${
													isActiveLink(link.href)
														? "font-bold"
														: ""
												}`}
												onClick={() => setIsMenuOpen(false)}
											>
												{link.label}
											</Link>
										)}
									</div>
								))}

								{/* Mobile Action Buttons */}
								<div className="pt-4  border-t border-gray-100 flex flex-col gap-2 max-w-xl mx-auto">
									<Link
										className=""
										href="/ai-analysis/start"
										onClick={() => setIsMenuOpen(false)}
									>
										<Button
											className="w-full py-3"
											text="AI 분석 시작하기"
											variant="primary"
										/>
									</Link>
									<Link
										href="/login"
										onClick={() => setIsMenuOpen(false)}
									>
										<Button
											className="w-full py-3"
											text="로그인"
											variant="secondary"
										/>
									</Link>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</header>
	);
};
