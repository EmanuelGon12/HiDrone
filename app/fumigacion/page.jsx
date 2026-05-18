import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
import Image from 'next/image'

export const metadata = {
  title: 'Fumigación con Drones | HiDrone Uruguay',
  description: 'Servicio de fumigación aérea con drones en Uruguay. Control de plagas en parques, fachadas y áreas abiertas. Certificados por el Ministerio de Salud Pública.',
}

export default function Fumigacion() {
  return (
    <>
      <Navbar />
      <ScrollAnimator />

      {/* Hero */}
      <section className="titulo-fumigacion-seccion">
        <div className="titulo-fumigacion-fondo">
          <h2 className="titulo-fumigacion">Fumigación con Drones</h2>
          <p className="subtitulo-fumigacion">
            Soluciones rápidas, seguras y efectivas para mantener tus espacios libres de plagas.
          </p>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="como-funciona animado" style={{ marginTop: 0 }}>
        <div className="contenido">
          <h2>¿Cómo Funciona?</h2>
          <p>
            La fumigación con drones en parques, fachadas y otras áreas abiertas es una solución moderna y segura para el control de insectos y roedores en espacios públicos y privados. Utilizamos drones equipados con sistemas de pulverización precisa, de esta forma aplicamos pesticidas y productos biológicos en zonas de difícil acceso o de gran tamaño, de manera efectiva y garantizando una cobertura uniforme. Este método permite reducir infestaciones de manera rápida, minimizando el uso excesivo de químicos y disminuyendo el riesgo para las personas y el medio ambiente.
          </p>
        </div>
        <div className="imagen">
          <Image src="/imagenes/droneFumigando.avif" alt="Drone en operación" width={600} height={400} style={{ width: '100%', borderRadius: '12px', maxHeight: '400px', objectFit: 'cover' }} />
        </div>
      </section>

      {/* Pasos */}
      <section className="how-it-works animado">
        <h2>Seguimos estos pasos:</h2>
        <div className="steps">
          <div className="step">
            <h3>Evaluación</h3>
            <p>Se inspeccionan las áreas a tratar para determinar la mejor estrategia de fumigación.</p>
          </div>
          <div className="step">
            <h3>Preparación</h3>
            <p>Se preparan los drones con los productos necesarios y se planifica la ruta de vuelo.</p>
          </div>
          <div className="step">
            <h3>Fumigación</h3>
            <p>Los drones realizan la aplicación de manera eficiente, cubriendo toda la zona de forma precisa.</p>
          </div>
        </div>
      </section>

      {/* Certificaciones */}
      <section className="certificaciones-fumigacion animado">
        <div className="contenido-certificaciones">
          <h2>Nuestras Certificaciones</h2>
          <p>
            En HiDrone contamos con todas las certificaciones y habilitaciones necesarias para realizar procesos de fumigación aérea con drones de manera segura y legal.
          </p>
          <ul>
            <li>Habilitación del Ministerio de Salud Pública</li>
            <li>Capacitación en manejo seguro de productos químicos</li>
            <li>Firma del Director Técnico Autorizado por el Ministerio de Salud Pública</li>
            <li>Seguro de responsabilidad civil para operaciones aéreas</li>
          </ul>
          <p>
            Estas certificaciones garantizan que nuestros servicios se realizan bajo estrictos estándares de seguridad y calidad, protegiendo tanto a las personas como al medio ambiente.
          </p>
        </div>
      </section>

      {/* Superficies */}
      <section className="tres-contenedores">
        <div className="contenedor-limp animado">
          <div className="imagen-limp">
            <Image src="/imagenes/istockphoto-481846822-612x612.jpg" alt="Parques" width={400} height={200} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          </div>
          <div className="texto-limp">
            <h3>Parques y Áreas Verdes</h3>
            <p>Control de plagas en parques públicos, jardines y áreas verdes, ayudando a mantener un ambiente saludable y libre de insectos dañinos.</p>
          </div>
        </div>
        <div className="contenedor-limp animado">
          <div className="imagen-limp">
            <Image src="/imagenes/fachadaEdificio.jpeg" alt="Fachadas" width={400} height={200} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          </div>
          <div className="texto-limp">
            <h3>Fachadas</h3>
            <p>La fumigación en fachadas elimina hongos, líquenes y moho que deterioran la apariencia visual de los edificios, preservando su valor estético.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
