import {
  buttonColors,
  buttonShape,
  buttonShapes,
  buttonSize,
  buttonVariant,
} from "@/config/button";
import { Color } from "@/config/colors";
import { fontWeights, FontWeights } from "@/config/typography";
import { HTMLMotionProps, motion } from "framer-motion";
import Link from "next/link";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type HyperLinkProps = HTMLMotionProps<"a"> & {
  children: any;
  href: string;
  color?: Color;
  variant?: buttonVariant;
  size?: buttonSize;
  shape?: buttonShape;
  weight?: FontWeights;
};

export const HyperLink = forwardRef<HTMLAnchorElement, HyperLinkProps>(
  (
    {
      href,
      size = "medium",
      color = "red",
      shape = "pill",
      variant = "filled",
      weight = "bold",
      target,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const animation = {
      initial: {
        scale: 1,
        opacity: 1,
      },
      clicked: {
        scale: [0.99, 1.01],
        transition: {
          duration: 0.2,
          stiffness: 10,
          type: "spring",
        },
      },
      hover: {
        scale: 1.05,
        transition: {
          duration: 0.2,
          type: "ease-in-out",
        },
      },
    };

    return (
      <Link href={href} legacyBehavior>
        <motion.a
          {...props}
          href={href}
          ref={ref}
          target={target}
          className={twMerge(
            buttonColors(variant, color),
            buttonShapes(shape, size),
            fontWeights(weight),
            "h-fit w-fit cursor-pointer",
            className,
          )}
          variants={animation}
          initial="initial"
          whileTap="clicked"
          whileHover="hover"
        >
          {children}
        </motion.a>
      </Link>
    );
  },
);

HyperLink.displayName = "HyperLink";
export default HyperLink;
