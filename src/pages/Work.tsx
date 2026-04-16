import { Link } from "react-router-dom";
import projectPark from "@/assets/project-park.jpg";
import projectBuffalo from "@/assets/project-buffalo.jpg";
import CTA from "@/components/ui/CTA";

const projects = [
  {
    id: "virginia-park",
    title: "Virginia Park Neighborhood Beautification",
    partner: "Ally",
    description: "EITI partnered with Ally to support residential improvements and community revitalization efforts.",
    image: projectPark,
    category: "Community Revitalization",
    ctaLink: "https://drive.google.com/drive/folders/1rWfL25PrmaCXsB9vO2Hd0CMoxLRoUrjQ?usp=drive_link",
    color: "#1CA6A3"
  },
  {
    id: "buffalo-soldiers",
    title: "Pole Barn Construction for Buffalo Soldiers Heritage Association",
    partner: "Carhartt",
    description: "A collaborative build project with Carhartt and the Buffalo Soldiers Heritage Association, providing hands-on construction experience.",
    image: projectBuffalo,
    category: "Historic Preservation",
    ctaLink: "https://drive.google.com/drive/folders/1ArQ2X7Lks2GmOcKvoahGRoLTUlGFJVwL?usp=drive_link",
    color: "#74B4E0"
  }
];

const WorkPage = () => (
  <div>
    {/* Hero Section */}
    <section className="relative h-full flex items-center overflow-hidden bg-surface pt-32">
      <div className="container-narrow grid w-full items-center gap-12 relative z-10 md:grid-cols-12 px-4 sm:px-6">
        <div className="md:col-span-7">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold text-[#333333] leading-[1.1] tracking-tight mb-8">
            Real Projects. <span className="text-[#1CA6A3]">Real Experience.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#555] max-w-xl mb-10 leading-relaxed">
            EITI students gain hands-on experience by working on real projects that serve communities and partners across Detroit.
          </p>
          <div className="flex items-center gap-4">
            <div className="bg-white p-6 rounded-xl editorial-shadow max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-[#5FB673] text-2xl">verified</span>
                <span className="text-[#1CA6A3] font-bold text-2xl tracking-tight">120+</span>
              </div>
              <p className="text-xs text-[#555] font-medium">Completed community infrastructure projects across the region.</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 relative">
          <div className="rounded-2xl overflow-hidden editorial-shadow bg-white p-2">
            <img
              alt="EITI students working on community project"
              className="w-full aspect-[4/5] object-cover rounded-xl"
              src={projectPark}
            />
          </div>
          <div className="absolute bottom-3 -left-5 md:-left-7 max-w-[240px] rounded-xl bg-[#1CA6A3] p-6 editorial-shadow">
            <p className="text-3xl font-headline font-black text-white">2</p>
            <p className="text-sm font-semibold text-white/90">Featured Case Studies</p>
          </div>
        </div>
      </div>
    </section>

    {/* Projects Section */}
    <section className="py-16 sm:py-24 bg-[#F2F9F9]">
      <div className="container-narrow px-4 sm:px-6 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs font-bold text-[#5FB673] uppercase tracking-[0.25em] mb-4">
            Featured Work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-[#333333] leading-tight">
            Our <span className="text-[#1CA6A3]">Projects</span>
          </h2>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col"
            >
              {/* Image Header */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-1 sm:left-4">
                  <span 
                    className="sm:px-3 px-2 py-1.5 rounded-lg text-xs font-bold text-white tracking-wide uppercase"
                    style={{ backgroundColor: project.color }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Partner Badge */}
                <div className="absolute top-4 right-1 sm:right-4">
                  <span className="bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-semibold text-[#333]">
                    Partner: {project.partner}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-headline font-bold text-[#333333] mb-4 leading-tight">
                  {project.title}
                </h3>
                <p className="text-[#555] text-sm sm:text-base leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* CTA Button */}
                <a
                  href={project.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-white transition-all duration-300 hover:shadow-lg group/btn"
                  style={{ backgroundColor: project.color }}
                >
                  View Case Study
                  <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover/btn:translate-x-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Impact Stats Section */}
    <section className="py-16 sm:py-24 bg-white">
      <div className="container-narrow px-4 sm:px-6 mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-[#333333] leading-tight mb-6">
            Projects That <span className="text-[#1CA6A3]">Make a Difference</span>
          </h2>
          <p className="text-lg text-[#555] max-w-2xl mx-auto leading-relaxed">
            Our community projects provide real-world training while delivering tangible benefits to Detroit neighborhoods.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { value: "60+", label: "Projects Completed", icon: "construction", color: "#1CA6A3" },
            { value: "200+", label: "Students Trained", icon: "school", color: "#74B4E0" },
            { value: "15+", label: "Community Partners", icon: "handshake", color: "#5FB673" }
          ].map((stat, i) => (
            <div key={i} className="bg-[#F2F9F9] rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `${stat.color}15` }}
              >
                <span className="material-symbols-outlined text-2xl" style={{ color: stat.color }}>
                  {stat.icon}
                </span>
              </div>
              <p className="text-4xl font-headline font-black mb-2" style={{ color: stat.color }}>
                {stat.value}
              </p>
              <p className="text-base font-semibold text-[#333]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

   
  </div>
);

export default WorkPage;
