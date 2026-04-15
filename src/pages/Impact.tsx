import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import Slider from "@/components/Slider";
import CTA from "@/components/ui/CTA";

const companyCards = [
  { src: "/images/company1.jpg", alt: "Company 1", width: 188, height: 100 },
  { src: "/images/company2.jpg", alt: "Company 2", width: 188, height: 100 },
  { src: "/images/company3.jpg", alt: "Company 3", width: 188, height: 100 },
  { src: "/images/company4.jpg", alt: "Company 4", width: 188, height: 100 },
  { src: "/images/company5.png", alt: "Company 5", width: 188, height: 100 },
  { src: "/images/company6.jpg", alt: "Company 6", width: 188, height: 100 },
];

const stats = [
  {
    value: "15+",
    label: "Years",
    description: "Training Detroit's workforce and connecting talent to opportunity.",
    icon: "calendar_month",
    color: "#1CA6A3"
  },
  {
    value: "93%",
    label: "Job Placement Rate",
    description: "Graduates move from training into real jobs. Fast.",
    icon: "work",
    color: "#74B4E0"
  },
  {
    value: "95%",
    label: "Retention Rate",
    description: "We don't just place people. We prepare them to last.",
    icon: "person_check",
    color: "#5FB673"
  },
  {
    value: "2,200+",
    label: "Careers Launched",
    description: "Thousands of Detroit residents now earning and building real futures.",
    icon: "rocket_launch",
    color: "#1CA6A3"
  }
];

const ImpactPage = () => (
  <div>
    {/* Hero Section */}
    <section className="relative h-full flex items-center overflow-hidden bg-surface pt-32">
      <div className="container-narrow grid w-full items-center gap-12 relative z-10 md:grid-cols-12 px-4 sm:px-6">
        <div className="md:col-span-7">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold text-[#333333] leading-[1.1] tracking-tight mb-8">
            Driving Opportunity Through <span className="text-[#1CA6A3]">Training</span>
          </h1>
          <p className="text-lg md:text-xl text-[#555] max-w-xl mb-10 leading-relaxed">
            For over 15 years, EITI has been transforming lives through hands-on workforce training, connecting Detroit residents to meaningful careers in high-demand industries.
          </p>
        </div>
        <div className="md:col-span-5 relative">
          <div className="rounded-2xl overflow-hidden editorial-shadow bg-white p-2">
            <img
              alt="EITI Training Impact"
              className="w-full aspect-[4/5] object-cover rounded-xl"
              src={heroImage}
            />
          </div>
          <div className="absolute bottom-3 -left-5 md:-left-7 max-w-[240px] rounded-xl bg-[#1CA6A3] p-6 editorial-shadow">
            <p className="text-3xl font-headline font-black text-white">15+</p>
            <p className="text-sm font-semibold text-white/90">Years of Impact</p>
          </div>
        </div>
      </div>
    </section>

    {/* Impact Stats Cards */}
    <section className="py-16 sm:py-24 bg-[#F2F9F9]">
      <div className="container-narrow px-4 sm:px-6 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-t-4"
              style={{ borderColor: stat.color }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${stat.color}15` }}
              >
                <span
                  className="material-symbols-outlined text-2xl"
                  style={{ color: stat.color }}
                >
                  {stat.icon}
                </span>
              </div>
              <p
                className="text-4xl sm:text-5xl font-headline font-black mb-2"
                style={{ color: stat.color }}
              >
                {stat.value}
              </p>
              <h3 className="text-lg font-bold text-[#333333] mb-3">
                {stat.label}
              </h3>
              <p className="text-sm text-[#555] leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Who We Serve */}
    <section className="py-16 sm:py-24 bg-white">
      <div className="container-narrow px-4 sm:px-6 mx-auto">
        <div className="text-center mb-12 sm:mb-16">
        
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-[#333333] leading-tight mb-6">
            Who We <span className="text-[#1CA6A3]">Serve</span>
          </h2>
          <p className="text-lg text-[#555] max-w-2xl mx-auto leading-relaxed">
            EITI serves Detroit residents who are ready to build a better future through skill development and career training. We focus on individuals seeking opportunity, stability, and a clear path into the workforce.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "groups", title: "Job Seekers", desc: "Individuals looking for stable employment opportunities" },
            { icon: "school", title: "Career Changers", desc: "Professionals seeking to transition into skilled trades" },
            { icon: "location_city", title: "Urban Residents", desc: "Detroit community members ready to upskill" },
            { icon: "diversity_3", title: "Young Adults", desc: "Youth beginning their professional journey" }
          ].map((item, i) => (
            <div key={i} className="bg-[#F2F9F9] rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-[#1CA6A3]/10 flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-2xl text-[#1CA6A3]">{item.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-[#333333] mb-2">{item.title}</h3>
              <p className="text-sm text-[#555]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Opportunity Gap */}
    <section className="py-16 sm:py-24 bg-[#F2F9F9]">
      <div className="container-narrow px-4 sm:px-6 mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-sm">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-headline font-bold text-[#333333] leading-tight mb-6">
                The Gap Is <span className="text-[#74B4E0]">Real</span>.<br />So Is the <span className="text-[#1CA6A3]">Solution</span>.
              </h2>
              <p className="text-lg text-[#555] leading-relaxed mb-8">
                Too many capable individuals lack access to training, resources, and pathways into sustainable careers. EITI exists to close that gap by providing hands-on education, employer-aligned training, and direct connections to opportunity.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-[#1CA6A3]/10 rounded-lg">
                  <span className="material-symbols-outlined text-[#1CA6A3]">handshake</span>
                  <span className="text-sm font-medium text-[#333]">Employer Partnerships</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-[#74B4E0]/10 rounded-lg">
                  <span className="material-symbols-outlined text-[#74B4E0]">construction</span>
                  <span className="text-sm font-medium text-[#333]">Hands-On Training</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-[#5FB673]/10 rounded-lg">
                  <span className="material-symbols-outlined text-[#5FB673]">trending_up</span>
                  <span className="text-sm font-medium text-[#333]">Career Growth</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#1CA6A3]/20 to-[#74B4E0]/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="material-symbols-outlined text-6xl sm:text-8xl text-[#1CA6A3]">diversity_2</span>
                  <p className="text-2xl sm:text-3xl font-headline font-bold text-[#333333] mt-6 mb-2">Building Bridges</p>
                  <p className="text-[#555]">Between talent and opportunity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Partners Section */}
    <section className="py-16 sm:py-24 bg-white">
      <div className="container-narrow px-4 sm:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-[#333333] leading-tight mb-4">
            Our <span className="text-[#1CA6A3]">Partners</span>
          </h2>
          <p className="text-lg text-[#555] max-w-2xl mx-auto">
            Working together to expand access and impact.
          </p>
        </div>
        <Slider images={companyCards} speed={30} />
      </div>
    </section>

        <CTA
          heading="Partner With Us"
          description="Help us expand access to training, create jobs, and strengthen Detroit's workforce."
          buttonLabel="Apply Now"
          buttonLink="/apply"
        />
  </div>
);

export default ImpactPage;
