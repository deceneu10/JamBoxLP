import { Button } from "@/components/ui/button";
import BusinessFeature from "./BusinessFeature";
import Testimonial from "./Testimonial";
import PricingCard from "./PricingCard";

export default function ForBusinesses() {
  const businessFeatures = [
    {
      icon: <i className="fas fa-door-open text-xl text-primary"></i>,
      title: "Bring Clients In Sooner",
      description: "Advertise your venue's current vibe through the app and attract customers earlier in the evening."
    },
    {
      icon: <i className="fas fa-hourglass-half text-xl text-primary"></i>,
      title: "Keep Them Engaged Longer",
      description: "Interactive music experiences keep customers entertained and spending more time (and money) at your venue."
    },
    {
      icon: <i className="fas fa-hand-holding-usd text-xl text-primary"></i>,
      title: "Earn Revenue from Music",
      description: "Generate additional income through song request fees, premium memberships, and promotional opportunities."
    },
    {
      icon: <i className="fas fa-file-invoice-dollar text-xl text-primary"></i>,
      title: "Save Money on Licensing",
      description: "Our partnerships with music licensing companies can reduce your overall music licensing costs."
    },
    {
      icon: <i className="fas fa-sliders-h text-xl text-primary"></i>,
      title: "Maintain Control with Curated Playlists",
      description: "Set boundaries for your music while still allowing customer input. You decide the overall vibe."
    },
    {
      icon: <i className="fas fa-heart text-xl text-primary"></i>,
      title: "Play What Your Clients Love",
      description: "Get real-time data on what music resonates with your specific clientele to optimize your playlists."
    },
    {
      icon: <i className="fas fa-bullhorn text-xl text-primary"></i>,
      title: "Gain Extra Exposure",
      description: "Featured placement in the app for special events and promotions to attract new customers."
    },
    {
      icon: <i className="fas fa-tags text-xl text-primary"></i>,
      title: "Cross Sell with Music Triggers",
      description: "Set up special deals that activate when certain songs play to drive additional sales."
    }
  ];

  const businessTestimonials = [
    {
      company: "The Coffee House",
      companyImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300",
      name: "Jessica Miller",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&h=50",
      role: "Owner",
      rating: 5,
      text: "We've seen a 22% increase in evening customers since implementing JamBox. People love having a say in the music!"
    },
    {
      company: "Urban Bites Restaurant",
      companyImage: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300",
      name: "Robert Chen",
      avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&h=50",
      role: "Manager",
      rating: 5,
      text: "JamBox has transformed our dining experience. Customers stay for dessert more often when they're engaged with the music."
    },
    {
      company: "Elevation Lounge",
      companyImage: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300",
      name: "David Wilson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&h=50",
      role: "Owner",
      rating: 5,
      text: "Our drink sales have increased by 30% during weeknights. JamBox creates a fun, interactive atmosphere even on slower nights."
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
      borderColor: "border-gray-300"
    },
    {
      name: "Pro",
      description: "For established venues",
      price: "$49",
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
    },
    {
      name: "Enterprise",
      description: "For multiple locations",
      price: "$199",
      features: [
        { text: "Everything in Pro plan" },
        { text: "Multi-location management" },
        { text: "Priority app listings" },
        { text: "API access" },
        { text: "Custom integrations" },
        { text: "Dedicated account manager" }
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
      borderColor: "border-dark"
    }
  ];

  return (
    <section id="for-businesses" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Turn Music Into Profit</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
        
        {/* Business Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Trusted by Businesses Everywhere</h3>
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            {businessTestimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                company={testimonial.company}
                companyImage={testimonial.companyImage}
                name={testimonial.name}
                avatar={testimonial.avatar}
                role={testimonial.role}
                rating={testimonial.rating}
                text={testimonial.text}
              />
            ))}
          </div>
        </div>
        
        {/* Pricing Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Pricing Plans</h3>
          <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                name={plan.name}
                description={plan.description}
                price={plan.price}
                features={plan.features}
                buttonText={plan.buttonText}
                buttonVariant={plan.buttonVariant}
                highlighted={plan.highlighted}
                borderColor={plan.borderColor}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <Button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition">
            Sign Up as a Venue
          </Button>
        </div>
      </div>
    </section>
  );
}
