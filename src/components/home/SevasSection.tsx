import { motion } from "framer-motion";
import { Flower2, Flame, Sun, Moon, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import lotusMandala from "@/assets/lotus-mandala.png";

const sevas = [
  {
    icon: Flame,
    name: "Suprabhatam Seva",
    description: "Wake the Lord with sacred hymns at dawn",
    time: "5:00 AM",
   
  },
  {
    icon: Flower2,
    name: "Archana",
    description: "108 names offering with flowers",
    time: "All Day",
   
  },
  {
    icon: Sun,
    name: "Abhishekam",
    description: "Sacred bathing ritual of the deity",
    time: "6:00 AM",
  
  },
  {
    icon: Moon,
    name: "Sahasranama Archana",
    description: "1008 names chanting for blessings",
    time: "11:00 AM",
  
  },
  {
    icon: Heart,
    name: "Kalyanam",
    description: "Divine wedding ceremony blessing",
    time: "Coming Soon",
   
  },
  {
    icon: Star,
    name: "Special Darshan",
    description: "Priority access to the sanctum",
    time: "All Day(Specially in Festive Days,every saturday evening)",
  
  },
];

export const SevasSection = () => {
  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img
          src={lotusMandala}
          alt=""
          className="absolute top-10 right-10 w-48 h-48 opacity-30"
        />
        <img
          src={lotusMandala}
          alt=""
          className="absolute bottom-10 left-10 w-64 h-64 opacity-20"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold font-display text-sm tracking-[0.3em] uppercase">
            Sacred Offerings
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-maroon mt-4 mb-6">
            Sevas & Poojas
          </h2>
          <p className="text-muted-foreground text-lg">
            Participate in sacred rituals and receive divine blessings. Each seva is performed 
            with utmost devotion following ancient Agama traditions.
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Sevas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sevas.map((seva, index) => (
            <motion.div
              key={seva.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-500 border border-gold/10 hover:border-gold/30 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-lg bg-maroon/10 flex items-center justify-center group-hover:bg-maroon transition-colors">
                    <seva.icon className="w-7 h-7 text-maroon group-hover:text-gold transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-maroon mb-2">
                      {seva.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {seva.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gold font-medium">
                        {seva.time}
                      </span>
                      <span className="font-display text-lg font-bold text-maroon">
                        
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
         
        </motion.div>
      </div>
    </section>
  );
};
