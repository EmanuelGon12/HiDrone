import './estilo.css'
import { Raleway, Montserrat, Open_Sans } from 'next/font/google'

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
  title: 'HiDrone | Limpieza con Drones en Uruguay',
  description: 'HiDrone ofrece limpieza con drones en Uruguay. Fachadas, vidrios, paneles solares, techos y más. Rápido, seguro y ecológico.',
  keywords: 'limpieza con drones, drones Uruguay, limpieza fachadas, limpieza paneles solares, limpieza industrial, limpieza aérea, HiDrone Uruguay',
  authors: [{ name: 'HiDrone Uruguay' }],
  robots: 'index, follow',
  openGraph: {
    title: 'HiDrone | Limpieza con Drones en Uruguay',
    description: 'Servicios profesionales de limpieza aérea con drones en todo Uruguay.',
    url: 'https://hidroneuy.com/',
    type: 'website',
    locale: 'es_UY',
    images: [{ url: 'https://hidroneuy.com/imagenes/fotoDrone1.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HiDrone | Limpieza con Drones en Uruguay',
    description: 'Tecnología drone para limpieza segura, rápida y ecológica en Uruguay.',
    images: ['https://hidroneuy.com/imagenes/fotoDrone1.png'],
  },
  alternates: {
    canonical: 'https://hidroneuy.com/',
  },
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
      </head>
      <body>{children}</body>
    </html>
  )
}
