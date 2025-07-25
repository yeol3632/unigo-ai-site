"use client";

import { tomatoIcons } from "@/components/icons";
import { useParams, useRouter } from "next/navigation";

export default function CommunityPreview() {
	const router = useRouter();
	const params = useParams();
	return (
		<section className="py-24">
			<div className="container">
				<h2 className="font-semibold text-3xl md:text-[40px] lg:text-[48px] md:leading-[1.46] pb-8 lg:pb-12 border-b border-black mb-10 lg:mb-14">
					이용후기
				</h2>
				<div className="">
					<h6 className="text-2xl pb-12 border-b border-border text-center font-medium">
						[생기부 분석] 생기부 후기
					</h6>
					<div className="py-5 flex text-[13px] text-sm border-b border-black/30 px-5">
						<span className="w-[81px]">등록일</span>
						<span className="text-black/40">2025-05-25 11:58:41</span>
					</div>
					<div className="mt-5">생기부 서비스 너무 좋아요!</div>
					<hr className="mt-20 lg:mt-[200px]" />
					<div className="mt-5 flex flex-wrap gap-3">
						<button
							type="button"
							className="h-12 px-5 text-sm border border-border"
							onClick={() => {
								router.push(`/community/create-review?id=${params.id}`);
							}}
						>
							수정
						</button>

						<button
							type="button"
							className="h-12 px-5 mr-auto text-sm border border-border"
							onClick={() => {
								router.push("/community");
							}}
						>
							삭제
						</button>
						<button
							type="button"
							className="h-12 px-5 flex items-center gap-2 text-sm border border-border"
						>
							{tomatoIcons.heart} 2
						</button>
						<button
							type="button"
							className="h-12 px-5 flex items-center gap-2 text-sm text-[#1b1b1b]/80 border border-border"
						>
							링크 복사 {tomatoIcons.link}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
