import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Highlights from "@/components/highlights";
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
        <Highlights />
        <Footer />
      </main>
  );
}
