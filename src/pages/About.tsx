import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import templeImage from "@/assets/temple-architecture.jpg";
import lotusMandala from "@/assets/lotus-mandala.png";

const About = () => {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 divine-gradient text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={lotusMandala} alt="" className="absolute top-20 right-20 w-64 h-64" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-gold font-display text-sm tracking-[0.3em] uppercase">
              Our Sacred Heritage
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mt-4 mb-6">
              About Our Temple
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Discover the divine history and spiritual significance of Sri Padmavati Venkateswara Swami Temple
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
      </section>

      {/* History Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="public/images/temple.png"
                alt="Temple Architecture"
                className="rounded-2xl shadow-elevated"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl font-bold text-maroon mb-6">
                Sthala Purana: The Sacred Legend
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  According to ancient scriptures, Lord Vishnu descended to the seven sacred hills 
                  known as Tirumala to reside as Lord Venkateswara, also lovingly called Balaji. 
                  The legend speaks of how the Lord, seeking to be close to his devotees, chose 
                  this sacred spot to make his eternal abode.
                </p>
                <p>
                  The deity's murti (sacred form) is believed to be Swayambhu – self-manifested – 
                  appearing of its own divine will rather than being sculpted by human hands. For 
                  over a thousand years, pilgrims have climbed these holy hills seeking the Lord's 
                  darshan and blessings.
                </p>
                <p>
                  The temple follows the Vaikhanasa Agama tradition, one of the oldest forms of 
                  temple worship, ensuring that every ritual maintains the purity and sanctity 
                  established by the ancient sages.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Significance Section */}
      <section className="py-20 bg-maroon/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-maroon mb-6">
              The Significance of Lord Venkateswara
            </h2>
            <p className="text-muted-foreground text-lg">
              Lord Venkateswara is known as the remover of all sins and the bestower of 
              all wishes. Devotees believe that a sincere prayer to Balaji never goes unanswered.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Kaliyuga Varada",
                description:
                  "The Lord who grants boons in this age of Kali. It is believed that Lord Venkateswara specifically chose to reside here to help devotees navigate the challenges of Kaliyuga.",
              },
              {
                title: "Bhakti & Devotion",
                description:
                  "The temple represents the pinnacle of Bhakti tradition. Pure devotion, regardless of caste or creed, is the only requirement to receive the Lord's grace.",
              },
              {
                title: "Moksha Dwaram",
                description:
                  "The gateway to liberation. Devotees believe that darshan of Lord Venkateswara helps cleanse karma and guides the soul toward ultimate liberation.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-8 shadow-card border border-gold/10"
              >
                <h3 className="font-display text-xl font-semibold text-maroon mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Temple Lineage */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-display text-4xl font-bold text-maroon mb-8">
              Temple Lineage & Traditions
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg text-left">
              <p>
                Our temple proudly maintains the unbroken Vaikhanasa Agama tradition, which has 
                been passed down through generations of dedicated priests. This lineage ensures 
                that every ritual, from the morning Suprabhatam to the evening Ekantha Seva, is 
                performed exactly as prescribed in the sacred texts.
              </p>
              <p>
                The temple architecture follows the Dravidian style, with the magnificent gopuram 
                (tower) featuring intricate sculptures depicting various divine forms and sacred 
                narratives. The sanctum sanctorum houses the main deity adorned with the traditional 
                ornaments and vestments befitting the Lord of Seven Hills.
              </p>
              <p>
                Under the spiritual guidance of our current head priest and the temple trust, we 
                continue to serve the community while preserving the ancient traditions that make 
                this temple a beacon of devotion and spiritual wisdom.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
