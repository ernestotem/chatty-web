import logo from '../assets/chatty-logo.png'
import logo2x from '../assets/chatty-logo@2x.png'

/** Logotipo oficial de Chatty (archivo original, sin recrear ni recolorear). */
export default function Logo({ className = 'h-7 w-auto' }) {
  return (
    <img
      src={logo}
      srcSet={`${logo} 1x, ${logo2x} 2x`}
      alt="Chatty"
      width="720"
      height="213"
      className={`object-contain ${className}`}
      decoding="async"
    />
  )
}
