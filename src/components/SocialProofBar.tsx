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

const BrandLogo = ({
  name,
  domain,
  index,
}: {
  name: string;
  domain: string;
  index: number;
}) => {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className="flex items-center gap-2 shrink-0 cylinder-item"
      style={{ animationDelay: `${(index % brands.length) * (-18 / brands.length)}s` }}
    >
      {!failed ? (
        <img
          src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
          alt={name}
          onError={() => setFailed(true)}
          className="h-5 md:h-6 w-auto object-contain"
        />
      ) : null}
      <span className="text-sm font-semibold text-foreground whitespace-nowrap">
        {name}
      </span>
    </div>
  );
};

const SocialProofBar = () => {
  // Tripled so the strip can loop seamlessly (translateX -33.333%)
  const loopBrands = [...brands, ...brands, ...brands];

  return (
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

          {/* Right: rotating "cylinder" logo marquee */}
          <div
            className="group relative overflow-hidden w-full md:w-auto md:max-w-[480px]"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            }}
          >
            <div className="flex items-center gap-8 w-max animate-cylinder-scroll group-hover:[animation-play-state:paused] opacity-50 grayscale">
              {loopBrands.map((b, i) => (
                <BrandLogo key={`${b.name}-${i}`} {...b} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes cylinder-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.3333%); }
        }
        .animate-cylinder-scroll {
          animation: cylinder-scroll 18s linear infinite;
        }
        @keyframes cylinder-bulge {
          0%, 100% { transform: scaleX(0.8) scaleY(0.9); opacity: 0.45; }
          50% { transform: scaleX(1) scaleY(1); opacity: 1; }
        }
        .cylinder-item {
          animation: cylinder-bulge 18s linear infinite;
          animation-play-state: inherit;
        }
        .group:hover .cylinder-item {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default SocialProofBar;