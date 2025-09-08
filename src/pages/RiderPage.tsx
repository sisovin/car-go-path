import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { MapPin, Navigation as NavigationIcon, Clock, Star, Phone, MessageSquare } from "lucide-react";

const RiderPage = () => {
  const [rideStatus, setRideStatus] = useState<'booking' | 'waiting' | 'matched' | 'riding'>('booking');
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');

  const handleBookRide = () => {
    setRideStatus('waiting');
    setTimeout(() => setRideStatus('matched'), 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">
              Book Your <span className="bg-gradient-primary bg-clip-text text-transparent">Ride</span>
            </h1>
            <p className="text-muted-foreground">Enter your pickup and destination to get started</p>
          </div>

          {rideStatus === 'booking' && (
            <Card className="p-6 mb-6 shadow-card">
              <div className="space-y-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-primary" />
                  <Input
                    placeholder="Pickup location"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="pl-12 h-12"
                  />
                </div>
                
                <div className="relative">
                  <NavigationIcon className="absolute left-3 top-3 h-5 w-5 text-secondary" />
                  <Input
                    placeholder="Where to?"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="pl-12 h-12"
                  />
                </div>

                <Button 
                  onClick={handleBookRide}
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={!pickup || !destination}
                >
                  Request Ride
                </Button>
              </div>
            </Card>
          )}

          {rideStatus === 'waiting' && (
            <Card className="p-6 mb-6 shadow-card text-center">
              <div className="animate-pulse mb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 animate-spin"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Finding your driver...</h3>
              <p className="text-muted-foreground">We're matching you with the best available driver</p>
              <Badge variant="secondary" className="mt-4">
                <Clock className="h-4 w-4 mr-1" />
                Est. wait: 2-5 min
              </Badge>
            </Card>
          )}

          {(rideStatus === 'matched' || rideStatus === 'riding') && (
            <Card className="p-6 mb-6 shadow-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">JS</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">John Smith</h3>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm">4.9 (324 rides)</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Toyota Camry • ABC-123</p>
                </div>
                <div className="flex gap-2">
                  <Button size="icon" variant="outline">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline">
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">ETA</p>
                  <p className="font-semibold text-primary">3 min</p>
                </div>
                <div className="text-center p-3 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">Distance</p>
                  <p className="font-semibold">0.5 mi</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-sm truncate">{pickup || "Current location"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span className="text-sm truncate">{destination || "Destination"}</span>
                </div>
              </div>

              {rideStatus === 'matched' && (
                <Button 
                  onClick={() => setRideStatus('riding')} 
                  variant="hero" 
                  className="w-full mt-4"
                >
                  Driver Arrived - Start Ride
                </Button>
              )}
            </Card>
          )}

          {/* Mock Map */}
          <Card className="p-4 h-64 bg-muted/20 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
              <p className="text-muted-foreground">Live Map View</p>
              <p className="text-sm text-muted-foreground">Real-time driver tracking</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RiderPage;