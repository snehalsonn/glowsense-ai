import navbar from "../components/navbar";
import hero from "../components/hero";
import features from "../components/features";
import stats from "../components/stats";
import productPreview from "../components/productPreview";
import ScannerPreview from "../components/scannerpreview";
import footer from "../components/footer";

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