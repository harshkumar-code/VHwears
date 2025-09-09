import { Button } from "./ui/button-variants";
import heroImage from "@/assets/hero-fashion.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-luxury-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-luxury-white mb-6 tracking-tight">
            <span className="block">Redefining</span>
            <span className="text-luxury-accent">Luxury Fashion</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-luxury-white/90 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Discover timeless elegance with our curated collection of premium clothing and accessories
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              Shop Now
            </Button>
            
            <Button variant="ghost-luxury" size="xl" className="w-full sm:w-auto border-luxury-white text-luxury-white hover:bg-luxury-white hover:text-luxury-black">
              View Collection
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-luxury-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-luxury-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;