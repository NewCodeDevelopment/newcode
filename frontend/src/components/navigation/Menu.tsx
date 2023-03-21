import { useContactInformation } from "@/config/contact";
import { useWindow } from "@/utils/hooks/window";
import { IRoute } from "@/utils/types/paths";
import { motion } from "framer-motion";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import ArrowCircleLink from "../actions/ArrowCircleLink";

type MenuProps = {
  routes: IRoute[];
  open: boolean;
  currentRoute: string;
  cycleMenuCallback: () => void;
  animationCompleteCallback: (arg0: boolean) => void;
};

export function Menu({
  routes,
  open,
  currentRoute,
  animationCompleteCallback,
  cycleMenuCallback,
}: MenuProps) {
  const { height } = useWindow();

  const { socials, contact } = useContactInformation();

  function currentRouteHandler(path: string) {
    const currentPath = currentRoute.split("/").slice(0, 2).join("/");
    return currentPath === path;
  }

  const animationConfiguration = {
    duration: 0.7,
    ease: [1, 0.165, 0.165, 1],
  };

  const animation = {
    container: {
      closed: {
        left: "-120vw",
        transition: {
          ease: animationConfiguration.ease,
          delay: animationConfiguration.duration / 2,
          duration: animationConfiguration.duration,
          staggerChildren: 0.1,
        },
      },
      opened: {
        left: 0,
        transition: {
          ease: animationConfiguration.ease,
          duration: animationConfiguration.duration,
          staggerChildren: 0.1,
          delayChildren: animationConfiguration.duration / 2,
        },
      },
    },
    links: {
      closed: {
        x: -300,
        opacity: 0,
        transition: {
          ease: animationConfiguration.ease,
        },
      },
      opened: {
        x: 0,
        opacity: 1,
        transition: {
          ease: animationConfiguration.ease,
        },
      },
    },
  };

  return (
    <motion.nav
      className="px-page fixed z-0 flex h-screen w-full flex-col justify-between gap-12 overflow-hidden bg-red-500 pt-28 pb-16"
      onAnimationComplete={() => animationCompleteCallback(true)}
      style={{
        height: height,
      }}
      initial={false}
      animate={open ? "opened" : "closed"}
      variants={animation.container}
    >
      {/* 
        
        
            Navigation links 

        */}
      <div className="flex flex-col gap-2" onClick={cycleMenuCallback}>
        {routes.map(({ name, path }, index) => (
          <Link key={index} href={path} legacyBehavior>
            <motion.a
              className={twMerge(
                "text-light-500 pb-2 text-4xl font-extrabold",
                currentRouteHandler(path) && "text-dark-500",
              )}
              variants={animation.links}
            >
              {name}_
            </motion.a>
          </Link>
        ))}
      </div>

      {/* 
        
        
        
            Contact container 
        
        */}
      <div className="text-light-500 flex flex-col gap-5">
        <ArrowCircleLink
          description="5 steps to connect"
          path="/connect/form"
          onClick={cycleMenuCallback}
          variants={animation.links}
        />

        <div className="flex flex-col gap-2">
          <motion.a
            className="text-xl font-bold xl:text-2xl"
            href={contact.phone.href}
            variants={animation.links}
          >
            {contact.phone.text}
          </motion.a>
          <motion.a
            className="text-xl font-bold xl:text-2xl"
            href={contact.email.href}
            variants={animation.links}
          >
            {contact.email.text}
          </motion.a>
        </div>

        <motion.div
          className="text-md text-dark-500 flex flex-row gap-8 font-bold"
          variants={animation.links}
        >
          {socials.map(({ name, url }, index) => (
            <a key={index} href={url} target="_blank" rel="noreferrer">
              {name}_
            </a>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  );
}
