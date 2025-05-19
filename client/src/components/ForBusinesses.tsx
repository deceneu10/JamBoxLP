import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import BusinessFeature from "./BusinessFeature";
import Testimonial from "./Testimonial";
import PricingCard from "./PricingCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ForBusinesses() {
  const pricingRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  
  // Function to handle pricing cards scrolling
  const scrollPricing = (direction: 'left' | 'right') => {
    if (pricingRef.current) {
      const scrollAmount = 320; // width of a card + gap
      const currentScroll = pricingRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      pricingRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };
  
  // Check scroll position to show/hide arrows
  const checkScrollPosition = () => {
    if (pricingRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = pricingRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };
  
  useEffect(() => {
    const pricingElement = pricingRef.current;
    if (pricingElement) {
      pricingElement.addEventListener('scroll', checkScrollPosition);
      // Initial check
      checkScrollPosition();
      
      return () => {
        pricingElement.removeEventListener('scroll', checkScrollPosition);
      };
    }
  }, []);
  
  const businessFeatures = [
    {
      icon: <i className="fas fa-door-open text-xl"></i>,
      title: "Bring Clients In Sooner",
      description: "Advertise your venue's current vibe through the app and attract customers earlier in the evening."
    },
    {
      icon: <i className="fas fa-hourglass-half text-xl"></i>,
      title: "Keep Them Engaged Longer",
      description: "Interactive music experiences keep customers entertained and spending more time (and money) at your venue."
    },
    {
      icon: <i className="fas fa-hand-holding-usd text-xl"></i>,
      title: "Earn Revenue from Music",
      description: "Generate additional income through song request fees, premium memberships, and promotional opportunities."
    },
    {
      icon: <i className="fas fa-file-invoice-dollar text-xl"></i>,
      title: "Save Money on Licensing",
      description: "Our partnerships with music licensing companies can reduce your overall music licensing costs."
    },
    {
      icon: <i className="fas fa-sliders-h text-xl"></i>,
      title: "Maintain Control with Curated Playlists",
      description: "Set boundaries for your music while still allowing customer input. You decide the overall vibe."
    },
    {
      icon: <i className="fas fa-heart text-xl"></i>,
      title: "Play What Your Clients Love",
      description: "Get real-time data on what music resonates with your specific clientele to optimize your playlists."
    },
    {
      icon: <i className="fas fa-bullhorn text-xl"></i>,
      title: "Gain Extra Exposure",
      description: "Featured placement in the app for special events and promotions to attract new customers."
    },
    {
      icon: <i className="fas fa-tags text-xl"></i>,
      title: "Cross Sell with Music Triggers",
      description: "Set up special deals that activate when certain songs play to drive additional sales."
    }
  ];

  const businessTestimonials = [
    {
      company: "The Coffee House",
      companyImage: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      name: "Jessica Miller",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&h=50",
      role: "Owner",
      rating: 5,
      text: "We've seen a 22% increase in evening customers since implementing JamBox. People love having a say in the music!"
    },
    {
      company: "Urban Bites Restaurant",
      companyImage: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      name: "Robert Chen",
      avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&h=50",
      role: "Manager",
      rating: 5,
      text: "JamBox has transformed our dining experience. Customers stay for dessert more often when they're engaged with the music."
    },
    {
      company: "Elevation Gym",
      companyImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      name: "David Wilson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&h=50",
      role: "Owner",
      rating: 5,
      text: "Our member retention has increased by 30% since we installed JamBox. People love being able to influence the workout playlist."
    }
  ];

  const pricingPlans = [
    {
      name: "Free",
      description: "Essential tools to get started",
      price: "$0",
      features: [
        { text: "Basic playlist management" },
        { text: "Up to 50 song requests per day" },
        { text: "Standard app listing" },
        { text: "Basic analytics" }
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
      borderColor: "border-secondary"
    },
    {
      name: "Pro",
      description: "For established venues",
      price: "$29/month",
      features: [
        { text: "Advanced playlist curation" },
        { text: "Unlimited song requests" },
        { text: "Featured app listing" },
        { text: "Detailed analytics dashboard" },
        { text: "Custom branding" },
        { text: "Email support" }
      ],
      buttonText: "Choose Pro",
      highlighted: true,
      borderColor: "border-primary"
    }
  ];

  return (
    <section id="for-businesses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary">Turn Music Into Profit</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your venue's atmosphere with interactive music experiences that keep customers engaged longer and spending more.
          </p>
        </div>
        
        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {businessFeatures.map((feature, index) => (
            <BusinessFeature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        

        
        {/* Pricing Section with Swipable Mobile Support */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Pricing Plans</h3>
          
          {/* Responsive pricing section - Mobile swipe view for small screens, regular grid for desktop */}
          <div className="relative">
            {/* Mobile view (visible only on small screens) */}
            <div className="md:hidden">
              <div className="overflow-x-auto scrollbar-hide pb-4" ref={pricingRef}>
                <div className="flex space-x-6 min-w-max px-4">
                  {pricingPlans.map((plan, index) => (
                    <div key={index} className="min-w-[280px]">
                      <PricingCard
                        name={plan.name}
                        description={plan.description}
                        price={plan.price}
                        features={plan.features}
                        buttonText={plan.buttonText}
                        buttonVariant={plan.buttonVariant}
                        highlighted={plan.highlighted}
                        borderColor={plan.borderColor}
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Mobile scroll arrows */}
              {showLeftArrow && (
                <button 
                  onClick={() => scrollPricing('left')} 
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full shadow-lg"
                >
                  <ChevronLeft className="h-6 w-6 text-primary" />
                </button>
              )}
              {showRightArrow && (
                <button 
                  onClick={() => scrollPricing('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full shadow-lg"
                >
                  <ChevronRight className="h-6 w-6 text-primary" />
                </button>
              )}
              
              {/* Dots indicator for mobile */}
              <div className="flex justify-center space-x-2 mt-4">
                {pricingPlans.map((_, index) => (
                  <div 
                    key={index} 
                    className={`w-2 h-2 rounded-full ${index === 1 ? 'bg-primary' : 'bg-gray-600'}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Desktop view (visible only on medium screens and up) */}
            <div className="hidden md:flex md:space-x-6">
              {pricingPlans.map((plan, index) => (
                <div key={index} className="flex-1">
                  <PricingCard
                    name={plan.name}
                    description={plan.description}
                    price={plan.price}
                    features={plan.features}
                    buttonText={plan.buttonText}
                    buttonVariant={plan.buttonVariant}
                    highlighted={plan.highlighted}
                    borderColor={plan.borderColor}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a href="https://tally.so/r/waox6W" target="_blank" rel="noopener noreferrer">
            <Button className="bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition">
              Sign Up as a Venue
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
