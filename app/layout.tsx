import type { Metadata } from "next";
import { Geist_Mono, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { Container, Flex } from "@chakra-ui/react";
import { Provider } from "@/components/ui/provider";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  weight: ["200", "500", "700", "900"],
  subsets: ["latin"],
})

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Welcome to the Oddward.space",
  description: "Website of Mugtaba 'Oddward' G.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${beVietnamPro.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <div className="w-full p-2 bg-black text-white text-center">
            website under construction
          </div>
          <Container marginInline={'auto'} maxW="breakpoint-lg" p={4} spaceY={8}>
            {children}
            <Flex color={'fg.muted'} justifyContent={'between'} py={4} mt={16}>
                {`@${new Date().getFullYear()} Mugtaba G // oddward`}
            </Flex>
          </Container>
        </Provider>
      </body>
    </html>
  );
}
