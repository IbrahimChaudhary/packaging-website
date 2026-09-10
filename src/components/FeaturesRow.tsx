import { DollarSign, Cuboid, Clock, Printer, Truck } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    desc: "100% free shipping on every order across the US.",
  },
  {
    icon: DollarSign,
    title: "Price Match Guarantee",
    desc: "We'll match any competitor's price, guaranteed.",
  },
  {
    icon: Cuboid,
    title: "3D Design Services",
    desc: "See your packaging in 3D before production begins.",
  },
  {
    icon: Clock,
    title: "Flexible Lead Times",
    desc: "Rush or standard timelines to fit your schedule.",
  },
  {
    icon: Printer,
    title: "High-Volume Printing",
    desc: "From 50 to 500,000+ boxes per order run.",
  },
];

const FeaturesRow = () => (
  <section className="py-16 bg-[#fbf9f2]">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-4xl font-black text-center text-[#32936F]">
        Why Brands Choose Us for{" "}
        <span className="text-[#FFC107]">Premium Custom Packaging</span>
      </h2>

      <div className="w-16 h-[3px] bg-[#e8b923] mx-auto mt-4 mb-12 rounded-full" />

      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
        {features.map((f) => (
          <div
            key={f.title}
            className="flex flex-col items-center text-center p-6 pb-7 bg-white rounded-lg border border-[#eee7d6] border-b-4 border-b-[#2f7a5c] hover:shadow-md transition-all"
          >
            <div className="w-14 h-14 rounded-full bg-[#e3efe9] flex items-center justify-center mb-4">
              <f.icon className="h-6 w-6 text-[#2f7a5c]" strokeWidth={1.75} />
            </div>
            <h3 className="text-xs font-extrabold tracking-wide uppercase mb-2 text-[#1f5c4a]">
              {f.title}
            </h3>
            <p className="text-xs text-[#6b6b6b] leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesRow;