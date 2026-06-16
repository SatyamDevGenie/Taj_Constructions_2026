import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaWhatsapp, FaClock, FaPhone } from "react-icons/fa";
import { contactInfo, socialLinks } from "../../data/navigation";

const iconMap = {
  facebook: FaFacebookF,
  twitter: FaTwitter,
  youtube: FaYoutube,
  instagram: FaInstagram,
  whatsapp: FaWhatsapp,
};

export default function TopBar() {
  return (
    <div className="hidden lg:block bg-brand-charcoal border-b border-white/5">
      <div className="container-tight flex items-center justify-between py-2.5 text-xs text-white/70 font-body">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <FaClock className="text-brand-gold text-sm" />
            Opening Hours: {contactInfo.hours}
          </span>
          <span className="flex items-center gap-2">
            <FaPhone className="text-brand-gold text-sm" />
            <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="hover:text-brand-gold transition-colors">
              {contactInfo.phone}
            </a>
          </span>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-7 h-7 flex items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-brand-gold hover:border-brand-gold transition-all duration-300"
              >
                <Icon className="text-xs" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
