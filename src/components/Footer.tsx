import { Home } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Home className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">EstateFind</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted partner in finding the perfect property.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#properties" className="hover:text-primary transition-colors">Properties</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Buy Property</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Rent Property</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sell Property</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>contact@estatefind.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Real Estate Ave</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 EstateFind. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
