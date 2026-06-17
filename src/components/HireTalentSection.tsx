// HireTalentSection.tsx

import { useState } from "react";
import TimelineDropdown from "./ui/TimelineDropdown";

interface FormState {
    companyName: string;
    contactName: string;
    email: string;
    phone: string;
    industry: string;
    positionTitles: string;
    numberOfPositions: string;
    hiringTimeline: string;
    additionalNotes: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;
type TouchedState = Partial<Record<keyof FormState, boolean>>;
type Status = "idle" | "submitting" | "success" | "error";

const INITIAL_FORM: FormState = {
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    industry: "",
    positionTitles: "",
    numberOfPositions: "",
    hiringTimeline: "",
    additionalNotes: "",
};

const INITIAL_ERRORS: FormErrors = {};

const REQUIRED_FIELDS: (keyof FormState)[] = [
    "companyName",
    "contactName",
    "email",
    "phone",
    "industry",
    "positionTitles",
    "numberOfPositions",
    "hiringTimeline",
];

const HIRING_TIMELINES: string[] = [
    "Immediately",
    "Within 1 Month",
    "1–3 Months",
    "3–6 Months",
    "6+ Months",
];

function validate(form: FormState): { errors: FormErrors; isValid: boolean } {
    const errors: FormErrors = {};
    let isValid = true;

    REQUIRED_FIELDS.forEach((field) => {
        if (!form[field].trim()) {
            errors[field] = "This field is required.";
            isValid = false;
        }
    });

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        errors.email = "Please enter a valid email address.";
        isValid = false;
    }

    if (form.phone && !/^[\d\s\-\+\(\)]{7,15}$/.test(form.phone.trim())) {
        errors.phone = "Please enter a valid phone number.";
        isValid = false;
    }

    return { errors, isValid };
}

export default function HireTalentSection() {
    const [form, setForm] = useState<FormState>(INITIAL_FORM);
    const [errors, setErrors] = useState<FormErrors>(INITIAL_ERRORS);
    const [status, setStatus] = useState<Status>("idle");
    const [touched, setTouched] = useState<TouchedState>({});
    const [timelineOpen, setTimelineOpen] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        const field = name as keyof FormState;
        setForm((prev) => ({ ...prev, [field]: value }));

        if (touched[field]) {
            const { errors: newErrors } = validate({ ...form, [field]: value });
            setErrors((prev) => ({ ...prev, [field]: newErrors[field] }));
        }
    };

    const handleBlur = (
        e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const field = e.target.name as keyof FormState;
        setTouched((prev) => ({ ...prev, [field]: true }));
        const { errors: newErrors } = validate(form);
        setErrors((prev) => ({ ...prev, [field]: newErrors[field] }));

        if (field === "hiringTimeline") setTimelineOpen(false);
    };

    const handleSelectFocus = () => setTimelineOpen(true);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        handleChange(e);
        setTimelineOpen(false);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const allTouched = Object.fromEntries(
            Object.keys(INITIAL_FORM).map((k) => [k, true])
        ) as TouchedState;
        setTouched(allTouched);

        const { errors: validationErrors, isValid } = validate(form);
        setErrors(validationErrors);
        if (!isValid) return;

        setStatus("submitting");

        try {
            const payload = {
                access_key: "bb96dcb3-3327-40a0-a3f0-c643f91c2e87",
                subject: `Talent Request – ${form.companyName}`,
                from_name: form.contactName,
                replyto: form.email,
                "Company / Organization Name": form.companyName,
                "Contact Name": form.contactName,
                "Email Address": form.email,
                "Phone Number": form.phone,
                Industry: form.industry,
                "Position Title(s) Needed": form.positionTitles,
                "Number of Positions Needed": form.numberOfPositions,
                "Hiring Timeline": form.hiringTimeline,
                "Additional Notes": form.additionalNotes || "N/A",
            };

            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();
            if (data.success) {
                setStatus("success");
                setForm(INITIAL_FORM);
                setTouched({});
                setErrors(INITIAL_ERRORS);
                setTimelineOpen(false);
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    const inputBase =
        "w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#333333] placeholder-gray-400 outline-none transition-all duration-200 focus:ring-2";
    const inputNormal = `${inputBase} border-gray-200 focus:border-[#1CA6A3] focus:ring-[#1CA6A3]/20`;
    const inputError = `${inputBase} border-red-400 focus:border-red-400 focus:ring-red-200`;

    const getInputClass = (field: keyof FormState) =>
        errors[field] && touched[field] ? inputError : inputNormal;

    const ErrorMsg = ({ field }: { field: keyof FormState }) =>
        errors[field] && touched[field] ? (
            <p className="mt-1 text-xs text-red-500">{errors[field]}</p>
        ) : null;

    const Label = ({
        htmlFor,
        children,
        required,
    }: {
        htmlFor: string;
        children: React.ReactNode;
        required?: boolean;
    }) => (
        <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-[#333333]">
            {children}
            {required && <span className="ml-0.5 text-[#1CA6A3]">*</span>}
        </label>
    );

    return (
        <section className="relative overflow-hidden bg-[#F7F3EE] py-20">
            <div
                className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full opacity-10"
                style={{ background: "radial-gradient(circle, #1CA6A3, transparent)" }}
            />
            <div
                className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full opacity-10"
                style={{ background: "radial-gradient(circle, #74B4E0, transparent)" }}
            />

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <span className="mb-4 inline-block rounded-full bg-[#1CA6A310] px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-[#1CA6A3]">
                        Hire Our Graduates
                    </span>
                    <h2 className="text-3xl font-bold text-[#333333] sm:text-5xl relative">
                        Looking for{" "}
                        <span
                            className="relative text-[#1CA6A3]"
                        // style={{
                        //     background: "linear-gradient(90deg, #1CA6A3, #74B4E0)",
                        //     WebkitBackgroundClip: "text",
                        //     WebkitTextFillColor: "transparent",
                        // }}
                        >
                            Skilled Talent?
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
                    <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
                        Partner with Emerging Industries Training Institute to connect with trained,
                        workforce-ready candidates.
                    </p>
                </div>

                <div className="mx-auto max-w-2xl rounded-2xl bg-white shadow-xl shadow-[#1CA6A3]/10">
                    <div
                        className="h-1.5 w-full rounded-t-2xl"
                        style={{ background: "linear-gradient(90deg, #1CA6A3, #74B4E0, #5FB673)" }}
                    />

                    <div className="p-6 sm:p-8">
                        {status === "success" ? (
                            <div className="flex flex-col items-center py-12 text-center">
                                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#5FB673]/15">
                                    <svg className="h-10 w-10 text-[#5FB673]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-2xl font-bold text-[#333333]">Request Submitted!</h3>
                                <p className="mb-8 max-w-sm text-gray-500">
                                    Thank you for reaching out. Our team will review your talent request and get
                                    back to you shortly.
                                </p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="rounded-lg border border-[#1CA6A3] px-6 py-2.5 text-sm font-medium text-[#1CA6A3] transition-colors hover:bg-[#1CA6A3]/5"
                                >
                                    Submit Another Request
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div className="sm:col-span-2">
                                        <Label htmlFor="companyName" required>Company / Organization Name</Label>
                                        <input
                                            id="companyName"
                                            name="companyName"
                                            type="text"
                                            placeholder="Acme Corp"
                                            value={form.companyName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={getInputClass("companyName")}
                                        />
                                        <ErrorMsg field="companyName" />
                                    </div>

                                    <div>
                                        <Label htmlFor="contactName" required>Contact Name</Label>
                                        <input
                                            id="contactName"
                                            name="contactName"
                                            type="text"
                                            placeholder="John Smith"
                                            value={form.contactName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={getInputClass("contactName")}
                                        />
                                        <ErrorMsg field="contactName" />
                                    </div>

                                    <div>
                                        <Label htmlFor="email" required>Email Address</Label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="john@company.com"
                                            value={form.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={getInputClass("email")}
                                        />
                                        <ErrorMsg field="email" />
                                    </div>

                                    <div>
                                        <Label htmlFor="phone" required>Phone Number</Label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="+1 (555) 000-0000"
                                            value={form.phone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={getInputClass("phone")}
                                        />
                                        <ErrorMsg field="phone" />
                                    </div>

                                    <div>
                                        <Label htmlFor="industry" required>Industry</Label>
                                        <input
                                            id="industry"
                                            name="industry"
                                            type="text"
                                            placeholder="e.g. Healthcare, Construction, IT"
                                            value={form.industry}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={getInputClass("industry")}
                                        />
                                        <ErrorMsg field="industry" />
                                    </div>

                                    <div>
                                        <Label htmlFor="positionTitles" required>Position Title(s) Needed</Label>
                                        <input
                                            id="positionTitles"
                                            name="positionTitles"
                                            type="text"
                                            placeholder="e.g. HVAC Technician, Welder"
                                            value={form.positionTitles}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={getInputClass("positionTitles")}
                                        />
                                        <ErrorMsg field="positionTitles" />
                                    </div>

                                    <div>
                                        <Label htmlFor="numberOfPositions" required>Number of Positions Needed</Label>
                                        <input
                                            id="numberOfPositions"
                                            name="numberOfPositions"
                                            type="number"
                                            min="1"
                                            placeholder="e.g. 5"
                                            value={form.numberOfPositions}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={getInputClass("numberOfPositions")}
                                        />
                                        <ErrorMsg field="numberOfPositions" />
                                    </div>

                                    {/* Hiring Timeline with animated arrow */}
                                    {/* <div>
                                        <Label htmlFor="hiringTimeline" required>Hiring Timeline</Label>
                                        <div className="relative">
                                            <select
                                                id="hiringTimeline"
                                                name="hiringTimeline"
                                                value={form.hiringTimeline}
                                                onChange={handleChange}
                                                onClick={() => setTimelineOpen((prev) => !prev)}
                                                onBlur={(e) => {
                                                    setTimelineOpen(false);
                                                    handleBlur(e);
                                                }}
                                                className={`${getInputClass("hiringTimeline")} cursor-pointer appearance-none pr-10`}
                                            >
                                                <option value="" disabled>Select a timeline</option>
                                                {HIRING_TIMELINES.map((t) => (
                                                    <option key={t} value={t}>{t}</option>
                                                ))}
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                                <svg
                                                    className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${timelineOpen ? "rotate-180" : "rotate-0"
                                                        }`}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <ErrorMsg field="hiringTimeline" />
                                    </div> */}
                                    <div>
                                        <Label htmlFor="hiringTimeline" required>Hiring Timeline</Label>
                                        <TimelineDropdown
                                            value={form.hiringTimeline}
                                            onChange={(val) => {
                                                setForm((prev) => ({ ...prev, hiringTimeline: val }));
                                                setTouched((prev) => ({ ...prev, hiringTimeline: true }));
                                                const { errors: newErrors } = validate({ ...form, hiringTimeline: val });
                                                setErrors((prev) => ({ ...prev, hiringTimeline: newErrors.hiringTimeline }));
                                            }}
                                            onBlur={() => {
                                                setTouched((prev) => ({ ...prev, hiringTimeline: true }));
                                                const { errors: newErrors } = validate(form);
                                                setErrors((prev) => ({ ...prev, hiringTimeline: newErrors.hiringTimeline }));
                                            }}
                                            hasError={!!(errors.hiringTimeline && touched.hiringTimeline)}
                                            options={HIRING_TIMELINES}
                                        />
                                        <ErrorMsg field="hiringTimeline" />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <Label htmlFor="additionalNotes">Additional Notes</Label>
                                        <textarea
                                            id="additionalNotes"
                                            name="additionalNotes"
                                            rows={4}
                                            placeholder="Any specific skills, certifications, or requirements..."
                                            value={form.additionalNotes}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`${inputNormal} resize-none`}
                                        />
                                    </div>
                                </div>

                                {status === "error" && (
                                    <div className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                                        Something went wrong. Please try again or email us directly at{" "}
                                        <a href="mailto:info@eitinstitute.org" className="font-medium underline">
                                            info@eitinstitute.org
                                        </a>
                                        .
                                    </div>
                                )}

                                <div className="mt-8 flex justify-center">
                                    <button
                                        type="submit"
                                        disabled={status === "submitting"}
                                        className="group relative overflow-hidden rounded-xl px-10 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-[#1CA6A3]/30 disabled:opacity-70 bg-[#1CA6A3]"
                                    // style={{ background: "linear-gradient(135deg, #1CA6A3, #74B4E0)" }}
                                    >
                                        <span
                                            className="absolute inset-0 translate-x-[-100%] bg-white/10 transition-transform duration-500 group-hover:translate-x-[100%]"
                                            aria-hidden
                                        />
                                        {status === "submitting" ? (
                                            <span className="flex items-center gap-2">
                                                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                                                </svg>
                                                Submitting...
                                            </span>
                                        ) : (
                                            "Request Talent"
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>

                <p className="mt-8 text-center text-xs text-gray-400">
                    Your information is kept confidential and used only to connect you with the right candidates.
                </p>
            </div>
        </section>
    );
}