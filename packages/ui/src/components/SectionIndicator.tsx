import { useRecoilState } from "recoil";
import { bgColorState, scrollState } from "utils";
import classNames from "classnames";
import { bgColors } from "..";

export default function SectionIndicator({ mainRef }: any) {
	const [bgColor, setBgColor] = useRecoilState(bgColorState);
	const [scroll, setScroll] = useRecoilState(scrollState);

	return (
		<div className="hidden lg:flex lg:flex-col lg:gap-12 lg:justify-center lg:py-page lg:z-50 lg:fixed lg:right-24 lg:top-0 lg:bottom-0">
			{Array.from({ length: scroll.length }, (_, i) => i).map((i) => (
				<div
					key={i}
					onClick={() =>
						setScroll({ ...scroll, currentIndex: i, caller: "user" })
					}
					className={classNames(
						"w-4 aspect-square rounded-full grow-animation-2xl cursor-pointer",
						"transition-all duration-500 ease-in-out",
						bgColors[bgColor][600],
						scroll.currentIndex === i && "scale-[200%]"
					)}
				></div>
			))}
		</div>
	);
}
