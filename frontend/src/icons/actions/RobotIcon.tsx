import { FramerMotionSVGProps } from "@/utils/types/svg";
import { motion } from "framer-motion";

export default function RobotIcon(props: FramerMotionSVGProps) {
  return (
    <motion.svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      animate={{
        y: [10, 0, 10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      <path d="M464 96h-288C131.8 96 96 131.8 96 176V448c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V176C544 131.8 508.3 96 464 96zM256 416H192v-32h64V416zM224 296C201.9 296 184 278.1 184 256S201.9 216 224 216S264 233.9 264 256S246.1 296 224 296zM352 416H288v-32h64V416zM448 416h-64v-32h64V416zM416 296c-22.12 0-40-17.88-40-40S393.9 216 416 216S456 233.9 456 256S438.1 296 416 296z" />
      <path
        className="opacity-40"
        d="M41.38 233.4C35.38 239.4 32 247.5 32 256v128c0 8.5 3.375 16.62 9.375 22.62S55.5 416 64 416h32V224H64C55.5 224 47.38 227.4 41.38 233.4zM598.6 233.4C592.6 227.4 584.5 224 576 224h-32v192h32c8.5 0 16.62-3.375 22.62-9.375S608 392.5 608 384V256C608 247.5 604.6 239.4 598.6 233.4zM320 0C302.4 0 288 14.38 288 32v64h64V32C352 14.38 337.6 0 320 0zM192 416h64v-32H192V416zM288 416h64v-32H288V416zM384 416h64v-32h-64V416z"
      />
    </motion.svg>
  );
}
