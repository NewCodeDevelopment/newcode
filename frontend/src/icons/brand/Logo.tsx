import { Color } from "@/config/colors";
import { SVGProps } from "@/utils/types/svg";

type LogoProps = SVGProps & {
  colors: {
    symbol: Color;
    text: Color;
  };
};

export function Logo({ colors, ...props }: LogoProps) {
  const variants: {
    symbol: Record<Color, string>;
    text: Record<Color, string>;
  } = {
    symbol: {
      red: "fill-red-500",
      dark: "fill-dark-500",
      light: "fill-light-500",
      transparent: "fill-transparent",
    },
    text: {
      red: "fill-red-500",
      dark: "fill-dark-500",
      light: "fill-light-500",
      transparent: "fill-transparent",
    },
  };

  return (
    <svg {...props} viewBox="0 0 616.93 204.75">
      {/* Text */}
      <g className={variants.text[colors.text]}>
        <path d="M220.39,77.74h11.43v58h-8.7l-24.85-35.46v35.46H186.83v-58h8.69l24.87,35.34Z" />
        <path d="M249,119.19q2,7.38,11.07,7.37c3.87,0,6.79-1.3,8.79-3.92l8.15,4.71q-5.81,8.4-17.1,8.39-9.74,0-15.62-5.88A20.11,20.11,0,0,1,238.36,115a20.25,20.25,0,0,1,5.81-14.79q5.81-5.92,14.9-5.92a18.71,18.71,0,0,1,14.25,6A20.71,20.71,0,0,1,278.93,115a23.93,23.93,0,0,1-.4,4.16Zm-.15-7.85h20a9.48,9.48,0,0,0-3.58-6,10.19,10.19,0,0,0-6.16-2,10.59,10.59,0,0,0-6.74,2.08A9.87,9.87,0,0,0,248.8,111.34Z" />
        <path d="M332.51,94.32h10.26l-12.08,41.42H320.21l-7.83-25.1-7.84,25.1H294.06L281.89,94.32h11.3l7.09,25.43,7.55-25.43h10.11l7.55,25.52Z" />
        <path d="M377.57,135.74q-12.58,0-20.8-8.36a28.33,28.33,0,0,1-8.2-20.64,28.27,28.27,0,0,1,8.2-20.67q8.21-8.32,20.8-8.33a28.35,28.35,0,0,1,14,3.55,25.88,25.88,0,0,1,10,9.6l-9.48,5.49a14.76,14.76,0,0,0-5.9-5.85,17.45,17.45,0,0,0-8.6-2.11q-8.13,0-13.11,5.1t-5,13.22q0,8.06,5,13.15t13.11,5.1a17.66,17.66,0,0,0,8.64-2.11,14.26,14.26,0,0,0,5.86-5.78l9.48,5.5a26,26,0,0,1-10,9.6A28.38,28.38,0,0,1,377.57,135.74Z" />
        <path d="M443.88,129.74a20.82,20.82,0,0,1-29.46-29.42,20.82,20.82,0,0,1,29.46,29.42Zm-22.32-6.94a10.18,10.18,0,0,0,7.57,3.06,10.34,10.34,0,0,0,7.61-3.06,11.39,11.39,0,0,0,0-15.54,10.34,10.34,0,0,0-7.61-3.06,10.18,10.18,0,0,0-7.57,3.06,11.51,11.51,0,0,0,0,15.54Z" />
        <path d="M490,77.74h10.69v58H490v-4.88c-3.14,4-7.62,4.88-13.41,4.88-5.58,0-10.35-.95-14.29-5.17A21.9,21.9,0,0,1,456.39,115c0-6.13,1.13-10.34,5.08-14.57a20.52,20.52,0,0,1,15.14-6.14c5.79,0,10.27.86,13.41,4.89Zm-19.67,45.7a11.18,11.18,0,0,0,8.24,3.27,11.06,11.06,0,0,0,8.21-3.27,12.56,12.56,0,0,0,0-16.82,11.06,11.06,0,0,0-8.21-3.27,11.18,11.18,0,0,0-8.24,3.27,12.45,12.45,0,0,0,0,16.82Z" />
        <path d="M518,119.18q2,7.36,11.06,7.37,5.81,0,8.78-3.92l8.16,4.7q-5.81,8.4-17.1,8.39-9.72,0-15.6-5.88A20.1,20.1,0,0,1,507.37,115a20.25,20.25,0,0,1,5.81-14.78q5.8-5.92,14.9-5.92a18.67,18.67,0,0,1,14.23,6A20.67,20.67,0,0,1,547.92,115a23.88,23.88,0,0,1-.39,4.16Zm-.16-7.85h20a9.46,9.46,0,0,0-3.57-6,10.25,10.25,0,0,0-6.15-2,10.69,10.69,0,0,0-6.75,2.08A10,10,0,0,0,517.8,111.33Z" />
      </g>
      {/* Symbol */}
      <g className={variants.symbol[colors.symbol]}>
        <path d="M159.42,102.65,107.94,69.44a3,3,0,0,0-4.5,2.54V98.27a3,3,0,0,1-3,3H71.9a3,3,0,0,0-3,3v28.56a3,3,0,0,0,3,3h28.57a3,3,0,0,0,3-3V106.49a3,3,0,0,1,4.5-2.54h0l48.42,31.37a3,3,0,0,0,4.5-2.55V105.2A3,3,0,0,0,159.42,102.65Z" />
      </g>
      {/* Copyright */}
      {/* <path d="M73.93,79a5,5,0,1,1,5-5A5,5,0,0,1,73.93,79Zm0-9.36A4.36,4.36,0,1,0,78.29,74,4.36,4.36,0,0,0,73.93,69.65Z" /> */}
      {/* <path d="M75.14,74.48h.65l0,.14a1.8,1.8,0,0,1-.57,1.2,1.83,1.83,0,0,1-1.26.42A1.7,1.7,0,0,1,73,76a1.75,1.75,0,0,1-.66-.78,2.71,2.71,0,0,1-.23-1.13v-.6a2.58,2.58,0,0,1,.23-1.14,1.72,1.72,0,0,1,.66-.79,1.8,1.8,0,0,1,1-.28,1.66,1.66,0,0,1,1.8,1.62l0,.14h-.65l0-.11A1,1,0,0,0,74,71.83a1.07,1.07,0,0,0-.9.42,1.89,1.89,0,0,0-.34,1.21V74a1.91,1.91,0,0,0,.33,1.19,1,1,0,0,0,.88.43,1.21,1.21,0,0,0,.84-.26,1.27,1.27,0,0,0,.34-.8Z" /> */}
    </svg>
  );
}
