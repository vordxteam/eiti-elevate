const AboutPage = () => {
  const leaders = [
    { name: "Marcus Thorne", role: "Chief Executive Officer", initials: "MT" },
    { name: "Dr. Sarah Jenkins", role: "Dean of Instruction", initials: "SJ" },
    { name: "David Vance", role: "Lead Robotics Instructor", initials: "DV" },
    { name: "Elena Rodriguez", role: "Director of Admissions", initials: "ER" },
    { name: "James Okafor", role: "Head of Electrical Programs", initials: "JO" },
    { name: "Priya Nair", role: "Solar & Renewables Lead", initials: "PN" },
    { name: "Carlos Mendes", role: "Carpentry & Construction Chair", initials: "CM" },
    { name: "Tanya Williams", role: "Culinary Arts Director", initials: "TW" },
  ];

  return (
    <div>
      {/* Who We Are (Hero) */}
      <section className="section-padding pt-32 bg-surface">
        <div className="container-narrow">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-wider mb-6">
                ESTABLISHED AUTHORITY
              </span>
              <h1 className="headline-lg font-headline text-primary leading-[1.1] tracking-tight mb-8">
                Architecting the <span className="text-tertiary italic">Future</span> of Industry.
              </h1>
              <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
                The Emerging Industries Training Institute is not just a school. We are a catalyst for workforce transformation in the sectors that define our era.
              </p>
            </div>
            <div className="md:col-span-5 relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl transform rotate-2 bg-surface-container-lowest p-2">
                <img
                  alt="EITI Training"
                  className="w-full h-full object-cover rounded-xl"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxoQwndcp95t2NrvEiZylrmUjL5M1eRK3sAEMkAl9UesOSR-5BtAFWNn80x8CugHgUj2baaxvw5ySPEpF6v6rPPrfMNun6-ivH4JH3nvBZFgIO6opLeq8yfamdlqrLHi0zzD7UW8EYy6jxoHmsgFIzVhgdAisOREZH8hDgbbYGX9KgXkj0EawPP3NtMVYX0EMsVI8lSamEFmfR6Mvzzf9ERCu3tF8vAnorCQrtVy09357eYIojRLLp0YrBINoXUE1OGTrRacQub6q3/"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-8 rounded-xl editorial-shadow max-w-xs">
                <span className="headline-lg font-headline font-black text-primary block mb-2">20+</span>
                <p className="text-sm font-semibold text-on-surface-variant">
                  Years of pioneering vocational excellence and industrial trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are & Story */}
      <section className="section-padding bg-surface-container-low">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div>
                <span className="text-tertiary font-bold tracking-widest text-xs uppercase mb-4 block">Who We Are</span>
                <h2 className="font-headline text-4xl font-bold text-primary mb-6 leading-tight">Bridging the Gap Between Ambition and Application.</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-4">
                  Founded on the principle that modern industries require modern education, EITI was established to solve the widening skills gap in the industrial heartland. We don't teach from outdated textbooks; we train using the actual technologies shaping today's factories, labs, and infrastructure.
                </p>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Our curriculum is built in direct collaboration with industry leaders, ensuring every hour spent in our classrooms translates directly to value in the workplace.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-6 bg-surface-container-lowest rounded-xl">
                  <h3 className="font-headline text-xl font-bold text-primary mb-2">Our Mission</h3>
                  <p className="text-sm text-on-surface-variant">To empower individuals with precision skills that drive sustainable industrial growth.</p>
                </div>
                <div className="p-6 bg-surface-container-lowest rounded-xl">
                  <h3 className="font-headline text-xl font-bold text-primary mb-2">Our Vision</h3>
                  <p className="text-sm text-on-surface-variant">To become the global standard for rapid-response industrial training and career mobility.</p>
                </div>
              </div>
            </div>
            <div className="relative space-y-8">
              <div className="aspect-video rounded-xl overflow-hidden">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQVhrFVOqW1f6OLkqK88oBE14l19vaImX9x8vDZtyVN7KN6QO92ubddRNQ3AcME-DrvDXCx9sKsEDWVvZ9w3jLdN1i-LquZ12HRMsTpG_Agr4_ummN7yw3fZgRlOwTDkL041eAX6IK_ACWyDVveFo6tVR_ap4uI4bjECG8saBbvoTKJ86TteCKbOOkp1cpiIHiLZwZAp-eEpPi_ozMDkgpUcv6XvUPYCbSNa_KGBhz6v2ImAfLb-XYOvZOFet1oZx5TKJ2uzQxWI-S/" alt="Diverse group collaborating" />
              </div>
              <div className="bg-primary p-12 rounded-xl text-on-primary relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="material-symbols-outlined text-[120px]">history_edu</span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-4">Our History</h3>
                <div className="space-y-4 text-primary-fixed">
                  <p className="text-sm border-l-2 border-tertiary-fixed pl-4">
                    <strong className="text-white block mb-1 font-headline">2018 — The Foundation</strong>
                    Founded as a specialized industrial training center in Detroit with two programs.
                  </p>
                  <p className="text-sm border-l-2 border-tertiary-fixed pl-4">
                    <strong className="text-white block mb-1 font-headline">2021 — Four Programs</strong>
                    Expanded to four full programs: Electrical, Solar, Carpentry, and Culinary Arts.
                  </p>
                  <p className="text-sm border-l-2 border-tertiary-fixed pl-4">
                    <strong className="text-white block mb-1 font-headline">2024 — Scaling Impact</strong>
                    Over 1,200 graduates placed across Detroit's fastest-growing industrial sectors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Instructors */}
      <section className="section-padding bg-surface">
        <div className="container-narrow">
          <div className="text-center mb-20">
            <h2 className="font-headline text-4xl font-bold text-primary mb-4">The Minds Behind EITI</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Our leadership brings decades of collective experience from the fields of mechanical engineering, logistics, and educational technology.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {leaders.map((leader, i) => {
              const colors = ["bg-primary", "bg-secondary", "bg-tertiary", "bg-primary-container", "bg-secondary-container", "bg-tertiary-container", "bg-primary", "bg-secondary"];
              const textColors = ["text-on-primary", "text-on-secondary", "text-on-tertiary", "text-on-primary-container", "text-on-secondary-container", "text-on-tertiary-container", "text-on-primary", "text-on-secondary"];
              return (
                <div key={leader.name} className="group">
                  <div className={`aspect-square rounded-xl mb-4 flex items-center justify-center ${colors[i]} editorial-shadow`}>
                    <span className={`text-3xl font-headline font-black ${textColors[i]}`}>{leader.initials}</span>
                  </div>
                  <h3 className="font-headline font-bold text-lg text-on-surface">{leader.name}</h3>
                  <p className="text-sm text-tertiary font-medium">{leader.role}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-20 p-8 bg-surface-container-low rounded-xl flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-3xl">school</span>
              </div>
              <div>
                <h4 className="font-headline font-bold text-xl">Join our faculty</h4>
                <p className="text-on-surface-variant text-sm">We are always looking for industry experts to share their craft.</p>
              </div>
            </div>
            <button className="px-8 py-3 bg-white border border-outline-variant text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all">View Careers</button>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="section-padding bg-surface">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-tertiary font-bold tracking-widest text-xs uppercase mb-4 block">The "Why"</span>
              <h2 className="font-headline text-5xl font-extrabold text-primary mb-4 tracking-tighter">Beyond the Certificate.</h2>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                Over <span className="font-bold text-primary">500,000 skilled trade jobs</span> go unfilled every year in America. EITI exists to close that gap — one graduate at a time.
              </p>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-tertiary text-3xl shrink-0" data-weight="fill">verified</span>
                  <div>
                    <h4 className="font-headline font-bold text-xl mb-2">Economic Resilience</h4>
                    <p className="text-on-surface-variant leading-relaxed">
                      Industrial skills are the backbone of a stable economy. By training the next generation of technicians, we are securing the economic future of our communities.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-tertiary text-3xl shrink-0" data-weight="fill">trending_up</span>
                  <div>
                    <h4 className="font-headline font-bold text-xl mb-2">Upward Mobility</h4>
                    <p className="text-on-surface-variant leading-relaxed">
                      EITI graduates don't just find jobs; they find careers with high wage potential and long-term security in growing industries.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-tertiary text-3xl shrink-0" data-weight="fill">precision_manufacturing</span>
                  <div>
                    <h4 className="font-headline font-bold text-xl mb-2">Human Innovation</h4>
                    <p className="text-on-surface-variant leading-relaxed">
                      Technology is only as good as the people who operate it. We focus on the intersection of human problem-solving and machine efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="pt-12">
                <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-xl mb-4">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNCd1W8XCXkUmAAl7GAC8Q8Vzsgk0eiYi9UEH6qcM3GgY9A0psTZest5Yr-fDsuTrGCRp0Q0sIEPJlNryFAygqv16ugF7dbbSZp22MZC0pDdl1tlds-7regln4105436vW7GIst07QmxGCGD7AHVP6qz50mHqWs4aemZmnTuU50QavaSn7Vz24YNsDOAWDjgvPKZAOMVTL_5JShzyrUSt5KWVR6SNBVCvzkboQRvSiXVag0zISqPFOFVzjMrkvTMOTZYMf9KgjiH3/" alt="Technical vocational student" />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden shadow-xl">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlhVKIU4Ak9yxSU91cLdlDiAt7n7cXWJcJHnhHlhFJ19xr4i2wMEnkTWa0TtK0MqzhAL-pKkYG7Ivl0pCjvTAkHmWzkzeKdDwQ_1gMsJSPmxwTdZ9Tcdz_xOTLPzeV6rjfLSblmm_cSUU-hX_X_WVWIJR8Haw6wbz9B2xEu4Lj1tBOzY43z8lUpGort3CEf3apWUlg-M3oOCJmUkZFpYnlC_xsUL5INDmb7nFGrIvGsdysAlh6DuJTLy4KErGrHg9a6HvJjmzywKt_/" alt="Modern industrial facade" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-square rounded-xl overflow-hidden shadow-xl mb-4">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmjsLjH-w6qDaaP1TG4Osg0PmZOAhkZOSMR1v6Pe8quMEC_jDu9Uf2dfc96jOtroOZd8RZ3isDO7AOfwJ9rA41Gu9Wgpw42asUMnc6icP9iDleTLNrgg_9NTnySojxDmVFZwXxGtrsQCTYwT9li9Ij7THAub8sXwY-prvxfGhqK84f4soWDqDHRqgZD-ZFKT_yYuc4mc5RkMZkjbvKuAvnZSgDbNSNPVcT3mW4kfzNI_f8AghE6ga_D8omSZ-JO7KhDTh5D-5_6S7M/" alt="Student and mentor collaborating" />
                </div>
                <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-xl">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0Usy9FpHQYrf686tjB6zDBEnMD9wdi8gHN8I0jUTZslCXMdsSDCj0h6x30PqSk0Pm_K9tu-8t0yGU2PMWnxulhXJcTIpZDeU04-HZHUhdToxG1TxL1Upm1kqt-zJMTXD4Awg5y_8-nXUtEpztA0I7RWsar5YqmDsxSGvyoBoJPXrz4-SVKRrxPF-zG7OvlFyi3Bzwdu3MZm7b_NM6eGvPd_nxGITQqxE5kz5LJprYaEPbaBTaOizsFf5nFGrIvGsdysAlh6DuJTLy4KErGrHg9a6HvJjmzywKt_/" alt="Blueprint on tablet" />
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
