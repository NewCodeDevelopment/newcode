import { useRouter } from "next/router";
import axios from "axios";
import { MailData } from "../..";
import { useMutation } from "@tanstack/react-query";

export function useSendMail() {
    const router = useRouter();

    return useMutation(
        async (data: MailData) => {
            return await axios.post("/api/mail", data);
        },
        {
            onSuccess: () => {
                console.info("success");
                router.push("/connect/thanks");
            },
            onError: () => {
                console.info("error");
                router.push("/connect/error");
            },
        },
    );
}
