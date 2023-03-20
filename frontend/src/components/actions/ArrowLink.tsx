import { Color, fillColors, textColors } from "@/config/colors";
import Arrow from "@/icons/actions/Arrow";
import { HTMLMotionProps, motion } from "framer-motion";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type ArrowLinkProps = HTMLMotionProps<"a"> & {
  href: string;
  description: string;
  color?: Color;
  target?: string;
};

export default function ArrowLink({
  description,
  href,
  color = "light",
  className,
  target,
  ...props
}: ArrowLinkProps) {
  return (
    <Link href={href} target={target} legacyBehavior>
      <motion.a
        {...props}
        className={twMerge(
          "flex cursor-pointer flex-row items-center gap-4 text-xl font-bold",
          textColors[color][700],
          fillColors[color][500],
          className,
        )}
        whileHover={{
          gap: "25px",
        }}
      >
        {description} <Arrow className="w-12" direction="left-to-right" />
      </motion.a>
    </Link>
  );
}
