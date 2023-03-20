import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

type StepsProps = HTMLMotionProps<"div"> & {
  length: number;
  currentIndex: number;
  bgColor: string;
};

export default function Steps({ length, currentIndex, bgColor, className, ...props }: StepsProps) {
  return (
    <motion.div {...props} className={twMerge("flex flex-row justify-center gap-10", className)}>
      {length > 1 &&
        Array.from({ length: length }, (_, i) => i).map((i) => (
          <AnimatePresence mode="wait" key={i}>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                scale: currentIndex === i ? 2 : 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0,
                y: -20,
              }}
              transition={{
                duration: 0.2,
                delay: i * 0.1,
              }}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.2 },
              }}
              whileTap={{
                scale: 0.8,
                transition: { duration: 0.2 },
              }}
              className={twMerge(
                "aspect-square h-2 w-2 rounded-full xl:h-2 xl:w-2",
                i !== currentIndex && "bg-opacity-25",
                bgColor === "dark" && "bg-light-600",
                bgColor === "light" && "bg-dark-600",
                bgColor === "red" && "bg-dark-600",
              )}
            >
              &nbsp;
            </motion.div>
          </AnimatePresence>
        ))}
    </motion.div>
  );
}
