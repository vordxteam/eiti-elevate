import heroImage from "@/assets/hero-image.jpg";
import projectPark from "@/assets/project-park.jpg";
import projectBuffalo from "@/assets/project-buffalo.jpg";
import CTA from "@/components/ui/CTA";

const AboutPage = () => {
  const team = [
    { name: "Anthony Jackson", role: "President", initials: "AJ", color: "#1CA6A3" },
    { name: "William Aaron", role: "Chief Operating Officer", initials: "WA", color: "#74B4E0" },
    { name: "Tailar Jackson", role: "Executive Assistant", initials: "TJ", color: "#5FB673" },
    { name: "Abram Jones", role: "Residential Electrical Instructor", initials: "AJ", color: "#1CA6A3" },
    { name: "Fred Burr Jr.", role: "Framing and Structural Carpentry Instructor", initials: "FB", color: "#74B4E0" },
    { name: "Brandon Knight", role: "Renewable Energy Instructor", initials: "BK", color: "#5FB673" },
  ];

  return (
    <div>
      {/* Hero Section - Who Are We */}
      <section className="relative h-full flex items-center overflow-hidden bg-surface pt-32">
        <div className="container-narrow grid w-full items-center gap-12 relative z-10 md:grid-cols-12 px-4 sm:px-6">
          <div className="md:col-span-7">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold text-[#333333] leading-[1.1] tracking-tight mb-8">
              Who <span className="text-[#1CA6A3]">We Are</span>
            </h1>
            <p className="text-lg md:text-xl text-[#555] max-w-xl mb-8 leading-relaxed">
              For over 15 years, EITI has equipped Detroit residents with the skills and pathways needed to enter and succeed in the workforce.
            </p>
            <div className="flex items-center gap-4">
              <div className="bg-white p-6 rounded-xl editorial-shadow max-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-[#5FB673] text-2xl">calendar_month</span>
                  <span className="text-[#1CA6A3] font-bold text-2xl tracking-tight">15+</span>
                </div>
                <p className="text-xs text-[#555] font-medium">Years of workforce training excellence</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden editorial-shadow bg-white p-2">
              <img
                alt="EITI Training"
                className="w-full aspect-[4/5] object-cover rounded-xl"
                src={heroImage}
              />
            </div>
            <div className="absolute bottom-3 -left-5 md:-left-7 max-w-[240px] rounded-xl bg-[#1CA6A3] p-6 editorial-shadow">
              <p className="text-3xl font-headline font-black text-white">2,200+</p>
              <p className="text-sm font-semibold text-white/90">Careers Launched</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24 bg-[#F2F9F9]">
        <div className="container-narrow px-4 sm:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Mission Card */}
            <div className="group bg-white rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-l-4 border-[#1CA6A3]">
              <div className="w-14 h-14 rounded-xl bg-[#1CA6A3]/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl text-[#1CA6A3]">target</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-headline font-bold text-[#333333] mb-4">
                Our Mission
              </h2>
              <p className="text-[#555] text-base sm:text-lg leading-relaxed">
                Emerging Industries Training Institute (EITI) advances economic mobility by training Detroit residents for real careers. Through hands-on, employer-aligned programs, we equip individuals with the skills and credentials needed to secure sustainable employment and build long-term stability.
              </p>
            </div>

            {/* Vision Card */}
            <div className="group bg-white rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-l-4 border-[#74B4E0]">
              <div className="w-14 h-14 rounded-xl bg-[#74B4E0]/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl text-[#74B4E0]">visibility</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-headline font-bold text-[#333333] mb-4">
                Our Vision
              </h2>
              <p className="text-[#555] text-base sm:text-lg leading-relaxed">
                To build a stronger, more inclusive workforce by connecting every individual to real opportunity, long-term careers, and lasting economic stability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container-narrow px-4 sm:px-6 mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-[#333333] leading-tight mb-6">
              Our <span className="text-[#1CA6A3]">Team</span>
            </h2>
            <p className="text-lg text-[#555] max-w-2xl mx-auto leading-relaxed">
              Dedicated professionals committed to transforming lives through workforce training and career development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div
                key={member.name}
                className="group bg-[#F2F9F9] rounded-2xl p-6 sm:p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5 editorial-shadow"
                  style={{ backgroundColor: member.color }}
                >
                  <span className="text-2xl font-headline font-black text-white">
                    {member.initials}
                  </span>
                </div>
                <h3 className="text-lg font-headline font-bold text-[#333333] mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-[#555] font-medium">
                  {member.role}
                </p>
                <div
                  className="mt-4 h-1 w-12 rounded-full mx-auto"
                  style={{ backgroundColor: member.color }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values/Why We Matter */}
      <section className="py-16 sm:py-24 bg-[#F2F9F9]">
        <div className="container-narrow px-4 sm:px-6 mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-sm">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-headline font-bold text-[#333333] leading-tight mb-6">
                  Building <span className="text-[#1CA6A3]">Careers</span>,<br />
                  Transforming <span className="text-[#74B4E0]">Communities</span>
                </h2>
                <p className="text-lg text-[#555] mb-8 leading-relaxed">
                  EITI is more than a training institute. We are a bridge between potential and opportunity, connecting Detroit residents to meaningful careers that provide stability, growth, and pride.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: "handshake", text: "Employer-aligned training programs" },
                    { icon: "construction", text: "Hands-on, practical skill development" },
                    { icon: "trending_up", text: "Proven pathway to economic mobility" },
                    { icon: "groups", text: "Community-focused workforce solutions" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#1CA6A3]">{item.icon}</span>
                      <span className="text-[#333] font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                    <img className="w-full h-full object-cover" src={projectPark} alt="EITI training session" />
                  </div>
                  <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                    <img className="w-full h-full object-cover" src={projectBuffalo} alt="Hands-on project work" />
                  </div>
                </div>
                <div className="pt-8 space-y-4">
                  <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                    <img className="w-full h-full object-cover" src={heroImage} alt="Student success" />
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                    <img className="w-full h-full object-cover" src={projectBuffalo} alt="Community impact" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
