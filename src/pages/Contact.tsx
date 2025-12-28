import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import lotusMandala from "@/assets/lotus-mandala.png";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We will respond within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 divine-gradient text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={lotusMandala} alt="" className="absolute bottom-10 right-10 w-48 h-48" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-gold font-display text-sm tracking-[0.3em] uppercase">
              Get in Touch
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mt-4 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-primary-foreground/80">
              We are here to assist you with any inquiries about darshan, sevas, or temple services
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card rounded-2xl p-8 shadow-card border border-gold/10">
                <h2 className="font-display text-2xl font-semibold text-maroon mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="border-gold/20 focus:border-gold"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="border-gold/20 focus:border-gold"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (234) 567-890"
                        className="border-gold/20 focus:border-gold"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Subject *
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="How can we help?"
                        className="border-gold/20 focus:border-gold"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      className="border-gold/20 focus:border-gold resize-none"
                    />
                  </div>
                  <Button type="submit" variant="divine" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Contact Cards */}
              <div className="grid gap-4">
                {[
                  {
                    icon: MapPin,
                    title: "Temple Address",
                    content: ["Gachibowli - Miyapur Rd, Vinayak Nagar", "Indira Nagar, Gachibowli", "Hyderabad, Telangana 500032"],
                  },
                  {
                    icon: Clock,
                    title: "Darshan Timings",
                    content: ["Sun-Fri Morning: 6:30 AM - 11:00 AM", "Sun-Fri Evening: 5:30 PM - 8:00 PM", "Saturday Morning: 6:30 AM - 12:00 PM,Evening: 5:30 PM - 9:00 PM"],
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    content: ["General: +1 (234) 567-890", "Seva Booking: +1 (234) 567-891"],
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: ["info@srivenkateswara.org", "sevas@srivenkateswara.org"],
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-5 shadow-card border border-gold/10 flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-maroon/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-maroon" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-maroon mb-1">
                        {item.title}
                      </h3>
                      {item.content.map((line, i) => (
                        <p key={i} className="text-sm text-muted-foreground">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="bg-card rounded-xl overflow-hidden shadow-card border border-gold/10 h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.564!2d78.3499!3d17.3606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93d6f8e0c2ad%3A0x9c1234567890abcd!2sSri%20Padmavathi%20Venkateshwara%20Swami%20Temple%2C%20Gachibowli%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1735414800000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sri Padmavathi Venkateshwara Swami Temple Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dress Code Notice */}
      <section className="py-12 bg-maroon/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-8 shadow-card border border-gold/10 max-w-3xl mx-auto text-center"
          >
            <h3 className="font-display text-xl font-semibold text-maroon mb-4">
              Dress Code for Devotees
            </h3>
            <p className="text-muted-foreground mb-4">
              Devotees are requested to follow traditional attire. Men should wear dhoti or
              formal trousers with a shirt. Women should wear saree or salwar kameez.
              Shorts, sleeveless tops, and revealing clothing are not permitted inside the temple.
            </p>
            <p className="text-sm text-gold font-medium">
              "Enter the temple with humility in your heart and purity in your attire."
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
