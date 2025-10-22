import { Shield, Award, Headphones, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Trusted & Secure",
    description: "All listings verified with secure transactions and legal compliance"
  },
  {
    icon: Award,
    title: "Expert Guidance",
    description: "Professional real estate agents with years of market experience"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer service to assist with your property needs"
  },
  {
    icon: TrendingUp,
    title: "Best Market Rates",
    description: "Competitive pricing and transparent market insights for smart decisions"
  }
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Why Choose EstateFind</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner in finding the perfect property
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
