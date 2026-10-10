import { motion } from 'framer-motion'
import './Aboutus.css'
import aboutus from '../assets/aboutus.JPG'

export default function Aboutus() {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: -45 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <img src={aboutus} alt="An elegant Serenity event setup" />
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 45 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65, delay: 0.12 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className="eyebrow">Our story</p>
        <h1>About Us</h1>
        <div className="about-copy">
          <p>At Serenity Decor, we turn ordinary spaces into beautiful memories. Every setup is thoughtfully designed around your occasion, personality, and vision.</p>
          <p>From intimate picnics and birthdays to romantic room décor and full celebrations, our team brings creativity, care, and a polished eye for every detail.</p>
        </div>
        <a className="about-cta" href="#services">Explore our services</a>
      </motion.div>
    </section>
  )
}


