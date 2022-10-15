import Link from "next/link";
import { HTMLAttributes, useEffect, useState } from "react";
import Menu from "./Menu";
import { Logo, textColors } from "..";
import classNames from "classnames";
import { useRouter } from "next/router";
import { usePathHook } from "../config/paths";
import { useRecoilState } from "recoil";
import { bgColorState } from "utils";

interface Props extends HTMLAttributes<HTMLElement> {
	pathsHook: () => usePathHook;
}

export default function Navigation({ pathsHook, className, ...props }: Props) {
	const router = useRouter();

	const [currentRoute, setCurrentRoute] = useState("");

	const [open, setOpen] = useState(false);
	const [animationComplete, setAnimationComplete] = useState(true);

	const { mainRoutes } = pathsHook();

	const [bgColor, setBgColor] = useRecoilState(bgColorState);
	const [oldBgColor, setOldBgColor] = useState(bgColor);

	const cycleMenu = () => {
		if (open) {
			setBgColor(oldBgColor);
		}

		if (!open) {
			setOldBgColor(bgColor);
			setBgColor("light");
		}

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
			className={classNames(
				"fixed z-40 w-full left-0 top-0 transform transition-all duration-200 ease-in-out",
				className
			)}
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
					"px-page py-4 flex flex-row justify-between items-center xl:py-12 bg-dark-700 bg-opacity-20 backdrop-filter backdrop-blur-xl xl:bg-transparent xl:backdrop-blur-0",
					open && "bg-transparent"
				)}
			>
				{/* 



                    Shared Components
                */}
				<Link href="/">
					<a
						className="flex flex-row gap-3 z-10"
						onClick={open ? cycleMenu : undefined}
					>
						<Logo
							className={classNames(
								"w-6 xl:w-12 fill-red-500 text-light-500",
								open && "fill-light-500"
							)}
						/>
						<span
							className={classNames(
								"font-black text-lg xl:text-3xl",
								open && "text-light-500",
								"transition-all duration-1000 ease-in-out",
								textColors[bgColor][500]
							)}
						>
							NewCode
						</span>
					</a>
				</Link>

				{/* 



                    Mobile
                */}
				<a
					className={classNames(
						"text-light-500 z-10 text-md font-bold xl:hidden",
						"transition-all duration-1000 ease-in-out",
						textColors[bgColor][500]
					)}
					onClick={cycleMenu}
				>
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
									"font-bold xl:text-xl navigation-link",
									currentRoute == path
										? "navigation-currentRoute text-red-500"
										: "",
									"transition-all duration-1000 ease-in-out",
									textColors[bgColor][500]
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
