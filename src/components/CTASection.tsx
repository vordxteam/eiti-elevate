import { Link } from "react-router-dom";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

const CTASection = ({
  title,
  description,
  buttonText = "Apply Now",
  buttonLink = "/apply",
  secondaryButtonText,
  secondaryButtonHref,
}: CTASectionProps) => (
  <section className="section-padding bg-tertiary-container">
    <div className="container-narrow text-center">
      <h2 className="text-3xl md:text-5xl font-headline font-extrabold text-on-tertiary-container mb-6 leading-tight">
        {title}
      </h2>
      <p className="text-on-tertiary-container/80 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to={buttonLink}
          className="primary-button px-10 py-4 rounded-xl font-bold text-lg transition-all text-center"
        >
          {buttonText}
        </Link>
        {secondaryButtonText && secondaryButtonHref && (
          <a
            href={secondaryButtonHref}
            className="bg-white/10 text-on-tertiary-container backdrop-blur-md px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all text-center"
          >
            {secondaryButtonText}
          </a>
        )}
      </div>
    </div>
  </section>
);

export default CTASection;
