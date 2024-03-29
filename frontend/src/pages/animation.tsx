import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ReactElement, useState } from "react";
import { twMerge } from "tailwind-merge";

const MainLayout = dynamic(() => import("@/components/layouts/MainLayout"));
const Section = dynamic(() => import("@/components/sections/Section"));
const LandingLogo = dynamic(() => import("@/icons/brand/LandingLogo"));
/**
 *
 *
 *
 *
 *
 */
export default function AnimationPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = 3;

  return (
    <>
      <Section bg="dark" className="relative h-screen pb-52 z-0" mobileScreen align="center">
        <LandingLogo
          selectedStyle={currentIndex}
          className="-z-10 col-start-1 row-start-1 lg:w-3/4 2xl:w-1/2"
        />

        <motion.div className="absolute left-0 right-0 bottom-40 mx-auto flex cursor-pointer flex-row justify-center gap-10 lg:bottom-20">
          {length > 1 &&
            Array.from({ length: length }, (_, i) => i).map((i) => (
              <AnimatePresence mode="wait" key={i}>
                <motion.div
                  onClick={() => setCurrentIndex(i)}
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
                    "bg-light-600 aspect-square h-2 w-2 rounded-full xl:h-4 xl:w-4",
                    i !== currentIndex && "bg-opacity-25",
                  )}
                >
                  &nbsp;
                </motion.div>
              </AnimatePresence>
            ))}
        </motion.div>
      </Section>
    </>
  );
}
/**
 *
 *
 *
 *
 *
 */
AnimationPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout footer={false}>{page}</MainLayout>;
};
