import Link from "next/link";
import { HTMLAttributes, useEffect, useState } from "react";
import Menu from "./Menu";
import { Logo, textColors } from "..";
import classNames from "classnames";
import { useRouter } from "next/router";
import { usePathHook } from "../config/paths";
import { useRecoilState } from "recoil";
import { bgColorState } from "utils";
import { useTranslation } from "next-i18next";

interface Props extends HTMLAttributes<HTMLElement> {
	pathsHook: () => usePathHook;
}

export default function Navigation({ pathsHook, className, ...props }: Props) {
	const router = useRouter();

	const { t } = useTranslation("common", { keyPrefix: "navigation" });

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
			setBgColor("dark");
		}

		if (!animationComplete) return;
		setAnimationComplete(false);
		setOpen(!open);
	};

	function currentRouteHandler(path: string) {
		const currentPath = router.route.split("/").slice(0, 2).join("/");
		return currentPath === path;
	}

	useEffect(() => {
		setCurrentRoute(router.pathname);
	}, [router.pathname]);

	return (
		<header
			{...props}
			className={classNames(
				"fixed left-0 top-0 z-40 w-full transform transition-all duration-200 ease-in-out",
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
					"px-page bg-dark-700 flex flex-row items-center justify-between bg-opacity-20 py-4 backdrop-blur-xl backdrop-filter lg:bg-transparent lg:backdrop-blur-0 xl:py-12",
					open && "bg-transparent"
				)}
			>
				{/* 



                    Shared Components
                */}
				<Link href="/">
					<a
						className="z-10 flex flex-row items-center gap-3"
						onClick={open ? cycleMenu : undefined}
					>
						<Logo
							className={classNames(
								"text-light-500 w-6  xl:w-12",
								open && "fill-light-500",
								bgColor === "dark" && "fill-red-500",
								bgColor === "light" && "fill-red-500",
								bgColor === "red" && "fill-dark-500"
							)}
						/>
						<span
							className={classNames(
								"text-lg font-extrabold xl:text-3xl",
								open && "text-light-500",
								"transition-all duration-1000 ease-in-out",
								bgColor === "light" && "text-dark-500",
								bgColor === "dark" && "text-light-500",
								bgColor === "red" && "text-dark-500"
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
						"text-light-500 text-md z-10 font-bold xl:hidden",
						"transition-all duration-1000 ease-in-out",
						bgColor === "light" && "text-dark-500",
						bgColor === "dark" && "text-light-500",
						bgColor === "red" && "text-dark-500"
					)}
					onClick={cycleMenu}
				>
					{open ? t("cycleMenu.close") : t("cycleMenu.open")}_
				</a>

				{/* 



                    Desktop
                */}
				<div className="hidden xl:flex xl:flex-row xl:gap-16">
					{mainRoutes.map(({ name, path }, index) => (
						<Link key={index} href={path}>
							<a
								className={classNames(
									"font-bold transition-all duration-1000 ease-in-out xl:text-xl",
									bgColor === "light" && "navigation-link-red text-dark-500",
									bgColor === "dark" && "navigation-link-red text-light-500",
									bgColor === "red" && "navigation-link-dark text-dark-500",

									currentRouteHandler(path) &&
										bgColor === "light" &&
										"navigation-currentRoute-red text-red-500",
									currentRouteHandler(path) &&
										bgColor === "dark" &&
										"navigation-currentRoute-red text-red-500",
									currentRouteHandler(path) &&
										bgColor === "red" &&
										"navigation-currentRoute-dark text-light-500"
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
