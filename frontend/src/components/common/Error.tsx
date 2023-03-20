import RobotIcon from "@/icons/actions/RobotIcon";
import { useDevice } from "@/utils/hooks/device";
import { useWindow } from "@/utils/hooks/window";
import { loadingState } from "@/utils/states/loading";
import Image from "next/legacy/image";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import Section from "../sections/Section";
import Heading from "../typography/Heading";

type ErrorProps = {
  statusCode?: number;
  title: string;
};

export default function Error({ title, statusCode }: ErrorProps) {
  const [_, setLoading] = useRecoilState(loadingState);
  const { height } = useWindow();
  const device = useDevice();

  useEffect(() => {
    setLoading(false);
  });

  return (
    <Section
      bg="dark"
      align="center"
      style={{
        height: height ? height : "100vh",
      }}
    >
      <Image
        src={device === "mobile" ? "/images/background/1x.jpg" : "/images/background/2x.jpg"}
        alt="footer background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="-z-10"
      />

      <div className="flex flex-col items-center justify-center gap-12 text-center md:gap-16">
        <RobotIcon className="w-1/2 fill-red-500 xl:w-full" />

        <span className="flex flex-col gap-4">
          {statusCode && (
            <Heading type="h2" color="red">
              {statusCode}
            </Heading>
          )}
          <Heading type="h3" maxCharacters={20}>
            {title}
          </Heading>
        </span>
      </div>
    </Section>
  );
}