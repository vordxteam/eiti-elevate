import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import projectPark from "@/assets/project-park.jpg";
import projectBuffalo from "@/assets/project-buffalo.jpg";

const programs = [
  {
    id: "electrical",
    slug: "electrical",
    title: "Electrical Systems & Infrastructure",
    shortTitle: "Electrical Systems",
    desc: "Master the invisible force powering the modern world. Our Electrical program goes beyond wiring basics, diving deep into smart-grid integration, industrial automation, and complex system diagnostics. You won't just follow blueprints; you'll learn to engineer solutions.",
    learn: [
      "Commercial Code Compliance",
      "PLC Programming",
      "Blueprint Interpretation",
      "Motor Control Systems"
    ],
    careers: [
      "Master Electrician",
      "Grid Operations Tech",
      "Industrial Inspector"
    ],
    image: projectPark,
    iconColor: "text-primary"
  },
  {
    id: "solar",
    slug: "solar",
    title: "Solar Technology & Renewable Energy",
    shortTitle: "Solar Technology",
    desc: "Lead the transition to sustainable power. This program covers the complete lifecycle of photovoltaic systems, from initial site assessment and mechanical installation to inverter commissioning and storage solutions.",
    learn: [
      "PV System Design",
      "Battery Storage Setup",
      "Energy Auditing",
      "Grid-Tied Protocols"
    ],
    careers: [
      "Solar Designer",
      "Renewable Energy Consultant",
      "Field Service Engineer"
    ],
    image: projectBuffalo,
    iconColor: "text-tertiary"
  },
  {
    id: "carpentry",
    slug: "carpentry",
    title: "Master Carpentry & Construction",
    shortTitle: "Master Carpentry",
    desc: "Structural integrity meets artisanal precision. Our carpentry program focuses on advanced framing, finishing techniques, and the science of modern sustainable building materials. Learn to build for the next century.",
    learn: [
      "Advanced Framing Systems",
      "Finish Carpentry",
      "Sustainable Sourcing",
      "CAD for Construction"
    ],
    careers: [
      "Project Manager",
      "Structural Specialist",
      "Independent Contractor"
    ],
    image: heroImage,
    iconColor: "text-primary"
  },
  {
    id: "culinary",
    slug: "culinary",
    title: "Culinary Arts & Hospitality Management",
    shortTitle: "Culinary Arts",
    desc: "The kitchen is an industry of precision and passion. Our program blends classical techniques with modern kitchen management, teaching you the high-stakes discipline of world-class gastronomy.",
    learn: [
      "Global Cuisines",
      "Molecular Gastronomy",
      "Cost Control & Operations"
    ],
    careers: [
      "Executive Chef",
      "Restaurant Manager",
      "Hospitality Consultant"
    ],
    image: projectPark,
    iconColor: "text-primary"
  }
];

const ProgramsPage = () => (
  <div>
    {/* Hero Section */}
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-surface pt-32">
      <div className="container-narrow grid w-full items-center gap-12 relative z-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-wider mb-6">
            PROFESSIONAL EXCELLENCE
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-primary leading-[1.1] tracking-tight mb-8">
            The Intellectual Catalyst for <span className="text-tertiary">Industrial Careers</span>.
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
            EITI provides the blueprint for high-demand technical mastery. Our curriculum is designed by industry veterans to transform potential into professional authority.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="#electrical"
              className="primary-button flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-bold transition-all"
            >
              Explore Programs
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <div className="flex items-center gap-2 px-6 font-bold text-primary">
              <span className="material-symbols-outlined">verified</span>
              <span>Accredited Certification</span>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 relative">
          <div className="rounded-2xl overflow-hidden editorial-shadow bg-surface-container-lowest p-2">
              <img
                alt="EITI Training Facility"
                className="w-full aspect-[4/5] object-cover rounded-xl"
                src={heroImage}
              />
          </div>
          <div className="absolute bottom-3 -left-5 md:-left-7 max-w-[240px] rounded-xl bg-surface-container-lowest p-6 editorial-shadow">
            <p className="text-3xl font-headline font-black text-primary">94%</p>
            <p className="text-sm font-semibold text-on-surface-variant">Employment rate within 6 months of graduation</p>
          </div>
        </div>
      </div>
    </section>

    {/* Sticky Sub-Navigation */}
    <div className="sticky top-[72px] z-40 bg-surface-container-low/95 backdrop-blur-md border-y border-outline-variant/10">
      <div className="container-narrow overflow-x-auto">
        <div className="flex gap-12 py-4 whitespace-nowrap scrollbar-hide">
          {programs.map((program) => (
            <a
              key={program.id}
              href={`#${program.id}`}
              className="text-sm font-bold font-headline text-on-surface-variant hover:text-primary transition-colors"
            >
              {program.shortTitle}
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Programs Container */}
    <div className="space-y-32 section-padding">
      {/* Electrical */}
      <section className="container-narrow" id="electrical">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Text Column */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-6 tracking-tight">
              Electrical Systems & Infrastructure
            </h2>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
              Master the invisible force powering the modern world. Our Electrical program goes beyond wiring basics, diving deep into smart-grid integration, industrial automation, and complex system diagnostics. You won't just follow blueprints; you'll learn to engineer solutions.
            </p>
            <div className="bg-surface-container-low p-8 rounded-xl mb-8">
              <h3 className="text-xl font-bold font-headline mb-4 flex items-center gap-2">
                <span className={`material-symbols-outlined ${programs[0].iconColor}`}>bolt</span>
                What you'll learn
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {programs[0].learn.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-on-surface-variant">
                    <span className={`material-symbols-outlined text-sm ${programs[0].iconColor}`}>check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-10">
              <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Career Outcomes</h3>
              <div className="flex flex-wrap gap-3">
                {programs[0].careers.map((career, i) => (
                  <span key={i} className="bg-surface-container-highest px-4 py-2 rounded-lg text-sm font-semibold">
                    {career}
                  </span>
                ))}
              </div>
            </div>
            <Link
              to={`/apply?program=${programs[0].slug}`}
              className="w-full md:text-lg text-sm md:w-auto px-10 py-4 primary-button rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
            >
              Apply for Electrical Program
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>

          {/* Image Column */}
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container-low">
              <img
                className="w-full h-full object-cover"
                src={programs[0].image}
                alt={`${programs[0].title} training`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solar */}
      <section className="bg-surface-container-low -mx-8 px-8 py-24" id="solar">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image Column */}
            <div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  className="w-full h-full object-cover"
                  src={programs[1].image}
                  alt={`${programs[1].title} training`}
                />
              </div>
            </div>

            {/* Text Column */}
            <div>
              <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-6 tracking-tight">
                Solar Technology & Renewable Energy
              </h2>
              <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                Lead the transition to sustainable power. This program covers the complete lifecycle of photovoltaic systems, from initial site assessment and mechanical installation to inverter commissioning and storage solutions.
              </p>
              <div className="bg-surface-container-lowest p-8 rounded-xl mb-8">
                <h3 className="text-xl font-bold font-headline mb-4 flex items-center gap-2">
                  <span className={`material-symbols-outlined ${programs[1].iconColor}`}>wb_sunny</span>
                  What you'll learn
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {programs[1].learn.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-on-surface-variant">
                      <span className={`material-symbols-outlined text-sm ${programs[1].iconColor}`}>check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-10">
                <h3 className="text-sm font-bold text-tertiary uppercase tracking-widest mb-4">Career Outcomes</h3>
                <div className="flex flex-wrap gap-3">
                  {programs[1].careers.map((career, i) => (
                    <span key={i} className="bg-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm">
                      {career}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                to={`/apply?program=${programs[1].slug}`}
                className="w-full   md:w-auto px-10 py-4 bg-tertiary text-white rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-1 sm:text-lg text-sm sm:gap-2 group"
              >
                Apply for Solar Program
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Carpentry */}
      <section className="container-narrow" id="carpentry">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Text Column */}
          <div>
            <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-6 tracking-tight">
              Master Carpentry & Construction
            </h2>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
              Structural integrity meets artisanal precision. Our carpentry program focuses on advanced framing, finishing techniques, and the science of modern sustainable building materials. Learn to build for the next century.
            </p>
            <div className="bg-surface-container-low p-8 rounded-xl mb-8">
              <h3 className="text-xl font-bold font-headline mb-4 flex items-center gap-2">
                <span className={`material-symbols-outlined ${programs[2].iconColor}`}>architecture</span>
                What you'll learn
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {programs[2].learn.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-on-surface-variant">
                    <span className={`material-symbols-outlined text-sm ${programs[2].iconColor}`}>check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-10">
              <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Career Outcomes</h3>
              <div className="flex flex-wrap gap-3">
                {programs[2].careers.map((career, i) => (
                  <span key={i} className="bg-surface-container-highest px-4 py-2 rounded-lg text-sm font-semibold">
                    {career}
                  </span>
                ))}
              </div>
            </div>
            <Link
              to={`/apply?program=${programs[2].slug}`}
              className="w-full md:w-auto px-10 py-4 primary-button rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center sm:gap-2 gap-1 sm:text-lg text-sm group"
            >
              Apply for Carpentry Program
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>

          {/* Image Column */}
          <div>
            <div className="aspect-video rounded-2xl overflow-hidden bg-surface-container-low mb-6">
              <img
                className="w-full h-full object-cover"
                src={programs[2].image}
                alt={`${programs[2].title} training`}
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary text-on-primary p-6 rounded-xl text-center">
                <p className="text-3xl font-black mb-1">12+</p>
                <p className="text-xs font-bold opacity-80">MONTHS OF FIELD WORK</p>
              </div>
              <div className="bg-secondary text-on-secondary p-6 rounded-xl text-center">
                <p className="text-3xl font-black mb-1">98%</p>
                <p className="text-xs font-bold opacity-80">SAFETY RATING</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culinary */}
   <section className="w-full px-4 sm:px-6 md:container-narrow" id="culinary">
  {/* Adjusted p-8 for mobile, p-12/20 for desktop; reduced rounded corners for mobile */}
  <div className="bg-surface-container-lowest rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-20 shadow-xl border border-outline-variant/5">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
      
      {/* Image Section */}
      <div className="lg:col-span-5 w-full flex justify-center">
        <div className="relative w-full max-w-[320px] lg:max-w-none">
          {/* Circular image scaled for mobile */}
          <div className="aspect-square rounded-full overflow-hidden border-4 md:border-8 border-surface-container-low shadow-2xl">
            <img
              className="w-full h-full object-cover"
              src={programs[3].image}
              alt={`${programs[3].title} training`}
            />
          </div>
          {/* Badge: Scaled down from h-32/w-32 to h-24/w-24 for mobile */}
          <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-tertiary text-white p-4 md:p-6 rounded-full h-24 w-24 md:h-32 md:w-32 flex flex-col items-center justify-center text-center shadow-lg">
            <span className="text-lg md:text-2xl font-black leading-tight">Top</span>
            <span className="text-[8px] md:text-[10px] font-bold uppercase">Rated Academy</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="lg:col-span-7 text-left">
        <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-on-surface mb-6 tracking-tight leading-tight">
          Culinary Arts & Hospitality Management
        </h2>
        <p className="text-base md:text-lg text-on-surface-variant mb-8 leading-relaxed">
          The kitchen is an industry of precision and passion. Our program blends classical techniques with modern kitchen management, teaching you the high-stakes discipline of world-class gastronomy.
        </p>

        {/* Info Grid: Ensure 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="w-full">
            <h3 className="text-xs md:text-sm font-bold text-primary uppercase tracking-widest mb-4">What you'll learn</h3>
            <ul className="space-y-3">
              {programs[3].learn.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-medium text-on-surface-variant">
                  <span className={`material-symbols-outlined text-sm shrink-0 ${programs[3].iconColor}`}>restaurant</span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full">
            <h3 className="text-xs md:text-sm font-bold text-primary uppercase tracking-widest mb-4">Career Outcomes</h3>
            <ul className="space-y-3">
              {programs[3].careers.map((career, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-medium text-on-surface-variant">
                  <span className={`material-symbols-outlined text-sm shrink-0 ${programs[3].iconColor}`}>groups</span>
                  <span className="leading-snug">{career}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link
          to={`/apply?program=${programs[3].slug}`}
          className="w-full md:w-auto px-10 py-4 primary-button rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center sm:text-lg text-sm sm:gap-2 group"
        >
          Apply for Culinary Program
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </Link>
      </div>
    </div>
  </div>
</section>
    </div>

    {/* Final CTA */}
    <section className="section-padding bg-primary rounded-[2rem] mx-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-50"></div>
      <div className="relative z-10 container-narrow text-center">
        <h2 className="sm:text-4xl text-2xl md:text-5xl font-headline font-extrabold text-on-primary mb-6 leading-tight tracking-tight">Your Industrial Future Starts Here.</h2>
        <p className="text-on-primary/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Don't just watch the industry change—lead it. Join the next cohort of specialists and secure your place in the emerging global workforce.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/apply"
            className="sm:px-12 px-2 py-5 bg-on-primary sm:text-lg text-sm text-primary rounded-xl font-bold text-lg hover:bg-on-primary/90 transition-all shadow-xl"
          >
            Global Enrollment Application
          </Link>
          <button className="sm:px-12 px-3 py-5 sm:text-lg tex-sm border-2 border-on-primary text-on-primary rounded-xl font-bold text-lg hover:bg-on-primary/10 transition-all">
            Talk to an Advisor
          </button>
        </div>
        <p className="text-on-primary/60 text-sm mt-8 font-medium">
          Fall Cohort Registration ends in 14 days.
        </p>
      </div>
    </section>
  </div>
);

export default ProgramsPage;
