import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import PageHero from "@/components/PageHero";

const programs = [
  { id: "carpentry", name: "Pre-Apprentice Carpentry", icon: "foundation", color: "#5FB673" },
  { id: "electrical", name: "Pre-Apprentice Electrical", icon: "bolt", color: "#1CA6A3" },
  { id: "callcenter", name: "Advanced Call Center", icon: "headset_mic", color: "#74B4E0" },
  { id: "renewable", name: "Renewable Energy", icon: "solar_power", color: "#1CA6A3" },
  { id: "cdl", name: "CDL-A", icon: "local_shipping", color: "#5FB673" },
  { id: "hospitality", name: "Hospitality", icon: "hotel", color: "#74B4E0" },
  { id: "culinary", name: "Culinary Arts", icon: "restaurant", color: "#1CA6A3" },
];

const miWorksLocations = [
  "Detroit – Samaritan Center – 5555 Conner Detroit, MI 48213",
  "Detroit – Northwest Activity Center 18100 Meyers Detroit, MI 48235",
  "Detroit – SerMetro 9301 Michigan Ave. Detroit, MI 48210",
  "Highland Park",
  "Wayne/Westland",
  "Ypsilanti/Washtenaw County",
  "Other",
];

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-[#E0E8E8] bg-[#F8FAFA] focus:bg-white focus:border-[#1CA6A3] focus:ring-2 focus:ring-[#1CA6A3]/15 outline-none transition-all text-[#333] placeholder:text-[#bbb]";

const SectionHeader = ({
  number,
  icon,
  color,
  title,
  subtitle,
}: {
  number: string;
  icon: string;
  color: string;
  title: string;
  subtitle?: string;
}) => (
  <div className="flex items-center gap-4 mb-8">
    <div
      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
      style={{
        background: `linear-gradient(135deg, ${color}, ${color}cc)`,
        boxShadow: `0 8px 20px -6px ${color}80`,
      }}
    >
      <span className="material-symbols-outlined text-white">{icon}</span>
    </div>
    <div className="flex-1">
      <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color }}>
        Step {number}
      </p>
      <h3 className="text-lg font-headline font-bold text-[#0D1F22]">{title}</h3>
      {subtitle && <p className="text-xs text-[#999] mt-0.5">{subtitle}</p>}
    </div>
    <div
      className="hidden sm:block flex-1 h-px max-w-[120px]"
      style={{ background: `linear-gradient(90deg, ${color}40, transparent)` }}
    />
  </div>
);

const FormField = ({
  label,
  required,
  note,
  children,
}: {
  label: string;
  required?: boolean;
  note?: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-1.5">
    <label className="block">
      <span className="text-sm font-bold text-[#1a2e30]">
        {label}
        {required && <span className="text-[#1CA6A3] ml-1">*</span>}
      </span>
      {note && <span className="text-xs text-[#999] block mt-0.5">{note}</span>}
    </label>
    {children}
  </div>
);

const PillRadio = ({
  name,
  value,
  checked,
  onChange,
  label,
  required,
}: {
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  required?: boolean;
}) => (
  <label
    className={`px-5 py-2.5 rounded-full border-2 cursor-pointer font-semibold text-sm transition-all select-none ${
      checked
        ? "border-[#1CA6A3] bg-[#1CA6A3] text-white shadow-md shadow-[#1CA6A3]/25"
        : "border-[#E0E8E8] bg-white text-[#555] hover:border-[#1CA6A3]/50"
    }`}
  >
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      required={required}
      className="sr-only"
    />
    {label}
  </label>
);

const ToggleCheckbox = ({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
}) => (
  <label
    className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all select-none ${
      checked
        ? "border-[#1CA6A3] bg-[#1CA6A3]/5"
        : "border-[#E0E8E8] bg-white hover:border-[#1CA6A3]/30"
    }`}
  >
    <input
      type="checkbox"
      checked={checked}
      onChange={() => onChange()}
      className="sr-only"
    />
    <div
      className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 transition-all ${
        checked ? "bg-[#1CA6A3]" : "border-2 border-[#CDCDCD]"
      }`}
    >
      {checked && (
        <span className="material-symbols-outlined text-white" style={{ fontSize: "14px" }}>
          check
        </span>
      )}
    </div>
    <span className="text-sm font-medium text-[#333]">{label}</span>
  </label>
);

const Divider = () => (
  <div className="h-px bg-gradient-to-r from-transparent via-[#E0E8E8] to-transparent" />
);

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
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleCheckboxChange = (name: string) => {
    setFormData((prev) => ({ ...prev, [name]: !prev[name as keyof typeof formData] }));
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
      {/* <PageHero
        heading={
          <>
            Start Your Path to{" "}
            <span
              style={{
                color: "#74B4E0",
                textShadow: "0 2px 20px rgba(0,0,0,0.3), 0 0 40px rgba(116,180,224,0.2)",
              }}
            >
              Real Opportunity
            </span>
          </>
        }
        description="Get trained. Get certified. Get connected to real jobs in Detroit."
        buttonLabel="Begin Application"
        buttonLink="#apply-form"
        backgroundImage="/images/apply-hero.png" 
      /> */}

      <section id="apply-form" className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {submitted ? (
            /* ── Success State ── */
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl text-center">
              <div
                className="py-16 px-8"
                style={{ background: "linear-gradient(135deg, #0D1F22 0%, #1a3a3f 100%)" }}
              >
                <div className="w-20 h-20 rounded-full bg-[#5FB673] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#5FB673]/30">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: "40px" }}>
                    check_circle
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-headline font-bold text-white mb-3">
                  Application Submitted!
                </h2>
                <p className="text-lg max-w-md mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                  Thank you,{" "}
                  <strong className="text-[#1CA6A3]">
                    {formData.firstName} {formData.lastName}
                  </strong>
                  . You will receive a confirmation email within 48 hours.
                </p>
              </div>
              <div className="py-8 px-8 bg-[#F8FAFA]">
                <p className="text-[#555]">
                  Questions? Call us at{" "}
                  <a href="tel:313-499-8999" className="text-[#1CA6A3] font-bold hover:underline">
                    (313) 499-8999
                  </a>
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">

              {/* ── Form Header Bar ── */}
              <div
                className="px-8 sm:px-12 py-8"
                style={{ background: "linear-gradient(135deg, #0D1F22 0%, #1a3a3f 100%)" }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#1CA6A3]/20 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[#1CA6A3]">assignment</span>
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white">
                      EITI Application
                    </h2>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                      Fields marked <span className="text-[#1CA6A3]">*</span> are required
                    </p>
                  </div>
                </div>
              </div>

              {/* ── Form Body ── */}
              <form onSubmit={handleSubmit} className="px-6 sm:px-10 lg:px-12 py-10 space-y-12">

                {/* Section 1 — Program */}
                <div>
                  <SectionHeader
                    number="01"
                    icon="school"
                    color="#1CA6A3"
                    title="Choose Your Program"
                    subtitle="Select the training track you want to apply for"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {programs.map((program) => {
                      const isSelected = selectedProgram === program.id;
                      return (
                        <label
                          key={program.id}
                          className={`relative flex items-center gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                            isSelected
                              ? "border-[#1CA6A3] bg-[#1CA6A3]/5 shadow-sm"
                              : "border-[#E0E8E8] hover:border-[#1CA6A3]/40 bg-[#F8FAFA]"
                          }`}
                        >
                          <input
                            type="radio"
                            name="program"
                            value={program.id}
                            checked={isSelected}
                            onChange={(e) => setSelectedProgram(e.target.value)}
                            required
                            className="sr-only"
                          />
                          <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                            style={{ backgroundColor: isSelected ? `${program.color}20` : "#ECEEF0" }}
                          >
                            <span
                              className="material-symbols-outlined text-lg"
                              style={{ color: isSelected ? program.color : "#aaa" }}
                            >
                              {program.icon}
                            </span>
                          </div>
                          <span
                            className={`text-sm font-semibold leading-tight ${
                              isSelected ? "text-[#0D1F22]" : "text-[#666]"
                            }`}
                          >
                            {program.name}
                          </span>
                          {isSelected && (
                            <div
                              className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center"
                              style={{ backgroundColor: "#1CA6A3" }}
                            >
                              <span
                                className="material-symbols-outlined text-white"
                                style={{ fontSize: "12px" }}
                              >
                                check
                              </span>
                            </div>
                          )}
                        </label>
                      );
                    })}
                  </div>
                </div>

                <Divider />

                {/* Section 2 — Personal Info */}
                <div>
                  <SectionHeader
                    number="02"
                    icon="person"
                    color="#74B4E0"
                    title="Personal Information"
                    subtitle="Your name and contact details"
                  />
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField label="First Name" required>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={inputClass}
                          required
                        />
                      </FormField>
                      <FormField label="Last Name" required>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={inputClass}
                          required
                        />
                      </FormField>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField label="Phone Number" required>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={inputClass}
                          required
                        />
                      </FormField>
                      <FormField label="Secondary Phone">
                        <input
                          type="tel"
                          name="secondaryPhone"
                          value={formData.secondaryPhone}
                          onChange={handleInputChange}
                          className={inputClass}
                        />
                      </FormField>
                    </div>

                    <FormField
                      label="Email Address"
                      required
                      note="Please make sure your email is accurate — you'll receive a confirmation within 48 hours."
                    >
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={inputClass}
                        required
                      />
                    </FormField>

                    <div className="space-y-3">
                      <FormField label="Street Address" required>
                        <input
                          type="text"
                          name="streetAddress"
                          placeholder="Street Address"
                          value={formData.streetAddress}
                          onChange={handleInputChange}
                          className={inputClass}
                          required
                        />
                      </FormField>
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                        <div className="sm:col-span-2">
                          <input
                            type="text"
                            name="city"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleInputChange}
                            className={inputClass}
                            required
                          />
                        </div>
                        <input
                          type="text"
                          name="state"
                          placeholder="State"
                          value={formData.state}
                          onChange={handleInputChange}
                          className={inputClass}
                          required
                        />
                        <input
                          type="text"
                          name="zipCode"
                          placeholder="ZIP Code"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          className={inputClass}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <Divider />

                {/* Section 3 — Documentation */}
                <div>
                  <SectionHeader
                    number="03"
                    icon="badge"
                    color="#5FB673"
                    title="Documentation & Education"
                    subtitle="Check everything you currently have"
                  />
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-bold text-[#333] mb-3">
                        Documentation Required <span className="text-[#1CA6A3]">*</span>
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                          { key: "hasID", label: "Valid Michigan State ID" },
                          { key: "hasLicense", label: "Valid Michigan Driver's License" },
                          { key: "hasSSN", label: "Social Security Card" },
                        ].map((doc) => (
                          <ToggleCheckbox
                            key={doc.key}
                            checked={formData[doc.key as keyof typeof formData] as boolean}
                            onChange={() => handleCheckboxChange(doc.key)}
                            label={doc.label}
                          />
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-bold text-[#333] mb-3">
                        Education{" "}
                        <span className="text-xs font-normal text-[#999]">(not required for approval)</span>
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          { key: "hasDiploma", label: "High School Diploma" },
                          { key: "hasGED", label: "GED" },
                        ].map((edu) => (
                          <ToggleCheckbox
                            key={edu.key}
                            checked={formData[edu.key as keyof typeof formData] as boolean}
                            onChange={() => handleCheckboxChange(edu.key)}
                            label={edu.label}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <Divider />

                {/* Section 4 — Work & Background */}
                <div>
                  <SectionHeader
                    number="04"
                    icon="work_history"
                    color="#1CA6A3"
                    title="Work & Background"
                    subtitle="Your current employment and background status"
                  />
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <p className="text-sm font-bold text-[#333]">
                        Do you have a criminal background?{" "}
                        <span className="text-[#1CA6A3]">*</span>
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {["Felony", "Misdemeanor", "N/A"].map((option) => (
                          <PillRadio
                            key={option}
                            name="criminalBackground"
                            value={option}
                            checked={formData.criminalBackground === option}
                            onChange={handleInputChange}
                            label={option}
                            required
                          />
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-sm font-bold text-[#333]">
                        Are you currently working?{" "}
                        <span className="text-[#1CA6A3]">*</span>
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {["Yes - Mornings", "Yes - Afternoons", "Yes - Midnights", "No"].map((option) => (
                          <PillRadio
                            key={option}
                            name="currentlyWorking"
                            value={option}
                            checked={formData.currentlyWorking === option}
                            onChange={handleInputChange}
                            label={option}
                            required
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <Divider />

                {/* Section 5 — MI Works */}
                <div>
                  <SectionHeader
                    number="05"
                    icon="corporate_fare"
                    color="#74B4E0"
                    title="MI Works Information"
                    subtitle="Michigan Works! partnership details"
                  />
                  <div className="rounded-2xl border border-[#E0E8E8] overflow-hidden">
                    <div className="p-6 space-y-3">
                      <p className="text-sm font-bold text-[#333]">
                        Have you attended a MI Works orientation in the last 90 days?{" "}
                        <span className="text-[#1CA6A3]">*</span>
                      </p>
                      <div className="flex gap-3">
                        {["Yes", "No"].map((option) => (
                          <PillRadio
                            key={option}
                            name="miWorksOrientation"
                            value={option}
                            checked={formData.miWorksOrientation === option}
                            onChange={handleInputChange}
                            label={option}
                            required
                          />
                        ))}
                      </div>
                    </div>

                    {formData.miWorksOrientation === "Yes" && (
                      <div className="border-t border-[#E0E8E8] bg-[#F8FAFA] p-6 space-y-6">
                        <FormField label="Career Advisor Name & Email">
                          <input
                            type="text"
                            name="miWorksAdvisor"
                            value={formData.miWorksAdvisor}
                            onChange={handleInputChange}
                            className={inputClass}
                          />
                        </FormField>

                        <div className="space-y-3">
                          <p className="text-sm font-bold text-[#333]">
                            Have you taken the CASAS or TABE test?
                          </p>
                          <div className="flex gap-3">
                            {["Yes", "No"].map((option) => (
                              <PillRadio
                                key={option}
                                name="miWorksTest"
                                value={option}
                                checked={formData.miWorksTest === option}
                                onChange={handleInputChange}
                                label={option}
                              />
                            ))}
                          </div>
                        </div>

                        {formData.miWorksTest === "Yes" && (
                          <div className="grid grid-cols-2 gap-4">
                            <FormField label="Math Score">
                              <input
                                type="text"
                                name="mathScore"
                                value={formData.mathScore}
                                onChange={handleInputChange}
                                className={inputClass}
                              />
                            </FormField>
                            <FormField label="English Score">
                              <input
                                type="text"
                                name="englishScore"
                                value={formData.englishScore}
                                onChange={handleInputChange}
                                className={inputClass}
                              />
                            </FormField>
                          </div>
                        )}

                        <FormField label="MI Works Location">
                          <select
                            name="miWorksLocation"
                            value={formData.miWorksLocation}
                            onChange={handleInputChange}
                            className={inputClass}
                          >
                            <option value="">Select location</option>
                            {miWorksLocations.map((loc) => (
                              <option key={loc} value={loc}>{loc}</option>
                            ))}
                          </select>
                        </FormField>

                        {formData.miWorksLocation === "Other" && (
                          <FormField label="Please specify location">
                            <input
                              type="text"
                              name="miWorksOtherLocation"
                              value={formData.miWorksOtherLocation}
                              onChange={handleInputChange}
                              className={inputClass}
                            />
                          </FormField>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <Divider />

                {/* Section 6 — Additional */}
                <div>
                  <SectionHeader
                    number="06"
                    icon="info"
                    color="#5FB673"
                    title="Additional Information"
                    subtitle="A few more details to complete your application"
                  />
                  <div className="space-y-8">
                    <ToggleCheckbox
                      checked={formData.miRehabServices}
                      onChange={() => handleCheckboxChange("miRehabServices")}
                      label="I participate in Michigan Rehabilitation Services (Do you have an active case?)"
                    />

                    <div className="space-y-3">
                      <p className="text-sm font-bold text-[#333]">
                        Have you completed Michigan Works training in the last 3 years?{" "}
                        <span className="text-[#1CA6A3]">*</span>
                      </p>
                      <div className="flex gap-3">
                        {["Yes", "No"].map((option) => (
                          <PillRadio
                            key={option}
                            name="completedTraining"
                            value={option}
                            checked={formData.completedTraining === option}
                            onChange={handleInputChange}
                            label={option}
                            required
                          />
                        ))}
                      </div>
                    </div>

                    <FormField label="Comments or Message">
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Anything you'd like us to know..."
                        className={`${inputClass} resize-none`}
                      />
                    </FormField>
                  </div>
                </div>

                {/* ── Submit Footer ── */}
                <div
                  className="rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
                  style={{ background: "linear-gradient(135deg, #0D1F22 0%, #1a3a3f 100%)" }}
                >
                  <div>
                    <p className="text-white font-bold text-lg">Ready to start your journey?</p>
                    <p className="text-sm mt-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>
                      We'll review your application and follow up within 48 hours.
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-[#1CA6A3] hover:bg-[#179490] text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#1CA6A3]/30 hover:-translate-y-0.5 text-lg whitespace-nowrap"
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
