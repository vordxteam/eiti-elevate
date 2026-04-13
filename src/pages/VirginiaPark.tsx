import { Link } from "react-router-dom";
import projectPark from "@/assets/project-park.jpg";

const VirginiaParkPage = () => (
  <div>
    {/* Hero Section */}
    <section className="section-padding pt-32 bg-surface">
      <div className="container-narrow">
        <Link to="/work" className="inline-flex items-center text-primary hover:text-primary/80 font-bold mb-8 transition-colors">
          <span className="material-symbols-outlined mr-2">arrow_back</span>
          Back to Our Work
        </Link>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 rounded-lg bg-secondary-container text-on-secondary-container text-xs font-bold tracking-wide uppercase">2024</span>
              <span className="px-3 py-1 rounded-lg bg-surface-container-high text-on-surface-variant text-xs font-medium flex items-center">
                <span className="material-symbols-outlined text-sm mr-1">location_on</span>
                Virginia Park, Detroit
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-headline font-extrabold text-primary leading-tight mb-6 tracking-tight">
              Virginia Park Beautification
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
              A comprehensive community beautification project that transformed an underutilized park into a vibrant neighborhood gathering space. Our students designed and built new garden beds, painted a large-scale mural, installed benches, and created accessible pathways.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="headline-lg font-headline font-black text-tertiary mb-2">2,000+</div>
                <div className="text-sm text-on-surface-variant font-medium">Community Residents Served</div>
              </div>
              <div className="text-center">
                <div className="headline-lg font-headline font-black text-tertiary mb-2">24</div>
                <div className="text-sm text-on-surface-variant font-medium">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="headline-lg font-headline font-black text-tertiary mb-2">6</div>
                <div className="text-sm text-on-surface-variant font-medium">Months Duration</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden editorial-shadow">
              <img src={projectPark} alt="Virginia Park Beautification Project" className="w-full h-full object-cover aspect-[4/3]" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Skills Applied */}
    <section className="section-padding bg-surface-container-low">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-headline font-bold text-primary mb-4">Skills Applied</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            Students gained hands-on experience in multiple trades while contributing to community improvement.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-surface-container-lowest rounded-xl p-6 editorial-shadow">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-on-primary">build</span>
            </div>
            <h3 className="font-bold text-primary mb-2">Carpentry</h3>
            <p className="text-sm text-on-surface-variant">Custom benches, picnic tables, and structural elements using sustainable materials.</p>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-6 editorial-shadow">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-on-secondary">grass</span>
            </div>
            <h3 className="font-bold text-primary mb-2">Landscaping</h3>
            <p className="text-sm text-on-surface-variant">Native plant selection, garden bed design, and sustainable landscaping practices.</p>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-6 editorial-shadow">
            <div className="w-12 h-12 bg-tertiary rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-on-tertiary">architecture</span>
            </div>
            <h3 className="font-bold text-primary mb-2">Masonry</h3>
            <p className="text-sm text-on-surface-variant">Accessible pathways, retaining walls, and decorative stonework installation.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Project Narrative */}
    <section className="section-padding bg-surface">
      <div className="container-narrow">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline font-bold text-primary mb-8 text-center">Project Narrative</h2>
          <div className="space-y-8 text-on-surface-variant leading-relaxed text-lg">
            <p>
              The Virginia Park Beautification Project was a collaborative effort between EITI students, local residents, and community stakeholders to revitalize a neglected neighborhood park. The project began with extensive community consultation to understand resident needs and preferences, ensuring that the final design would serve the people who use the space daily.
            </p>
            <p>
              Our carpentry students took the lead in constructing custom benches and picnic tables using sustainable, locally-sourced materials. Working alongside professional contractors, they learned advanced woodworking techniques while producing functional pieces that would withstand Detroit's variable weather conditions.
            </p>
            <p>
              The landscaping team collaborated with local nurseries to select native plants that would thrive in Detroit's climate and require minimal maintenance. They designed garden beds that not only beautified the park but also created educational opportunities for visitors to learn about sustainable gardening practices.
            </p>
            <p>
              The highlight of the project was a large-scale mural painted by our students, depicting Detroit's industrial heritage alongside its natural beauty. This artistic element transformed a blank wall into a community landmark, sparking conversations about local history and cultural identity.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Student Reflections */}
    <section className="section-padding bg-surface-container-low">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-headline font-bold text-primary mb-4">Student Reflections</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            Our students share how this project shaped their understanding of community impact and professional skills.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-surface-container-lowest rounded-2xl p-8 editorial-shadow">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold text-xl mb-6">
              M
            </div>
            <p className="text-on-surface-variant leading-relaxed mb-6 italic">
              "Working on Virginia Park taught me more about project management and client communication than any classroom could. I learned how to balance multiple stakeholders' needs while keeping safety as our top priority."
            </p>
            <div>
              <div className="font-bold text-primary">Maria Gonzalez</div>
              <div className="text-sm text-on-surface-variant">Carpentry Student</div>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-8 editorial-shadow">
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-on-secondary font-bold text-xl mb-6">
              J
            </div>
            <p className="text-on-surface-variant leading-relaxed mb-6 italic">
              "Seeing how our work directly improved the community was incredibly motivating. The park went from being avoided to becoming a neighborhood gathering place overnight."
            </p>
            <div>
              <div className="font-bold text-primary">James Thompson</div>
              <div className="text-sm text-on-surface-variant">Electrical Student</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default VirginiaParkPage;