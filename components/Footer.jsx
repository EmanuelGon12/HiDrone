import Link from 'next/link'
import { WhatsAppIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Sobre Nosotros</h4>
          <p>Empresa de drones certificada por DINACIA, especializada en limpieza aérea en Uruguay. Trabajos 100% autorizados, comprometidos con la innovación y el cuidado del medio ambiente.</p>
        </div>
        <div className="footer-column">
          <h4>Servicios</h4>
          <ul>
            <li><Link href="/limpieza">Limpieza con Drones</Link></li>
            <li><Link href="/limpieza#superficies">Fachadas y Ventanas</Link></li>
            <li><Link href="/limpieza#superficies">Paneles Solares</Link></li>
            <li><Link href="/limpieza#superficies">Embarcaciones</Link></li>
            <li><Link href="/fumigacion">Fumigación con Drones</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Empresa</h4>
          <ul>
            <li><Link href="/sobre-nosotros">Sobre Nosotros</Link></li>
            <li><Link href="/#trabajos-realizados">Trabajos Realizados</Link></li>
            <li><Link href="/#preguntas-frecuentes">Preguntas Frecuentes</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contacto</h4>
          <p>Teléfono: +598 94 010 550</p>
          <p>Email: info@hidroneuy.com</p>
          <a
            href="https://wa.me/59894010550"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-whatsapp"
          >
            <WhatsAppIcon />
            Escribinos por WhatsApp
          </a>
        </div>
      </div>
      <div className="footer-copy">
        <p>&copy; 2026 HiDrone Uruguay. Todos los derechos reservados. Operación de drones certificada por DINACIA.</p>
        <p className="footer-agency">
          Desarrollado por <a href="https://egency.services" target="_blank" rel="noopener noreferrer">egency</a>
        </p>
      </div>
    </footer>
  )
}
