import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
import Image from 'next/image'

export const metadata = {
  title: 'Limpieza con Drones | HiDrone Uruguay',
  description: 'Servicio profesional de limpieza aérea con drones en Uruguay. Fachadas, ventanas, paneles solares, techos y más. Tecnología de ósmosis inversa.',
}

export default function Limpieza() {
  return (
    <>
      <Navbar />
      <ScrollAnimator />

      {/* Hero */}
      <section className="titulo-limpieza-seccion">
        <div className="titulo-limpieza-fondo">
          <h2 className="titulo-limpieza">Limpieza con Drones</h2>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="como-funciona animado" style={{ marginTop: 0 }}>
        <div className="contenido">
          <h2>¿Cómo Funciona?</h2>
          <p>
            En Hidrone, revolucionamos la limpieza de superficies con tecnología de drones equipados con sistemas de filtración de agua de última generación. Utilizamos técnicas avanzadas para eliminar la suciedad, grasa, manchas, moho y más, adaptando cada proceso a las necesidades específicas de cada tipo de superficie. Nuestra agua purificada, tratada mediante <strong>ósmosis inversa</strong>, puede aplicarse tanto con baja como con alta presión, garantizando un acabado impecable.
          </p>
        </div>
        <div className="imagen">
          <Image src="/imagenes/embarcacion.webp" alt="Drone en operación" width={600} height={400} loading="lazy" style={{ width: '100%', borderRadius: '12px', maxHeight: '400px', objectFit: 'cover' }} />
        </div>
      </section>

      {/* Íconos ventajas */}
      <section className="iconos-limpieza animado">
        <p className="descripcion-limpieza">Realizamos limpieza eficiente de superficies, con ventajas como las siguientes:</p>
        <div className="puntos-clave">
          <div className="punto">
            <div className="icon-limpieza">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 60, height: 60 }}>
                <path d="M23 12C23 12.3545 22.9832 12.7051 22.9504 13.051C22.3838 12.4841 21.7204 12.014 20.9871 11.6675C20.8122 6.85477 16.8555 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12C3.00683 16.8555 6.85477 20.8122 11.6675 20.9871C12.014 21.7204 12.4841 22.3838 13.051 22.9504C12.7051 22.9832 12.3545 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z" fill="#00a3e9"/>
                <path d="M13 11.8812L13.8426 12.3677C13.2847 12.7802 12.7902 13.2737 12.3766 13.8307L11.5174 13.3346C11.3437 13.2343 11.2115 13.0898 11.1267 12.9235C11 12.7274 11 12.4667 11 12.4667V6C11 5.44771 11.4477 5 12 5C12.5523 5 13 5.44772 13 6V11.8812Z" fill="#00a3e9"/>
                <path d="M15.2929 17.7071C15.6834 17.3166 16.3166 17.3166 16.7071 17.7071L17.3482 18.3482L19.2473 16.4491C19.6379 16.0586 20.271 16.0586 20.6615 16.4491C21.0521 16.8397 21.0521 17.4728 20.6615 17.8634L18.1213 20.4036C18.0349 20.49 17.9367 20.5573 17.8318 20.6054C17.4488 20.8294 16.9487 20.7772 16.6203 20.4487L15.2929 19.1213C14.9024 18.7308 14.9024 18.0976 15.2929 17.7071Z" fill="#00a3e9"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M18 24C21.3137 24 24 21.3137 24 18C24 14.6863 21.3137 12 18 12C14.6863 12 12 14.6863 12 18C12 21.3137 14.6863 24 18 24ZM18 22.0181C15.7809 22.0181 13.9819 20.2191 13.9819 18C13.9819 15.7809 15.7809 13.9819 18 13.9819C20.2191 13.9819 22.0181 15.7809 22.0181 18C22.0181 20.2191 20.2191 22.0181 18 22.0181Z" fill="#00a3e9"/>
              </svg>
            </div>
            <h3>Eficiencia en tiempo y recursos</h3>
            <p>Reduce el tiempo y los costos asociados a la limpieza manual. Cubriendo 1.200–1.500 m²/h.</p>
          </div>
          <div className="punto">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 60, height: 60 }}>
              <path d="M10.49 2.23006L5.50003 4.10005C4.35003 4.53005 3.41003 5.89004 3.41003 7.12004V14.55C3.41003 15.73 4.19005 17.28 5.14005 17.99L9.44003 21.2001C10.85 22.2601 13.17 22.2601 14.58 21.2001L18.88 17.99C19.83 17.28 20.61 15.73 20.61 14.55V7.12004C20.61 5.89004 19.67 4.53005 18.52 4.10005L13.53 2.23006C12.68 1.92006 11.32 1.92006 10.49 2.23006Z" stroke="#00a3e9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.0001 10.92C11.9601 10.92 11.9101 10.92 11.8701 10.92C10.9301 10.89 10.1801 10.11 10.1801 9.16003C10.1801 8.19003 10.9701 7.40002 11.9401 7.40002C12.9101 7.40002 13.7001 8.19003 13.7001 9.16003C13.6901 10.12 12.9401 10.89 12.0001 10.92Z" stroke="#00a3e9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.01 13.72C9.05004 14.36 9.05004 15.41 10.01 16.05C11.1 16.78 12.89 16.78 13.98 16.05C14.94 15.41 14.94 14.36 13.98 13.72C12.9 12.99 11.11 12.99 10.01 13.72Z" stroke="#00a3e9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3>Seguridad en las operaciones</h3>
            <p>Minimiza los riesgos laborales al evitar trabajos en alturas peligrosas para el personal.</p>
          </div>
          <div className="punto">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 60, height: 60 }}>
              <path d="M10 4C10 7.31371 7.31371 10 4 10C7.31371 10 10 12.6863 10 16C10 12.6863 12.6863 10 16 10C12.6863 10 10 7.31371 10 4Z" stroke="#00a3e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17.5 15C17.5 16.3807 16.3807 17.5 15 17.5C16.3807 17.5 17.5 18.6193 17.5 20C17.5 18.6193 18.6193 17.5 20 17.5C18.6193 17.5 17.5 16.3807 17.5 15Z" stroke="#00a3e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3>Mejora visual y profesional</h3>
            <p>Apariencia impecable que realza la imagen de sus superficies y estructuras.</p>
          </div>
          <div className="punto">
            <svg fill="#00a3e9" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: 60, height: 60 }}>
              <path d="M12,6a1,1,0,0,0-1,1v5a1,1,0,0,0,.293.707l3,3a1,1,0,0,0,1.414-1.414L13,11.586V7A1,1,0,0,0,12,6Z"/>
              <path d="M23.812,10.132A12,12,0,0,0,3.578,3.415V1a1,1,0,0,0-2,0V5a2,2,0,0,0,2,2h4a1,1,0,0,0,0-2H4.827a9.99,9.99,0,1,1-2.835,7.878A.982.982,0,0,0,1,12a1.007,1.007,0,0,0-1,1.1,12,12,0,1,0,23.808-2.969Z"/>
            </svg>
            <h3>Extiende la vida útil</h3>
            <p>Prolonga la durabilidad y vida útil de sus superficies.</p>
          </div>
        </div>
      </section>

      {/* Ósmosis */}
      <section className="como-funciona animado" style={{ marginTop: '40px' }}>
        <div className="imagen">
          <Image src="/imagenes/osmosis2.webp" alt="Ósmosis inversa" width={600} height={400} loading="lazy" style={{ width: '100%', borderRadius: '12px', maxHeight: '400px', objectFit: 'cover' }} />
        </div>
        <div className="contenido">
          <h2>Ósmosis Inversa</h2>
          <p>
            La ósmosis inversa es un proceso de purificación de agua que utiliza una membrana semipermeable para eliminar hasta el 99% de las impurezas, sales y contaminantes. En HiDrone, empleamos esta tecnología para asegurar una limpieza sin residuos ni manchas, ideal para vidrios, fachadas y paneles solares, protegiendo las superficies y garantizando un acabado profesional.
          </p>
        </div>
      </section>

      {/* Grid de superficies */}
      <section className="tres-contenedores" id="superficies">
        {[
          { img: '/imagenes/ventanas-vidrio-edificio_53876-42549.avif', titulo: 'Ventanas', desc: 'Nuestros drones son ideales para limpiar ventanas de edificios altos, alcanzando áreas difíciles y peligrosas de manera rápida, segura y eficiente.' },
          { img: '/imagenes/fachada-residencial.webp', titulo: 'Fachadas', desc: 'Nuestros drones mantienen fachadas de edificios de forma ágil y segura, alcanzando zonas altas sin complicaciones.' },
          { img: '/imagenes/eolico.webp', titulo: 'Molinos Eólicos', desc: 'Un dron de limpieza es la opción más eficiente y segura para mantener molinos eólicos, reduciendo riesgos humanos.' },
          { img: '/imagenes/solar-panel.webp', titulo: 'Paneles Solares', desc: 'Los drones garantizan mayor eficiencia en la producción de energía eliminando suciedad y residuos de los paneles.' },
          { img: '/imagenes/cruise-1578528_1280.webp', titulo: 'Cruceros', desc: 'Limpieza rápida y segura de áreas difíciles de alcanzar, manteniendo la higiene sin interrumpir las operaciones.' },
          { img: '/imagenes/estadio.webp', titulo: 'Estadios', desc: 'Solución rápida y eficiente para estadios, llegando a áreas de difícil acceso sin necesidad de equipos pesados.' },
          { img: '/imagenes/lujoso-barco-motor-que-navega-aguas-cristalinas_1135235-2597.avif', titulo: 'Yates', desc: 'Limpieza eficiente de yates, alcanzando zonas exteriores con un acabado impecable en menos tiempo.' },
          { img: '/imagenes/depositphotos_11501233-stock-photo-blank-billboard.jpg', titulo: 'Carteles Publicitarios', desc: 'Limpiamos carteles publicitarios elevados asegurando una apariencia llamativa y libre de suciedad.' },
          { img: '/imagenes/depositphotos_17673207-stock-photo-house-roof.jpg', titulo: 'Techos', desc: 'Limpieza eficiente de techos llegando a zonas difíciles, garantizando una superficie libre de suciedad y residuos.' },
        ].map(({ img, titulo, desc }) => (
          <div key={titulo} className="contenedor-limp animado">
            <div className="imagen-limp">
              <Image src={img} alt={titulo} width={400} height={200} loading="lazy" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            </div>
            <div className="texto-limp">
              <h3>{titulo}</h3>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA final */}
      <section className="cta-strip">
        <div className="cta-strip-content">
          <h2>¿Necesitás limpiar tu edificio o estructura?</h2>
          <p>Contáctanos hoy y recibí un presupuesto personalizado sin compromiso.</p>
          <a href="https://wa.me/59894010550" className="btn-contacto" target="_blank" rel="noopener noreferrer">
            Solicitar Presupuesto Gratis
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
