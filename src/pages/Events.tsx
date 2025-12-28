import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Filter } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import lotusMandala from "@/assets/lotus-mandala.png";

const allEvents = [
  { id: 1, date: "Jan 14, 2026", title: "Shattila Ekadashi", description: "Ekadashi observance", time: "All day", type: "Ekadashi", location: "Main Temple" },
  { id: 2, date: "Jan 29, 2026", title: "Jaya Ekadashi", description: "Ekadashi observance", time: "All day", type: "Ekadashi", location: "Main Temple" },

  { id: 3, date: "Feb 13, 2026", title: "Vijaya Ekadashi", description: "Ekadashi observance", time: "All day", type: "Ekadashi", location: "Main Temple" },
  { id: 4, date: "Feb 27, 2026", title: "Amalaki Ekadashi", description: "Ekadashi observance", time: "All day", type: "Ekadashi", location: "Main Temple" },

  { id: 5, date: "Mar 15, 2026", title: "Papamochani Ekadashi", description: "Ekadashi observance", time: "All day", type: "Ekadashi", location: "Main Temple" },
  { id: 6, date: "Mar 29, 2026", title: "Kamada Ekadashi", description: "Ekadashi observance", time: "All day", type: "Ekadashi", location: "Main Temple" },

  { id: 7, date: "Apr 13, 2026", title: "Varuthini Ekadashi", description: "Ekadashi observance", time: "All day", type: "Ekadashi", location: "Main Temple" },
  { id: 8, date: "Apr 27, 2026", title: "Mohini Ekadashi", description: "Ekadashi observance", time: "All day", type: "Ekadashi", location: "Main Temple" },

  { id: 9, date: "May 12, 2026", title: "Apara Ekadashi", description: "Ekadashi observance", time: "All day", type: "Ekadashi", location: "Main Temple" },
  { id: 10, date: "May 27, 2026", title: "Padmini Ekadashi (Adhik)", description: "Ekadashi observance", time: "All day", type: "Ekadashi", location: "Main Temple" },

  { id: 11, date: "Jun 11, 2026", title: "Parama Ekadashi (Adhik)", description: "Ekadashi observance", time: "All day", type: "Ekadashi", location: "Main Temple" },
  { id: 12, date: "Jun 25, 2026", title: "Nirjala Ekadashi", description: "Ekadashi observance", time: "All day", type: "Ekadashi", location: "Main Temple" },

  { id: 13, date: "Jul 10, 2026", title: "Yogini Ekadashi", description: "Ekadashi observance", time: "All day", type: "Ekadashi", location: "Main Temple" },
  { id: 14, date: "Jul 25, 2026", title: "Devshayani (Ashadhi) Ekadashi", description: "Ekadashi observance", time: "All day", type: "Ekadashi", location: "Main Temple" },

  { id: 15, date: "Aug 9, 2026", title: "Kamika Ekadashi", description: "Ekadashi observance", time: "All day", type: "Ekadashi", location: "Main Temple" },
  { id: 16, date: "Aug 24, 2026", title: "Putrada Ekadashi", description: "Ekadashi observance", time: "All day", type: "Ekadashi", location: "Main Temple" },

  { id: 17, date: "Sep 8, 2026", title: "Aja Ekadashi", description: "Ekadashi observance", time: "All day", type: "Ekadashi", location: "Main Temple" },
  { id: 18, date: "Sep 23, 2026", title: "Parsva / Vamana Ekadashi", description: "Ekadashi observance", time: "All day", type: "Ekadashi", location: "Main Temple" },

  { id: 19, date: "Oct 8, 2026", title: "Indira Ekadashi", description: "Ekadashi observance", time: "All day", type: "Ekadashi", location: "Main Temple" },
  { id: 20, date: "Oct 23, 2026", title: "Papankusha Ekadashi", description: "Ekadashi observance", time: "All day", type: "Ekadashi", location: "Main Temple" },

  { id: 21, date: "Nov 6, 2026", title: "Rama Ekadashi", description: "Ekadashi observance", time: "All day", type: "Ekadashi", location: "Main Temple" },
  { id: 22, date: "Nov 20, 2026", title: "Devutthana / Prabodhini Ekadashi", description: "Ekadashi observance", time: "All day", type: "Ekadashi", location: "Main Temple" },

  { id: 23, date: "Dec 6, 2026", title: "Utpanna Ekadashi", description: "Ekadashi observance", time: "All day", type: "Ekadashi", location: "Main Temple" },
  { id: 24, date: "Dec 20, 2026", title: "Mokshada", description: "Ekadashi observance", time: "All day", type: "Ekadashi", location: "Main Temple" },
];

const ekadashiDates = [
  { month: "January 2026", dates: ["Jan 14 – Shattila Ekadashi", "Jan 29 – Jaya Ekadashi"] },
  { month: "February 2026", dates: ["Feb 13 – Vijaya Ekadashi", "Feb 27 – Amalaki Ekadashi"] },
  { month: "March 2026", dates: ["Mar 15 – Papamochani Ekadashi", "Mar 29 – Kamada Ekadashi"] },
  { month: "April 2026", dates: ["Apr 13 – Varuthini Ekadashi", "Apr 27 – Mohini Ekadashi"] },
  { month: "May 2026", dates: ["May 12 – Apara Ekadashi", "May 27 – Padmini Ekadashi (Adhik)"] },
  { month: "June 2026", dates: ["Jun 11 – Parama Ekadashi (Adhik)", "Jun 25 – Nirjala Ekadashi"] },
  { month: "July 2026", dates: ["Jul 10 – Yogini Ekadashi", "Jul 25 – Devshayani (Ashadhi) Ekadashi"] },
  { month: "August 2026", dates: ["Aug 9 – Kamika Ekadashi", "Aug 24 – Putrada Ekadashi"] },
  { month: "September 2026", dates: ["Sep 8 – Aja Ekadashi", "Sep 23 – Parsva / Vamana Ekadashi"] },
  { month: "October 2026", dates: ["Oct 8 – Indira Ekadashi", "Oct 23 – Papankusha Ekadashi"] },
  { month: "November 2026", dates: ["Nov 6 – Rama Ekadashi", "Nov 20 – Devutthana / Prabodhini Ekadashi"] },
  { month: "December 2026", dates: ["Dec 6 – Utpanna Ekadashi", "Dec 20 – Mokshada"] },
];

const Events = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredEvents =
    filter === "all"
      ? allEvents
      : allEvents.filter((e) => e.type.toLowerCase().includes(filter));

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 divine-gradient text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={lotusMandala} alt="" className="absolute top-20 left-20 w-48 h-48" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-gold font-display text-sm tracking-[0.3em] uppercase">
              Sacred Calendar
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mt-4 mb-6">
              Events & Festivals
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Join us in celebrating divine occasions and sacred festivals throughout the year
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
      </section>

      {/* Filter & Events */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <Filter className="w-5 h-5 text-maroon" />
            <span className="font-medium text-maroon">Filter:</span>
            {["all", "major festival", "festival"].map((type) => (
              <Button
                key={type}
                variant={filter === type ? "divine" : "outline"}
                size="sm"
                onClick={() => setFilter(type)}
                className="capitalize"
              >
                {type === "all" ? "All Events" : type}
              </Button>
            ))}
          </motion.div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all border border-gold/10 hover:border-gold/30">
                  <div className="bg-maroon p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-gold" />
                      <span className="font-display text-lg text-gold font-semibold">
                        {event.date}
                      </span>
                    </div>
                    <span className="text-xs bg-gold/20 text-gold px-3 py-1 rounded-full">
                      {event.type}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-semibold text-maroon mb-3">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gold" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gold" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ekadashi Schedule */}
      <section className="py-16 bg-maroon/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-maroon">
              Monthly Ekadashi Dates
            </h2>
            <p className="text-muted-foreground mt-2">
              Special darshan and rituals on every Ekadashi
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {ekadashiDates.map((item, index) => (
              <motion.div
                key={item.month}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-lg p-5 shadow-card border border-gold/10"
              >
                <h4 className="font-display font-semibold text-maroon mb-3">
                  {item.month}
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {item.dates.map((date) => (
                    <li key={date} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                      {date}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Events;
