import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Features from "../components/features";
import Stats from "../components/Stats";
import ProductPreview from "../components/ProductPreview";
import ScannerPreview from "../components/ScannerPreview";
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