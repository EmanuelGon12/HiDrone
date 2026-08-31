import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
import LazyVideo from '@/components/LazyVideo'
import TrustBar from '@/components/TrustBar'
import FAQSection from '@/components/FAQSection'
import { WhatsAppIcon, ArrowIcon } from '@/components/Icons'
import Link from 'next/link'
import Image from 'next/image'

const trabajos = [
  {
    img: '/imagenes/fachada-residencial.webp',
    titulo: 'Fachada Residencial',
    desc: 'Limpieza completa de fachada en edificio residencial de Punta del Este.',
    tag: 'Fachadas',
  },
  {
    img: '/imagenes/ventanas-vidrio-edificio_53876-42549.avif',
    titulo: 'Torre de Oficinas',
    desc: 'Tratamiento de ventanas y vidriería exterior en torre corporativa.',
    tag: 'Ventanas',
  },
  {
    img: '/imagenes/solar-panel.webp',
    titulo: 'Parque Solar',
    desc: 'Limpieza de paneles solares con ósmosis inversa para maximizar eficiencia.',
    tag: 'Paneles Solares',
  },
  {
    img: '/imagenes/eolico.webp',
    titulo: 'Parque Eólico',
    desc: 'Mantenimiento de aspas de aerogeneradores de forma segura y eficiente.',
    tag: 'Eólico',
  },
  {
    img: '/imagenes/lujoso-barco-motor-que-navega-aguas-cristalinas_1135235-2597.avif',
    titulo: 'Embarcación de Lujo',
    desc: 'Limpieza exterior de yate con acabado impecable sin interferir en operaciones.',
    tag: 'Embarcaciones',
  },
  {
    img: '/imagenes/embarcacion.webp',
    titulo: 'Limpieza Industrial',
    desc: 'Operación de limpieza en estructura industrial de difícil acceso.',
    tag: 'Industrial',
  },
]

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollAnimator />
      <TrustBar />

      {/* Hero */}
      <section className="hero-image">
        <Image
          src="/punta-del-este-3.webp"
          alt="Punta del Este vista aérea"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="hero-text">
          <h1>Limpieza aérea con drones de última generación</h1>
          <p>Más limpio, más seguro, más rápido — certificados por DINACIA</p>
          <div className="hero-ctas">
            <a href="https://wa.me/59894010550" className="btn-contacto" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              Solicitar Presupuesto
            </a>
            <Link href="/limpieza" className="btn-contacto btn-contacto--outline">
              Ver Servicios
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Puntos clave */}
      <div className="puntos-clave">
        <div className="punto">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#00a3e9"><path d="M6.504 21h-.006a1.5 1.5 0 0 1-1.177-2.428l.372-.472c.103-.023.201-.053.31-.067A3.847 3.847 0 0 1 6.504 18a3.756 3.756 0 0 1 .51.036l-.908 1.154a.5.5 0 0 0 .083.703.441.441 0 0 0 .703-.083l1.146-1.46a2.042 2.042 0 0 1 .775.634L7.68 20.427a1.492 1.492 0 0 1-1.176.572zM3.252 6.667a1.501 1.501 0 0 0 .416 2.08l.327.218a3.763 3.763 0 0 0 .5.034 3.847 3.847 0 0 0 .503-.033 3.586 3.586 0 0 0 .6-.134l-1.375-.917a.5.5 0 1 1 .554-.832l1.8 1.2a1.674 1.674 0 0 0 .242-.259.851.851 0 0 0 .16-.676L5.33 6.251a1.504 1.504 0 0 0-.842-.25 1.492 1.492 0 0 0-1.237.667zm17.496 11.664a1.501 1.501 0 0 0-.416-2.08l-.327-.218a3.763 3.763 0 0 0-.5-.034 3.847 3.847 0 0 0-.503.033 3.586 3.586 0 0 0-.6.134l1.375.917a.5.5 0 0 1 .139.693.511.511 0 0 1-.693.139l-1.8-1.2a1.67 1.67 0 0 0-.242.259.851.851 0 0 0-.16.676l1.648 1.098a1.538 1.538 0 0 0 2.079-.417zM16.32 4.573l-1.134 1.443a2.042 2.042 0 0 0 .775.633l1.146-1.459a.495.495 0 0 1 .333-.187.484.484 0 0 1 .37.104.5.5 0 0 1 .083.703l-.908 1.154a3.756 3.756 0 0 0 .51.036 3.847 3.847 0 0 0 .503-.033c.108-.014.206-.044.31-.067l.37-.472a1.497 1.497 0 0 0-1.037-2.42c-.021 0-.041-.003-.062-.003a1.514 1.514 0 0 0-.207.004c-.022 0-.045.003-.067.004a1.49 1.49 0 0 0-.985.56zm7.605 12.292a2.853 2.853 0 0 1-.46 2.296 4.563 4.563 0 0 1-3.205 1.79 5.748 5.748 0 0 1-.751.048c-2.133 0-4.04-1.187-4.434-2.864a2.785 2.785 0 0 1 .14-1.69l-1.475-.982a1.85 1.85 0 0 0-2.47.394l-1.206 1.535a3.14 3.14 0 0 1 .86 1.473 2.853 2.853 0 0 1-.46 2.296 4.563 4.563 0 0 1-3.204 1.79 5.748 5.748 0 0 1-.751.048c-2.133 0-4.04-1.187-4.434-2.864a2.853 2.853 0 0 1 .46-2.296 4.563 4.563 0 0 1 3.205-1.79 5.673 5.673 0 0 1 1.549.02l1.299-1.654a1.844 1.844 0 0 0-.426-2.67l-1.677-1.12a5.42 5.42 0 0 1-1.225.325 5.748 5.748 0 0 1-.751.049c-2.133 0-4.04-1.187-4.434-2.864a2.853 2.853 0 0 1 .46-2.296 4.563 4.563 0 0 1 3.205-1.79c2.418-.319 4.745.944 5.185 2.816a2.784 2.784 0 0 1-.14 1.69l1.475.982a1.85 1.85 0 0 0 2.47-.394l1.203-1.532a3.14 3.14 0 0 1-.858-1.476 2.853 2.853 0 0 1 .46-2.296 4.563 4.563 0 0 1 3.205-1.79c2.415-.32 4.745.944 5.185 2.816a2.853 2.853 0 0 1-.46 2.296 4.563 4.563 0 0 1-3.205 1.79 5.748 5.748 0 0 1-.751.048 5.704 5.704 0 0 1-.805-.058l-1.292 1.644a1.844 1.844 0 0 0 .426 2.67l1.677 1.12a5.42 5.42 0 0 1 1.225-.325c2.416-.322 4.745.943 5.185 2.815z"/></svg>
          <h4>Operaciones con Drones</h4>
          <p>Limpieza aérea de alta precisión con tecnología de última generación.</p>
        </div>
        <div className="punto">
          <svg fill="#00a3e9" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6zm-405.8-201c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0 0 26 0l212.6-292.7c3.8-5.3 0-12.7-6.5-12.7h-55.2c-5.1 0-10 2.5-13 6.6L468.9 542.4l-64.7-89.1z"/></svg>
          <h4>Seguridad Garantizada</h4>
          <p>Protocolos estrictos y certificaciones oficiales en cada operación.</p>
        </div>
        <div className="punto">
          <svg fill="#00a3e9" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M177.6,80.43a10,10,0,1,0-19.5,4.5,60.76,60.76,0,0,1-6,44.5c-16.5,28.5-53.5,38.5-82,22-28.5-16-38.5-53-22-81.5s53.5-38.5,82-22a9.86,9.86,0,1,0,10-17c-38.5-22.5-87-9.5-109.5,29a80.19,80.19,0,1,0,147,20.5Zm-109.5,11a10.12,10.12,0,0,0-11,17l40,25a10.08,10.08,0,0,0,5.5,1.5,10.44,10.44,0,0,0,8-4l52.5-67.5c3.5-4.5,2.5-10.5-2-14s-10.5-2.5-14,2l-47,60Z"/></svg>
          <h4>Resultados Efectivos</h4>
          <p>Servicios que cumplen con los más altos estándares de calidad.</p>
        </div>
        <div className="punto">
          <svg height="200px" width="200px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#00a3e9"><path d="M435.95,287.525c32.51,0,58.87-26.343,58.87-58.853c0-32.51-26.361-58.871-58.87-58.871c-32.502,0-58.863,26.361-58.863,58.871C377.088,261.182,403.448,287.525,435.95,287.525z"/><path d="M511.327,344.251c-2.623-15.762-15.652-37.822-25.514-47.677c-1.299-1.306-7.105-1.608-8.673-0.636c-11.99,7.374-26.074,11.714-41.19,11.714c-15.099,0-29.184-4.34-41.175-11.714c-1.575-0.972-7.373-0.67-8.672,0.636c-2.757,2.757-5.765,6.427-8.698,10.683c7.935,14.94,14.228,30.81,16.499,44.476c2.27,13.7,1.533,26.67-2.138,38.494c13.038,4.717,28.673,6.787,44.183,6.787C476.404,397.014,517.804,382.987,511.327,344.251z"/><path d="M254.487,262.691c52.687,0,95.403-42.716,95.403-95.402c0-52.67-42.716-95.386-95.403-95.386c-52.678,0-95.378,42.716-95.378,95.386C159.109,219.975,201.808,262.691,254.487,262.691z"/><path d="M335.269,277.303c-2.07-2.061-11.471-2.588-14.027-1.006c-19.448,11.966-42.271,18.971-66.755,18.971c-24.466,0-47.3-7.005-66.738-18.971c-2.555-1.583-11.956-1.055-14.026,1.006c-16.021,16.004-37.136,51.782-41.384,77.288c-10.474,62.826,56.634,85.508,122.148,85.508c65.532,0,132.639-22.682,122.165-85.508C372.404,329.085,351.289,293.307,335.269,277.303z"/><path d="M76.049,287.525c32.502,0,58.862-26.343,58.862-58.853c0-32.51-26.36-58.871-58.862-58.871c-32.511,0-58.871,26.361-58.871,58.871C17.178,261.182,43.538,287.525,76.049,287.525z"/><path d="M115.094,351.733c2.414-14.353,9.225-31.253,17.764-46.88c-2.38-3.251-4.759-6.083-6.955-8.279c-1.299-1.306-7.097-1.608-8.672-0.636c-11.991,7.374-26.076,11.714-41.182,11.714c-15.108,0-29.202-4.34-41.183-11.714c-1.568-0.972-7.382-0.67-8.681,0.636c-9.887,9.854-22.882,31.915-25.514,47.677c-6.468,38.736,34.924,52.762,75.378,52.762c14.437,0,29.016-1.777,41.459-5.84C113.587,379.108,112.757,365.835,115.094,351.733z"/></svg>
          <h4>Equipo Certificado</h4>
          <p>Operadores habilitados con las certificaciones y permisos necesarios para operar de manera legal.</p>
        </div>
      </div>

      {/* Presentación */}
      <section className="presentacion animado">
        <div className="presentacion-content">
          <h2>Innovación en Limpieza Aérea con Drones</h2>
          <p>En HiDrone, llevamos la excelencia en limpieza aérea a otro nivel con drones de última generación, certificados por DINACIA. Nuestros equipos alcanzan alturas de más de 150 metros y acceden a áreas difíciles o peligrosas, garantizando resultados eficientes, seguros y respetuosos con el medio ambiente.</p>
          <div className="presentacion-ctas">
            <Link href="/sobre-nosotros" className="btn-cta">
              Conoce Más
              <ArrowIcon />
            </Link>
            <a href="https://wa.me/59894010550" className="btn-cta btn-cta--ghost" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              Consultanos
            </a>
          </div>
        </div>
        <div className="presentacion-image">
          <Image
            src="/imagenes/fotoDrone5.webp"
            alt="Dron HiDrone en operación"
            width={600}
            height={400}
            loading="lazy"
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          />
        </div>
      </section>

      {/* Servicio principal */}
      <h2 className="titulo-servicios animado">Nuestro Servicio</h2>
      <div className="seccion-servicios animado">
        <div className="servicio servicio--full">
          <Image
            src="/imagenes/fotoDrone4.webp"
            alt="Servicio de Limpieza con Drones"
            width={800}
            height={320}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 800px"
            style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '8px', marginBottom: '20px' }}
          />
          <h3>Limpieza con Drones</h3>
          <p>Ofrecemos servicios de limpieza aérea para fachadas, ventanas, paneles solares, techos, embarcaciones y más. Nuestros drones equipados con tecnología de ósmosis inversa garantizan una limpieza impecable, segura y eficiente en cualquier tipo de superficie.</p>
          <div className="servicio-features">
            <span>✔ Hasta 1.500 m²/hora</span>
            <span>✔ Acceso a alturas de +150m</span>
            <span>✔ Sin riesgos laborales</span>
          </div>
          <Link href="/limpieza" className="boton">Ver detalles del servicio</Link>
        </div>
      </div>

      {/* Beneficios: por qué elegir drones */}
      <section className="beneficios-section animado">
        <h2>¿Por qué elegir limpieza con drones?</h2>
        <p>Frente a los métodos tradicionales de andamios, cuerdas o hidrolavado manual, la limpieza con drones de HiDrone es más rápida, más segura y más cuidadosa con tus superficies.</p>
        <div className="beneficios-stats">
          <div className="beneficio-stat">
            <div className="valor">1.500 m²</div>
            <div className="etiqueta">limpiados por hora</div>
          </div>
          <div className="beneficio-stat">
            <div className="valor">+150 m</div>
            <div className="etiqueta">de altura sin andamios ni cuerdas</div>
          </div>
          <div className="beneficio-stat">
            <div className="valor">0</div>
            <div className="etiqueta">personal expuesto a riesgo en altura</div>
          </div>
          <div className="beneficio-stat">
            <div className="valor">99%</div>
            <div className="etiqueta">de impurezas eliminadas con ósmosis inversa</div>
          </div>
        </div>
      </section>

      {/* Trabajos Realizados */}
      <section className="trabajos-section" id="trabajos-realizados">
        {/*<div className="trabajos-header animado">
          <h2>Que podemos limpiar?</h2>
          <p>Proyectos completados con éxito en todo Uruguay</p>
        </div>

        <div className="galeria-trabajos">
          {trabajos.map(({ img, titulo, desc, tag }) => (
            <div key={titulo} className="trabajo-item animado">
              <div className="trabajo-img-wrapper">
                <Image
                  src={img}
                  alt={titulo}
                  width={500}
                  height={320}
                  loading="lazy"
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                />
                <span className="trabajo-tag">{tag}</span>
              </div>
              <div className="trabajo-info">
                <h3>{titulo}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>*/}

        {/* Video Section */}
        <div className="video-section animado">
          <h3>Nuestro Trabajo en Acción</h3>
          <p>Mirá cómo operamos nuestros drones en proyectos reales</p>
          <LazyVideo src="/videoHidrone.mp4" title="HiDrone - Limpieza con Drones en Uruguay" />
        </div>

        <div className="trabajos-cta animado">
          <a href="https://wa.me/59894010550" className="btn-contacto" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            Solicitar Presupuesto Gratis
          </a>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* CTA Strip */}
      <section className="cta-strip">
        <div className="cta-strip-content">
          <h2>¿Listo para ver resultados?</h2>
          <p>Contactanos hoy y recibí un presupuesto sin compromiso para tu proyecto.</p>
          <a href="https://wa.me/59894010550" className="btn-contacto" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            Hablar con un especialista
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
