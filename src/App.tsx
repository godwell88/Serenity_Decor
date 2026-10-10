import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Aboutus from './components/Aboutus'
import Services from './components/Services'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import ScallopDivider from './components/ScallopDivider'
import Booking from './components/Booking'
import Brands from './components/brands'

const WHATSAPP_BOOKING_NUMBER = '918284883421'

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const openBookingModal = () => {
    setIsBookingOpen(true)
  }

  const closeBookingModal = () => {
    setIsBookingOpen(false)
  }

  return (
    <>
      <Header />

      <section className="top-menu" id="menu" aria-label="Quick menu">
        <div className="top-menu-inner">
          <span>Picnics</span>
          <span>Birthdays</span>
          <span>Room Decor</span>
          <span>Events</span>
          <span>Proposals</span>
        </div>
      </section>

      <main>
        <Aboutus />
        <ScallopDivider tone="light" />
        <Services />
        <ScallopDivider tone="light" />
        <Gallery />
        <Brands />
      </main>
      <ScallopDivider tone="dark" />
      <Footer />

      <button type="button" className="book-now-button" onClick={openBookingModal}>
        Book Now
      </button>

      <a
        className="whatsapp-float"
        href={`https://wa.me/${WHATSAPP_BOOKING_NUMBER}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Serenity on WhatsApp"
      >
        <WhatsAppIcon />
        <span>WhatsApp</span>
      </a>

      <Booking isOpen={isBookingOpen} onClose={closeBookingModal} />
    </>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M27.1 4.8A15.35 15.35 0 0 0 16.1.25C7.65.25.78 7.1.78 15.56c0 2.7.7 5.33 2.04 7.65L.65 31.14l8.12-2.13a15.3 15.3 0 0 0 7.32 1.86h.01c8.45 0 15.32-6.86 15.32-15.32 0-4.09-1.59-7.93-4.32-10.75ZM16.1 28.29a12.69 12.69 0 0 1-6.47-1.77l-.46-.28-4.82 1.27 1.29-4.7-.3-.48a12.67 12.67 0 1 1 10.76 5.96Zm6.95-9.5c-.38-.19-2.23-1.1-2.58-1.22-.34-.13-.6-.19-.85.19-.25.38-.97 1.22-1.19 1.47-.22.25-.44.28-.82.09-2.26-1.13-3.75-2.02-5.24-4.58-.4-.69.4-.64 1.13-2.13.13-.25.06-.47-.03-.66-.1-.19-.85-2.04-1.16-2.8-.31-.74-.63-.64-.85-.65h-.72c-.25 0-.66.1-1 .47-.35.38-1.32 1.29-1.32 3.14 0 1.85 1.35 3.64 1.54 3.9.19.25 2.65 4.05 6.42 5.68.9.39 1.6.62 2.15.79.9.29 1.72.25 2.37.15.72-.11 2.23-.91 2.54-1.79.31-.88.31-1.63.22-1.79-.09-.16-.34-.25-.72-.44Z" />
    </svg>
  )
}

export default App
