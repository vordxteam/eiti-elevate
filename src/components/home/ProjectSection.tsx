import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const programs = [
    {
        title: "Pre-Apprentice Carpentry",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
        accent: "#1CA6A3",
    },
    {
        title: "Pre-Apprentice Electrical",
        image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&q=80",
        accent: "#74B4E0",
    },
    {
        title: "Advanced Call Center",
        image: "https://images.unsplash.com/photo-1590650213165-c1fef80648c4?w=600&q=80",
        accent: "#5FB673",
    },
    {
        title: "Renewable Energy",
        image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80",
        accent: "#1CA6A3",
    },
    {
        title: "CDL-A",
        image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80",
        accent: "#74B4E0",
    },
    {
        title: "Culinary Arts",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80",
        accent: "#5FB673",
    },
];

export default function ProjectsSection() {
    return (
        <section className="py-16 sm:py-24 bg-[#F2F9F9] overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6">

                {/* ── Top Row: Label + Title LEFT │ Button + Description RIGHT ── */}
                {/* <div className="grid justify-between lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-12 sm:mb-16"> */}
                <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-16 lg:items-end mb-12 sm:mb-16">

                    {/* Left */}
                    <div>
                        <p className="text-xs font-bold text-[#5FB673] uppercase tracking-[0.25em] mb-3">
                            Projects & Community Work
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-[#1a1a1a] leading-tight">
                            Training That Builds{" "}
                            <span
                                style={{
                                    background: "linear-gradient(90deg, #1CA6A3, #74B4E0)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                Real Projects
                            </span>
                        </h2>
                    </div>

                    {/* Right */}
                    <div className="flex flex-col gap-5 lg:items-start">
                        <Link
                            to="/work"
                            className="inline-flex items-center gap-2.5 bg-[#1CA6A3] hover:bg-[#179490] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group w-fit"
                        >
                            View Our Featured Projects
                            <ArrowRight
                                size={17}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                        <p className="text-sm sm:text-base text-[#666] leading-relaxed max-w-md">
                            Our students don't just learn in classrooms. They work on real
                            projects that impact communities across Detroit — from restoring
                            historic monuments to revitalizing green spaces.
                        </p>
                    </div>
                </div>

                {/* ── Divider ── */}
                <div
                    className="h-px w-full mb-10 sm:mb-14 rounded-full"
                    style={{
                        background: "linear-gradient(90deg, #1CA6A3, #74B4E0, transparent)",
                    }}
                />

                {/* ── 6-Image Grid ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {programs.map((program, i) => (
                        <div
                            key={i}
                            className="relative rounded-2xl overflow-hidden group cursor-pointer h-52 sm:h-60"
                        >
                            {/* Image */}
                            <img
                                src={program.image}
                                alt={program.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Dark scrim — always visible at bottom, expands on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-400" />

                            {/* Colored top-left corner tag */}
                            <div
                                className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm"
                                style={{ backgroundColor: `${program.accent}cc` }}
                            >
                                Program
                            </div>

                            {/* Bottom label */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-white font-bold text-base sm:text-lg leading-snug drop-shadow">
                                    {program.title}
                                </p>
                                {/* Accent underline */}
                                <div
                                    className="h-[2px] rounded-full mt-1.5 w-0 group-hover:w-10 transition-all duration-500"
                                    style={{ backgroundColor: program.accent }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}