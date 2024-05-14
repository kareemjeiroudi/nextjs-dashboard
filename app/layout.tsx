import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.Js Tutorial</title>
        <meta
          name="description"
          content="This page is deploy by dev github.com/kareemjeiroudi to learn Next.Js for future projects."
        />
        <meta property="og:title" content="Next.Js Tutorial" />
        <meta
          property="og:description"
          content="This page is deploy by dev github.com/kareemjeiroudi to learn Next.Js for future projects."
        />
        <meta property="og:image" content="/opengraph-image.png" />
        <meta name="keywords" content="keyword1, keyword2, keyword3" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
