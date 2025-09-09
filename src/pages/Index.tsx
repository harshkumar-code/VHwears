import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedCollections from "@/components/FeaturedCollections";
import ProductGrid from "@/components/ProductGrid";
import BrandStory from "@/components/BrandStory";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-luxury-white">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedCollections />
        <ProductGrid />
        <BrandStory />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
