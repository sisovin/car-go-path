import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { 
  MapPin, 
  DollarSign, 
  Clock, 
  Star, 
  Users, 
  Navigation as NavigationIcon,
  CheckCircle,
  XCircle,
  Phone
} from "lucide-react";

const DriverPage = () => {
  const [driverStatus, setDriverStatus] = useState<'offline' | 'online' | 'ride-request' | 'driving'>('offline');
  const [earnings, setEarnings] = useState(127.50);
  const [rides, setRides] = useState(8);

  const handleGoOnline = () => {
    setDriverStatus('online');
    setTimeout(() => setDriverStatus('ride-request'), 5000);
  };

  const handleAcceptRide = () => {
    setDriverStatus('driving');
    setEarnings(prev => prev + 15.75);
    setRides(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">
              Driver <span className="bg-gradient-secondary bg-clip-text text-transparent">Dashboard</span>
            </h1>
            <p className="text-muted-foreground">Start earning with CarToGo today</p>
          </div>

          {/* Status Card */}
          <Card className="p-6 mb-6 shadow-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Status</h3>
              <Badge 
                variant={driverStatus === 'offline' ? 'destructive' : 'default'} 
                className={driverStatus === 'online' ? 'bg-green-500' : ''}
              >
                {driverStatus === 'offline' && 'Offline'}
                {driverStatus === 'online' && 'Online'}
                {driverStatus === 'ride-request' && 'Ride Request'}
                {driverStatus === 'driving' && 'On Trip'}
              </Badge>
            </div>

            {driverStatus === 'offline' && (
              <Button onClick={handleGoOnline} variant="hero" size="lg" className="w-full">
                Go Online
              </Button>
            )}

            {driverStatus === 'online' && (
              <div className="text-center">
                <div className="animate-pulse mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto"></div>
                </div>
                <p className="font-medium mb-2">You're online!</p>
                <p className="text-sm text-muted-foreground">Waiting for ride requests...</p>
              </div>
            )}

            {driverStatus === 'ride-request' && (
              <div className="space-y-4">
                <div className="bg-gradient-primary/10 p-4 rounded-lg border border-primary/20">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">Ride Request</h4>
                    <Badge variant="secondary">2.3 mi away</Badge>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span className="text-sm">123 Main St</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-secondary rounded-full"></div>
                      <span className="text-sm">456 Oak Avenue</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">Distance</p>
                      <p className="font-semibold">8.2 mi</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="font-semibold">18 min</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">Fare</p>
                      <p className="font-semibold text-green-500">$15.75</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      onClick={() => setDriverStatus('online')} 
                      variant="outline" 
                      className="flex-1"
                    >
                      <XCircle className="h-4 w-4 mr-2" />
                      Decline
                    </Button>
                    <Button 
                      onClick={handleAcceptRide} 
                      variant="hero" 
                      className="flex-1"
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Accept
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {driverStatus === 'driving' && (
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">SM</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Sarah Miller</h4>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm">4.8</span>
                    </div>
                  </div>
                  <Button size="icon" variant="outline">
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">ETA</p>
                    <p className="font-semibold text-primary">12 min</p>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Distance</p>
                    <p className="font-semibold">3.2 mi</p>
                  </div>
                </div>

                <Button variant="hero" className="w-full">
                  <NavigationIcon className="h-4 w-4 mr-2" />
                  Navigate to Destination
                </Button>
              </div>
            )}
          </Card>

          {/* Earnings Card */}
          <Card className="p-6 mb-6 shadow-card">
            <h3 className="text-xl font-semibold mb-4">Today's Earnings</h3>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <DollarSign className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-500">${earnings.toFixed(2)}</p>
                <p className="text-sm text-muted-foreground">Total Earnings</p>
              </div>
              
              <div className="text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">{rides}</p>
                <p className="text-sm text-muted-foreground">Completed Rides</p>
              </div>
              
              <div className="text-center">
                <Clock className="h-8 w-8 text-secondary mx-auto mb-2" />
                <p className="text-2xl font-bold">5.2h</p>
                <p className="text-sm text-muted-foreground">Online Time</p>
              </div>
            </div>
          </Card>

          {/* Mock Map */}
          <Card className="p-4 h-64 bg-muted/20 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-secondary mx-auto mb-2" />
              <p className="text-muted-foreground">Driver Map View</p>
              <p className="text-sm text-muted-foreground">Your location & nearby requests</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DriverPage;