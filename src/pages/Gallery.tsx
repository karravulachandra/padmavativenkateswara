import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
// Images served from the `public` folder (use leading slash paths)
const galleryImages = [
  { src: "/images/temple.png", title: "Temple Architecture", category: "temple architecture" },
  { src: "/images/VenkateswaraDeity.png", title: "Lord Venkateswara", category: "deity" },
  { src: "/images/hanuman.png", title: "Lord Hanuman", category: "deity" },
  { src: "/images/deity1.png", title: "Divine Deity 1", category: "deity" },
  { src: "/images/deity2.png", title: "Divine Deity 2", category: "deity" },
  { src: "/images/deity3.png", title: "Divine Deity 3", category: "deity" },
  { src: "/images/andalammavaru.png", title: "Andal Ammavaru", category: "deity" },
  { src: "/images/padmavatiammavaru.png", title: "Padmavati Ammavaru", category: "deity" },
  { src: "/images/intemple.png", title: "Temple Interior", category: "temple" },
  { src: "/images/specialevent.png", title: "Special Event", category: "events" },
  { src: "/images/specialevent2.png", title: "Special Event 2", category: "events" },
];

const Gallery = () => {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 divine-gradient text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-gold font-display text-sm tracking-[0.3em] uppercase">
              Divine Beauty
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mt-4 mb-6">
              Temple Gallery
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Glimpses of divine grace and architectural splendor
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl shadow-card aspect-[4/3]"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-xs text-gold uppercase tracking-wider">
                    {image.category}
                  </span>
                  <h3 className="font-display text-lg text-primary-foreground font-semibold mt-1">
                    {image.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Gallery;
