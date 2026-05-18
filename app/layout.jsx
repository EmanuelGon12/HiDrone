import './estilo.css'

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
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;800&family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
