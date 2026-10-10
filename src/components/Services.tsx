import { motion } from 'framer-motion'
import './Services.css'
import Picnic from '../assets/pic1.JPG'
import Picnic3 from '../assets/Picnic3.png'
import RoomDecor from '../assets/Room-Decor.png'
import Moments from '../assets/Moments.png'
import Setup from '../assets/setup.png'

const serviceCards = [
  ['Luxury Picnics', 'Beautiful outdoor picnic experiences designed for unforgettable moments.', Picnic],
  ['Birthday Celebrations', 'Creative birthday setups that make every celebration special.', Picnic3],
  ['Room Decoration', 'Transform your room with elegant décor for birthdays, proposals, and surprises.', RoomDecor],
  ['Special Moments', 'Romantic surprises and memorable experiences designed with love.', Moments],
  ['Event Setup', 'Complete planning and setup so you can enjoy your event stress-free.', Setup],
  ['Custom Events', 'Personalised décor tailored to your style and occasion.', Setup],
]

export default function Services() {
  return (
    <section className="services-wrap" id="services">
      <div className="section-heading">
        <p className="section-kicker">Designed around you</p>
        <h2>Our Services</h2>
      </div>
      <div className="services">
        {serviceCards.map(([heading, description, image], index) => (
          <motion.article className="service" key={heading} initial={{ opacity: 0, x: index % 2 === 0 ? -45 : 45 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: .5, delay: (index % 3) * .08 }} viewport={{ once: true, amount: .15 }}>
            <img src={image} alt="" />
            <div className="service-content">
              <h3>{heading}</h3>
              <p>{description}</p>
              <a className="quote-button" href="#contact">Book Now <span aria-hidden="true">→</span></a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
