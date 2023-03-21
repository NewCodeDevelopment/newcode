import { IRoute } from "@/utils/types/paths";

export interface usePathHook {
  mainRoutes: IRoute[];
  policyRoutes: IRoute[];
}

export const usePaths: () => usePathHook = () => {
  const mainRoutes = [
    { name: "Work", path: "/work" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Connect", path: "/connect" },
  ];

  const policyRoutes = [
    {
      name: "Terms Of Service",
      path: "/policy/termsOfService",
      order: 1,
    },
    { name: "Privacy Policy", path: "/policy/privacyPolicy", order: 2 },
  ];

  return {
    mainRoutes,
    policyRoutes,
  };
};
