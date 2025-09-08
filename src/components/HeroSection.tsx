import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your ride is just a
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              tap away
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Experience seamless transportation with real-time tracking, professional drivers, 
            and instant booking across the city.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="xl" asChild>
              <Link to="/rider">Book Your Ride</Link>
            </Button>
            <Button variant="driver" size="xl" asChild>
              <Link to="/driver">Start Driving</Link>
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="p-6 bg-card/40 backdrop-blur-sm border-primary/20 hover:shadow-glow transition-all duration-300">
              <MapPin className="h-8 w-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Real-time Tracking</h3>
              <p className="text-sm text-muted-foreground">
                Live GPS tracking and ETA updates for every ride
              </p>
            </Card>

            <Card className="p-6 bg-card/40 backdrop-blur-sm border-secondary/20 hover:shadow-glow transition-all duration-300">
              <Clock className="h-8 w-8 text-secondary mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Quick Booking</h3>
              <p className="text-sm text-muted-foreground">
                Get matched with nearby drivers in seconds
              </p>
            </Card>

            <Card className="p-6 bg-card/40 backdrop-blur-sm border-primary/20 hover:shadow-glow transition-all duration-300">
              <Shield className="h-8 w-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Safe & Secure</h3>
              <p className="text-sm text-muted-foreground">
                Verified drivers and secure payment processing
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;