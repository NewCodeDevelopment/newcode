export default function ErrorPage() {
    return <></>;
}

export async function getServerSideProps() {
    throw new Error("Internal Server Error");
}
