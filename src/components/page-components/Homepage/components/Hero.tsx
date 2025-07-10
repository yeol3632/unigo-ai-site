import { Button } from "@/components/button/Button";
import Link from "next/link";
export default function Hero() {
	return (
		<div className="md:px-5 py-[34px]">
			<section
				className="pb-4 sm:pb-12 pt-10 lg:py-[8rem] 2xl:pt-[105px] 2xl:pb-[105px] overflow-hidden flex flex-col justify-center rounded-[32px]"
				style={{
					background:
						"url('/images/hero/hero-1.png') bottom left / cover no-repeat",
				}}
			>
				<div className="relative px-4 sm:px-6 lg:px-8 2xl:pl-[63px] lg:pt-0 flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-10">
					<div className="text-center lg:text-left relative z-10 w-full lg:w-1/2 max-w-[620px]">
						<h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[55px] font-bold text-black leading-tight mb-6">
							대치동 입시연구소 토마토의 <br />30년의 노하우와 결합된 AI
						</h1>

						<p className="xl:text-lg text-black mb-8 md:mb-12 mx-auto lg:mx-0 leading-relaxed max-w-[517px]">
							생기부 분석부터 대학 맞춤 전략까지. 이제 데이터에 기반한
							맞춤 분석으로 가장 빠르고 효율적인 합격 전략을 세워보세요.
						</p>

						{/* Action Buttons */}
						<div className="justify-center lg:justify-start items-center flex flex-wrap gap-3">
							<Link
								className="block max-lg:flex-grow max-w-[235px] max-lg:min-w-[170px]"
								href="/ai-analysis"
							>
								<Button
									text="AI 분석 받기"
									variant="outlineFilled"
									className="py-3 xl:min-w-[235px] max-lg:w-full"
								/>
							</Link>
							<Link
								className="block max-lg:flex-grow max-w-[235px] max-lg:min-w-[170px]"
								href="/free-report"
							>
								<Button
									text="무료 리포트 보기"
									variant="outline"
									className="py-3 xl:min-w-[235px] max-lg:w-full"
								/>
							</Link>
						</div>
					</div>
					<div className="flex-grow lg:w-0 w-full max-lg:max-w-[650px] max-lg:mx-auto">
						<div className="relative">
							<div className="rounded-[24px] md:rounded-[40px] aspect-[785/701]">
								<video
									src="/videos/hero-1.mp4"
									className="w-full h-full object-cover rounded-[inherit]"
									autoPlay
									loop
									muted
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
