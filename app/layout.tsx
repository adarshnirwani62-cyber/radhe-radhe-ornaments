import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Radhe Radhe Ornaments",
  description: "Premium jewelry and ornaments store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
