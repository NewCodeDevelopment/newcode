import { motion } from "framer-motion";

export default function Angle({ className, classNamePath, ...props }: any) {
	return (
		<motion.svg className={className} viewBox="0 0 384 512">
			<motion.path
				d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"
				className={classNamePath}
				{...props}
			/>
		</motion.svg>
	);
}
