import dynamic from "next/dynamic";

const InitialLoader = dynamic(() =>
    import("ui").then((mod) => mod.InitialLoader),
);
const PageTransition = dynamic(() =>
    import("ui").then((mod) => mod.PageTransition),
);

export default function Root({ children }: any) {
    return (
        <>
            {process.env.NODE_ENV !== "development" && <InitialLoader />}
            {/* <PageTransition /> */}
            {children}
        </>
    );
}
