import type { Metadata } from "next";
import { 
  Geist_Mono, 
  Be_Vietnam_Pro, 
  // Plus_Jakarta_Sans 
} from "next/font/google";
import "./globals.css";
import { Container } from "@chakra-ui/react";
import { Provider } from "@/components/ui/provider";
import Footer from "@/components/design/footer";

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
  openGraph: {
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Dark blue image with white text that reads 'Mugtaba Garoot. Web, Dev, Design.' and a white logo in the bottom right corner.",
      },
      {
        url: "/twitter-image.png",
        width: 1200,
        height: 675,
        alt: "Dark blue image with white text that reads 'Mugtaba Garoot. Web, Dev, Design.' and a white logo in the bottom right corner.",
      },
      {
        url: "/whatsapp-image.png",
        width: 762,
        height: 400,
        alt: "Dark blue image with white text that reads 'Mugtaba Garoot. Web, Dev, Design.' and a white logo in the bottom right corner.",
      },
    ]
  }
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
          <Container marginInline={'auto'} maxW="breakpoint-lg" p={4} spaceY={8}>
            {children}
            <Footer />
          </Container>
        </Provider>
      </body>
    </html>
  );
}
