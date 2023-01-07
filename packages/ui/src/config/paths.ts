import { useTranslation } from "react-i18next";
import { IRoute } from "utils";

export interface usePathHook {
    mainRoutes: IRoute[];
    policyRoutes: IRoute[];
}

export const usePaths: () => usePathHook = () => {
    const { t } = useTranslation("common", { keyPrefix: "paths" });

    const mainRoutes = [
        { name: t("work"), path: "/work" },
        { name: t("services"), path: "/services" },
        { name: t("about"), path: "/about" },
        { name: t("connect"), path: "/connect" },
    ];

    const policyRoutes = [
        {
            name: t("termsOfService"),
            path: "/policy/termsOfService",
            order: 1,
        },
        { name: t("privacyPolicy"), path: "/policy/privacyPolicy", order: 2 },
    ];

    return {
        mainRoutes,
        policyRoutes,
    };
};
