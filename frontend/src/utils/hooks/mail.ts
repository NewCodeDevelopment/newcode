import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import { MailData } from "../types/mail";

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
