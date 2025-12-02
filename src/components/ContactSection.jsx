import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {}, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30 ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Get In <span className="text-primary"> Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Feel free to reach out. I'm always open to discussing new
          opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 ">
              {" "}
              Contact Information
            </h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4> Email </h4>
                  <a
                    href="mailto:moseskmcmmms@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    moseskmcmmms@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4> Phone </h4>
                  <a
                    href="tel:+82 10-7502-5846"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +82 10-7502-5846
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4> Location </h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Korea, Busan
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium bm-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.instagram.com/moses_myat_min_shwe?igsh=cGN5c3ZhM2V0MHBy&utm_source=qr"
                  target="_blank"
                >
                  <Instagram />
                </a>
                <a href="https://www.facebook.com/moses.kmc" target="_blank">
                  <Facebook />
                </a>
                <a
                  href="https://www.linkedin.com/in/moses-myat-min-shwe-302784296/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium bm-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                  placeholder="moses myat min shwe"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium bm-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                  placeholder="moseskmcmmms@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium bm-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background 
             focus:outline-none focus:ring-2 focus:ring-primary 
             resize-y min-h-20"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {" "}
                Send Message <Send size={16} />{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
