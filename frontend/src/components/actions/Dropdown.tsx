import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

type DropdownProps = HTMLMotionProps<"div"> & {
  opened: boolean;
  setOpened: (opened: boolean) => void;
  children: any;
  title: string;
  titleClassName?: string;
  childrenClassName?: string;
  theme: "light" | "dark";
};

export default function Dropdown({
  opened,
  setOpened,
  title,
  children,
  className,
  onClick,
  titleClassName,
  childrenClassName,
  theme,
  ...props
}: DropdownProps) {
  const animations = {
    container: {
      initial: {
        height: "min-content",
      },
      opened: {
        height: "max-content",
      },
    },
    children: {
      initial: {
        opacity: 0,
        height: 0,
      },
      opened: {
        opacity: 1,
        height: "fit-content",
      },
    },
    angle: {
      initial: {
        rotate: 0,
      },
      enter: {
        rotate: 135,
      },
    },
  };

  return (
    <motion.div
      {...props}
      className={twMerge("flex cursor-pointer flex-col gap-4", className)}
      onClick={(e) => {
        setOpened(!opened);
        onClick && onClick(e);
      }}
      variants={animations.container}
      initial="initial"
      animate={opened ? "opened" : "initial"}
      transition={{
        duration: 0.3,
        delay: 0.1,
        ease: "easeInOut",
      }}
    >
      <motion.div
        className={twMerge("flex flex-row items-center justify-between gap-4", titleClassName)}
      >
        <span className="text-xl font-bold">{title}</span>

        <motion.svg
          className={twMerge(
            "hidden w-4 lg:block",
            theme === "light" && "fill-dark-300",
            theme === "dark" && "fill-light-300",
          )}
          viewBox="0 0 448 512"
        >
          <motion.path
            variants={animations.angle}
            initial="initial"
            animate={opened ? "enter" : "initial"}
            d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"
          />
        </motion.svg>
      </motion.div>

      <AnimatePresence>
        {opened && (
          <motion.div
            className={childrenClassName}
            variants={animations.children}
            initial="initial"
            animate="opened"
            exit="initial"
            transition={{
              duration: 0.1,
              ease: "easeInOut",
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
