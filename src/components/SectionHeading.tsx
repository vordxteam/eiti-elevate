interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

const SectionHeading = ({ label, title, description, align = "center", light }: SectionHeadingProps) => (
  <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : ""}`}>
    {label && (
      <span className={`inline-block font-semibold text-sm uppercase tracking-widest mb-3 ${light ? "text-tertiary-container" : "text-tertiary"}`}>
        {label}
      </span>
    )}
    <h2 className={`headline-lg leading-tight ${light ? "text-on-primary" : "text-on-surface"}`}>
      {title}
    </h2>
    {description && (
      <p className={`mt-4 body-lg max-w-2xl leading-relaxed ${align === "center" ? "mx-auto" : ""} ${light ? "text-on-primary/70" : "text-on-surface-variant"}`}>
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;
