import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import heroImage from "@/assets/hero-property.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Find Your Dream Home Today
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover the perfect property from our extensive collection of homes, apartments, and commercial spaces.
          </p>
          
          <div className="flex gap-2 bg-card p-2 rounded-lg shadow-lg border">
            <Input 
              placeholder="Enter location, property type, or keyword..." 
              className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button size="lg" className="gap-2">
              <Search className="h-5 w-5" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
