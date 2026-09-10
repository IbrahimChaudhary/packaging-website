import { Link } from "react-router-dom";
import { categories } from "@/data/categories";

const Industries = () => (
  <>
    <section className="bg-gradient-to-br from-primary to-primary/80 py-16">
      <div className="container mx-auto px-4 text-center text-primary-foreground">
        <h1 className="text-4xl font-bold mb-4">Industries We Serve</h1>
        {/*<p className="text-lg text-white/80 max-w-2xl mx-auto">
          Custom packaging solutions for every industry. From food to fashion, cosmetics to cannabis, we've got you covered.
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

    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.slug}
                to={`/product-category/${cat.slug}`}
                className="group border border-border rounded-2xl p-6 bg-card hover:shadow-xl transition-all"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{cat.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{cat.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  </>
);

export default Industries;
