import type { Metadata } from "next";
import { 
  Geist_Mono, 
  Be_Vietnam_Pro, 
  // Plus_Jakarta_Sans 
} from "next/font/google";
import "./globals.css";
import { Container, Box, Flex } from "@chakra-ui/react";
import { Provider } from "@/components/ui/provider";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  weight: ["200", "500", "700", "900"],
  subsets: ["latin"],
})

// const plusJakartaSans = Plus_Jakarta_Sans({
//   variable: "--font-plus-jakarta-sans",
//   weight: ["200", "500", "700", "800"],
//   subsets: ["latin"],
// })

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oddward digital creative space",
  description: "Find design projects, dev projects, profiles, writing and more by Mugtaba G, a.k.a. Oddward.",
  keywords: ["design", "development", "writing", "portfolio", "mugtaba", "oddward", "garoot", "oddward space", "oddward g", "mugtaba g", "web design", "web development", "sudanese developer", "sudanese designer"],
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
        <Provider forcedTheme="dark">
          <Box textAlign={'center'} color={'white'} bg={'black'} p={2}>
            website under construction
          </Box>
          <Container marginInline={'auto'} maxW="breakpoint-lg" p={4} spaceY={8}>
            {children}
            <Flex as={'footer'} 
            color={'fg.muted'} 
            justifyContent={'between'} 
            py={{base:'3rem 5rem', md:'3rem 1.5rem'}}
            mt={16}>
                {`@${new Date().getFullYear()} Mugtaba G // Oddward`}
            </Flex>
          </Container>
        </Provider>
      </body>
    </html>
  );
}
