import Link from "next/link";
import { HTMLAttributes, useEffect, useState } from "react";
import Menu from "./Menu";
import { Logo } from "..";
import classNames from "classnames";
import { useRouter } from "next/router";
import { usePathHook } from "../config/paths";

interface Props extends HTMLAttributes<HTMLElement> {
	pathsHook: () => usePathHook;
}

export default function Navigation({ pathsHook, className, ...props }: Props) {
	const router = useRouter();

	const [currentRoute, setCurrentRoute] = useState("");

	const [open, setOpen] = useState(false);
	const [animationComplete, setAnimationComplete] = useState(true);

	const { mainRoutes } = pathsHook();

	const cycleMenu = () => {
		if (!animationComplete) return;
		setAnimationComplete(false);
		setOpen(!open);
	};

	useEffect(() => {
		setCurrentRoute(router.pathname);
	}, [router.pathname]);

	return (
		<header
			{...props}
			className={classNames("fixed z-40 w-full left-0 top-0", className)}
		>
			{/* 
            
            
                Mobile Menu container
            */}
			<Menu
				routes={mainRoutes}
				currentRoute={currentRoute}
				open={open}
				cycleMenuCallback={cycleMenu}
				animationCompleteCallback={setAnimationComplete}
			/>

			{/* 
            
            
            
            
                Navigation Bar 
            */}
			<div
				className={classNames(
					"px-page py-5 flex flex-row justify-between items-center bg-dark-700 bg-opacity-20 backdrop-filter backdrop-blur-xl",
					open && "bg-transparent"
				)}
			>
				{/* 



                    Shared Components
                */}
				<Link href="/">
					<a
						className="flex flex-row gap-3"
						onClick={open ? cycleMenu : undefined}
					>
						<Logo
							className={classNames(
								"w-8 fill-red-500 text-light-500",
								open && "fill-light-500"
							)}
						/>
						<span className="font-black text-xl text-light-500">NewCode</span>
					</a>
				</Link>

				{/* 



                    Mobile
                */}
				<a className="text-light-500 font-bold xl:hidden" onClick={cycleMenu}>
					{open ? "Close" : "Navigate"}_
				</a>

				{/* 



                    Desktop
                */}
				<div className="hidden xl:flex xl:flex-row xl:gap-16">
					{mainRoutes.map(({ name, path }, index) => (
						<Link key={index} href={path}>
							<a
								className={classNames(
									"text-light-500 font-bold pb-4",
									currentRoute == path ? "border-b-red-500 border-b-2" : ""
								)}
							>
								{name}_
							</a>
						</Link>
					))}
				</div>
			</div>
		</header>
	);
}
