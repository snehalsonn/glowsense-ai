import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Features from "../components/features";
import Stats from "../components/stats";
import ProductPreview from "../components/productpreview";
import ScannerPreview from "../components/scannerpreview";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <ProductPreview />
      <ScannerPreview />
      <Footer />
    </>
  );
}