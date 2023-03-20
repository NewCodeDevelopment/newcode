import CircleArrow from "@/icons/actions/CircleArrow";
import { HTMLMotionProps, motion } from "framer-motion";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type ArrowCircleLinkProps = HTMLMotionProps<"a"> & {
  description: string;
  path: string;
  inner?: boolean;
  variants?: any;
  onClick?: any;
  bgColor?: "light" | "dark" | "red";
};

export default function ArrowCircleLink({
  description,
  path,
  variants,
  onClick,
  bgColor = "dark",
  className,
}: ArrowCircleLinkProps) {
  const bgColors = {
    dark: "fill-dark-700",
    red: "fill-red-500",
    light: "fill-red-500",
  };

  return (
    <Link href={path} passHref legacyBehavior>
      <motion.a
        className={twMerge("flex flex-row items-center gap-3", className)}
        variants={variants}
        onClick={onClick}
      >
        <CircleArrow className={twMerge("w-8 lg:w-16", bgColors[bgColor])} />
        <span className="text-light-500 text-xl font-extrabold lg:text-3xl">{description}</span>
      </motion.a>
    </Link>
  );
}
