import type { Metadata } from "next";
import "@/styles/global.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "SPECROL - Rolety Wałbrzych",
  description:
    "Szukasz wysokiej jakości rolet zewnętrznych, żaluzji, lub bram garażowych? Nie szukaj dalej niż nasz ekspert zespół! Oferujemy usługi instalacji, naprawy i konserwacji dla nieruchomości mieszkalnych i komercyjnych. Skontaktuj się z nami dzisiaj, aby otrzymać darmową wycenę i zobaczyć, jak możemy pomóc w poprawie bezpieczeństwa i stylu Twojego domu lub biznesu.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
