import { FramerMotionSVGProps } from "@/utils/types/svg";
import { motion } from "framer-motion";
import { ComponentType, useState } from "react";

type ToolCardProps = {
  index: number;
  icon: ComponentType<FramerMotionSVGProps>;
  title: string;
};

export default function ToolCard(props: ToolCardProps) {
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
        ease: "easeOut",
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
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onTap={() => setHovered(!hovered)}
      {...cardAnimations}
    >
      {hovered ? (
        <motion.span className="text-light-500 text-xl font-bold" {...iconAnimations}>
          {props.title}
        </motion.span>
      ) : (
        <props.icon className="fill-light-500 stroke-dark-500 min-w-20 w-1/2" {...iconAnimations} />
      )}
    </motion.div>
  );
}
