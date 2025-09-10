import { Button } from "./ui/button-variants";
const BrandStory = () => {
  return <section className="py-20 bg-beige relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-luxury-black rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-luxury-black rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-luxury-black rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="animate-fade-up">
            
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">V&H represents the pinnacle of tsirts craftsmanship, where traditional techniques meet contemporary design. Each piece in our collection tells a story of meticulous attention to detail and unwavering commitment to quality.</p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">From the finest Italian silks to premium indian we source only the most exceptional materials to create clothing that transcends seasons and trends.</p>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-luxury-black mb-2">500+</div>
                <div className="text-gray-600">Premium Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-luxury-black mb-2">1K+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                
                <div className="text-gray-600">
              </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-luxury-black mb-2">100%</div>
                <div className="text-gray-600">Sustainable</div>
              </div>
            </div>

            <Button variant="luxury" size="lg">
              Our Story
            </Button>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4 animate-slide-in-right">
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=500&fit=crop&q=80" alt="Craftsmanship" className="w-full h-64 object-cover rounded-2xl shadow-soft" />
              <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&h=300&fit=crop&q=80" alt="Materials" className="w-full h-40 object-cover rounded-2xl shadow-soft" />
            </div>
            <div className="space-y-4 pt-8">
              <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=300&fit=crop&q=80" alt="Atelier" className="w-full h-40 object-cover rounded-2xl shadow-soft" />
              <img src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop&q=80" alt="Design Process" className="w-full h-64 object-cover rounded-2xl shadow-soft" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default BrandStory;