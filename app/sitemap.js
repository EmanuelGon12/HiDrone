export const dynamic = 'force-static'

export default function sitemap() {
  const base = 'https://hidroneuy.com'
  const routes = [
    { path: '/', priority: 1, changeFrequency: 'monthly' },
    { path: '/limpieza', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/fumigacion', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/sobre-nosotros', priority: 0.7, changeFrequency: 'yearly' },
  ]

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
