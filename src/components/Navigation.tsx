import { useState, useEffect } from "react";
import { Search, ShoppingBag, Menu, X, User } from "lucide-react";
import { Button } from "./ui/button-variants";
import { cn } from "@/lib/utils";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navigationItems = [{
    name: "New Arrivals",
    href: "#new"
  }, {
    name: "Women",
    href: "#women"
  }, {
    name: "Men",
    href: "#men"
  }, {
    name: "Collections",
    href: "#collections"
  }, {
    name: "About",
    href: "#about"
  }];
  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-luxury-white/95 backdrop-blur-md shadow-soft" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-luxury-brand text-xl sm:text-2xl lg:text-3xl font-bold">
              V&H Wears
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-luxury-black hover:text-gold transition-colors duration-200 font-medium tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button variant="ghost" size="icon" className="hidden sm:flex h-10 w-10">
              <Search className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <User className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>

            <Button variant="ghost" size="icon" className="relative h-10 w-10">
              <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="absolute -top-1 -right-1 bg-gold text-luxury-black text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center font-semibold text-[10px] sm:text-xs">
                2
              </span>
            </Button>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden h-10 w-10" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-luxury-white border-t border-gray-200 animate-fade-up">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-3 text-luxury-black hover:text-gold transition-colors duration-200 font-medium text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2 border-t border-gray-200 mt-2">
                <Button variant="ghost" className="w-full justify-start py-3 h-auto">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navigation;