import { motion, SVGMotionProps } from "framer-motion";

interface Props extends SVGMotionProps<"svg"> {}

export default function LandingLogo({ ...props }: Props) {
	const styles = [
		{
			// default fill black
			// animation fill red
			fill: ["#d8d8d8" + "30", "#ff1800" + "70", "#d8d8d8" + "30"],
			stroke: "#ffffff00",
			// stroke: ["#151515" + "30", "#ff1800" + "70", "#151515" + "30"],
			// strokeWidth: 0.5,
		},
		{
			// default fill black
			// animation fill red
			fill: ["#000000" + "30", "#ff1800" + "70", "#000000" + "30"],
			stroke: ["#d8d8d8" + "30", "#ff1800" + "70", "#d8d8d8" + "30"],
			strokeWidth: 1,
		},
		{
			// default fill red
			// animation fill white
			fill: ["#ff1800" + "30", "#fefefe" + "70", "#ff1800" + "30"],
			stroke: "#ffffff00",
		},
		{
			// default fill red
			// animation stroke light
			fill: "#ff1800" + "30",
			stroke: ["#ff1800" + "30", "#fefefe" + "70", "#ff1800" + "30"],
			strokeWidth: 2,
		},
		{
			// default fill black
			// animation stroke light
			fill: "#000000" + "30",
			stroke: ["#ff1800" + "30", "#fefefe" + "70", "#ff1800" + "30"],
			strokeWidth: 2,
		},
		{
			// default fill light
			// animation stroke red
			fill: "#d8d8d8" + "30",
			stroke: ["#d8d8d8" + "30", "#ff1800" + "70", "#d8d8d8" + "30"],
			strokeWidth: 2,
		},
	];

	function random(options: any[]) {
		return options[Math.floor(Math.random() * options.length)];
	}

	const animationConfiguration = {
		duration: 2,
		ease: "easeInOut",
	};

	const animation = {
		container: {
			on: {
				transition: {
					ease: animationConfiguration.ease,
					when: "beforeChildren",
					duration: animationConfiguration.duration,
					staggerChildren: 0.2,
					delayChildren: 0.5,
					staggerDirection: -1,
					repeat: Infinity,
				},
			},
		},
		path: {
			on: {
				...random(styles),
				scale: ["100%", "101%", "100%"],
				transition: {
					ease: animationConfiguration.ease,
					repeat: Infinity,
					repeatDelay: animationConfiguration.duration,
				},
			},
		},
	};

	return (
		<motion.svg
			{...props}
			id="landingLogo"
			animate="on"
			variants={animation.container}
			viewBox="-50 -30 1000 719.779"
		>
			<motion.path
				variants={animation.path}
				d="M872.48,324.5l-9.33-6-56.82-36.66-56.82-36.66L692.68,208.5l-56.82-36.66L579,135.18,522.22,98.52,465.4,61.86,408.58,25.2,376.21,4.32a28.65,28.65,0,0,0-43.4,24.55V282.26a28.64,28.64,0,0,1-28.64,28.64H28.83A28.65,28.65,0,0,0,.18,339.55V614.88a28.67,28.67,0,0,0,28.65,28.65H304.17a28.65,28.65,0,0,0,28.64-28.65V361.53a28.43,28.43,0,0,1,20.54-27.47A28.24,28.24,0,0,1,376.21,337l41.64,27,56.72,36.75,56.72,36.74L588,474.2,644.73,511l56.72,36.75,56.72,36.75,56.72,36.75L843,639.39a28.64,28.64,0,0,0,43.4-24.55V349.05A28.63,28.63,0,0,0,872.48,324.5Z"
			/>
			<motion.path
				variants={animation.path}
				d="M837.16,324.32l-8.71-5.62-53-34.2-53-34.2-53-34.2-53-34.19-53-34.2-53-34.2-53-34.2-53-34.2-30.2-19.48a26.72,26.72,0,0,0-40.48,22.9V284.91A26.73,26.73,0,0,1,307,311.64H50.12A26.72,26.72,0,0,0,23.4,338.36V595.22a26.72,26.72,0,0,0,26.72,26.72H307a26.72,26.72,0,0,0,26.73-26.72V358.87a26.52,26.52,0,0,1,19.16-25.63A26.31,26.31,0,0,1,374.19,336L413,361.13,466,395.41l52.91,34.29L571.78,464l52.91,34.28,52.91,34.28,52.92,34.29,52.91,34.28,26.2,17a26.73,26.73,0,0,0,40.49-22.91v-248A26.71,26.71,0,0,0,837.16,324.32Z"
			/>
			<motion.path
				variants={animation.path}
				d="M801.84,324.14l-8.08-5.21-49.2-31.74-49.19-31.74-49.2-31.74L597,192l-49.2-31.74-49.19-31.74-49.2-31.73L400.19,65l-28-18.08A24.79,24.79,0,0,0,334.6,68.2V287.57a24.8,24.8,0,0,1-24.8,24.8H71.41a24.81,24.81,0,0,0-24.8,24.8V575.56a24.82,24.82,0,0,0,24.8,24.8H309.8a24.8,24.8,0,0,0,24.8-24.8V356.21a24.63,24.63,0,0,1,17.78-23.79A24.45,24.45,0,0,1,372.17,335l36.05,23.36,49.11,31.81,49.11,31.82,49.1,31.82,49.11,31.81,49.11,31.82,49.11,31.82L752,581l24.31,15.76a24.8,24.8,0,0,0,37.57-21.26V345.4A24.8,24.8,0,0,0,801.84,324.14Z"
			/>
			<motion.path
				variants={animation.path}
				d="M766.52,324l-7.46-4.81-45.38-29.28L668.3,260.6l-45.38-29.28L577.53,202l-45.38-29.28-45.38-29.28L441.39,114.2,396,84.92,370.15,68.25a22.88,22.88,0,0,0-34.66,19.61V290.23a22.88,22.88,0,0,1-22.87,22.88H92.71A22.88,22.88,0,0,0,69.83,336v219.9a22.89,22.89,0,0,0,22.88,22.88H312.62a22.87,22.87,0,0,0,22.87-22.88V353.54A22.76,22.76,0,0,1,351.9,331.6a22.53,22.53,0,0,1,18.25,2.34l33.26,21.54,45.3,29.35L494,414.18l45.3,29.35,45.3,29.35,45.31,29.35,45.3,29.35,45.3,29.36L743,575.47a22.88,22.88,0,0,0,34.66-19.61V343.57A22.86,22.86,0,0,0,766.52,324Z"
			/>
			<motion.path
				variants={animation.path}
				d="M731.2,323.79l-6.83-4.41L682.8,292.56l-41.57-26.82-41.57-26.81-41.57-26.82-41.57-26.82L475,158.47l-41.57-26.82-41.57-26.82L368.14,89.56a21,21,0,0,0-31.75,18V292.89a21,21,0,0,1-21,20.95H114a21,21,0,0,0-21,21V536.23a21,21,0,0,0,21,21H315.43a21,21,0,0,0,21-21V350.88a20.79,20.79,0,0,1,15-20.1,20.63,20.63,0,0,1,16.72,2.14l30.47,19.74,41.49,26.88,41.5,26.89,41.49,26.88,41.5,26.88,41.49,26.89L647.57,514l41.49,26.89,20.55,13.31a21,21,0,0,0,31.75-18V341.75A21,21,0,0,0,731.2,323.79Z"
			/>
			<motion.path
				variants={animation.path}
				d="M695.88,323.61l-6.21-4-37.75-24.36-37.76-24.36L576.4,246.53l-37.75-24.36-37.76-24.36-37.75-24.35L425.38,149.1l-37.76-24.36-21.5-13.88a19,19,0,0,0-28.84,16.32V295.54a19,19,0,0,1-19,19h-183a19,19,0,0,0-19,19v183a19,19,0,0,0,19,19h183a19,19,0,0,0,19-19V348.22a19,19,0,0,1,1.55-7.59A19.18,19.18,0,0,1,350.93,330a18.77,18.77,0,0,1,15.19,2l27.66,17.92,37.69,24.42,37.69,24.42,37.69,24.42,37.69,24.41,37.69,24.42,37.69,24.42,37.69,24.42,18.66,12.09a19,19,0,0,0,28.83-16.31V339.93A19,19,0,0,0,695.88,323.61Z"
			/>
			<motion.path
				variants={animation.path}
				d="M660.55,323.43,655,319.84,621,297.94,587.09,276l-33.94-21.9-33.94-21.9-34-21.9-33.94-21.9-33.94-21.9-33.95-21.89L364.1,132.17a17.12,17.12,0,0,0-25.93,14.67V298.2a17.11,17.11,0,0,1-17.11,17.11H156.58a17.11,17.11,0,0,0-17.11,17.11V496.9A17.12,17.12,0,0,0,156.58,514H321.06a17.11,17.11,0,0,0,17.11-17.11V345.56a17,17,0,0,1,12.27-16.41,16.86,16.86,0,0,1,13.66,1.74L389,347,422.85,369l33.89,22,33.88,21.95,33.88,22,33.88,21.95,33.89,22,33.88,21.95,16.78,10.87a17.11,17.11,0,0,0,25.92-14.66V338.1A17.12,17.12,0,0,0,660.55,323.43Z"
			/>
			<motion.path
				variants={animation.path}
				d="M625.23,323.26l-5-3.2-30.13-19.44L560,281.19l-30.13-19.44-30.13-19.44-30.13-19.44L439.5,203.43,409.37,184l-30.13-19.44-17.16-11.07a15.19,15.19,0,0,0-23,13V300.86a15.19,15.19,0,0,1-15.19,15.19h-146a15.19,15.19,0,0,0-15.19,15.19v146a15.2,15.2,0,0,0,15.19,15.19h146a15.19,15.19,0,0,0,15.19-15.19V342.9A15.06,15.06,0,0,1,350,328.33a14.93,14.93,0,0,1,12.12,1.55l22.08,14.3,30.07,19.49,30.08,19.48,30.08,19.49,30.07,19.49,30.08,19.48,30.08,19.49,30.07,19.49,14.9,9.64a15.18,15.18,0,0,0,23-13V336.28A15.18,15.18,0,0,0,625.23,323.26Z"
			/>
			<motion.path
				variants={animation.path}
				d="M589.91,323.08l-4.32-2.79-26.32-17-26.32-17-26.31-17-26.32-17L454,235.4l-26.32-17-26.31-17-26.32-17-15-9.67A13.26,13.26,0,0,0,340,186.16V303.52a13.27,13.27,0,0,1-13.27,13.26H199.17a13.27,13.27,0,0,0-13.27,13.27V457.57a13.27,13.27,0,0,0,13.27,13.27H326.69A13.27,13.27,0,0,0,340,457.57V340.23a13.17,13.17,0,0,1,9.51-12.72,13.07,13.07,0,0,1,10.59,1.35l19.28,12.5,26.27,17,26.28,17,26.27,17,26.27,17,26.27,17,26.27,17,26.27,17,13,8.43a13.27,13.27,0,0,0,20.1-11.38V334.45A13.26,13.26,0,0,0,589.91,323.08Z"
			/>
			<motion.path
				variants={animation.path}
				d="M554.59,322.9l-3.7-2.38L528.39,306l-22.51-14.52L483.38,277l-22.5-14.52-22.51-14.52-22.5-14.52-22.51-14.51-22.5-14.52L358,196.1a11.34,11.34,0,0,0-17.19,9.72V306.17a11.35,11.35,0,0,1-11.34,11.35h-109a11.34,11.34,0,0,0-11.34,11.34V437.91a11.35,11.35,0,0,0,11.34,11.35h109a11.35,11.35,0,0,0,11.34-11.35V337.57A11.28,11.28,0,0,1,349,326.69a11.15,11.15,0,0,1,9.05,1.16l16.49,10.68L397,353.08l22.46,14.56,22.46,14.55,22.47,14.56,22.46,14.55,22.47,14.56,22.46,14.55,11.12,7.21a11.35,11.35,0,0,0,17.19-9.73V332.63A11.35,11.35,0,0,0,554.59,322.9Z"
			/>
			<motion.path
				variants={animation.path}
				d="M519.27,322.73l-3.07-2-18.69-12.05-18.69-12.06-18.7-12.06-18.69-12.06-18.69-12.06-18.69-12.06-18.69-12.06-18.69-12.06L356,217.41a9.42,9.42,0,0,0-14.27,8.07v83.35a9.43,9.43,0,0,1-9.43,9.42H241.75a9.43,9.43,0,0,0-9.42,9.43v90.57a9.43,9.43,0,0,0,9.42,9.42h90.57a9.43,9.43,0,0,0,9.43-9.42V334.91a9.33,9.33,0,0,1,6.75-9,9.32,9.32,0,0,1,7.52,1l13.7,8.88,18.66,12.08L407,359.88,425.69,372l18.66,12.09L463,396.15l18.66,12.09,18.65,12.08,9.24,6a9.43,9.43,0,0,0,14.28-8.08V330.8A9.42,9.42,0,0,0,519.27,322.73Z"
			/>
		</motion.svg>
	);
}
