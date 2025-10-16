import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import ProductViewer from "@/components/productViewer";
import Showcase from "@/components/showcase";

export default function Home() {
  return (
      <main>
        <Navbar />
        <Hero />
        <ProductViewer />
        <Showcase />
      </main>
  );
}
