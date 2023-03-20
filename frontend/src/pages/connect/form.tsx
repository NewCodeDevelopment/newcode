import FormInput from "@/components/inputs/FormInput";
import { useSendMail } from "@/utils/hooks/mail";
import { useWindow } from "@/utils/hooks/window";
import { bgColorState } from "@/utils/states/navigation";
import { MailData } from "@/utils/types/mail";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { HTMLInputTypeAttribute, ReactElement, useEffect, useState } from "react";
import { RegisterOptions, useForm } from "react-hook-form";
import { useRecoilState } from "recoil";

const MainLayout = dynamic(() => import("@/components/layouts/MainLayout"));
const Arrow = dynamic(() => import("@/icons/actions/Arrow"));
const Button = dynamic(() => import("@/components/actions/Button"));
const Heading = dynamic(() => import("@/components/typography/Heading"));
const Section = dynamic(() => import("@/components/sections/Section"));
const Seo = dynamic(() => import("@/components/common/Seo"));
const PageLoader = dynamic(() => import("@/components/loaders/PageLoader"));
const PlaneIcon = dynamic(() => import("@/icons/actions/PlaneIcon"));
const Steps = dynamic(() => import("@/components/common/Steps"));
/**
 *
 *
 *
 *
 *
 */
type FormFieldType = {
  title: string;
  name: keyof typeof IFormInputs;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  options: RegisterOptions;
  previous: {
    type: "button" | "reset" | "submit";
    onClick?: () => void;
  };
};

const IFormInputs = {
  name: "",
  business: "",
  email: "",
  phone: "",
  message: "",
};

export default function FormPage() {
  const router = useRouter();
  const { height } = useWindow();

  const { t } = useTranslation("pages", { keyPrefix: "form" });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [_, setBgColor] = useRecoilState(bgColorState);
  const [submit, setSubmit] = useState<"idle" | "loading" | "success">("idle");
  const [loading, setLoading] = useState(false);

  const mutation = useSendMail();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<typeof IFormInputs>();

  useEffect(() => {
    setBgColor(currentIndex % 2 === 0 ? "dark" : "light");
  }, [currentIndex, setBgColor]);

  async function handleBack() {
    setReverse(true);
    await new Promise((resolve) => setTimeout(resolve, 100));

    setCurrentIndex((current) => current - 1);
  }

  async function onSubmit(data: typeof IFormInputs) {
    if (currentIndex === formFiels.length - 1) {
      handleSend(data);
      return;
    }

    setReverse(false);
    await new Promise((resolve) => setTimeout(resolve, 100));

    setCurrentIndex((current) => current + 1);
  }

  async function handleSend(data: typeof IFormInputs) {
    if (submit !== "idle") return;
    setSubmit("loading");

    const body: MailData = {
      email: data.email,
      subject: "Contact Form",
      body: `
        <h1>Hello,</h1>

        <ul>
            <li>Name: ${data.name}</li>
            <li>Business: ${data.business}</li>
            <li>Email: ${data.email}</li>
            <li>Phone: ${data.phone}</li>
            <li>Message: ${data.message}</li>
        </ul>
        
        <p>Sent with love by NewCode bot 🤖 </p>
            `,
    };

    mutation.mutate(body);
  }

  const formFiels: FormFieldType[] = [
    {
      title: t("name.title"),
      name: "name",
      type: "text",
      placeholder: t("name.placeholder"),
      options: {
        required: t("name.errors.required") as string,
      },
      previous: {
        type: "button",
        onClick: router.back,
      },
    },
    {
      title: t("business.title"),
      name: "business",
      type: "text",
      placeholder: t("business.placeholder"),
      options: {
        required: t("business.errors.required") as string,
      },
      previous: {
        type: "button",
        onClick: handleBack,
      },
    },
    {
      title: t("email.title"),
      name: "email",
      type: "email",
      placeholder: t("email.placeholder"),
      options: {
        required: t("email.errors.required") as string,
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          message: t("email.errors.pattern"),
        },
      },
      previous: {
        type: "button",
        onClick: handleBack,
      },
    },
    {
      title: t("phone.title"),
      name: "phone",
      type: "tel",
      placeholder: t("phone.placeholder"),
      options: {},
      previous: {
        type: "button",
        onClick: handleBack,
      },
    },
    {
      title: t("message.title"),
      name: "message",
      type: "text",
      placeholder: t("message.placeholder"),
      options: {
        required: t("message.errors.required") as string,
      },
      previous: {
        type: "button",
        onClick: handleBack,
      },
    },
  ];

  return (
    <>
      <Seo
        title={t("seo.title") as string}
        description={t("seo.description") as string}
        canonical="/connect/form"
      />

      {loading ? (
        <PageLoader />
      ) : (
        <Section
          bg={currentIndex % 2 === 0 ? "dark" : "light"}
          align="center"
          style={{ height }}
          className="relative"
        >
          <Steps
            currentIndex={currentIndex}
            length={formFiels.length}
            bgColor={currentIndex % 2 === 0 ? "dark" : "light"}
            className="pt-page absolute top-0 left-0 right-0"
          />

          <form className="flex w-full max-w-xl flex-col" onSubmit={handleSubmit(onSubmit)}>
            {formFiels.map(
              ({ title, name, placeholder, type, options, previous }, index, array) => (
                <AnimatePresence mode="wait" key={index}>
                  {currentIndex === index && (
                    <motion.div
                      className="flex flex-col gap-12"
                      initial={{
                        opacity: 0,
                        y: reverse ? "-25vh" : "25vh",
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                          delay: 0.5,
                        },
                      }}
                      exit={{
                        opacity: 0,
                        y: reverse ? "25vh" : "-25vh",
                        transition: {
                          duration: 0.5,
                        },
                      }}
                    >
                      <Heading type="h3" color={index % 2 === 0 ? "light" : "dark"}>
                        <span className="text-red-500">{index + 1 + ". "}</span>
                        {title}_
                      </Heading>

                      <FormInput
                        type={type}
                        placeholder={placeholder}
                        className="w-full"
                        theme={index % 2 === 0 ? "dark" : "light"}
                        autoFocus={currentIndex === index}
                        error={errors[name]?.message}
                        {...register(name, options)}
                      />

                      <div className="flex w-full flex-row items-center justify-between gap-4">
                        <Button
                          type={previous.type}
                          onClick={previous.onClick}
                          variant="text"
                          shape="none"
                        >
                          <Arrow direction="right-to-left" className="fill-dark-300 w-12" />
                        </Button>
                        <Button
                          type="submit"
                          variant="text"
                          shape="none"
                          disabled={submit !== "idle"}
                        >
                          {array.length === index + 1 ? (
                            <PlaneIcon
                              className="fill-dark-300 w-8"
                              animate={
                                submit === "loading" && {
                                  x: [0, 30],
                                  opacity: [1, 0],
                                  transition: { duration: 1 },
                                  // x: [0, 30, -30, 0],
                                  // opacity: [1, 0, 0, 1],
                                }
                              }
                              onAnimationComplete={() => setLoading(true)}
                            />
                          ) : (
                            <Arrow direction="left-to-right" className="w-12 fill-red-500" />
                          )}
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              ),
            )}
          </form>
        </Section>
      )}
    </>
  );
}
/**
 *
 *
 *
 *
 *
 */
FormPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout footer={false} scroll={false}>
      {page}
    </MainLayout>
  );
};
/**
 *
 *
 *
 *
 *
 */
export async function getStaticProps({ locale }: Params) {
  return {
    props: {
      ...(await serverSideTranslations(locale || "nl", ["common", "pages"])),
    },
  };
}