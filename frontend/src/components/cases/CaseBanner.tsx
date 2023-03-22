import { checkImage } from "@/utils/checkers/image";
import { useWindow } from "@/utils/hooks/window";
import { HTMLMotionProps, motion } from "framer-motion";
import Image from "next/legacy/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Case } from "schema";
import { twMerge } from "tailwind-merge";
import ArrowLink from "../actions/ArrowLink";
import Section from "../sections/Section";
import Heading from "../typography/Heading";
import Paragraph from "../typography/Paragraph";

type CaseBannerProps = HTMLMotionProps<"section"> & {
  case: Case;
};

export default function CaseBanner({
  case: { title, short, slug, bannerImage },
  className,
  ...props
}: CaseBannerProps) {
  const previousScroll = useRef<number>(0);
  const { width } = useWindow();

  const { inView, ref } = useInView({
    threshold: 0.1,
  });

  const [y, setY] = useState(0);

  useEffect(() => {
    function handleScroll(e: Event) {
      const { scrollY } = window;

      if (inView) {
        const direction = scrollY - previousScroll.current;
        const scrollAmount = typeof width === "number" ? Math.abs(width / 1000) : 0.5;

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
  }, [inView, width]);

  return (
    <Section
      {...props}
      ref={ref}
      className={twMerge(
        "px-page relative flex flex-col items-start justify-end overflow-hidden pt-[50vh] pb-40 lg:py-64",
        className,
      )}
      mobileScreen
    >
      <Image
        {...checkImage(bannerImage)}
        layout="fill"
        objectFit="cover"
        className="top-0 left-0 -z-30"
      />

      <div
        className="bg-dark-700 absolute inset-0 -z-10 h-full w-full bg-opacity-40 backdrop-blur-[6px] backdrop-filter"
        style={{ width }}
      />

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
            className="text-dark-500 absolute left-[30vw] -z-20 text-5xl font-bold opacity-10 lg:text-[750%]"
            style={{
              left: `${coordinates.left}%`,
              top: `calc(${coordinates.top}% + ${y * 2}px)`,
              rotate: `${rotate}deg`,
            }}
          >
            {item}
          </span>
        );
      })}

      <motion.div className="z-10 flex flex-col gap-4" style={{ y }}>
        <Heading type="h3">Case Study_</Heading>
        <Heading type="h2">{title + "_"}</Heading>
        <Paragraph size="small">{short}</Paragraph>
        <ArrowLink description="Bekijk case study" href={"/case/" + slug?.current} />
      </motion.div>
    </Section>
  );
}
