import { Image, Maybe } from "schema";

export function checkImage(image: Image | Maybe<Image> | undefined): {
  src: string;
  alt: string;
} {
  return {
    src: checkImageSrc(image),
    alt: checkImageAlt(image),
  };
}

export function checkImageSrc(image: Image | Maybe<Image> | undefined): string {
  return image?.asset?.url ? image.asset.url : "/images/placeholder.jpg";
}

export function checkImageAlt(image: Image | Maybe<Image> | undefined): string {
  return image?.asset?.altText ? image.asset.altText : "placeholder-image";
}
