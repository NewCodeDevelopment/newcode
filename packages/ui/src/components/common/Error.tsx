import Image from "next/legacy/image";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { loadingState, useWindow } from "utils";
import { Heading, Section } from "..";
import { RobotIcon } from "../..";

interface Props {
    statusCode?: number;
    title: string;
}

export function Error({ title, statusCode }: Props) {
    const [_, setLoading] = useRecoilState(loadingState);
    const { height } = useWindow();

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
                src="/images/footer-background.jpg"
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
