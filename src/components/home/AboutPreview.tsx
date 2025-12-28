import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AboutPreview = () => {
  return (
    <section className="py-24 divine-gradient text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="/images/temple.png"
                alt="Ancient temple gopuram architecture"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/50 to-transparent" />
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-gold text-maroon-dark p-6 rounded-xl shadow-gold"
            >
              <p className="font-display text-4xl font-bold">1000+</p>
              <p className="text-sm font-medium">Years of Sacred Heritage</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-display text-sm tracking-[0.3em] uppercase">
              Our Sacred Legacy
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
              The Divine Abode of
              <span className="text-gold block">Sri Padmavathi Venkateshwara</span>
            </h2>
            <div className="space-y-4 text-primary-foreground/80 text-lg leading-relaxed">
              <p>
                Sri Padmavathi Venkateshwara Swami Temple stands as a beacon of divine grace, where the sacred 
                presence of Lord Balaji has blessed devotees for over a millennium. Built in the 
                majestic Dravidian architectural tradition, the temple's towering gopuram reaches 
                towards the heavens, symbolizing the soul's journey to liberation.
              </p>
              <p>
                The temple follows the ancient Vaikhanasa Agama traditions, with each ritual 
                performed exactly as prescribed in the sacred scriptures. From the early morning 
                Suprabhatam to the evening Ekantha Seva, every moment in the temple resonates 
                with divine energy.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 my-8">
              {[
                "Ancient Vedic Traditions",
                "Daily Sacred Rituals",
                "Spiritual Guidance",
                "Community Service",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Link to="/about">
              <Button variant="hero" size="lg" className="group">
                Learn Our History
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
