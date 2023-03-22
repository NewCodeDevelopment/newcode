import { bgColorState } from "@/utils/states/bgColor";
import { AnimatePresence, motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { twMerge } from "tailwind-merge";

type SectionIndicatorProps = {
  length: number;
  scrollToIndex: (index: number) => Promise<boolean>;
  currentIndex: number;
};

export default function SectionIndicator({
  length,
  scrollToIndex,
  currentIndex,
}: SectionIndicatorProps) {
  const [bgColor] = useRecoilState(bgColorState);

  return (
    <motion.div className="lg:py-page hidden lg:fixed lg:right-16 lg:top-0 lg:bottom-0 lg:z-40 lg:flex lg:flex-col lg:justify-center lg:gap-10 xl:gap-12">
      {length > 1 &&
        Array.from({ length: length }, (_, i) => i).map((i) => (
          <AnimatePresence mode="wait" key={i}>
            <motion.div
              onClick={() => scrollToIndex(i)}
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
                "aspect-square h-3 w-3 cursor-pointer rounded-full xl:h-4 xl:w-4",
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
