import classNames from "classnames";
import { AnimatePresence, motion, HTMLMotionProps } from "framer-motion";
import { PlusIcon } from "../..";

interface Props extends HTMLMotionProps<"div"> {
    opened: boolean;
    setOpened: (opened: boolean) => void;
    children: any;
    title: string;
    titleClassName?: string;
    childrenClassName?: string;
    theme: "light" | "dark";
}

export function Dropdown({
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
}: Props) {
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
            className={classNames("flex cursor-pointer flex-col gap-4", className)}
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
                className={classNames(
                    "flex flex-row items-center justify-between gap-4",
                    titleClassName,
                )}
            >
                <span className="text-xl font-bold">{title}</span>

                <PlusIcon
                    className={classNames(
                        "hidden w-4 lg:block",
                        theme === "light" && "fill-dark-300",
                        theme === "dark" && "fill-light-300",
                    )}
                    variants={animations.angle}
                    initial="initial"
                    animate={opened ? "enter" : "initial"}
                />
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
