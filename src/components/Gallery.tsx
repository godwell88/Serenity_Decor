import { motion } from 'framer-motion'
import './Gallery.css'

// Auto-discover PNG files from the project assets folder so gallery additions are easy to manage.
const galleryImages: { src: string; alt: string }[] = Object.entries(
  import.meta.glob('../assets/*.png', { eager: true, import: 'default' }) as Record<string, string>
)
  .map(([path, src]) => {
    const fileName = path.split('/').pop() ?? ''

    if (fileName.toLowerCase() === 'logo.png') {
      return null
    }

    const alt = fileName
      .replace(/\.png$/i, '')
      .replace(/[-_]+/g, ' ')
      .trim()

    return {
      src: String(src),
      alt: alt || 'Serenity event moment',
    }
  })
  .filter(Boolean) as { src: string; alt: string }[]

const COMPANY_INSTAGRAM_URL = 'https://www.instagram.com/serenity_decor_events_planning/'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function Gallery() {
  const images = galleryImages.length ? galleryImages : Array.from({ length: 6 }, () => ({ src: '', alt: '' }))

  return (
    <section className="gallery" id="gallery">
      <motion.div
        className="gallery-heading"
        initial={{ opacity: 0, x: -55 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="section-kicker">A little inspiration</p>
        <h2>Our Gallery</h2>
        <p>Explore the details, styling, and joyful moments Serenity brings to every celebration.</p>
      </motion.div>

      <motion.div
        className="gallery-grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.09 } },
        }}
      >
        {images.map((item, index) => (
          <motion.div
            className="gallery-item"
            key={item.src || `gallery-placeholder-${index}`}
            variants={{
              hidden: { opacity: 0, y: 35 },
              show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
            }}
          >
            {item.src ? <img src={item.src} alt={item.alt} /> : <span>Add a gallery photo</span>}
          </motion.div>
        ))}
      </motion.div>

      <div className="gallery-actions">
        <a className="instagram-button" href={COMPANY_INSTAGRAM_URL} target="_blank" rel="noreferrer">
          <InstagramIcon />
          <span>See More on Instagram</span>
        </a>
      </div>
    </section>
  )
}