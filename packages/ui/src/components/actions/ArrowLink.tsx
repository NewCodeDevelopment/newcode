import Link from "next/link";
import { Arrow, Color, fillColors, textColors } from "../..";
import classNames from "classnames";
import { motion, HTMLMotionProps } from "framer-motion";

interface Props extends HTMLMotionProps<"a"> {
    href: string;
    description: string;
    color?: Color;
    target?: string;
}

export function ArrowLink({
    description,
    href,
    color = "light",
    className,
    target,
    ...props
}: Props) {
    return (
        <Link href={href} target={target} legacyBehavior>
            <motion.a
                {...props}
                className={classNames(
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
