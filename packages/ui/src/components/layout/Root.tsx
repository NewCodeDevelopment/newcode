import dynamic from "next/dynamic";
import { useRecoilState } from "recoil";
import { scrollState } from "utils";

const InitialLoader = dynamic(() =>
	import("..").then((mod) => mod.InitialLoader)
);
// const PageTransition = dynamic(() =>
//     import("ui").then((mod) => mod.PageTransition),
// );

export default function Root({ children }: any) {
	const [scroll] = useRecoilState(scrollState);

	return (
		<>
			{process.env.NODE_ENV !== "development" || (true && <InitialLoader />)}
			{/* <PageTransition /> */}
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
