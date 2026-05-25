import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Sobre Nosotros</h4>
          <p>Somos una empresa de drones especializada en limpieza aérea en Uruguay, comprometidos con la innovación y el cuidado del medio ambiente.</p>
        </div>
        <div className="footer-column">
          <h4>Servicios</h4>
          <ul>
            <li><Link href="/limpieza">Limpieza con Drones</Link></li>
            <li><Link href="/limpieza#superficies">Fachadas y Ventanas</Link></li>
            <li><Link href="/limpieza#superficies">Paneles Solares</Link></li>
            <li><Link href="/limpieza#superficies">Embarcaciones</Link></li>
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
            Escribinos por WhatsApp
          </a>
        </div>
      </div>
      <div className="footer-copy">
        <p>&copy; 2026 HiDrone Uruguay. Todos los derechos reservados.</p>
        <p className="footer-agency">
          Desarrollado por <a href="https://egency.services" target="_blank" rel="noopener noreferrer">Egency</a>
        </p>
      </div>
    </footer>
  )
}
