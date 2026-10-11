import './Footer.css'
import { motion } from 'framer-motion';


const Icon = ({ type }: { type: 'instagram' | 'facebook' | 'whatsapp' }) => {
  const paths = {
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.7" r=".8" fill="currentColor" stroke="none" />
      </>
    ),

    facebook: (
      <path
        d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.25-1.5 1.55-1.5H16.7V3.9c-.3-.04-1.35-.12-2.55-.12-2.52 0-4.25 1.54-4.25 4.37V10H7v3h2.9v8h3.6Z"
        fill="currentColor"
        stroke="none"
      />
    ),

    whatsapp: (
      <path d="M20.5 3.5A11.8 11.8 0 0 0 3.2 19L2 22l3.12-1.15A11.8 11.8 0 1 0 20.5 3.5Zm-8.5 17.1a8.8 8.8 0 0 1-4.48-1.22l-.32-.19-1.85.68.7-1.8-.21-.34A8.8 8.8 0 1 1 12 20.6Zm4.82-6.6c-.26-.13-1.55-.76-1.8-.85-.24-.09-.42-.13-.6.13-.18.26-.68.85-.84 1.02-.15.17-.3.19-.56.06-1.52-.76-2.52-1.36-3.52-3.08-.27-.47.27-.43.76-1.44.09-.18.05-.32-.02-.44-.07-.13-.6-1.37-.82-1.88-.22-.5-.43-.43-.6-.44h-.5c-.17 0-.44.07-.67.32-.23.26-.89.87-.89 2.13s.91 2.47 1.04 2.64c.13.17 1.78 2.72 4.3 3.82.6.26 1.07.42 1.44.53.6.19 1.15.16 1.59.1.48-.07 1.49-.61 1.7-1.2.2-.6.2-1.1.15-1.22-.06-.1-.23-.17-.48-.3Z" />
    ),
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[type]}
    </svg>
  )
}

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      id="contact"
      initial={{ opacity: 0, x: 70 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.65 }}
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="footer-inner">
        <div className="footer-brand-block">
          <a className="footer-brand" href="#about">
            Serenity
          </a>
          <p>Transforming spaces, creating memories.</p>
        </div>

        <div className="footer-links" aria-label="Footer navigation">
          <a href="#about">About us</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact-block">
          <a href="tel:+918284883421">+91 82848 83421</a>
          <a href="mailto:panashemadakufa463@gmail.com">serenitydecoreventsplanning@gmail.com</a>
        </div>

        <div className="footer-socials" aria-label="Social links">
          <a href="https://www.instagram.com/serenity_decor_events_planning/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <Icon type="instagram" />
          </a>

          <a href="https://www.facebook.com/share/19QPhgSebe/?mibextid=wwXIfr" target="_blank" rel="noreferrer" aria-label="Facebook">
            <Icon type="facebook" />
          </a>

          <a href="https://wa.me/918284883421" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <Icon type="whatsapp" />
          </a>


        </div>

        </div>

    </motion.footer>
  )
}