import { useState } from "react";
import { Heart, Eye, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button-variants";

const ProductGrid = () => {
  const [likedProducts, setLikedProducts] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      name: "Silk Blouse",
      price: 299,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop&q=80",
      tag: "Bestseller",
      colors: ["#000000", "#FFFFFF", "#8B4513"]
    },
    {
      id: 2,
      name: "Cashmere Sweater",
      price: 450,
      image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=600&h=800&fit=crop&q=80",
      tag: "New",
      colors: ["#F5F5DC", "#696969", "#000080"]
    },
    {
      id: 3,
      name: "Premium Denim",
      price: 180,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop&q=80",
      colors: ["#4169E1", "#000000", "#808080"]
    },
    {
      id: 4,
      name: "Leather Jacket",
      price: 699,
      originalPrice: 899,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop&q=80",
      tag: "Sale",
      colors: ["#000000", "#8B4513", "#2F4F4F"]
    },
    {
      id: 5,
      name: "Evening Dress",
      price: 520,
      image: "https://images.unsplash.com/photo-1566479179817-c08ac4b9a70c?w=600&h=800&fit=crop&q=80",
      tag: "New",
      colors: ["#000000", "#8B0000", "#000080"]
    },
    {
      id: 6,
      name: "Wool Coat",
      price: 380,
      image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=800&fit=crop&q=80",
      colors: ["#D2691E", "#000000", "#708090"]
    }
  ];

  const toggleLike = (productId: number) => {
    setLikedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section className="py-20 bg-luxury-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-luxury-black mb-4">
            Trending Now
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most coveted pieces, handpicked by our style experts
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="group card-luxury relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Tag */}
              {product.tag && (
                <div className={`absolute top-4 left-4 z-10 px-3 py-1 text-xs font-semibold rounded-full ${
                  product.tag === 'New' ? 'bg-emerald text-luxury-white' :
                  product.tag === 'Sale' ? 'bg-gold text-luxury-black' :
                  'bg-luxury-black text-luxury-white'
                }`}>
                  {product.tag}
                </div>
              )}

              {/* Wishlist Button */}
              <button
                onClick={() => toggleLike(product.id)}
                className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-all duration-200 ${
                  likedProducts.includes(product.id)
                    ? 'bg-gold text-luxury-black'
                    : 'bg-luxury-white/80 text-luxury-black hover:bg-gold hover:text-luxury-black'
                }`}
              >
                <Heart className={`w-4 h-4 ${likedProducts.includes(product.id) ? 'fill-current' : ''}`} />
              </button>

              {/* Product Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Quick Actions Overlay */}
                <div className="absolute inset-0 bg-luxury-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-2">
                    <Button variant="ghost-luxury" size="icon" className="bg-luxury-white text-luxury-black hover:bg-gold">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="gold" size="icon">
                      <ShoppingBag className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-playfair font-semibold text-luxury-black mb-2">
                  {product.name}
                </h3>
                
                {/* Colors */}
                <div className="flex space-x-2 mb-3">
                  {product.colors.map((color, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-semibold text-luxury-black">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="luxury" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;