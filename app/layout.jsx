import './estilo.css'
import { Raleway, Montserrat, Open_Sans } from 'next/font/google'
import WhatsAppFloat from '@/components/WhatsAppFloat'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  variable: '--font-raleway',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://hidroneuy.com'),
  title: {
    default: 'HiDrone | Drone de Limpieza para Edificios y Limpieza en Altura — Uruguay',
    template: '%s',
  },
  description: 'HiDrone: drone de limpieza para edificios en Uruguay, certificado por DINACIA. Limpieza en alturas de fachadas, vidrios y paneles solares sin andamios ni riesgos. Presupuesto gratis.',
  keywords: 'drone de limpieza, drones de limpieza, drone de limpieza Uruguay, limpieza con drones Uruguay, limpieza de edificios, limpieza de edificios en altura, limpieza en alturas, limpieza en altura Uruguay, limpieza en altura sin andamios, empresa de limpieza en altura Uruguay, limpieza de edificios Montevideo, limpieza de fachadas con drones, limpieza de paneles solares, limpieza de ventanas en altura, limpieza industrial con drones, limpieza aérea Uruguay, DINACIA drones, HiDrone Uruguay, empresa de drones Montevideo, empresa de drones Punta del Este',
  authors: [{ name: 'HiDrone Uruguay' }],
  robots: 'index, follow',
  openGraph: {
    title: 'HiDrone | Drone de Limpieza para Edificios y Limpieza en Altura',
    description: 'Servicios profesionales de limpieza de edificios y limpieza en altura con drones en todo Uruguay. Operación 100% autorizada por DINACIA.',
    url: 'https://hidroneuy.com/',
    siteName: 'HiDrone Uruguay',
    type: 'website',
    locale: 'es_UY',
    images: [{ url: 'https://hidroneuy.com/imagenes/fotoDrone1.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HiDrone | Drone de Limpieza para Edificios y Limpieza en Altura',
    description: 'Limpieza en altura de edificios, fachadas y paneles solares con drones. Segura, rápida y ecológica. Certificados por DINACIA.',
    images: ['https://hidroneuy.com/imagenes/fotoDrone1.png'],
  },
  alternates: {
    canonical: 'https://hidroneuy.com/',
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'HiDrone Uruguay',
  alternateName: 'HiDrone - Drone de Limpieza Uruguay',
  description: 'Empresa de limpieza de edificios y limpieza en altura con drones en Uruguay, certificada por DINACIA. Fachadas, vidrios, paneles solares, techos, embarcaciones y fumigación aérea.',
  url: 'https://hidroneuy.com/',
  telephone: '+59894010550',
  email: 'info@hidroneuy.com',
  image: 'https://hidroneuy.com/imagenes/fotoDrone1.png',
  areaServed: {
    '@type': 'Country',
    name: 'Uruguay',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Punta del Este',
    addressRegion: 'Maldonado',
    addressCountry: 'UY',
  },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'Habilitación de operador de drones (DINACIA)',
  },
  priceRange: '$$',
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Limpieza de edificios en altura con drones',
        description: 'Limpieza en alturas de fachadas y edificios sin andamios ni cuerdas, usando drones certificados por DINACIA.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Limpieza de fachadas y vidrios con drones',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Limpieza de paneles solares con drones',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Limpieza de techos y estructuras industriales con drones',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Fumigación aérea con drones',
      },
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${raleway.variable} ${montserrat.variable} ${openSans.variable}`}
    >
      <head>
        {/* Preload LCP hero image */}
        <link
          rel="preload"
          as="image"
          href="/punta-del-este-3.webp"
          type="image/webp"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  )
}
