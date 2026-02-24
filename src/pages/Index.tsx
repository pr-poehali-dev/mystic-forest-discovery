import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OilsCarousel from "@/components/OilsCarousel";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <OilsCarousel />
      <Featured />
      <Promo />
      <Footer />
    </main>
  );
};

export default Index;
