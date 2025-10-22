import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Home className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl text-foreground">EstateFind</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#properties" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Properties
          </a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </div>

        <Button>Get Started</Button>
      </div>
    </nav>
  );
};

export default Navbar;
