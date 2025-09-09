import { useState } from "react";
import { Button } from "./ui/button-variants";
import { Mail } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // Reset after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-luxury">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-up">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gold rounded-full mb-8">
            <Mail className="w-8 h-8 text-luxury-black" />
          </div>

          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-luxury-white mb-6">
            Join Our Exclusive Club
          </h2>
          
          <p className="text-xl text-luxury-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Be the first to discover new collections, exclusive offers, and style insights. 
            Plus, get 10% off your first order.
          </p>

          {/* Subscription Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="input-luxury w-full"
                  required
                />
              </div>
              <Button 
                type="submit" 
                variant="gold" 
                size="lg"
                className="w-full sm:w-auto whitespace-nowrap"
                disabled={isSubscribed}
              >
                {isSubscribed ? "Welcome Aboard!" : "Subscribe Now"}
              </Button>
            </div>
          </form>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-luxury-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-luxury-white font-bold">10%</span>
              </div>
              <p className="text-luxury-white/90 text-sm">First Order Discount</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-luxury-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-luxury-white font-bold">✨</span>
              </div>
              <p className="text-luxury-white/90 text-sm">Exclusive Access</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-luxury-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-luxury-white font-bold">👑</span>
              </div>
              <p className="text-luxury-white/90 text-sm">VIP Treatment</p>
            </div>
          </div>

          {/* Privacy Note */}
          <p className="text-luxury-white/70 text-sm mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;