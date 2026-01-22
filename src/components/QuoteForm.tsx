import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, Clock, MapPin, Navigation, PoundSterling } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

// Popular destinations with base prices (in £)
const destinationPrices: Record<string, number> = {
  "heathrow airport": 120,
  "gatwick airport": 145,
  "bristol airport": 55,
  "bournemouth airport": 45,
  "southampton airport": 65,
  "stansted airport": 180,
  "gillingham": 8,
  "shaftesbury": 12,
  "mere": 10,
  "wincanton": 15,
  "tisbury": 14,
  "warminster": 18,
  "yeovil": 25,
  "salisbury": 28,
};

// Generate time slots
const timeSlots = Array.from({ length: 48 }, (_, i) => {
  const hour = Math.floor(i / 2);
  const minute = i % 2 === 0 ? "00" : "30";
  return `${hour.toString().padStart(2, "0")}:${minute}`;
});

const QuoteForm = () => {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>("");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [quote, setQuote] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateQuote = () => {
    if (!pickup || !destination) return;

    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const destLower = destination.toLowerCase();
      let basePrice = 15; // Default base price

      // Check if destination matches known locations
      for (const [key, price] of Object.entries(destinationPrices)) {
        if (destLower.includes(key)) {
          basePrice = price;
          break;
        }
      }

      // Add time-based surcharges
      if (time) {
        const hour = parseInt(time.split(":")[0]);
        if (hour >= 22 || hour < 6) {
          basePrice = Math.round(basePrice * 1.2); // 20% night surcharge
        }
      }

      setQuote(basePrice);
      setIsCalculating(false);
    }, 800);
  };

  const isFormValid = pickup && destination && date && time;

  return (
    <div className="bg-card/95 backdrop-blur-md border border-border rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
          <PoundSterling className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-card-foreground">Get Instant Quote</h3>
          <p className="text-sm text-muted-foreground">Fixed prices, no surprises</p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Date & Time Row */}
        <div className="grid grid-cols-2 gap-3">
          {/* Date Picker */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-card-foreground">
              Journey Date
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal h-11",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "dd/MM/yyyy") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Time Picker */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-card-foreground">
              Pickup Time
            </Label>
            <Select value={time} onValueChange={setTime}>
              <SelectTrigger className="h-11">
                <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent className="max-h-60">
                {timeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot}>
                    {slot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Pickup Address */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-card-foreground">
            Pickup Address
          </Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Enter pickup location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="pl-10 h-11"
              maxLength={200}
            />
          </div>
        </div>

        {/* Destination Address */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-card-foreground">
            Destination
          </Label>
          <div className="relative">
            <Navigation className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Where are you going?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="pl-10 h-11"
              maxLength={200}
            />
          </div>
        </div>

        {/* Quote Result */}
        {quote !== null && (
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center">
            <p className="text-sm text-muted-foreground mb-1">Estimated fare</p>
            <p className="text-3xl font-bold text-primary">£{quote.toFixed(2)}</p>
            <p className="text-xs text-muted-foreground mt-1">
              Fixed price • No hidden charges
            </p>
          </div>
        )}

        {/* Get Quote Button */}
        <Button
          variant="cta"
          size="lg"
          className="w-full h-12"
          onClick={calculateQuote}
          disabled={!isFormValid || isCalculating}
        >
          {isCalculating ? (
            <span className="flex items-center gap-2">
              <span className="animate-spin rounded-full h-4 w-4 border-2 border-primary-foreground border-t-transparent" />
              Calculating...
            </span>
          ) : quote !== null ? (
            "Update Quote"
          ) : (
            "Get Instant Quote"
          )}
        </Button>

        {/* Call to Book */}
        {quote !== null && (
          <Button variant="hero" size="lg" className="w-full h-12" asChild>
            <a href="tel:01747-123456">
              Book Now: 01747 123456
            </a>
          </Button>
        )}
      </div>

      {/* Trust Badge */}
      <p className="text-xs text-center text-muted-foreground mt-4">
        🔒 No payment required • Free cancellation up to 24 hours
      </p>
    </div>
  );
};

export default QuoteForm;
