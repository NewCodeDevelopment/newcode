import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { loadingState } from "utils";
import Cookies from "js-cookie";

export default function InitialLoader() {
	const [loading, setLoading] = useRecoilState(loadingState);

	return (
		<AnimatePresence mode="wait">
			{loading && (
				<motion.div
					className="h-screen w-full bg-dark-700 z-50 absolute left-0 right-0 top-0 bottom-0 grid grid-cols-1 place-items-center"
					exit={{
						opacity: 0,
					}}
				>
					<motion.svg className="w-20 xl:w-32" viewBox="0 0 87.912 63.821">
						<motion.path
							d="M86.534,32.173,37.3.41A2.842,2.842,0,0,0,33,2.846V27.982a2.843,2.843,0,0,1-2.842,2.842H2.842A2.842,2.842,0,0,0,0,33.665V60.98a2.842,2.842,0,0,0,2.842,2.841H30.156A2.842,2.842,0,0,0,33,60.98V35.847a2.841,2.841,0,0,1,4.3-2.436l46.3,30a2.842,2.842,0,0,0,4.305-2.436V34.608a2.842,2.842,0,0,0-1.378-2.436"
							animate={{
								pathLength: [0, 1, 1],
								pathOffset: [1, 0, 0],
								fill: ["#262626", "#262626", "#ff1800"],
								stroke: ["#d8d8d8", "#d8d8d8", "#d8d8d8"],
								strokeWidth: [2, 2, 0],
							}}
							transition={{
								duration: 3,
								time: [0, 1, 0.5],
								ease: "easeInOut",
							}}
							onAnimationComplete={() => setLoading(false)}
						/>
					</motion.svg>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
