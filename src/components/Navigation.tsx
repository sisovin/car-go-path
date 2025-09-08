import { Button } from "@/components/ui/button";
import { Car, User, MapPin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative">
            <Car className="h-8 w-8 text-primary" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-primary rounded-full"></div>
          </div>
          <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            CarToGo
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link 
            to="/rider" 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              location.pathname === '/rider' 
                ? 'bg-primary/10 text-primary' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <User className="h-4 w-4" />
            Rider
          </Link>
          <Link 
            to="/driver" 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              location.pathname === '/driver' 
                ? 'bg-secondary/10 text-secondary' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <MapPin className="h-4 w-4" />
            Driver
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="glass" size="sm" asChild>
            <Link to="/rider">Book Ride</Link>
          </Button>
          <Button variant="driver" size="sm" asChild>
            <Link to="/driver">Drive</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;