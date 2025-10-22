import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bed, Bath, Square, MapPin } from "lucide-react";

interface PropertyCardProps {
  image: string;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  status: string;
}

const PropertyCard = ({ image, title, price, location, beds, baths, sqft, status }: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover"
        />
        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
          {status}
        </Badge>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-primary">{price}</h3>
        <h4 className="text-lg font-semibold mb-2 text-foreground">{title}</h4>
        <div className="flex items-center gap-1 text-muted-foreground mb-4">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="flex gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center gap-1">
            <Square className="h-4 w-4" />
            <span>{sqft} sqft</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
