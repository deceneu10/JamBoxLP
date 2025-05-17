import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 gradient-bg text-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The Ultimate Multiplayer Mode for Music
            </h1>
            <p className="text-xl mb-8 text-white text-opacity-90">
              Transform how people experience music at your venue. Create interactive experiences where everyone gets a say in what plays next.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#for-users">
                <Button className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-full font-bold text-center w-full sm:w-auto">
                  For Users
                </Button>
              </a>
              <a href="#for-businesses">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-bold text-center w-full sm:w-auto">
                  For Businesses
                </Button>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img 
              src="https://pixabay.com/get/g08b66661eeb8911db81110a16d3b120bf7a10a167a46008be96e8efed84fc84db71e67eb6f32adbf4d3140ec51aa01fdd9d713d1b6e95624def584ad5d5409ea_1280.jpg" 
              alt="People enjoying music together at venue" 
              className="rounded-2xl shadow-xl mx-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-secondary p-4 rounded-xl shadow-lg hidden md:block">
              <div className="flex items-center space-x-3">
                <div className="bg-white p-2 rounded-full">
                  <i className="fas fa-music text-secondary"></i>
                </div>
                <div>
                  <p className="font-bold">DJ Queue</p>
                  <p className="text-sm">14 songs in queue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#F7FAFC" fillOpacity="1" d="M0,160L48,149.3C96,139,192,117,288,117.3C384,117,480,139,576,170.7C672,203,768,245,864,229.3C960,213,1056,139,1152,128C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
