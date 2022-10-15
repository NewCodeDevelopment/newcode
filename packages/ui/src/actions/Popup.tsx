import { motion, AnimatePresence } from "framer-motion";
import { useRecoilState } from "recoil";
import { popupState } from "utils";

export default function Popup() {
	const [state, setState] = useRecoilState(popupState);

	const animations = {
		background: {
			initial: {
				opacity: 0,
			},
			enter: {
				opacity: 1,
			},
		},
	};

	return (
		<AnimatePresence mode="wait">
			{state.show && (
				<motion.div
					className="lg:hidden z-50 fixed left-0 right-0 top-0 bottom-0 px-page py-page grid grid-cols-1 place-items-center bg-dark-700 bg-opacity-20 backdrop-filter backdrop-blur-xl"
					variants={animations.background}
					initial="initial"
					animate="enter"
					exit="initial"
				>
					<div
						className="absolute -z-10 left-0 right-0 top-0 bottom-0"
						onClick={() => setState({ show: false, children: null })}
					/>
					{state.children}
				</motion.div>
			)}
		</AnimatePresence>
	);
}
