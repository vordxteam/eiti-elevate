import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

const programs = [
  {
    id: "electrical",
    name: "Electrical Technology",
    duration: "12 Weeks • Fall Intake",
    desc: "Master industrial power systems, circuitry, and smart-grid integration"
  },
  {
    id: "solar",
    name: "Solar PV Systems",
    duration: "16 Weeks • Summer Intake",
    desc: "Installation and maintenance of renewable energy infrastructure"
  },
  {
    id: "carpentry",
    name: "Advanced Carpentry",
    duration: "8 Weeks • Hybrid",
    desc: "From foundational structural work to high-end architectural finishing"
  },
  {
    id: "culinary",
    name: "Culinary Arts",
    duration: "10 Weeks • Online Only",
    desc: "Executive-level kitchen management and hospitality expertise"
  }
];

const ApplyPage = () => {
  const [searchParams] = useSearchParams();
  const preselectedProgram = searchParams.get("program") || "";
  const [selectedProgram, setSelectedProgram] = useState(preselectedProgram);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentRole: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.fullName && formData.email && selectedProgram) {
      setSubmitted(true);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-surface">
        <div className="container-narrow">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-wider mb-6">
                2024 ADMISSIONS OPEN
              </span>
              <h1 className="headline-lg font-headline text-primary leading-[1.1] tracking-tight mb-8">
                Catalyze Your Career in <span className="text-tertiary">Emerging Markets.</span>
              </h1>
              <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
                Join an elite network of professionals shaping the future of global industry. Our application process is designed to identify high-potential leaders ready for the next level of operational excellence.
              </p>
            </div>
            <div className="md:col-span-5 relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl transform rotate-2 bg-surface-container-lowest p-2">
                <img
                  alt="Professional training environment"
                  className="w-full h-full object-cover rounded-xl"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkHbCdFR3Yrr7S54tFfY7mMaGJfo9Bl1WXaXZU0w2Aqgo-335W5WZK5M6yqZQcgQJX1bXqg3O89NGU-TY9fcDcDR1K4pyn5nWZ8RB0rx6ddufASw1dXQ3gDnCAicW-hnF9USrMjHQX0umauN1dyHId4IOplal0vBMYJ3SYskViQPG8xTQ1FO4iu5zMcawkVOC1KisYK3Fwjy320v1PSJ7wFNVDB6qKbN0dmVieG4bRD_HOEd4ztuIaKYHB6Fq--B-7nG7YBq1m_mJd/"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-xl editorial-shadow max-w-xs">
                <p className="text-sm font-medium text-on-surface">"The training here didn't just give me skills, it gave me a whole new industry perspective."</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">person</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold">Sarah Jenkins</p>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Industrial Operations Lead</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Who Should Apply & Value */}
      <section className="section-padding bg-surface-container-low">
        <div className="container-narrow">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <h2 className="font-headline text-3xl font-extrabold text-primary mb-6">The Ideal Candidate</h2>
              <p className="text-on-surface-variant leading-relaxed">
                We aren't looking for standard profiles. We look for the intellectual catalysts—individuals who view technical mastery as the baseline and strategic innovation as the goal.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Bento Grid style cards */}
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/15 group hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-primary-container/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>trending_up</span>
                </div>
                <h3 className="font-headline text-xl font-bold mb-3">Growth Seekers</h3>
                <p className="text-sm text-on-surface-variant">Professionals with 2-5 years experience looking to pivot into high-growth, emerging industrial sectors.</p>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/15 group hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-tertiary-container/10 rounded-lg flex items-center justify-center mb-6 text-tertiary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>psychology</span>
                </div>
                <h3 className="font-headline text-xl font-bold mb-3">Strategic Thinkers</h3>
                <p className="text-sm text-on-surface-variant">Analytical minds ready to tackle the complexities of automated logistics, green energy, and advanced manufacturing.</p>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/15 group hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-primary-container/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>verified_user</span>
                </div>
                <h3 className="font-headline text-xl font-bold mb-3">Industry Credentials</h3>
                <p className="text-sm text-on-surface-variant">Receive globally recognized certifications that place you at the top of recruiter shortlists instantly.</p>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/15 group hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-tertiary-container/10 rounded-lg flex items-center justify-center mb-6 text-tertiary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>groups</span>
                </div>
                <h3 className="font-headline text-xl font-bold mb-3">Lifetime Network</h3>
                <p className="text-sm text-on-surface-variant">Access to the EITI alumni portal, executive mentorship programs, and exclusive partner career fairs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Application Form */}
      <section className="max-w-4xl mx-auto px-8 mb-24">
        {submitted && (
          <div className="bg-surface-container-lowest rounded-2xl p-12 editorial-shadow text-center mb-8">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-on-primary text-4xl">check_circle</span>
            </div>
            <h2 className="font-headline text-3xl font-extrabold text-primary mb-4">Application Received!</h2>
            <p className="text-on-surface-variant text-lg mb-6 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{formData.fullName}</strong>. Our admissions team will contact you within 2 business days.
            </p>
            <p className="text-sm text-on-surface-variant">
              Questions? Call us at <a href="tel:+13135550100" className="text-primary font-bold hover:underline">(313) 555-0100</a> or email{" "}
              <a href="mailto:admissions@eiti.org" className="text-primary font-bold hover:underline">admissions@eiti.org</a>
            </p>
          </div>
        )}
        {!submitted && (
        <div className="bg-surface-container-lowest rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden border border-outline-variant/10">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-surface-container-high">
            <div className="h-full bg-primary w-1/3 transition-all duration-700"></div>
          </div>
          <div className="mb-12">
            <h2 className="font-headline text-3xl font-extrabold text-primary">Begin Your Application</h2>
            <p className="text-on-surface-variant mt-2">Section 1: Personal & Program Details</p>
          </div>

          <form className="space-y-10">
            {/* Progress Bar (Internal) */}
            <div className="flex items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm step-active">1</div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Identity</span>
              </div>
              <div className="h-px flex-1 bg-outline-variant/30"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-bold text-sm">2</div>
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Experience</span>
              </div>
              <div className="h-px flex-1 bg-outline-variant/30"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-bold text-sm">3</div>
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Statement</span>
              </div>
            </div>

            {/* Program Selection */}
            <div className="space-y-6">
              <label className="block font-manrope font-bold text-primary tracking-tight">Select Program of Interest</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {programs.map((program) => (
                  <label key={program.id} className="relative flex items-start p-4 rounded-xl border border-outline-variant cursor-pointer hover:bg-surface-container-low transition-colors group">
                    <input
                      className="mt-1 text-primary focus:ring-primary border-outline-variant"
                      name="program"
                      type="radio"
                      value={program.id}
                      checked={selectedProgram === program.id}
                      onChange={(e) => setSelectedProgram(e.target.value)}
                    />
                    <div className="ml-4">
                      <span className="block font-bold text-sm">{program.name}</span>
                      <span className="block text-xs text-on-surface-variant">{program.duration}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Input Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block font-manrope font-bold text-primary tracking-tight text-sm">Full Name</label>
                <input className="w-full bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/20 placeholder:text-on-surface-variant/40 py-3 px-4 transition-all" placeholder="e.g. Alexander Pierce" type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <label className="block font-manrope font-bold text-primary tracking-tight text-sm">Email Address</label>
                <input className="w-full bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/20 placeholder:text-on-surface-variant/40 py-3 px-4 transition-all" placeholder="alex@company.com" type="email" name="email" value={formData.email} onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <label className="block font-manrope font-bold text-primary tracking-tight text-sm">Phone Number</label>
                <input className="w-full bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/20 placeholder:text-on-surface-variant/40 py-3 px-4 transition-all" placeholder="+1 (555) 000-0000" type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <label className="block font-manrope font-bold text-primary tracking-tight text-sm">Current Role</label>
                <input className="w-full bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/20 placeholder:text-on-surface-variant/40 py-3 px-4 transition-all" placeholder="Operations Analyst" type="text" name="currentRole" value={formData.currentRole} onChange={handleInputChange} />
              </div>
            </div>

            <div className="pt-8 flex justify-end items-center gap-6">
              <button className="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors" type="button">Save as Draft</button>
              <button
                className="bg-primary text-on-primary px-10 py-4 rounded-xl font-headline font-bold tracking-tight shadow-xl hover:opacity-90 hover:-translate-y-0.5 transition-all flex items-center gap-2 disabled:opacity-50"
                type="button"
                onClick={handleSubmit}
                disabled={!formData.fullName || !formData.email || !selectedProgram}
              >
                Submit Application
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </form>
        </div>
        )}
      </section>

      {/* CTA Reinforcement */}
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <div className="bg-primary-container rounded-2xl p-12 md:p-20 text-center relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-tertiary/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-primary mb-8 tracking-tight">Ready to Lead?</h2>
            <p className="text-on-primary-container text-lg mb-10 leading-relaxed">
              The world is moving faster than ever. Secure your spot in the next cohort and gain the specialized expertise that top-tier industrial firms are searching for today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-surface-container-lowest/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex flex-col items-center">
                <span className="text-3xl font-black text-on-primary mb-1">98%</span>
                <span className="text-xs uppercase tracking-widest text-on-primary-container font-bold">Employment Rate</span>
              </div>
              <div className="bg-surface-container-lowest/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex flex-col items-center">
                <span className="text-3xl font-black text-on-primary mb-1">$22k</span>
                <span className="text-xs uppercase tracking-widest text-on-primary-container font-bold">Avg Salary Lift</span>
              </div>
              <div className="bg-surface-container-lowest/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex flex-col items-center">
                <span className="text-3xl font-black text-on-primary mb-1">450+</span>
                <span className="text-xs uppercase tracking-widest text-on-primary-container font-bold">Industry Partners</span>
              </div>
            </div>
            <div className="mt-12 space-y-2">
              <p className="text-on-primary-container text-sm font-medium italic">Application Deadline for Fall Cohort: August 15th</p>
              <p className="text-on-primary-container/70 text-sm">
                Need help?{" "}
                <a href="tel:+13135550100" className="font-bold text-on-primary hover:underline">(313) 555-0100</a>
                {" "}or{" "}
                <a href="mailto:admissions@eiti.org" className="font-bold text-on-primary hover:underline">admissions@eiti.org</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplyPage;
