import { Button } from "@/components/ui/button";
import FeatureCard from "./FeatureCard";
import Testimonial from "./Testimonial";

export default function ForUsers() {
  const testimonials = [
    {
      name: "Sarah K.",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      rating: 5,
      text: "Love being able to influence the playlist! I've discovered so many new songs through other people's requests."
    },
    {
      name: "Michael T.",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      rating: 4.5,
      text: "The credits system is addictive! I've gotten free drinks by using my JamBox points at partner venues."
    },
    {
      name: "James L.",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      rating: 5,
      text: "We use the venue map to plan our nights out. It's so helpful to see which places have the vibe we're looking for."
    }
  ];

  return (
    <section id="for-users" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Be the DJ</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Take control of the music at your favorite venues. Vote for songs, earn rewards, and discover new places to enjoy music with friends.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Feature Card 1 */}
          <FeatureCard 
            icon={<i className="fas fa-vote-yea text-2xl"></i>}
            title="Vote & Fast Track Favorites"
            description="Vote on upcoming songs and use your credits to push your favorites to the top of the playlist."
            color="primary"
          />
          
          {/* Feature Card 2 */}
          <FeatureCard 
            icon={<i className="fas fa-coins text-2xl"></i>}
            title="Earn Credits for Interactions"
            description="Get rewarded for being active. Earn credits by checking in, voting, and sharing your experience."
            color="secondary"
          />
          
          {/* Map Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4 text-center text-foreground">Discover Nearby Venues</h3>
            <div className="rounded-lg overflow-hidden shadow-lg border border-accent w-full">
              <div className="relative h-64 bg-gray-900">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91158.1250381261!2d26.03223675000001!3d44.43789365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2sBucharest%2C%20Romania!5e0!3m2!1sen!2sus!4v1654956851878!5m2!1sen!2sus"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a href="https://tally.so/r/waox6W" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition">
              Sign Up Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
