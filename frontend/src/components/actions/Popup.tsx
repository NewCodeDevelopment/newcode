import { popupState } from "@/utils/states/popup";
import { AnimatePresence, motion } from "framer-motion";
import { useRecoilState } from "recoil";

export default function Popup() {
  const [state, setState] = useRecoilState(popupState);

  const animations = {
    background: {
      initial: {
        opacity: 0,
      },
      enter: {
        opacity: 1,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {state.show && (
        <motion.div
          className="px-page py-page bg-dark-700 fixed left-0 right-0 top-0 bottom-0 z-50 grid grid-cols-1 place-items-center bg-opacity-20 backdrop-blur-xl backdrop-filter"
          variants={animations.background}
          initial="initial"
          animate="enter"
          exit="initial"
        >
          <div
            className="absolute left-0 right-0 top-0 bottom-0 -z-10"
            onClick={() => setState({ show: false, children: null })}
          />
          {state.children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
