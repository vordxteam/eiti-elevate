import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const programs = [
  { id: "carpentry", name: "Pre-Apprentice Carpentry" },
  { id: "electrical", name: "Pre-Apprentice Electrical" },
  { id: "callcenter", name: "Advanced Call Center" },
  { id: "renewable", name: "Renewable Energy" },
  { id: "cdl", name: "CDL-A" },
  { id: "hospitality", name: "Hospitality" },
  { id: "culinary", name: "Culinary Arts" }
];

const miWorksLocations = [
  "Detroit – Samaritan Center – 5555 Conner Detroit, MI 48213",
  "Detroit – Northwest Activity Center 18100 Meyers Detroit, MI 48235",
  "Detroit – SerMetro 9301 Michigan Ave. Detroit, MI 48210",
  "Highland Park",
  "Wayne/Westland",
  "Ypsilanti/Washtenaw County",
  "Other"
];

const features = [
  { icon: "school", title: "No experience required", color: "#1CA6A3" },
  { icon: "construction", title: "Hands-on training", color: "#74B4E0" },
  { icon: "calendar_month", title: "Programs available year-round", color: "#5FB673" },
  { icon: "work", title: "Job placement support", color: "#1CA6A3" }
];

const ApplyPage = () => {
  const [searchParams] = useSearchParams();
  const preselectedProgram = searchParams.get("program") || "";
  const [selectedProgram, setSelectedProgram] = useState(preselectedProgram);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    secondaryPhone: "",
    email: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    hasID: false,
    hasLicense: false,
    hasSSN: false,
    hasDiploma: false,
    hasGED: false,
    criminalBackground: "",
    currentlyWorking: "",
    miWorksOrientation: "",
    miWorksAdvisor: "",
    miWorksTest: "",
    mathScore: "",
    englishScore: "",
    miWorksLocation: "",
    miWorksOtherLocation: "",
    miRehabServices: false,
    completedTraining: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleCheckboxChange = (name: string) => {
    setFormData(prev => ({ ...prev, [name]: !prev[name as keyof typeof formData] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.email && formData.phone && selectedProgram) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F9F9]">
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-16 sm:pb-24">
        <div className="container-narrow px-4 sm:px-6 mx-auto">
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="md:col-span-7">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold text-[#333333] leading-[1.1] tracking-tight mb-6">
                Start Your Path to <span className="text-[#1CA6A3]">Paid Opportunity</span>
              </h1>
              <p className="text-lg sm:text-xl text-[#555] max-w-xl mb-8 leading-relaxed">
                Get trained. Get certified. Get connected to real jobs in Detroit.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3">
                {features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#F2F9F9] border border-[#1CA6A3]/20"
                  >
                    <span className="material-symbols-outlined text-lg" style={{ color: feature.color }}>
                      {feature.icon}
                    </span>
                    <span className="text-sm font-semibold text-[#333]">{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden editorial-shadow bg-white p-2 border border-[#1CA6A3]/10">
                <img
                  alt="EITI Training"
                  className="w-full aspect-[4/5] object-cover rounded-xl"
                  src="/images/apply-hero.png"
                />
              </div>
              <div className="absolute bottom-3 -left-4 md:-left-6 max-w-[200px] rounded-xl bg-[#1CA6A3] p-5 editorial-shadow">
                <p className="text-2xl font-headline font-black text-white">2,200+</p>
                <p className="text-sm font-semibold text-white/90">Graduates Placed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 sm:py-24">
        <div className="container-narrow px-4 sm:px-6 mx-auto">
          {submitted ? (
            <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-lg text-center max-w-3xl mx-auto">
              <div className="w-20 h-20 rounded-full bg-[#5FB673] flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-white text-4xl">check_circle</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-headline font-bold text-[#333333] mb-4">
                Application Submitted!
              </h2>
              <p className="text-lg text-[#555] mb-6 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.firstName} {formData.lastName}</strong>. You will receive a confirmation email within 48 hours.
              </p>
              <p className="text-sm text-[#555]">
                Questions? Call us at{" "}
                <a href="tel:313-499-8999" className="text-[#1CA6A3] font-bold hover:underline">(313) 499-8999</a>
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-lg">
              {/* Form Header */}
              <div className="text-center mb-10 pb-8 border-b border-[#F2F9F9]">
                <h2 className="text-2xl sm:text-3xl font-headline font-bold text-[#333333] mb-2">
                  EITI Application
                </h2>
                <p className="text-[#555]">
                  Fill out the form below to start your journey
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Program Selection */}
                <div className="space-y-4">
                  <label className="block text-base font-bold text-[#333]">
                    Select Program <span className="text-[#1CA6A3]">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {programs.map((program) => (
                      <label
                        key={program.id}
                        className={`relative flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          selectedProgram === program.id
                            ? "border-[#1CA6A3] bg-[#1CA6A3]/5"
                            : "border-[#F2F9F9] hover:border-[#1CA6A3]/30"
                        }`}
                      >
                        <input
                          type="radio"
                          name="program"
                          value={program.id}
                          checked={selectedProgram === program.id}
                          onChange={(e) => setSelectedProgram(e.target.value)}
                          className="w-4 h-4 text-[#1CA6A3] border-[#1CA6A3] focus:ring-[#1CA6A3]"
                          required
                        />
                        <span className="ml-3 text-sm font-medium text-[#333]">{program.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-[#333]">
                      First Name <span className="text-[#1CA6A3]">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E0E0E0] focus:border-[#1CA6A3] focus:ring-2 focus:ring-[#1CA6A3]/20 outline-none transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-[#333]">
                      Last Name <span className="text-[#1CA6A3]">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E0E0E0] focus:border-[#1CA6A3] focus:ring-2 focus:ring-[#1CA6A3]/20 outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-[#333]">
                      Phone Number <span className="text-[#1CA6A3]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E0E0E0] focus:border-[#1CA6A3] focus:ring-2 focus:ring-[#1CA6A3]/20 outline-none transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-[#333]">Secondary Phone</label>
                    <input
                      type="tel"
                      name="secondaryPhone"
                      value={formData.secondaryPhone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E0E0E0] focus:border-[#1CA6A3] focus:ring-2 focus:ring-[#1CA6A3]/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-[#333]">
                    Email Address <span className="text-[#1CA6A3]">*</span>
                    <span className="text-xs font-normal text-[#555] block mt-1">
                      Please make sure email address is accurate. You will receive a confirmation email within 48 hours.
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#E0E0E0] focus:border-[#1CA6A3] focus:ring-2 focus:ring-[#1CA6A3]/20 outline-none transition-all"
                    required
                  />
                </div>

                {/* Address */}
                <div className="space-y-4">
                  <label className="block text-sm font-bold text-[#333]">Address <span className="text-[#1CA6A3]">*</span></label>
                  <input
                    type="text"
                    name="streetAddress"
                    placeholder="Street Address"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#E0E0E0] focus:border-[#1CA6A3] focus:ring-2 focus:ring-[#1CA6A3]/20 outline-none transition-all"
                    required
                  />
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E0E0E0] focus:border-[#1CA6A3] focus:ring-2 focus:ring-[#1CA6A3]/20 outline-none transition-all"
                      required
                    />
                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E0E0E0] focus:border-[#1CA6A3] focus:ring-2 focus:ring-[#1CA6A3]/20 outline-none transition-all"
                      required
                    />
                    <input
                      type="text"
                      name="zipCode"
                      placeholder="Zip Code"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E0E0E0] focus:border-[#1CA6A3] focus:ring-2 focus:ring-[#1CA6A3]/20 outline-none transition-all col-span-2 md:col-span-2"
                      required
                    />
                  </div>
                </div>

                {/* Documentation */}
                <div className="space-y-4">
                  <label className="block text-sm font-bold text-[#333]">
                    Documentation Required (check if you have) <span className="text-[#1CA6A3]">*</span>
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {[
                      { key: "hasID", label: "Valid Michigan State ID" },
                      { key: "hasLicense", label: "Valid Michigan Driver's License" },
                      { key: "hasSSN", label: "Social Security Card" }
                    ].map((doc) => (
                      <label key={doc.key} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData[doc.key as keyof typeof formData] as boolean}
                          onChange={() => handleCheckboxChange(doc.key)}
                          className="w-5 h-5 rounded border-[#E0E0E0] text-[#1CA6A3] focus:ring-[#1CA6A3]"
                        />
                        <span className="text-sm text-[#555]">{doc.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="space-y-4">
                  <label className="block text-sm font-bold text-[#333]">Education (Not required for approval)</label>
                  <div className="flex flex-wrap gap-4">
                    {[
                      { key: "hasDiploma", label: "High School Diploma" },
                      { key: "hasGED", label: "GED" }
                    ].map((edu) => (
                      <label key={edu.key} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData[edu.key as keyof typeof formData] as boolean}
                          onChange={() => handleCheckboxChange(edu.key)}
                          className="w-5 h-5 rounded border-[#E0E0E0] text-[#1CA6A3] focus:ring-[#1CA6A3]"
                        />
                        <span className="text-sm text-[#555]">{edu.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Criminal Background */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-[#333]">
                    Do you have a criminal background? <span className="text-[#1CA6A3]">*</span>
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {["Felony", "Misdemeanor", "N/A"].map((option) => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="criminalBackground"
                          value={option}
                          checked={formData.criminalBackground === option}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#1CA6A3] border-[#1CA6A3] focus:ring-[#1CA6A3]"
                          required
                        />
                        <span className="text-sm text-[#555]">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Working Status */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-[#333]">
                    Are you currently working? <span className="text-[#1CA6A3]">*</span>
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {["Yes - Mornings", "Yes - Afternoons", "Yes - Midnights", "No"].map((option) => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="currentlyWorking"
                          value={option}
                          checked={formData.currentlyWorking === option}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#1CA6A3] border-[#1CA6A3] focus:ring-[#1CA6A3]"
                          required
                        />
                        <span className="text-sm text-[#555]">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* MI Works */}
                <div className="space-y-6 bg-[#F2F9F9] rounded-2xl p-6">
                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-[#333]">
                      Have you attended a MI Works orientation in the last 90 days? <span className="text-[#1CA6A3]">*</span>
                    </label>
                    <div className="flex gap-4">
                      {["Yes", "No"].map((option) => (
                        <label key={option} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="miWorksOrientation"
                            value={option}
                            checked={formData.miWorksOrientation === option}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-[#1CA6A3] border-[#1CA6A3] focus:ring-[#1CA6A3]"
                            required
                          />
                          <span className="text-sm text-[#555]">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {formData.miWorksOrientation === "Yes" && (
                    <div className="space-y-4 pt-4 border-t border-[#1CA6A3]/20">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-[#555]">Career Advisor Name & Email</label>
                        <input
                          type="text"
                          name="miWorksAdvisor"
                          value={formData.miWorksAdvisor}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-[#E0E0E0] focus:border-[#1CA6A3] focus:ring-2 focus:ring-[#1CA6A3]/20 outline-none transition-all"
                        />
                      </div>

                      <div className="space-y-3">
                        <label className="block text-sm font-medium text-[#555]">Have you taken the CASAS or TABE test?</label>
                        <div className="flex gap-4">
                          {["Yes", "No"].map((option) => (
                            <label key={option} className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="radio"
                                name="miWorksTest"
                                value={option}
                                checked={formData.miWorksTest === option}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-[#1CA6A3] border-[#1CA6A3] focus:ring-[#1CA6A3]"
                              />
                              <span className="text-sm text-[#555]">{option}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {formData.miWorksTest === "Yes" && (
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-[#555]">Math Score</label>
                            <input
                              type="text"
                              name="mathScore"
                              value={formData.mathScore}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-xl border border-[#E0E0E0] focus:border-[#1CA6A3] focus:ring-2 focus:ring-[#1CA6A3]/20 outline-none transition-all"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-[#555]">English Score</label>
                            <input
                              type="text"
                              name="englishScore"
                              value={formData.englishScore}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-xl border border-[#E0E0E0] focus:border-[#1CA6A3] focus:ring-2 focus:ring-[#1CA6A3]/20 outline-none transition-all"
                            />
                          </div>
                        </div>
                      )}

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-[#555]">MI Works Location</label>
                        <select
                          name="miWorksLocation"
                          value={formData.miWorksLocation}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-[#E0E0E0] focus:border-[#1CA6A3] focus:ring-2 focus:ring-[#1CA6A3]/20 outline-none transition-all bg-white"
                        >
                          <option value="">Select location</option>
                          {miWorksLocations.map((loc) => (
                            <option key={loc} value={loc}>{loc}</option>
                          ))}
                        </select>
                      </div>

                      {formData.miWorksLocation === "Other" && (
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-[#555]">Please specify location</label>
                          <input
                            type="text"
                            name="miWorksOtherLocation"
                            value={formData.miWorksOtherLocation}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-[#E0E0E0] focus:border-[#1CA6A3] focus:ring-2 focus:ring-[#1CA6A3]/20 outline-none transition-all"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Other Programs */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.miRehabServices}
                      onChange={() => handleCheckboxChange("miRehabServices")}
                      className="w-5 h-5 rounded border-[#E0E0E0] text-[#1CA6A3] focus:ring-[#1CA6A3]"
                    />
                    <span className="text-sm text-[#555]">I participate in Michigan Rehabilitation Services (Do you have an active case?)</span>
                  </label>
                </div>

                {/* Training History */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-[#333]">
                    Have you completed Michigan Works training in the last 3 years? <span className="text-[#1CA6A3]">*</span>
                  </label>
                  <div className="flex gap-4">
                    {["Yes", "No"].map((option) => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="completedTraining"
                          value={option}
                          checked={formData.completedTraining === option}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#1CA6A3] border-[#1CA6A3] focus:ring-[#1CA6A3]"
                          required
                        />
                        <span className="text-sm text-[#555]">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Comments */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-[#333]">Comments or Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#E0E0E0] focus:border-[#1CA6A3] focus:ring-2 focus:ring-[#1CA6A3]/20 outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-12 py-4 bg-[#1CA6A3] text-white font-bold text-lg rounded-xl hover:bg-[#158a88] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mx-auto"
                  >
                    Submit Application
                    <span className="material-symbols-outlined">send</span>
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ApplyPage;
