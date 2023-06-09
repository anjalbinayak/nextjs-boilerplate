"use client";
import ThemeProvider from "@/theme/ThemeProvider";
import "./globals.css";
import { Container } from "@chakra-ui/react";

// export const metadata = {
//   title: "Nextjs Boilerplate",
//   description: "Generated by Nextjs boilerplate",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <Container maxW="6xl">{children}</Container>
    </ThemeProvider>
  );
}
