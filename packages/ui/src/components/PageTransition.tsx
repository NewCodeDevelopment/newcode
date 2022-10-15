import { motion } from "framer-motion";
import { transitionState } from "utils";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function PageTransition() {
	const [transition, setTransition] = useRecoilState(transitionState);
	const router = useRouter();

	useEffect(() => {
		function handleRouteChangeStart() {
			console.log("routeChangeStart");
			setTransition(true);
		}

		router.events.on("routeChangeStart", handleRouteChangeStart);

		return () => {
			router.events.off("routeChangeStart", handleRouteChangeStart);
		};
	}, [router]);

	return (
		<>
			{transition && (
				<motion.div
					className="hidden lg:block absolute z-50 bg-red-500 left-0 top-0 bottom-0 lg:bg-opacity-20 lg:backdrop-filter lg:backdrop-blur-xl"
					animate={{
						width: ["0%", "100%", "100%", "0%"],
						left: ["0%", "0%", "100%", "100%"],
					}}
					transition={{
						duration: 3,
						ease: "easeInOut",
					}}
					onAnimationComplete={() => setTransition(false)}
				/>
			)}
		</>
	);
}
