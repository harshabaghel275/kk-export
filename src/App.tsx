import React from "react";
import { NavigationProvider, useNavigation } from "./context/NavigationContext";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProductsPage } from "./pages/ProductsPage";
import { IndustryPage } from "./pages/IndustryPage";
import { ManufacturingPage } from "./pages/ManufacturingPage";
import { SustainabilityPage } from "./pages/SustainabilityPage";
import { CertificationsPage } from "./pages/CertificationsPage";
import { BlogPage } from "./pages/BlogPage";
import { ContactPage } from "./pages/ContactPage";
import { OurCsrPage } from "./pages/ourcsrpage"; // ✅ Capital letter

function PageRouter() {
  const { currentPage } = useNavigation();

  const pages: Record<string, React.ReactNode> = {
    home: <HomePage />,
    about: <AboutPage />,
    products: <ProductsPage />,
    industries: <IndustryPage />,
    manufacturing: <ManufacturingPage />,
    sustainability: <SustainabilityPage />,
    certifications: <CertificationsPage />,
    blog: <BlogPage />,
    contact: <ContactPage />,
    ourcsr: <OurCsrPage />, // ✅ fixed
  };

  return <>{pages[currentPage] || <HomePage />}</>;
}

export function App() {
  return (
    <NavigationProvider>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1">
          <PageRouter />
        </main>
        <Footer />
      </div>
    </NavigationProvider>
  );
}
