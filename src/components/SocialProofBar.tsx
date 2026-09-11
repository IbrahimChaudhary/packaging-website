import { Star } from "lucide-react";
import { useState } from "react";

const brands = [
  { name: "BioMedical Pharm", domain: "biomedical.com" },
  { name: "BMW", domain: "bmw.com" },
  { name: "Cheekbone", domain: "cheekbonebeauty.com" },
  { name: "CHOMP!", domain: "chomps.com" },
  { name: "Everlywell", domain: "everlywell.com" },
  { name: "Hims", domain: "forhims.com" },
];

const BrandLogo = ({ name, domain }: { name: string; domain: string }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="text-sm font-semibold text-foreground whitespace-nowrap">
        {name}
      </span>
    );
  }

  return (
    <img
      src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
      alt={name}
      onError={() => setFailed(true)}
      className="h-5 md:h-6 w-auto object-contain"
    />
  );
};

const SocialProofBar = () => (
  <div className="w-full bg-muted/30 border-y border-border">
    <div className="container mx-auto px-4 py-3">
      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
        {/* Left: customer count + Trustpilot rating */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <p className="text-sm font-semibold text-foreground whitespace-nowrap">
            Serving 5000+ Happy Customers!
          </p>

          <div className="flex items-center gap-2 whitespace-nowrap">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className="w-5 h-5 bg-[#00b67a] flex items-center justify-center"
                >
                  <Star className="w-3.5 h-3.5 fill-white text-white" />
                </span>
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">Trustpilot</span>
            <a
              href="#"
              className="text-sm font-semibold text-foreground underline underline-offset-2 hover:text-primary transition-colors"
            >
              4.9 Google Reviews
            </a>
          </div>
        </div>

        {/* Right: brand logos */}
        <div className="flex items-center gap-6 flex-wrap justify-center opacity-50 grayscale">
          {brands.map((b) => (
            <BrandLogo key={b.name} {...b} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SocialProofBar;