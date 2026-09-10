import { Link } from "react-router-dom";
import { shapes } from "@/data/shapes";
import HoverImage from "@/components/HoverImage";

const ShapesListing = () => (
  <>
    <section className="bg-gradient-to-br from-primary to-primary/80 py-16 md:py-24">
      <div className="container mx-auto px-4 text-center text-primary-foreground">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Shapes & Styles</h1>
        {/*<p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
          Choose from a wide range of box shapes and styles to perfectly showcase your products.
        </p>*/}
        {/* Key Takeaway Box */}
        <div className="mx-auto max-w-4xl bg-card text-card-foreground rounded-r-xl border-l-4 border-l-yellow-500 p-6 md:p-8 shadow-2xl text-left ">
          <span className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
            Key Takeaway
          </span>
          <p className="text-sm md:text-base leading-relaxed text-foreground/90">
            Custom box shapes and styles from <strong>Custom Packaging Line</strong> start at a highly accessible minimum order of just 50 units (100+ for specialty rigid styles). Every order is precision-crafted to your exact dimensions and vibrantly printed with your custom artwork. We provide complimentary design assistance and a digital proof for your approval before manufacturing begins. Standard production takes approximately 7 business days, plus 2 to 5 business days for delivery. Need it faster? Rush production is available on most styles for a minor premium. Reach out today or request a quote online to get started.
          </p>
        </div>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {shapes.map((shape) => {
            const Icon = shape.icon;
            return (
              <Link
                key={shape.slug}
                to={`/shapes/${shape.slug}`}
                className="group border border-border rounded-2xl overflow-hidden bg-card hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                  {shape.images?.[0] ? (
                    <HoverImage
                      src={shape.images[0]}
                      hoverSrc={shape.hoverImage}
                      alt={shape.name}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/30 text-primary">
                      <Icon className="h-12 w-12 opacity-50 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                    {shape.name}
                  </h3>
                  <span className="text-sm font-medium text-primary mt-2 inline-flex items-center gap-1">
                    View Products <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  </>
);

export default ShapesListing;