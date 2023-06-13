import "./globals.css";
import { Providers } from "../provider";
export const metadata = {
  title: " Redux toolkit",
  description: "This a course for redux toolkit with rtkQuery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
