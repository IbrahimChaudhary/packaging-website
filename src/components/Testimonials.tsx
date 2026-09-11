import { useState, useEffect, useRef } from "react";
import { Quote, Star } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    name: "Jessica M.",
    role: "Candle Brand Owner",
    rating: 5,
    text: "The quality of the custom boxes was incredible. Our customers love the unboxing experience and it has elevated our brand significantly.",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "David R.",
    role: "E-commerce Entrepreneur",
    rating: 5,
    text: "Fast turnaround, amazing print quality, and the free design service saved us so much time and money. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Amanda K.",
    role: "Cosmetics Startup Founder",
    rating: 5,
    text: "We switched to Custom Packaging Line and haven't looked back. The attention to detail and customer service is unmatched.",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Marcus T.",
    role: "Food Brand Manager",
    rating: 5,
    text: "From our first order of 100 boxes to now ordering thousands, the consistency and quality have always been top-notch.",
    avatar: "https://i.pravatar.cc/150?img=13",
  },
  {
    name: "Sarah L.",
    role: "Bakery Owner",
    rating: 5,
    text: "Beautiful packaging that keeps our pastries fresh and looking amazing. The window boxes are a hit with our customers!",
    avatar: "https://i.pravatar.cc/150?img=44",
  },
  {
    name: "Tom W.",
    role: "CBD Brand Founder",
    rating: 5,
    text: "Compliant, professional, and beautifully designed packaging. They understood our industry needs perfectly.",
    avatar: "https://i.pravatar.cc/150?img=51",
  },
];

const stats = [
  { value: "840+", label: "brands supported" },
  { value: "98%", label: "on-time delivery" },
  { value: "4.9/5", label: "average rating" },
];

const AUTO_ROTATE_MS = 4000;
const CARDS_PER_VIEW = 3;
const MIDDLE_INDEX = 1;

const Testimonials = () => {
  const [page, setPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pageCount = Math.ceil(testimonials.length / CARDS_PER_VIEW);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setPage((p) => (p + 1) % pageCount);
    }, AUTO_ROTATE_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, pageCount]);

  const visible = testimonials.slice(
    page * CARDS_PER_VIEW,
    page * CARDS_PER_VIEW + CARDS_PER_VIEW
  );

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Customer Reviews
          </span>
          <h2 className="text-3xl md:text-5xl font-black mt-2 text-foreground">
            Trusted by growing brands
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Reliable quality, thoughtful service, and packaging customers are
            proud to receive.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {visible.map((t, i) => {
                const isMiddle = i === MIDDLE_INDEX;
                return (
                  <div
                    key={t.name}
                    onMouseEnter={() => isMiddle && setIsPaused(true)}
                    onMouseLeave={() => isMiddle && setIsPaused(false)}
                    className={`relative rounded-2xl p-6 border transition-all duration-300 ${
                      isMiddle
                        ? "bg-amber-50 border-amber-100 hover:-translate-y-3 hover:shadow-xl"
                        : "bg-card border-border hover:shadow-lg hover:border-primary/30"
                    }`}
                  >
                    <Quote className="h-8 w-8 text-primary/15 absolute top-5 right-5" />

                    <div className="flex gap-0.5 mb-3">
                      {Array.from({ length: t.rating }).map((_, s) => (
                        <Star
                          key={s}
                          className="h-4 w-4 fill-primary text-primary"
                        />
                      ))}
                    </div>

                    <p className="text-foreground/80 text-sm leading-relaxed mb-5">
                      "{t.text}"
                    </p>

                    <div className="border-t border-border/60 pt-4 flex items-center gap-3">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-primary/30 shrink-0"
                      />
                      <div>
                        <p className="font-bold text-foreground text-sm">
                          {t.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Footer stats row */}
          <div className="mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {testimonials.slice(0, 3).map((t) => (
                  <img
                    key={t.name}
                    src={t.avatar}
                    alt={t.name}
                    className="w-8 h-8 rounded-full object-cover border-2 border-background"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-bold">4.9/5</span> from
                verified customers
              </p>
            </div>

            <div className="flex items-center gap-8 sm:gap-10">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-primary font-bold text-lg">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;