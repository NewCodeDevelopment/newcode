import { useCookieStatus } from "@/utils/hooks/cookie";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import Button from "../actions/Button";

type CookieProps = HTMLMotionProps<"div"> & {};

export default function Cookie({ className, ...props }: CookieProps) {
  const [show, setShow] = useCookieStatus();

  const animation = {
    initial: {
      y: -20,
      opacity: 0,
    },
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {show === null && (
        <motion.div
          {...props}
          className={twMerge(
            "bg-dark-700 text-light-500 fixed left-4 right-4 bottom-4 z-[35] flex flex-col gap-6 rounded-xl border-[1px] border-red-500 border-opacity-20 bg-opacity-100 p-5 backdrop-blur-xl backdrop-filter md:flex-row md:items-center md:justify-between lg:bottom-5 lg:right-8 lg:left-8 lg:px-12 lg:py-4",
            className,
          )}
          variants={animation}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span className="text-sm lg:max-w-[100ch] lg:text-lg">
            We maken gebruik van cookies om gegevens m.b.t. de prestaties en het gebruik van deze
            website te verzamelen & analyseren, om sociale netwerkfunctionaliteiten aan te bieden en
            onze content & advertenties te verbeteren en personaliseren.
            <Link href="/policy/privacy-policy" className="underline">
              Privacy Policy
            </Link>
            .
          </span>

          <div className="flex h-min w-full flex-row justify-between gap-3 md:w-max lg:gap-8">
            <Button
              size="small"
              variant="outlined"
              className="w-full lg:w-fit"
              onClick={() => setShow(false)}
            >
              Nope
            </Button>

            <Button
              size="small"
              variant="filled"
              className="w-full lg:w-fit"
              onClick={() => setShow(true)}
            >
              Yummy!
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// "accept": "Yummy, cookies!",
// "decline": "Nope, no cookies for me"

// bgColor === "dark" &&
//     ,
// bgColor === "light" && "bg-dark-600 text-light-500",
// bgColor === "red" && "bg-dark-500 text-dark-500",
