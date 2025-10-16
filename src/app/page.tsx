import Features from "@/components/features";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Perfomance from "@/components/perfomance";
import ProductViewer from "@/components/productViewer";
import Showcase from "@/components/showcase";

export default function Home() {
  return (
      <main>
        <Navbar />
        <Hero />
        <ProductViewer />
        <Showcase />
        <Perfomance />
        <Features />
      </main>
  );
}
