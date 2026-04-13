import { Link } from "react-router-dom";
import projectPark from "@/assets/project-park.jpg";
import projectBuffalo from "@/assets/project-buffalo.jpg";

const WorkPage = () => (
  <div>
    {/* Hero Section */}
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-surface pt-32">
      <div className="container-narrow grid md:grid-cols-12 gap-12 items-center relative z-10 w-full">
        <div className="md:col-span-7">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-wider mb-6">
            COMMUNITY IMPACT
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-extrabold text-primary leading-[1.1] tracking-tight mb-8">
            Building Legacies, One <span className="text-tertiary">Project</span> at a Time.
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
            At EITI, our training extends beyond the classroom. We partner with communities and industry leaders to deliver tangible results that revitalize neighborhoods and empower our students through hands-on mastery.
          </p>
          <div className="flex items-center gap-4">
            <div className="bg-surface-container-lowest p-6 rounded-xl editorial-shadow max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-tertiary text-2xl">verified</span>
                <span className="text-primary font-bold text-2xl tracking-tight">120+</span>
              </div>
              <p className="text-xs text-on-surface-variant font-medium">Completed community infrastructure projects across the region.</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 relative">
          <div className="rounded-2xl overflow-hidden editorial-shadow bg-surface-container-lowest p-2">
            <img
              alt="EITI students working on community project"
              className="w-full aspect-[4/5] object-cover rounded-xl"
              src={projectPark}
            />
          </div>
        </div>
      </div>
    </section>

    {/* Project Grid */}
    <section className="section-padding bg-surface-container-low">
      <div className="container-narrow">
        <div className="mb-16">
          <h2 className="text-4xl font-headline font-bold text-primary tracking-tight mb-4">Case Studies & Portfolios</h2>
          <p className="text-on-surface-variant font-body max-w-xl">A curated selection of our most impactful workforce development initiatives and physical restoration projects.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Virginia Park Beautification */}
          <Link to="/work/virginia-park" className="group bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow hover:shadow-xl transition-all duration-500 flex flex-col">
            <div className="h-64 overflow-hidden relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={projectPark} alt="Virginia Park Beautification Project" />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-primary tracking-wide uppercase">Urban Renewal</span>
              </div>
            </div>
            <div className="p-8 flex-grow">
              <h3 className="text-2xl font-extrabold text-primary mb-3 leading-tight tracking-tight">Virginia Park Beautification</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                A comprehensive multi-phase project focused on sustainable landscaping, park structure restoration, and community green-space creation.
              </p>
              <div className="flex items-center gap-6 pt-4 border-t border-outline-variant/10">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-outline font-bold">Timeline</p>
                  <p className="text-sm font-semibold text-primary">6 Months</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-outline font-bold">Students</p>
                  <p className="text-sm font-semibold text-primary">24 Trainees</p>
                </div>
              </div>
            </div>
          </Link>

          {/* Buffalo Soldiers Project */}
          <Link to="/work/buffalo-soldiers" className="group bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow hover:shadow-xl transition-all duration-500 flex flex-col">
            <div className="h-64 overflow-hidden relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={projectBuffalo} alt="Buffalo Soldiers Monument Project" />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-primary tracking-wide uppercase">Historic Preservation</span>
              </div>
            </div>
            <div className="p-8 flex-grow">
              <h3 className="text-2xl font-extrabold text-primary mb-3 leading-tight tracking-tight">Buffalo Soldiers Project</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                Restoration of heritage sites honoring the Buffalo Soldiers, integrating technical craftsmanship with deep historical reverence.
              </p>
              <div className="flex items-center gap-6 pt-4 border-t border-outline-variant/10">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-outline font-bold">Focus</p>
                  <p className="text-sm font-semibold text-primary">Masonry</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-outline font-bold">Impact</p>
                  <p className="text-sm font-semibold text-primary">Heritage Site</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex gap-4 justify-center">
          <button className="px-6 py-2 rounded-xl bg-surface-container-lowest text-primary font-semibold text-sm shadow-sm">All Projects</button>
          <button className="px-6 py-2 rounded-xl text-on-surface-variant font-semibold text-sm hover:bg-surface-container-high transition-colors">Beautification</button>
        </div>
      </div>
    </section>

    {/* Data Visualization */}
    <section className="section-padding bg-surface">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative p-12 bg-surface-container-low rounded-2xl">
              <div className="flex items-end gap-1 mb-8">
                <div className="w-full bg-primary/20 h-32 rounded-t-lg relative">
                  <div className="absolute bottom-0 w-full bg-primary h-1/4 rounded-t-lg"></div>
                </div>
                <div className="w-full bg-primary/20 h-48 rounded-t-lg relative">
                  <div className="absolute bottom-0 w-full bg-primary h-2/4 rounded-t-lg"></div>
                </div>
                <div className="w-full bg-primary/20 h-64 rounded-t-lg relative">
                  <div className="absolute bottom-0 w-full bg-primary h-3/4 rounded-t-lg"></div>
                </div>
                <div className="w-full bg-primary/20 h-80 rounded-t-lg relative">
                  <div className="absolute bottom-0 w-full bg-tertiary h-full rounded-t-lg"></div>
                </div>
              </div>
              <div className="flex justify-between text-xs font-bold text-outline tracking-widest uppercase">
                <span>2021</span>
                <span>2022</span>
                <span>2023</span>
                <span>Current</span>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-headline font-bold text-primary tracking-tight mb-6">Proven Growth & Social Return</h2>
            <p className="text-on-surface-variant mb-10 leading-relaxed">
              Our work provides a measurable return on investment for the community. By training locally, we ensure that industry capital stays within the neighborhoods that need it most.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="headline-lg font-black text-primary mb-1">94%</div>
                <div className="text-sm font-semibold text-on-surface-variant">Post-Project Employment</div>
              </div>
              <div>
                <div className="headline-lg font-black text-tertiary mb-1">$4.2M</div>
                <div className="text-sm font-semibold text-on-surface-variant">Community Value Created</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="section-padding bg-tertiary-container">
      <div className="container-narrow text-center">
        <h2 className="text-3xl lg:text-5xl font-headline font-extrabold text-on-tertiary-container mb-8 tracking-tighter">
          Beyond Training. This is <span className="text-tertiary">Transformation</span>.
        </h2>
        <p className="text-on-tertiary-container/80 text-lg lg:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          These projects aren't just work—they are the blueprints for a stronger economy and a more skilled workforce. Join us in building what's next.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            to="#"
            className="primary-button px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-lg"
          >
            Partner With Us
          </Link>
          <button className="text-on-tertiary-container border-2 border-white/20 px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
            View More Impact
          </button>
        </div>
      </div>
    </section>
  </div>
);

export default WorkPage;
