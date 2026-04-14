import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import projectPark from "@/assets/project-park.jpg";
import projectBuffalo from "@/assets/project-buffalo.jpg";
import FluidReveal from "@/components/FluidReveal";
const tracks = [
  {
    title: "Electrical Technology",
    category: "Industrial",
    description:
      "Master industrial power systems, circuitry, and smart-grid integration.",
    image: projectPark,
  },
  {
    title: "Solar PV Systems",
    category: "Green Energy",
    description:
      "Installation and maintenance of renewable energy infrastructure.",
    image: projectBuffalo,
  },
  {
    title: "Advanced Carpentry",
    category: "Construction",
    description:
      "From foundational structural work to high-end architectural finishing.",
    image: heroImage,
  },
  {
    title: "Culinary Arts",
    category: "Hospitality",
    description:
      "Executive-level kitchen management and hospitality expertise.",
    image: projectPark,
  },
];
const HomePage = () => (
  <div>
    {/* Hero Section */}
    <section className="relative min-h-[921px] max-w-[1280px] m-auto flex items-center overflow-hidden bg-surface">
      <FluidReveal>
        <div className="container-narrow grid md:grid-cols-12 gap-12 items-center relative z-10 w-full">
          <div className="md:col-span-7">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-wider mb-6">
              ESTABLISHED AUTHORITY IN TRAINING
            </span>
            <h1 className="headline-lg font-headline text-primary leading-[1.1] tracking-tight mb-8">
              Building Careers in{" "}
              <span className="text-tertiary">Emerging</span> Industries.
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
              The future of work isn't coming—it's here. EITI provides the
              technical mastery and industrial wisdom to lead in the world's
              most vital growing sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/apply"
                className="primary-button px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
              >
                Apply Now
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link
                to="/programs"
                className="secondary-button px-8 py-4 rounded-xl font-bold transition-all text-center"
              >
                View All Programs
              </Link>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden editorial-shadow bg-surface-container-lowest p-2">
              <img
                alt="EITI Training"
                className="w-full aspect-[4/5] object-cover rounded-xl"
                src={heroImage}
              />
            </div>
            <div className="absolute -bottom-px -left-2  md:-bottom-6 md:-left-6 bg-primary text-on-primary p-6 rounded-xl editorial-shadow max-w-[200px]">
              <div className="headline-lg font-headline font-black mb-1">
                94%
              </div>
              <div className="text-xs font-medium opacity-80 uppercase tracking-widest leading-tight">
                Job Placement Rate Post-Certification
              </div>
            </div>
          </div>
        </div>
      </FluidReveal>
    </section>

    {/* What We Do: Brief Overview */}
    <section className="section-padding bg-surface-container-low">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row gap-10 w-full sm:gap-16 items-start">
          <div className="md:w-1/3">
            <h2 className="text-sm font-bold text-tertiary uppercase tracking-[0.2em] mb-4">
              Our Mission
            </h2>
            <h3 className="sm:text-4xl text-xl font-headline font-bold text-primary leading-tight">
              Catalyzing Growth Through Technical Mastery.
            </h3>
          </div>
          <div className="md:w-2/3">
            <p className="sm:text-xl text-lg  text-on-surface-variant leading-relaxed mb-8">
              At Emerging Industries Training Institute, we don't just teach
              skills; we forge careers. By bridging the gap between traditional
              labor and high-growth technology sectors, we empower the next
              generation of industrial leaders.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="w-full flex flex-col items-start text-left">
                {/* Title Row: flex-nowrap prevents the icon and text from splitting onto different lines */}
                <div className="text-primary font-bold mb-2 flex items-center gap-2 flex-nowrap">
                  <span className="material-symbols-outlined text-tertiary flex-shrink-0">
                    check_circle
                  </span>
                  <span className="leading-tight">Industry Alignment</span>
                </div>

                {/* Description: Added pl-8 (approx 2rem) below sm to align the text under the title instead of under the icon */}
                <p className="text-sm text-on-surface-variant pl-8 sm:pl-0">
                  Curriculums developed alongside Detroit's leading industrial
                  partners.
                </p>
              </div>
              <div>
                <div className="text-primary font-bold mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary">
                    check_circle
                  </span>{" "}
                  Hands-on Focus
                </div>
                <p className="text-sm text-on-surface-variant">
                  80% of our training takes place in live laboratory
                  environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Programs Snapshot */}
    {/* <section className="section-padding bg-surface">
      <div className="container-narrow">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-headline font-bold text-primary mb-4">Specialized Tracks</h2>
            <p className="text-on-surface-variant max-w-md">
              Precision training designed for the most in-demand sectors of the modern economy.
            </p>
          </div>
          <Link to="/programs" className="text-primary font-bold flex items-center gap-2 hover:underline underline-offset-4">
            All Tracks <span className="material-symbols-outlined">open_in_new</span>
          </Link>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
        
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow hover:-translate-y-2 transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img alt="Electrical" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={projectPark} />
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 rounded bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-widest uppercase mb-4">Industrial</span>
              <h4 className="text-xl font-headline font-bold text-primary mb-2">Electrical Technology</h4>
              <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">Master industrial power systems, circuitry, and smart-grid integration.</p>
              <button className="text-primary font-bold text-sm flex items-center gap-2 group/btn">
                Details <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
     
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow hover:-translate-y-2 transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img alt="Solar" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={projectBuffalo} />
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 rounded bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-widest uppercase mb-4">Green Energy</span>
              <h4 className="text-xl font-headline font-bold text-primary mb-2">Solar PV Systems</h4>
              <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">Installation and maintenance of renewable energy infrastructure.</p>
              <button className="text-primary font-bold text-sm flex items-center gap-2 group/btn">
                Details <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
         
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow hover:-translate-y-2 transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img alt="Carpentry" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={heroImage} />
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 rounded bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-widest uppercase mb-4">Construction</span>
              <h4 className="text-xl font-headline font-bold text-primary mb-2">Advanced Carpentry</h4>
              <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">From foundational structural work to high-end architectural finishing.</p>
              <button className="text-primary font-bold text-sm flex items-center gap-2 group/btn">
                Details <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
     
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow hover:-translate-y-2 transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img alt="Culinary" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={projectPark} />
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 rounded bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-widest uppercase mb-4">Hospitality</span>
              <h4 className="text-xl font-headline font-bold text-primary mb-2">Culinary Arts</h4>
              <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">Executive-level kitchen management and hospitality expertise.</p>
              <button className="text-primary font-bold text-sm flex items-center gap-2 group/btn">
                Details <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    {/* 
    <section className="section-padding bg-surface">
      <div className="container-narrow">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="sm:text-4xl text-2xl font-headline font-bold text-primary mb-4">
              Specialized Tracks
            </h2>
            <p className="text-on-surface-variant max-w-md">
              Precision training designed for the most in-demand sectors of the
              modern economy.
            </p>
          </div>
          <Link
            to="/programs"
            className="text-primary  font-bold flex items-center gap-2"
          >
            <span className="hover:underline  underline-offset-4">
              All Tracks
            </span>
            <span className="material-symbols-outlined text-base">
              open_in_new
            </span>
          </Link>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="group bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  alt={track.title}
                  src={track.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-widest uppercase mb-4">
                  {track.category}
                </span>

                <h4 className="text-xl font-headline font-bold text-primary mb-2">
                  {track.title}
                </h4>

                <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                  {track.description}
                </p>

                <button className="text-primary font-bold text-sm flex items-center gap-2 group/btn">
                  Details
                  <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section> */}
    {/* Programs Snapshot */}
    <section className="section-padding bg-surface">
      {/* Removing horizontal padding on mobile to allow cards to feel fuller if desired, or keep px-4 */}
      <div className="w-full px-4 sm:px-6 md:container-narrow md:mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 md:mb-16 gap-6">
          <div className="w-full">
            <h2 className="text-3xl sm:text-4xl font-headline font-bold text-primary mb-4 text-left">
              Specialized Tracks
            </h2>
            <p className="text-on-surface-variant max-w-md text-left">
              Precision training designed for the most in-demand sectors of the
              modern economy.
            </p>
          </div>

          <Link
            to="/programs"
            className="text-primary font-bold flex items-center gap-2 self-start sm:self-auto group"
          >
            <span className="group-hover:underline underline-offset-4 whitespace-nowrap">
              All Tracks
            </span>
            <span className="material-symbols-outlined text-base">
              open_in_new
            </span>
          </Link>
        </div>

        {/* The Grid: 
        grid-cols-1 = Full width on mobile
        sm:grid-cols-2 = Two columns on small tablets
        md:grid-cols-4 = Your pixel-perfect desktop layout 
    */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="group w-full bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Image container forced to 100% width */}
              <div className="h-64 sm:h-48 w-full overflow-hidden">
                <img
                  alt={track.title}
                  src={track.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow items-start text-left">
                <span className="inline-block px-3 py-1 rounded bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-widest uppercase mb-4">
                  {track.category}
                </span>

                <h4 className="text-xl font-headline font-bold text-primary mb-2">
                  {track.title}
                </h4>

                <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                  {track.description}
                </p>

                {/* Aligning button to left for mobile readability */}
                <button className="mt-auto text-primary font-bold text-sm flex items-center gap-2 group/btn">
                  Details
                  <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Impact Stats */}
    <section className="section-padding bg-primary">
      <FluidReveal>
        <div className="container-narrow">
          <div className="grid md:grid-cols-4 gap-12 text-on-primary">
            <div className="text-center">
              <div className="headline-lg font-black text-on-primary mb-4">
                1,200+
              </div>
              <div className="w-full bg-white/20 h-1 rounded-full mb-2">
                <div className="bg-tertiary-fixed-dim h-full rounded-full w-3/4"></div>
              </div>
              <div className="text-sm font-semibold opacity-70">Graduates</div>
            </div>
            <div className="text-center">
              <div className="headline-lg font-black text-on-primary mb-4">
                94%
              </div>
              <div className="w-full bg-white/20 h-1 rounded-full mb-2">
                <div className="bg-tertiary-fixed-dim h-full rounded-full w-11/12"></div>
              </div>
              <div className="text-sm font-semibold opacity-70">
                Placement Rate
              </div>
            </div>
            <div className="text-center">
              <div className="headline-lg font-black text-on-primary mb-4">
                $18M+
              </div>
              <div className="w-full bg-white/20 h-1 rounded-full mb-2">
                <div className="bg-tertiary-fixed-dim h-full rounded-full w-2/3"></div>
              </div>
              <div className="text-sm font-semibold opacity-70">
                Economic Impact
              </div>
            </div>
            <div className="text-center">
              <div className="headline-lg font-black text-on-primary mb-4">
                150+
              </div>
              <div className="w-full bg-white/20 h-1 rounded-full mb-2">
                <div className="bg-tertiary-fixed-dim h-full rounded-full w-1/2"></div>
              </div>
              <div className="text-sm font-semibold opacity-70">
                Partner Companies
              </div>
            </div>
          </div>
        </div>
      </FluidReveal>
    </section>

    {/* Student Stories */}
    <section className="section-padding bg-surface">
      <FluidReveal>
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-tertiary uppercase tracking-[0.2em] mb-4">
                Testimonials
              </h2>
              <h3 className="text-4xl font-headline font-bold text-primary leading-tight mb-8">
                From Students to <span className="text-tertiary">Leaders</span>.
              </h3>
              <div className="space-y-12">
                <div className="relative pl-12 border-l-4 border-primary-container">
                  <p className="text-xl italic text-on-surface-variant mb-6">
                    "EITI gave me more than just technical skills; they gave me
                    a roadmap for professional life. I went from having a job to
                    having a career in sustainable energy."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold text-lg flex-shrink-0">
                      M
                    </div>
                    <div>
                      <div className="font-bold text-primary">
                        Marcus Thompson
                      </div>
                      <div className="text-xs text-on-surface-variant">
                        Solar PV Technician, Class of '22
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative pl-12 border-l-4 border-secondary-container">
                  <p className="text-xl italic text-on-surface-variant mb-6">
                    "The hands-on training at EITI prepared me for real-world
                    challenges. My carpentry skills got me a job immediately,
                    and now I'm leading projects worth over $500K."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-on-secondary font-bold text-lg flex-shrink-0">
                      A
                    </div>
                    <div>
                      <div className="font-bold text-primary">
                        Aisha Johnson
                      </div>
                      <div className="text-xs text-on-surface-variant">
                        Master Carpenter, Class of '23
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="pt-12">
                  <img
                    alt="Training"
                    className="rounded-xl editorial-shadow mb-4 w-full aspect-[3/4] object-cover"
                    src={projectPark}
                  />
                  <img
                    alt="Graduation"
                    className="rounded-xl editorial-shadow w-full aspect-square object-cover"
                    src={projectBuffalo}
                  />
                </div>
                <div>
                  <img
                    alt="Instruction"
                    className="rounded-xl editorial-shadow mb-4 w-full aspect-square object-cover"
                    src={heroImage}
                  />
                  <img
                    alt="Career"
                    className="rounded-xl editorial-shadow w-full aspect-[3/4] object-cover"
                    src={projectPark}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </FluidReveal>
    </section>

    {/* Work Preview */}
    <section className="section-padding bg-surface-container-low px-0 sm:px-6">
      <div className="w-full px-4 sm:px-0 md:container-narrow mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-headline font-bold text-primary mb-4">
            Real-World Projects & Impact
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            See how our training translates to tangible community impact through
            hands-on project work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
          {/* Virginia Park Beautification */}
          <Link
            to="/work/virginia-park"
            className="group relative overflow-hidden rounded-xl bg-surface-container-lowest editorial-shadow w-full"
          >
            {/* Adjusted aspect ratio for mobile: aspect-[3/4] gives more height for text */}
            <div className="aspect-[3/4] sm:aspect-square md:aspect-[4/3] overflow-hidden">
              <img
                alt="Virginia Park Beautification Project"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={projectPark}
              />
            </div>

            {/* Adjusted padding: p-6 on mobile, p-8 on desktop */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent flex flex-col justify-end p-6 md:p-8 text-white">
              <span className="inline-block px-3 py-1 rounded-lg bg-white/90 backdrop-blur text-primary text-[10px] md:text-xs font-bold tracking-wide uppercase mb-3 max-w-fit">
                Urban Renewal
              </span>
              <h4 className="text-xl md:text-2xl font-headline font-bold mb-2 leading-tight">
                Virginia Park Beautification
              </h4>
              <p className="text-sm opacity-90 mb-4 line-clamp-3 md:line-clamp-none">
                Comprehensive landscaping and community green-space restoration
                project.
              </p>
              <div className="flex items-center gap-2 text-xs opacity-80">
                <span className="material-symbols-outlined text-sm">
                  location_on
                </span>
                Detroit, MI
              </div>
            </div>
          </Link>

          {/* Buffalo Soldiers Project */}
          <Link
            to="/work/buffalo-soldiers"
            className="group relative overflow-hidden rounded-xl bg-surface-container-lowest editorial-shadow w-full"
          >
            <div className="aspect-[3/4] sm:aspect-square md:aspect-[4/3] overflow-hidden">
              <img
                alt="Buffalo Soldiers Monument Project"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={projectBuffalo}
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent flex flex-col justify-end p-6 md:p-8 text-white">
              <span className="inline-block px-3 py-1 rounded-lg bg-white/90 backdrop-blur text-primary text-[10px] md:text-xs font-bold tracking-wide uppercase mb-3 max-w-fit">
                Historic Preservation
              </span>
              <h4 className="text-xl md:text-2xl font-headline font-bold mb-2 leading-tight">
                Buffalo Soldiers Project
              </h4>
              <p className="text-sm opacity-90 mb-4 line-clamp-3 md:line-clamp-none">
                Restoration of heritage monuments honoring African American
                military history.
              </p>
              <div className="flex items-center gap-2 text-xs opacity-80">
                <span className="material-symbols-outlined text-sm">
                  location_on
                </span>
                Detroit, MI
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>

    {/* Partners & Collaborations */}
    <section className="section-padding bg-surface">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-outline uppercase tracking-widest mb-8">
            Our Industry Partners
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center justify-items-center">
          {[
            "General Motors",
            "DTE Energy",
            "Detroit Public Schools",
            "UAW Local 22",
            "City of Detroit",
            "Ford Motor Company",
            "Blue Cross Blue Shield",
          ]
            .slice(0, 5)
            .map((name) => (
              <div
                key={name}
                className="flex justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer group"
              >
                <span className="text-xl font-headline font-black text-outline group-hover:text-primary transition-colors duration-300">
                  {name}
                </span>
              </div>
            ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="section-padding">
      <div className="container-narrow">
        <div className="bg-primary-container rounded-2xl p-12 md:p-20 text-center relative overflow-hidden editorial-shadow">
          <div className="relative z-10">
            <h2 className="sm:text-4xl text-2xl md:text-5xl font-headline font-extrabold text-white mb-6 leading-tight">
              Your Future in Industry <br className="hidden md:block" /> Starts
              Today.
            </h2>
            <p className="text-on-primary-container/80 text-lg mb-10 max-w-xl mx-auto">
              Applications for our Fall cohort are now open. Secure your place
              in the next generation of technical experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/apply"
                className="bg-on-primary text-primary px-10 py-4 rounded-xl font-bold text-lg transition-all text-center"
              >
                Apply Now
              </Link>
              <Link
                to="/about"
                className="border-2 border-on-primary text-on-primary px-10 py-4 rounded-xl font-bold text-sm sm:text-lg hover:bg-on-primary/10 transition-all text-center"
              >
                Speak to an Advisor
              </Link>
            </div>
          </div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-tertiary opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary opacity-40 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;
