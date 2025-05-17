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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <h2 className="text-4xl font-bold mb-6">About JamBox</h2>
            <p className="text-gray-600 mb-4">
              JamBox was born from a simple frustration: why can't customers have more say in the music played at their favorite venues?
            </p>
            <p className="text-gray-600 mb-4">
              Founded in 2022 by a team of music lovers and tech enthusiasts, we set out to create a platform that bridges the gap between venues and their customers through interactive music experiences.
            </p>
            <p className="text-gray-600 mb-4">
              Today, JamBox is helping hundreds of venues increase engagement, customer satisfaction, and revenue through the power of collaborative music selection.
            </p>
            
            {/* Team Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Our Team</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                  <div key={index} className="text-center">
                    <img 
                      src={member.avatar} 
                      alt={`${member.name} avatar`} 
                      className="w-24 h-24 rounded-full object-cover mx-auto mb-3"
                    />
                    <h4 className="font-bold">{member.name}</h4>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
