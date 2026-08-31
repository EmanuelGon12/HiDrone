'use client'
import { useState } from 'react'

const faqs = [
  {
    q: '¿HiDrone está autorizada por DINACIA para operar drones en Uruguay?',
    a: 'Sí. Operamos con drones registrados y pilotos con licencia RPAS habilitados por DINACIA (Dirección Nacional de Aviación Civil e Infraestructura Aeronáutica), cumpliendo toda la normativa vigente para vuelos comerciales en Uruguay. Cada trabajo se realiza dentro del marco legal correspondiente.',
  },
  {
    q: '¿Qué es la limpieza con drones y cómo funciona?',
    a: 'Es un método de limpieza aérea que usa drones equipados con sistemas de agua purificada por ósmosis inversa para lavar fachadas, vidrios, paneles solares y otras superficies en altura, sin necesidad de andamios, cuerdas ni grúas.',
  },
  {
    q: '¿Por qué usar drones de limpieza en vez de métodos tradicionales?',
    a: 'Los drones eliminan el riesgo de trabajos en altura, cubren hasta 1.500 m² por hora (varias veces más rápido que un equipo con cuerdas o andamios), no requieren montaje de estructuras y usan agua tratada por ósmosis inversa que no deja residuos ni manchas, cuidando la superficie y el medio ambiente.',
  },
  {
    q: '¿Es segura la limpieza con drones en fachadas y alturas?',
    a: 'Sí. Al no depender de personal trabajando físicamente en altura, se elimina el riesgo laboral más grande de este tipo de tareas. Además, cada operación se planifica con protocolos de seguridad estrictos y pilotos certificados.',
  },
  {
    q: '¿Qué superficies pueden limpiarse con drones?',
    a: 'Fachadas, ventanas y vidrios en edificios altos, paneles solares, techos, aspas de aerogeneradores, embarcaciones y yates, carteles publicitarios y estructuras industriales de difícil acceso.',
  },
  {
    q: '¿Cuánto cuesta el servicio de limpieza con drones?',
    a: 'El precio depende de la superficie a limpiar, la altura y el tipo de estructura. Escribinos por WhatsApp y coordinamos una evaluación para enviarte un presupuesto sin cargo ni compromiso.',
  },
  {
    q: '¿En qué zonas de Uruguay trabajan?',
    a: 'Estamos ubicados en Punta del Este y operamos en todo el territorio uruguayo, incluyendo Montevideo, Maldonado y el resto del país.',
  },
  {
    q: '¿Cuánto tiempo demora un servicio de limpieza con drones?',
    a: 'Gracias a nuestra velocidad de trabajo (hasta 1.500 m²/hora) la mayoría de los proyectos se completan en horas, no en días, minimizando la interrupción de tus operaciones habituales.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  }

  return (
    <section className="faq-section animado" id="preguntas-frecuentes">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="faq-header">
        <span className="faq-eyebrow">Preguntas Frecuentes</span>
        <h2>Todo sobre la limpieza con drones en Uruguay</h2>
        <p>Resolvé tus dudas sobre nuestro servicio, la seguridad y la certificación DINACIA.</p>
      </div>

      <div className="faq-list">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div className={`faq-item ${isOpen ? 'open' : ''}`} key={item.q}>
              <button
                className="faq-question"
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${i}`}
              >
                <span>{item.q}</span>
                <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="faq-answer" id={`faq-answer-${i}`} role="region">
                <p>{item.a}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
