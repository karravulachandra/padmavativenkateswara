import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  const [visits, setVisits] = useState<number>(0);

  // Resolve public assets via Vite import.meta URL to avoid runtime 404s
  const logoSrc = new URL("/images/logo.png", import.meta.url).href;

  useEffect(() => {
    try {
      const key = "dg_visit_count";
      const current = parseInt(localStorage.getItem(key) || "0", 10);
      const next = Number.isNaN(current) ? 1 : current + 1;
      localStorage.setItem(key, String(next));
      setVisits(next);
    } catch (e) {
      // localStorage might not be available in some environments
      setVisits(0);
    }
  }, []);

  return (
    <footer className="bg-maroon-dark text-primary-foreground relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='%23D4A844' d='M50 10 C60 25, 75 30, 90 50 C75 70, 60 75, 50 90 C40 75, 25 70, 10 50 C25 30, 40 25, 50 10Z'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Temple Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logoSrc}
                alt="Sri Venkateswara Swami Temple Logo"
                className="h-20 w-20"
                loading="eager"
              />
              <div>
                <h3 className="font-display text-lg font-semibold text-gold">
                  Sri Venkateswara
                </h3>
                <p className="text-xs text-gold/70 tracking-widest uppercase">
                  Swami Temple
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              A sacred abode of Lord Venkateswara, offering divine blessings and spiritual 
              solace to devotees from across the world.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center hover:bg-gold hover:text-maroon-dark transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center hover:bg-gold hover:text-maroon-dark transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center hover:bg-gold hover:text-maroon-dark transition-all">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-gold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Events & Festivals", to: "/events" },
                { label: "Sevas & Poojas", to: "/#sevas" },
                { label: "Gallery", to: "/gallery" },
                { label: "Contact", to: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Temple Timings */}
          <div>
            <h4 className="font-display text-lg text-gold mb-6">Temple Timings</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">Sunday – Friday</p>
                  <p className="text-sm text-primary-foreground/70">Morning Darshan: 6:30 AM – 11:00 AM<br />Evening Darshan: 5:30 PM – 8:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">Saturday</p>
                  <p className="text-sm text-primary-foreground/70">Morning Darshan: 6:30 AM – 12:00 PM<br />Evening Darshan: 5:30 PM – 9:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5" />
                <div>
                  <p className="text-sm text-primary-foreground/70">
                    Sri Padmavathi Venkateshwara Swami Temple, C9R4+QCP, Gachibowli Road, Vinayak Nagar, Indira Nagar, Gachibowli, Hyderabad<br />
                    Telangana, 500032, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-lg text-gold mb-6">Stay Connected</h4>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Subscribe for updates on festivals, events, and temple news.
            </p>
            <div className="flex flex-col gap-3">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-gold/30 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-gold"
              />
              <Button variant="hero" className="w-full">
                Subscribe
              </Button>
            </div>
            <div className="mt-6 space-y-2">
              <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                <Phone size={16} className="text-gold" />
                +1 (234) 567-890
              </a>
              <a href="mailto:info@temple.org" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                <Mail size={16} className="text-gold" />
                info@srivenkateswara.org
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gold/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © 2026 Sri Padmavati Venkateswara Swami Temple. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-sm text-primary-foreground/60 hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm text-primary-foreground/60 hover:text-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Visitor counter (left-bottom of footer) */}
      <div className="absolute left-6 bottom-6">
        <div className="bg-gold/10 text-gold rounded-md px-3 py-2 text-sm font-medium shadow-sm">
          Visitors: <span className="font-semibold text-maroon-dark">{visits}</span>
        </div>
      </div>
    </footer>
  );
};
