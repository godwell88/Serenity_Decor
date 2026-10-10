//import './ScallopDivider.css'

export default function ScallopDivider({ tone = 'light' }: { tone?: 'light' | 'dark' | 'lavender' }) {
  return <div className={`scallop-divider scallop-divider--${tone}`} aria-hidden="true" />
}
