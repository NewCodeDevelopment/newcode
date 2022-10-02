import { Image } from "./image";

export interface Case {
	path: string;
	title: string;
	description: {
		short: string;
		main: string;
		problem: string;
		solution: string;
	};
	client: string;
	sector: string;
	services: string;
	type: string;
	year: string;
	productUrl: string;
	bannerImage: Image;
	images: Image[];
}
