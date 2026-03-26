import { Link } from "wouter";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { useCms } from "@/contexts/CmsContext";

export default function Footer() {
  const { content } = useCms();
  const g = content.global;
  const f = content.footer;

  return (
    <footer className="bg-gradient-to-b from-golden to-dark-golden text-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-black font-bold text-lg mb-4">{g.siteName}</h3>
            <p className="text-black text-sm mb-4 opacity-90">
              {f.about}
            </p>
            <div className="flex gap-4">
              <a href={g.socialMedia.facebook} className="text-black hover:opacity-70 transition-opacity" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
              <a href={g.socialMedia.instagram} className="text-black hover:opacity-70 transition-opacity" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href={g.socialMedia.linkedin} className="text-black hover:opacity-70 transition-opacity" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href={g.socialMedia.youtube} className="text-black hover:opacity-70 transition-opacity" target="_blank" rel="noopener noreferrer">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-black font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-black hover:opacity-70 transition-opacity">Home</Link></li>
              <li><Link href="/about" className="text-black hover:opacity-70 transition-opacity">About Us</Link></li>
              <li><Link href="/services" className="text-black hover:opacity-70 transition-opacity">Services</Link></li>
              <li><Link href="/success-stories" className="text-black hover:opacity-70 transition-opacity">Success Stories</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-black font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ielts" className="text-black hover:opacity-70 transition-opacity">IELTS Training</Link></li>
              <li><Link href="/japanese" className="text-black hover:opacity-70 transition-opacity">Japanese Language</Link></li>
              <li><a href={g.registrationLink} target="_blank" rel="noopener noreferrer" className="text-black hover:opacity-70 transition-opacity">Register</a></li>
              <li><Link href="/contact" className="text-black hover:opacity-70 transition-opacity">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-black font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <MapPin size={18} className="text-black flex-shrink-0 mt-0.5" />
                <p className="text-black opacity-90">{g.address}</p>
              </div>
              <div className="flex gap-3">
                <Phone size={18} className="text-black flex-shrink-0" />
                <div className="text-black opacity-90">
                  <p>{g.phone1}</p>
                  <p>{g.phone2}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail size={18} className="text-black flex-shrink-0" />
                <p className="text-black opacity-90">{g.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-black border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-black opacity-80">
            <p>{f.copyrightText}</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
