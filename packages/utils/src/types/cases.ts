import { Image } from "./image";

export interface Case {
	handle: string;
	title: string;
	description: {
		short: string;
		main: string;
		problem: string;
		solution: string;
	};
	client: string;
	sector: string;
	service: string;
	type: string;
	year: string;
	productUrl: string;
	bannerImage: Image;
	images: Image[];
}
