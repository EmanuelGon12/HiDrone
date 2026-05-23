import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Sobre Nosotros | HiDrone Uruguay',
  description: 'Conocé al equipo de HiDrone, pioneros en limpieza con drones en Uruguay. Operamos en todo el país desde Punta del Este.',
}

export default function SobreNosotros() {
  return (
    <>
      <Navbar />
      <ScrollAnimator />

      <h2 className="titulo-centro animado" style={{ marginTop: '120px' }}>Conoce más sobre nosotros</h2>

      <section className="quienes-somos animado">
        <div className="texto">
          <p>
            En HiDrone, somos pioneros en la industria de limpieza con drones en Uruguay.<br /><br />
            Fundados en Punta del Este, operamos en todo el país, ofreciendo soluciones innovadoras, seguras y respetuosas con el medio ambiente. Nuestro compromiso es brindar servicios de limpieza eficientes, rápidos y accesibles, superando los métodos tradicionales en calidad y sustentabilidad.
          </p>
          <Link href="/limpieza" className="btn-cta" style={{ display: 'inline-block', marginTop: '20px' }}>
            Ver nuestros servicios
          </Link>
        </div>
        <div className="imagen">
          <Image
            src="/imagenes/fotoDrone2.webp"
            alt="Drone HiDrone en operación"
            width={600}
            height={400}
            loading="lazy"
            style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          />
        </div>
      </section>

      <section className="quienes-somos-inverso animado">
        <div className="texto">
          <p>
            Nuestra visión va más allá de la limpieza convencional: buscamos transformar la forma en que Uruguay realiza el mantenimiento de estructuras y superficies, aportando tecnologías inteligentes para un futuro más sustentable. Cada proyecto refleja nuestro compromiso con la precisión, el cuidado y la atención al detalle.
          </p>
          <a href="https://wa.me/59894010550" className="btn-cta" style={{ display: 'inline-block', marginTop: '20px' }} target="_blank" rel="noopener noreferrer">
            Solicitar presupuesto
          </a>
        </div>
        <div className="imagen">
          <Image
            src="/imagenes/fotoDrone5.webp"
            alt="Drone HiDrone y equipo"
            width={600}
            height={400}
            loading="lazy"
            style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          />
        </div>
      </section>

      {/* Valores */}
      <section className="valores-section animado">
        <h2 className="titulo-centro" style={{ marginTop: 0, marginBottom: '40px' }}>Nuestros Valores</h2>
        <div className="valores-grid">
          <div className="valor-item">
            <div className="valor-icon">🎯</div>
            <h3>Precisión</h3>
            <p>Cada operación se planifica y ejecuta con exactitud milimétrica para garantizar el mejor resultado.</p>
          </div>
          <div className="valor-item">
            <div className="valor-icon">🌿</div>
            <h3>Sustentabilidad</h3>
            <p>Utilizamos tecnología de ósmosis inversa y métodos ecológicos que cuidan el medio ambiente.</p>
          </div>
          <div className="valor-item">
            <div className="valor-icon">🛡️</div>
            <h3>Seguridad</h3>
            <p>Operadores certificados, protocolos estrictos y equipos de última generación en cada trabajo.</p>
          </div>
          <div className="valor-item">
            <div className="valor-icon">⚡</div>
            <h3>Eficiencia</h3>
            <p>Completamos en horas lo que con métodos tradicionales llevaría días, reduciendo costos y tiempos.</p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="cta-strip">
        <div className="cta-strip-content">
          <h2>¿Querés trabajar con nosotros?</h2>
          <p>Contactanos y coordinamos una visita sin compromiso para evaluar tu proyecto.</p>
          <a href="https://wa.me/59894010550" className="btn-contacto" target="_blank" rel="noopener noreferrer">
            Escribinos por WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
