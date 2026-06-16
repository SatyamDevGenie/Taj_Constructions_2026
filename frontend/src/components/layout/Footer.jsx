import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { quickLinks, footerServices, contactInfo, socialLinks } from "../../data/navigation";

const iconMap = {
  facebook: FaFacebookF,
  twitter: FaTwitter,
  youtube: FaYoutube,
  instagram: FaInstagram,
  whatsapp: FaWhatsapp,
};

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="border-t border-brand-gold/20">
        <div className="container-tight py-16 sm:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <Link to="/" className="inline-block mb-6">
                <span className="font-display text-2xl font-bold text-white">TAAJ</span>
                <span className="block text-xs text-brand-gold font-body font-semibold tracking-[0.25em] uppercase">
                  Constructions Ltd
                </span>
              </Link>
              <p className="text-white/60 font-body text-sm leading-relaxed mb-6">
                At Taaj Constructions, we build homes and spaces with quality, care, and precision. Our experienced team delivers custom designs, timely completion, and complete client satisfaction on every project.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = iconMap[social.icon];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-brand-gold hover:text-brand-black hover:border-brand-gold transition-all duration-300"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="font-display text-lg font-bold mb-6 text-brand-gold">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-white/60 hover:text-brand-gold transition-colors font-body text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-brand-gold transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg font-bold mb-6 text-brand-gold">Our Services</h4>
              <ul className="space-y-3">
                {footerServices.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-white/60 hover:text-brand-gold transition-colors font-body text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-brand-gold transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg font-bold mb-6 text-brand-gold">Contact Information</h4>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm text-white/60 font-body">
                  <FaMapMarkerAlt className="text-brand-gold mt-1 flex-shrink-0" />
                  <span>{contactInfo.address}</span>
                </li>
                <li>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                    className="flex gap-3 text-sm text-white/60 hover:text-brand-gold transition-colors font-body"
                  >
                    <FaPhone className="text-brand-gold mt-0.5 flex-shrink-0" />
                    {contactInfo.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex gap-3 text-sm text-white/60 hover:text-brand-gold transition-colors font-body break-all"
                  >
                    <FaEnvelope className="text-brand-gold mt-0.5 flex-shrink-0" />
                    {contactInfo.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-tight py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm font-body text-center sm:text-left">
            Copyright &copy; {new Date().getFullYear()} Taaj Constructions Ltd. All Rights Reserved.
          </p>
          <Link to="/privacy-policy" className="text-white/40 hover:text-brand-gold text-sm font-body transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
