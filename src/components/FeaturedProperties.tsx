import PropertyCard from "./PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    id: 1,
    image: property1,
    title: "Modern Luxury Apartment",
    price: "$850,000",
    location: "Downtown District",
    beds: 3,
    baths: 2,
    sqft: 2100,
    status: "For Sale"
  },
  {
    id: 2,
    image: property2,
    title: "Charming Family Home",
    price: "$625,000",
    location: "Suburban Heights",
    beds: 4,
    baths: 3,
    sqft: 2800,
    status: "New Listing"
  },
  {
    id: 3,
    image: property3,
    title: "Downtown Penthouse",
    price: "$1,200,000",
    location: "City Center",
    beds: 2,
    baths: 2,
    sqft: 1800,
    status: "Featured"
  }
];

const FeaturedProperties = () => {
  return (
    <section id="properties" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Featured Properties</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our hand-picked selection of premium properties
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
