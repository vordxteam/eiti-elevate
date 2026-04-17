import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Residential Electrical Training",
    category: "Web Development",
    description:
      "Students built and tested residential wiring systems, gaining hands-on experience with circuits, panels, and safe electrical installations.",
    imageSrc:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
    imageAlt: "Student electrician working on wiring installation",
  },
  {
    id: 2,
    title: "Renewable Energy – Solar Technician Training",
    category: "Data & Design",
    description:
      "Students installed and configured solar energy systems, learning panel setup, energy flow, and basic maintenance technique",
    imageSrc:
      "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=800&q=80",
    imageAlt: "Students installing solar panels outdoors",
  },
  {
    id: 3,
    title: "Framing & Structural Carpentry",
    category: "Full Stack",
    description:
      "Students constructed structural frameworks, working with measurements, materials, and tools to build safe and durable structures.",
    
      imageSrc: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80",
    imageAlt: "Student carpenter working on wooden structure",
  },
  {
    id: 4,
    title: "Culinary Training Program",
    category: "Mobile Development",
    description:
      "Students prepared and presented a variety of dishes, learning kitchen techniques, food safety, and professional cooking skills.",
    imageSrc:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
    imageAlt: "Culinary student cooking in a professional kitchen",
  },
];

const WorkPreview: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="relative bg-white py-20 px-4 overflow-hidden">
      {/* Subtle background accent */}
      <div
        className="absolute top-0 left-0 w-full h-[2px]"
        style={{ background: "linear-gradient(90deg, #1CA6A3, #74B4E0)" }}
      />
      <div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ backgroundColor: "#1CA6A3" }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ backgroundColor: "#74B4E0" }}
      />

      <div className="relative max-w-7xl mx-auto mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{ color: "#1CA6A3", backgroundColor: "#1CA6A310" }}
          >
            Student Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Training That Builds{" "}
            <span
              className="relative inline-block"
              style={{ color: "#1CA6A3" }}
            >
              Real Projects
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2 8.5C60 3.5 150 1 298 8.5"
                  stroke="#74B4E0"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our students don't just learn in classrooms. They work on real
            projects that impact communities across Detroit.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer transition-all duration-300"
              style={{
                transform:
                  hoveredId === project.id ? "translateY(-6px)" : "translateY(0)",
                boxShadow:
                  hoveredId === project.id
                    ? "0 20px 40px rgba(28,166,163,0.18)"
                    : "0 4px 16px rgba(0,0,0,0.08)",
              }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(28,166,163,0.75) 0%, transparent 60%)",
                  }}
                />
                {/* Category badge */}
                {/* <span
                  className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full text-white"
                  style={{ backgroundColor: "#74B4E0" }}
                >
                  {project.category}
                </span> */}
              </div>

              {/* Content */}
              <div className="bg-white p-5">
                <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Hover underline accent */}
                <div
                  className="mt-4 h-0.5 rounded-full transition-all duration-300 origin-left"
                  style={{
                    backgroundColor: "#1CA6A3",
                    transform:
                      hoveredId === project.id ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "left",
                  }}
                />
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            to="/work"
            className="group inline-flex items-center gap-3 px-4 sm:px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-sm bg-[#1CA6A3] hover:bg-[#179490] hover:shadow-[#1CA6A3]/30 hover:-translate-y-0.5"
          >
            View Our Featured Projects
           <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">
                arrow_forward
              </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkPreview;
