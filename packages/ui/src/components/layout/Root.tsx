import dynamic from "next/dynamic";
import { useRecoilState } from "recoil";
import { scrollState } from "utils";

const InitialLoader = dynamic(() => import("..").then((mod) => mod.InitialLoader));

export default function Root({ children }: any) {
    const [scroll] = useRecoilState(scrollState);

    return (
        <>
            {process.env.NODE_ENV !== "development" && <InitialLoader />}

            {children}

            {!scroll.enabled && (
                <style
                    // @ts-ignore
                    jsx
                    global
                >
                    {`
                        body,
                        html {
                            overflow: hidden !important;
                        }
                    `}
                </style>
            )}
        </>
    );
}
