export function useContactInformation() {
  return {
    contact: {
      email: {
        href: "mailto:burak@newcode.be",
        text: "burak@newcode.be",
      },
      phone: {
        href: "tel:+32471492451",
        text: "+32 (0) 471 492 451",
      },
    },
    socials: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/newcodedevelopment",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/newcode.be",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/newcode-development",
      },
    ],
  };
}
