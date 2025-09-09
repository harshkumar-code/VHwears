import { Button } from "./ui/button-variants";

const FeaturedCollections = () => {
  const collections = [
    {
      id: 1,
      title: "Women's Essentials",
      description: "Timeless pieces for the modern woman",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=1000&fit=crop&q=80",
      link: "#women"
    },
    {
      id: 2,
      title: "Men's Collection",
      description: "Sophisticated styles for every occasion",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&q=80",
      link: "#men"
    },
    {
      id: 3,
      title: "New Arrivals",
      description: "Latest trends and exclusive designs",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1000&fit=crop&q=80",
      link: "#new"
    }
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-luxury-black mb-4">
            Featured Collections
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated collections designed for the discerning individual
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div 
              key={collection.id}
              className="group relative overflow-hidden rounded-2xl card-luxury bg-luxury-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/70 via-luxury-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="text-luxury-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-playfair font-semibold mb-2">
                      {collection.title}
                    </h3>
                    <p className="text-luxury-white/90 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {collection.description}
                    </p>
                    <Button 
                      variant="gold" 
                      size="lg" 
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
                    >
                      Explore Collection
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;