import Spinner from "./Spinner";

export default function PageLoader() {
	return (
		<div className="min-h-screen w-full flex flex-col justify-center items-center bg-light-600">
			<Spinner className="w-24 md:w-40" />
		</div>
	);
}
