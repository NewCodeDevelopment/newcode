import { useRecoilState } from "recoil";
import { bgColorState, scrollState } from "utils";
import classNames from "classnames";
import { bgColors } from "..";
import { motion, AnimatePresence } from "framer-motion";

export default function SectionIndicator() {
	const [bgColor, setBgColor] = useRecoilState(bgColorState);
	const [scroll, setScroll] = useRecoilState(scrollState);

	return (
		<motion.div className="hidden lg:flex lg:flex-col lg:gap-10 xl:gap-12 lg:justify-center lg:py-page lg:z-40 lg:fixed lg:right-16 lg:top-0 lg:bottom-0">
			{scroll.length > 0 &&
				Array.from({ length: scroll.length }, (_, i) => i).map((i) => (
					<AnimatePresence mode="wait" key={i}>
						<motion.div
							onClick={() =>
								setScroll({ ...scroll, currentIndex: i, caller: "user" })
							}
							initial={{
								opacity: 0,
								scale: 0,
								y: -20,
							}}
							animate={{
								opacity: 1,
								scale: scroll.currentIndex === i ? 2 : 1,
								y: 0,
							}}
							exit={{
								opacity: 0,
								scale: 0,
								y: -20,
							}}
							transition={{
								duration: 0.2,
								delay: i * 0.1,
							}}
							whileHover={{
								scale: 1.2,
								transition: { duration: 0.2 },
							}}
							whileTap={{
								scale: 0.8,
								transition: { duration: 0.2 },
							}}
							className={classNames(
								"w-3 h-3 xl:w-4 xl:h-4 aspect-square rounded-full cursor-pointer",
								bgColors[bgColor][600]
							)}
						>
							&nbsp;
						</motion.div>
					</AnimatePresence>
				))}
		</motion.div>
	);
}
