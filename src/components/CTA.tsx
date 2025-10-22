import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Join thousands of satisfied clients who found their perfect property with us
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input 
            placeholder="Enter your email"
            className="bg-primary-foreground text-foreground"
          />
          <Button size="lg" variant="secondary">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
