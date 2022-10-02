import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowCircleLink } from "..";
import classnames from "classnames";
import { IRoute } from "utils";

interface Props {
	routes: IRoute[];
	open: boolean;
	currentRoute: string;
	cycleMenuCallback: () => void;
	animationCompleteCallback: (arg0: boolean) => void;
}

export default function Menu({
	routes,
	open,
	currentRoute,
	animationCompleteCallback,
	cycleMenuCallback,
}: Props) {
	const animationConfiguration = {
		duration: 0.7,
		ease: [1, 0.165, 0.165, 1],
	};

	const animation = {
		container: {
			closed: {
				left: "-100vw",
				transition: {
					ease: animationConfiguration.ease,
					delay: animationConfiguration.duration / 2,
					duration: animationConfiguration.duration,
					staggerChildren: 0.1,
				},
			},
			opened: {
				left: 0,
				transition: {
					ease: animationConfiguration.ease,
					duration: animationConfiguration.duration,
					staggerChildren: 0.1,
					delayChildren: animationConfiguration.duration / 2,
				},
			},
		},
		links: {
			closed: {
				x: -300,
				opacity: 0,
				transition: {
					ease: animationConfiguration.ease,
				},
			},
			opened: {
				x: 0,
				opacity: 1,
				transition: {
					ease: animationConfiguration.ease,
				},
			},
		},
	};

	return (
		<motion.nav
			className="bg-red-500 fixed px-page py-28 w-full h-screen flex flex-col justify-between gap-12 overflow-hidden"
			onAnimationComplete={() => animationCompleteCallback(true)}
			initial={false}
			animate={open ? "opened" : "closed"}
			variants={animation.container}
		>
			{/* 
            
            
                Navigation links 

            */}
			<div className="flex flex-col gap-4" onClick={cycleMenuCallback}>
				{routes.map(({ name, path }, index) => (
					<Link key={index} href={path}>
						<motion.a
							className={classnames(
								"text-light-500 font-black text-5xl",
								path === currentRoute && "border-dark-500 border-b-2"
							)}
							variants={animation.links}
						>
							{name}_
						</motion.a>
					</Link>
				))}
			</div>

			{/* 
            
            
            
                Contact container 
            
            */}
			<div className="flex flex-col gap-6 text-light-500">
				<ArrowCircleLink
					description="5 steps to connect"
					path="/connect/form"
					onClick={cycleMenuCallback}
					variants={animation.links}
				/>

				<div className="flex flex-col gap-2">
					<motion.a
						className="font-bold text-2xl"
						href="tel:+32471492451"
						variants={animation.links}
					>
						+32 (0) 471 492 451
					</motion.a>
					<motion.a
						className="font-bold text-2xl"
						href="mailto:info@newcode.be"
						variants={animation.links}
					>
						info@newcode.be
					</motion.a>
				</div>

				<motion.div
					className="flex flex-row gap-8 font-bold text-md text-dark-500"
					variants={animation.links}
				>
					<a
						href="https://www.facebook.com/newcodedevelopment"
						target="_blank"
						rel="noreferrer"
					>
						Facebook_
					</a>
					<a
						href="https://www.instagram.com/newcode.be/"
						target="_blank"
						rel="noreferrer"
					>
						Instagram_
					</a>
					<a
						href="https://www.linkedin.com/company/newcode-development"
						target="_blank"
						rel="noreferrer"
					>
						Linkedin_
					</a>
				</motion.div>
			</div>
		</motion.nav>
	);
}
