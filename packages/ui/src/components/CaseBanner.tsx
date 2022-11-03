import { Case, checkImage, DESKTOP_MIN_WIDTH, useWindow } from "utils";
import Image from "next/image";
import { Heading, Paragraph, ArrowLink, Section } from "..";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";
import { motion, HTMLMotionProps } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";

interface Props extends HTMLMotionProps<"section"> {
	case: Case;
}

export default function CaseBanner({
	case: { title, description, path, bannerImage },
	className,
	...props
}: Props) {
	const { t } = useTranslation("pages", { keyPrefix: "case" });

	const previousScroll = useRef<number>(0);
	const { width, height } = useWindow();

	const { inView, ref } = useInView({
		threshold: 0.1,
	});

	const [y, setY] = useState(0);

	useEffect(() => {
		function handleScroll(e: Event) {
			const { scrollY } = window;

			if (inView) {
				const direction = scrollY - previousScroll.current;
				const scrollAmount = width < DESKTOP_MIN_WIDTH ? 0.5 : 0.2;

				if (direction > 0) {
					setY((y) => y + scrollAmount);
				}

				if (direction < 0) {
					setY((y) => y - scrollAmount);
				}
			}

			// if (!inView) setY(0);

			previousScroll.current = scrollY;
		}

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [inView]);

	return (
		<Section
			{...props}
			ref={ref}
			className={classNames(
				"px-page relative flex flex-col items-start justify-end overflow-hidden pt-[50vh] pb-40 lg:py-64",
				className
			)}
			style={{ height: "100vh" }}
		>
			<Image
				{...checkImage(bannerImage)}
				layout="fill"
				width={100}
				height={100}
				objectFit="cover"
				className="top-0 left-0 -z-30"
			/>

			<div className="bg-dark-700 absolute top-0 left-0 -z-10 h-full w-full bg-opacity-30 backdrop-blur-[6px] backdrop-filter" />

			{[
				{
					item: "</>",
					coordinates: {
						left: 15,
						top: 10,
					},
					rotate: -20,
				},
				{
					item: "{ }",
					coordinates: {
						left: 55,
						top: -5,
					},
					rotate: 10,
				},
				{
					item: "[ ]",
					coordinates: {
						left: 25,
						top: 65,
					},
					rotate: -10,
				},
				{
					item: "!=",
					coordinates: {
						left: 70,
						top: 55,
					},
					rotate: 10,
				},
				{
					item: "//",
					coordinates: {
						left: 85,
						top: 30,
					},
					rotate: 0,
				},
			].map(({ item, coordinates, rotate }, index) => {
				return (
					<span
						key={index}
						className="text-light-500 absolute left-[30vw] -z-20 text-5xl font-bold opacity-30 lg:text-[750%]"
						style={{
							left: (Number(width) / 100) * coordinates.left,
							top: (Number(height) / 100) * coordinates.top + y * 2,
							rotate: `${rotate}deg`,
						}}
					>
						{item}
					</span>
				);
			})}

			<motion.div className="z-10 flex flex-col gap-4 self-end" style={{ y }}>
				<Heading type="h3">{t("title")}_</Heading>
				<Heading type="h2">{title + "_"}</Heading>
				<Paragraph size="small">{description.short}</Paragraph>
				<ArrowLink description={t("link")} href={"/work/case/" + path} />
			</motion.div>
		</Section>
	);
}
