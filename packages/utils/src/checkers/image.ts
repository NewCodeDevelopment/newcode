import { Image } from "../types/image";

export function checkImage(image: Image | undefined): {
	src: string;
	alt: string;
} {
	return {
		src: checkImageSrc(image),
		alt: checkImageAlt(image),
	};
}

export function checkImageSrc(image: Image | undefined): string {
	return image?.url ? image.url : "/images/placeholder.jpg";
}

export function checkImageAlt(image: Image | undefined): string {
	return image?.alt ? image.alt : "placeholder-image";
}
