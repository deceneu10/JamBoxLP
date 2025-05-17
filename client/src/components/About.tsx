import ContactForm from "./ContactForm";

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

export default function About() {
  const teamMembers: TeamMember[] = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Sarah Park",
      role: "CTO",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Michael Lee",
      role: "Head of Business",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">About JamBox</h2>
            <div className="rounded-2xl overflow-hidden shadow-xl bg-card border border-gray-800 p-8 mb-8">
              <p className="text-gray-300 mb-4">
                JamBox was born from a simple frustration: why can't customers have more say in the music played at their favorite venues?
              </p>
              <p className="text-gray-300 mb-4">
                Founded in 2022 by a team of music lovers and tech enthusiasts, we set out to create a platform that bridges the gap between venues and their customers through interactive music experiences.
              </p>
              <p className="text-gray-300 mb-4">
                Today, JamBox is helping hundreds of venues increase engagement, customer satisfaction, and revenue through the power of collaborative music selection.
              </p>
            </div>
            
            {/* Team Section */}
            <div className="rounded-2xl overflow-hidden shadow-xl bg-card border border-gray-800 p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Our Team</h3>
              <div className="grid grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                  <div key={index} className="text-center bg-background rounded-xl p-4 shadow-md">
                    <div className="w-20 h-20 rounded-full border-2 border-primary mx-auto mb-3 overflow-hidden">
                      <img 
                        src={member.avatar} 
                        alt={`${member.name} avatar`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-bold text-foreground">{member.name}</h4>
                    <p className="text-sm text-gray-400">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <ContactForm />
            
            {/* Show app screenshot */}
            <div className="mt-8 rounded-2xl overflow-hidden shadow-xl border border-primary">
              <div className="bg-card p-4">
                <h3 className="text-lg font-bold text-foreground mb-2">Our Mobile App</h3>
                <p className="text-sm text-gray-400">Experience the future of music control in your favorite venues</p>
              </div>
              <div className="relative aspect-[9/16] max-w-xs mx-auto bg-background p-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-4.0.3&auto=format&fit=crop&w=500"
                    alt="People listening to music on mobile"
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                  />
                  <div className="relative w-full h-full max-w-xs rounded-3xl overflow-hidden border-4 border-gray-800 shadow-2xl">
                    <div className="absolute inset-0 bg-black"></div>
                    <div className="absolute top-0 left-0 right-0 p-3 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-full bg-background flex items-center justify-center">
                          <svg width="24" height="24" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                            <rect width="512" height="512" fill="#10101E" />
                            <path d="M256 105C207.4 105 168 144.4 168 193V319C168 367.6 207.4 407 256 407C304.6 407 344 367.6 344 319V193C344 144.4 304.6 105 256 105Z" stroke="#FF00FF" strokeWidth="12"/>
                            <path d="M256 147C230.6 147 210 167.6 210 193V319C210 344.4 230.6 365 256 365C281.4 365 302 344.4 302 319V193C302 167.6 281.4 147 256 147Z" stroke="#00FFFF" strokeWidth="12"/>
                            <path d="M256 256L226 226M256 256L286 226" stroke="#FFA500" strokeWidth="12"/>
                          </svg>
                        </div>
                        <span className="text-white font-bold text-sm">JamBox</span>
                      </div>
                      <div className="flex space-x-3">
                        <span className="text-white text-xs">Admin</span>
                        <span className="text-secondary text-xs">User</span>
                        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs">
                          J
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute top-12 left-0 right-0 p-4">
                      <h4 className="text-white font-bold text-lg mb-4">Welcome, JamBox-2</h4>
                      
                      <div className="bg-gray-900 rounded-lg p-3 mb-4">
                        <h5 className="text-white font-bold text-sm mb-2">Now Playing</h5>
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-10 h-10 bg-gray-800 flex-shrink-0"></div>
                          <div>
                            <p className="text-white text-xs font-bold">Till I Collapse</p>
                            <p className="text-gray-400 text-xs">Eminem</p>
                            <p className="text-secondary text-xs">Selected by: JamBox-1</p>
                          </div>
                        </div>
                        <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full bg-secondary" style={{width: "75%"}}></div>
                        </div>
                        <div className="flex justify-between text-gray-400 text-xs mt-1">
                          <span>4:54</span>
                          <span>4:58</span>
                        </div>
                      </div>
                      
                      <button className="w-full bg-green-500 text-white text-xs py-2 rounded-md font-bold mb-6">
                        Ready to select
                      </button>
                      
                      <h5 className="text-white font-bold text-sm mb-2">Current Queue</h5>
                      <div className="bg-gray-900 rounded-lg p-3">
                        <h6 className="text-white font-bold text-xs mb-4">Coming Up Next</h6>
                        <div className="flex flex-col items-center justify-center py-6">
                          <p className="text-gray-400 text-xs mb-1">The queue is empty</p>
                          <p className="text-gray-500 text-xs">Add songs to hear them next</p>
                        </div>
                      </div>
                      
                      <h5 className="text-white font-bold text-sm mt-6 mb-2">Add Songs</h5>
                      <div className="bg-gray-900 rounded-lg p-3">
                        <h6 className="text-white font-bold text-xs mb-3">Add to Queue</h6>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-3 flex items-center">
                            <i className="fas fa-search text-gray-400 text-xs"></i>
                          </div>
                          <input 
                            type="text" 
                            placeholder="Search for songs..." 
                            className="w-full bg-gray-800 text-xs text-gray-300 pl-9 pr-3 py-2 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
