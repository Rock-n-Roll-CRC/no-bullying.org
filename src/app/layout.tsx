import type { ReactNode } from "react";

export const metadata = {
  title: {
    default: "no-bullying.org",
    template: "%s | no-bullying.org",
  },
  description:
    "no-bullying.org is a haven for people who are being bullied and want to stop it. Our quiz will help you make your dream come true, giving you concrete steps to solving your problem.",
  authors: {
    name: "Danil Dikhtyar",
    url: "https://github.com/Rock-n-Roll-CRC",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  // TODO: 1) OpenGraph metatags, 2) Twitter metatags, 3) alternates (multiple language support)
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en-US">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
