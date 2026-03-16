
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CypherCore Technologies | Innovate. Elevate. Upgrade.',
  description: 'CypherCore Technologies Pvt. Ltd. provides premium Software Development, AI-powered Ads, and Digital Marketing solutions for modern businesses.',
  keywords: 'CypherCore, Software Development, AI Ads, Video Generation, Tech Startup India, Internships, Courses',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
