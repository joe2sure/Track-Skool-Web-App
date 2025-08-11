// import type { Metadata } from "next";
// import { Geist, Geist_Mono, Pacifico } from "next/font/google";
// import "./globals.css";

// const pacifico = Pacifico({
//   weight: '400',
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-pacifico',
// })

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "SkoolBridge",
//   description: "If all that matters is the future of tomorrow, then we must give our kids all it takes, With SkoolBridge, Everything has now been made easy for students, teachers, parents, and administrators.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning={true}>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";
// import ClientHeader from "@/components/ClientHeader";
import ClientHeader from "@/components/ClientHeader/ClientHeader"

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SkoolBridge",
  description:
    "If all that matters is the future of tomorrow, then we must give our kids all it takes. With SkoolBridge, everything has now been made easy for students, teachers, parents, and administrators.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {/* <ClientHeader /> */}
        {children}
      </body>
    </html>
  );
}
