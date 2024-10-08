import Providers from "../Providers/Providers";
import "../styles/index.scss";
import { Header } from "@/widgets";
import { Footer } from "@/widgets";

export const RootLayout = ({
  children,
}: Readonly<{
  children: JSX.Element;
}>) => {
  return (
    <html lang="ru">
      <body>
        <Providers>
          <>
            <Header />
            {children}
            <Footer />
          </>
        </Providers>
      </body>
    </html>
  );
};
