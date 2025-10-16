import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import ProductViewer from "@/components/productViewer";

export default function Home() {
  return (
      <main>
        <Navbar />
        <Hero />
        <ProductViewer />
      </main>
  );
}
