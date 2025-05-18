import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background text-white relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              The Ultimate Multiplayer Mode for Music
            </h1>
            <p className="text-xl mb-8 text-white">
              Transform how people experience music at venues. Create interactive experiences where everyone gets a say in what plays next.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
              <a href="#for-users">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-bold text-center w-full sm:w-auto">
                  For Users
                </Button>
              </a>
              <a href="#for-businesses">
                <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full font-bold text-center w-full sm:w-auto">
                  For Businesses
                </Button>
              </a>
            </div>
            <div className="flex justify-center mt-16 sm:mt-6">
              <a href="https://play.jambox.top/" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="bg-accent hover:bg-accent/90 text-white px-16 py-8 sm:px-16 sm:py-8 rounded-full font-bold text-2xl sm:text-2xl shadow-lg shadow-accent/30 transform hover:scale-105 transition-all animate-pulse w-full">
                  PLAY DEMO!
                </Button>
              </a>
            </div>
          </div>
          <div className="hidden md:flex md:w-1/2 relative justify-center">
            <div className="w-full max-w-sm px-4 aspect-[9/16] relative bg-background rounded-3xl shadow-2xl border-2 border-primary/50 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=900" 
                alt="People enjoying music together at venue" 
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/70 to-background"></div>
              
              <div className="absolute top-0 left-0 right-0 p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden bg-background flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="512" height="512" fill="#10101E" />
                        <path d="M256 105C207.4 105 168 144.4 168 193V319C168 367.6 207.4 407 256 407C304.6 407 344 367.6 344 319V193C344 144.4 304.6 105 256 105Z" stroke="#FF00FF" strokeWidth="12"/>
                        <path d="M256 147C230.6 147 210 167.6 210 193V319C210 344.4 230.6 365 256 365C281.4 365 302 344.4 302 319V193C302 167.6 281.4 147 256 147Z" stroke="#00FFFF" strokeWidth="12"/>
                        <path d="M256 256L226 226M256 256L286 226" stroke="#FFA500" strokeWidth="12"/>
                      </svg>
                    </div>
                    <span className="text-lg font-bold text-white">JamBox</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-white">Admin</span>
                    <span className="text-sm text-secondary">User</span>
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                      J
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-4">Welcome, JamBox-2</h3>
                  <div className="bg-card p-4 rounded-xl mb-4">
                    <h4 className="text-lg font-bold mb-2">Now Playing</h4>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-12 h-12 bg-gray-700 flex-shrink-0"></div>
                      <div>
                        <p className="font-bold">Till I Collapse</p>
                        <p className="text-sm text-gray-400">Eminem</p>
                        <p className="text-sm text-secondary">Selected by: JamBox-1</p>
                      </div>
                    </div>
                    <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-secondary" style={{width: "75%"}}></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span>4:54</span>
                      <span>4:58</span>
                    </div>
                  </div>
                  <button className="w-full bg-green-500 text-white py-3 rounded-lg font-bold mb-4">
                    Ready to select
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
