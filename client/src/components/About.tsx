import ContactForm from "./ContactForm";
import { useLanguage } from "@/lib/LanguageContext";

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

export default function About() {
  const { t } = useLanguage();
  const teamMembers: TeamMember[] = [
    {
      name: "Angel Ionut Cerchia",
      role: "Product Lead & Tech Developer",
      avatar: "/images/team/angel-ionut-cerchia.jpg"
    },
    {
      name: "Marius Baraitaru",
      role: "Business Development",
      avatar: "/images/team/marius-baraitaru.jpg"
    },
    {
      name: "Bogdan Cardos",
      role: "Lead Developer",
      avatar: "/images/team/bogdan-cardos.jpg"
    },
    {
      name: "Catalin Niculai",
      role: "Marketing & Client Engagement",
      avatar: "/images/team/catalin-niculai.jpg"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">{t("about.heading")}</h2>
            <div className="rounded-2xl overflow-hidden shadow-xl bg-card border border-gray-800 p-8 mb-8">
              <p className="text-gray-300 mb-4">
                {t("about.description.p1")}
              </p>
              <p className="text-gray-300 mb-4">
                {t("about.description.p2")}
              </p>
              <p className="text-gray-300 mb-4">
                {t("about.description.p3")}
              </p>
            </div>
            
            {/* Team Section */}
            <div className="rounded-2xl overflow-hidden shadow-xl bg-card border border-gray-800 p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Echipa noastră</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => (
                  <div key={index} className="text-center bg-background rounded-xl p-4 shadow-md">
                    <div className="w-24 h-24 rounded-full border-2 border-primary mx-auto mb-3 overflow-hidden">
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
          </div>
        </div>
      </div>
    </section>
  );
}
