import PageHero from "@/components/PageHero";

const BuffaloSoldiersPage = () => (
  <div>
    <PageHero
      heading={
        <>
          Buffalo Soldiers{" "}
          <span
            style={{
              color: "#74B4E0",
              textShadow: "0 2px 20px rgba(0,0,0,0.3), 0 0 40px rgba(116,180,224,0.2)",
            }}
          >
            Project
          </span>
        </>
      }
      description="Restoration of heritage sites honoring the Buffalo Soldiers, integrating technical craftsmanship with deep historical reverence."
      buttonLabel="View All Projects"
      buttonLink="/work"
    />

    {/* Skills Applied */}
    <section className="section-padding bg-surface-container-low">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-headline font-bold text-primary mb-4">Skills Applied</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            Students learned specialized preservation techniques while honoring Detroit's historical legacy.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-surface-container-lowest rounded-xl p-6 editorial-shadow">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-on-primary">restoration</span>
            </div>
            <h3 className="font-bold text-primary mb-2">Restoration</h3>
            <p className="text-sm text-on-surface-variant">Careful cleaning and repair of historical stonework and bronze elements.</p>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-6 editorial-shadow">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-on-secondary">build</span>
            </div>
            <h3 className="font-bold text-primary mb-2">Metalwork</h3>
            <p className="text-sm text-on-surface-variant">Refurbishing bronze plaques, fixtures, and structural metal components.</p>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-6 editorial-shadow">
            <div className="w-12 h-12 bg-tertiary rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-on-tertiary">history</span>
            </div>
            <h3 className="font-bold text-primary mb-2">Historical Preservation</h3>
            <p className="text-sm text-on-surface-variant">Research, documentation, and conservation techniques for heritage sites.</p>
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
              The Buffalo Soldiers Project represented a unique blend of historical preservation and modern craftsmanship training. Named after the legendary African American soldiers who served with distinction in the U.S. Army following the Civil War, this project focused on restoring monuments that commemorate their service and sacrifice.
            </p>
            <p>
              Our students collaborated with certified preservation experts from the Michigan Historical Society, learning techniques that go beyond standard construction work. They practiced delicate stone cleaning methods, bronze restoration processes, and documentation techniques used in professional historical preservation.
            </p>
            <p>
              The project included significant community education components, with students leading tours and presentations about the Buffalo Soldiers' history. This experience taught them not just technical skills, but also the importance of cultural preservation and community storytelling in their professional work.
            </p>
            <p>
              Working on these monuments connected our students to Detroit's rich history while developing specialized skills in heritage restoration. The project reinforced the idea that skilled trades work can honor the past while building the future.
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
            Students share how working on this historical project deepened their appreciation for craftsmanship and heritage.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-surface-container-lowest rounded-2xl p-8 editorial-shadow">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold text-xl mb-6">
              D
            </div>
            <p className="text-on-surface-variant leading-relaxed mb-6 italic">
              "Restoring these monuments made history come alive for me. I never realized how much precision and patience goes into preserving our shared heritage."
            </p>
            <div>
              <div className="font-bold text-primary">David Rodriguez</div>
              <div className="text-sm text-on-surface-variant">Carpentry Student</div>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-8 editorial-shadow">
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-on-secondary font-bold text-xl mb-6">
              S
            </div>
            <p className="text-on-surface-variant leading-relaxed mb-6 italic">
              "Working with preservation experts opened my eyes to a whole new career path. I now want to specialize in historical restoration work."
            </p>
            <div>
              <div className="font-bold text-primary">Sarah Mitchell</div>
              <div className="text-sm text-on-surface-variant">Carpentry Student</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default BuffaloSoldiersPage;