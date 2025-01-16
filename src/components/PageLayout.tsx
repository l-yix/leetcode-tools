import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type PageLayoutProps = {
  children: ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-vh-100 flex flex-col">
      <Header />
      <main className="flex-grow overflow-auto mx-5 py-4">
        <div className="w-full gap-8 items-center sm:items-start">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
