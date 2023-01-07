import { ComponentType, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FramerMotionSVGProps } from "utils";

interface Props {
    index: number;
    icon: ComponentType<FramerMotionSVGProps>;
    title: string;
}

export function ToolCard(props: Props) {
    const [hovered, setHovered] = useState(false);

    const cardAnimations = {
        initial: {
            opacity: 0,
            y: -20,
        },
        whileInView: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: props.index * 0.1,
            },
        },
        whileHover: {
            scale: 1.05,
        },
    };

    const iconAnimations = {
        initial: {
            opacity: 0,
            y: -20,
        },
        whileInView: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <motion.div
            className="bg-dark-500 flex aspect-square h-full w-full cursor-pointer flex-col items-center justify-center rounded-xl"
            {...cardAnimations}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
        >
            {hovered ? (
                <motion.span className="text-light-500 text-xl font-bold" {...iconAnimations}>
                    {props.title}
                </motion.span>
            ) : (
                <props.icon className="fill-light-500 stroke-dark-500 w-1/2" {...iconAnimations} />
            )}
        </motion.div>
    );
}
