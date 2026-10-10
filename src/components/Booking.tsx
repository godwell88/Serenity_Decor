import { useState } from 'react'
import { Datepicker } from './Datepicker'
import { format } from 'date-fns'

type BookingProps = {
  isOpen: boolean
  onClose: () => void
}

type BookingFormValues = {
  name: string
  phone: string
  eventName: string
  description: string
}

const WHATSAPP_BOOKING_NUMBER = '918284883421'

const defaultBookingForm: BookingFormValues = {
  name: '',
  phone: '',
  eventName: '',
  description: '',
}

export default function Booking({ isOpen, onClose }: BookingProps) {
  const [formValues, setFormValues] = useState<BookingFormValues>(defaultBookingForm)
  const [eventDate, setEventDate] = useState<Date>()
  const [formError, setFormError] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  const updateFormValue = (field: keyof BookingFormValues, value: string) => {
    setFormValues((current) => ({ ...current, [field]: value }))
    if (formError) setFormError('')
  }

  const closeForm = () => {
    setFormValues(defaultBookingForm)
    setEventDate(undefined)
    setFormError('')
    setShowSuccess(false)
    onClose()
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { name, phone, eventName, description } = formValues
    const trimmedName = name.trim()
    const trimmedPhone = phone.trim()
    const trimmedEvent = eventName.trim()
    const trimmedDescription = description.trim()

    if (!trimmedName || !trimmedPhone || !trimmedEvent || !eventDate || !trimmedDescription) {
      setFormError('Please fill in all fields, including your preferred event date.')
      return
    }

    if (trimmedPhone.replace(/\D/g, '').length < 10) {
      setFormError('Please enter a valid phone number with at least 10 digits.')
      return
    }

    const whatsappMessage = [
      `Name: ${trimmedName}`,
      `Phone: ${trimmedPhone}`,
      `Event: ${trimmedEvent}`,
      `Date: ${format(eventDate, 'PPP')}`,
      `Description: ${trimmedDescription}`,
    ].join('\n')

    const whatsappUrl = `https://wa.me/${WHATSAPP_BOOKING_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setShowSuccess(true)
  }

  if (!isOpen) return null

  return (
    <div className="booking-modal is-open" aria-hidden={!isOpen}>
      <div className="booking-backdrop" onClick={closeForm} aria-hidden="true" />

      <div className="booking-dialog" role="dialog" aria-modal="true" aria-labelledby="booking-title">
        <button type="button" className="booking-close" onClick={closeForm} aria-label="Close booking form">
          ×
        </button>

        {showSuccess ? (
          <div className="booking-success-wrap">
            <p className="section-kicker">Thank you</p>
            <h2 id="booking-title">We will contact you ASAP</h2>
            <button type="button" className="booking-primary" onClick={closeForm}>
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="booking-header">
              <p className="section-kicker">Let’s plan your moment</p>
              <h2 id="booking-title">Book your event</h2>
            </div>

            <form className="booking-form" onSubmit={handleSubmit} noValidate>
              <div className="field-group">
                <label htmlFor="booking-name">Name</label>
                <input
                  id="booking-name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formValues.name}
                  onChange={(event) => updateFormValue('name', event.target.value)}
                  required
                />
              </div>

              <div className="field-group">
                <label htmlFor="booking-phone">Phone Number</label>
                <input
                  id="booking-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  placeholder="+91 98765 43210"
                  value={formValues.phone}
                  onChange={(event) => updateFormValue('phone', event.target.value)}
                  required
                />
              </div>


              <div className="field-group">
                <label htmlFor="booking-event">Event Name</label>
                <input
                  id="booking-event"
                  name="eventName"
                  type="text"
                  placeholder="Birthday, proposal, picnic..."
                  value={formValues.eventName}
                  onChange={(event) => updateFormValue('eventName', event.target.value)}
                  required
                />
              </div>
             


              <div className="field-group">
                <span className="field-group-label">Preferred Date</span>
                <Datepicker date={eventDate} onDateChange={setEventDate} />
              </div>

              <div className="field-group">
                <label htmlFor="booking-description">Description</label>
                <textarea
                  id="booking-description"
                  name="description"
                  rows={5}
                  placeholder="Tell us a little about your occasion, theme, date, and preferences"
                  value={formValues.description}
                  onChange={(event) => updateFormValue('description', event.target.value)}
                  required
                />
              </div>

              {formError ? <p className="booking-error">{formError}</p> : null}

              <div className="booking-actions">
                <button type="button" className="booking-secondary" onClick={closeForm}>
                  Cancel
                </button>
                <button type="submit" className="booking-primary">
                  Send on WhatsApp
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
