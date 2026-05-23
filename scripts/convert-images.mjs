import sharp from 'sharp'
import { readdir } from 'fs/promises'
import path from 'path'

const imgDir = new URL('../public/imagenes/', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1')

const targets = [
  { src: 'Fixed_Tilt_Solar_panel_at_Canterbury_Municipal_Building_Canterbury_New_Hampshire.jpg', dst: 'solar-panel.webp', width: 1200 },
  { src: 'fachadaEdificio.jpeg',           dst: 'fachadaEdificio.webp',       width: 1200 },
  { src: 'fotoDrone4.png',                 dst: 'fotoDrone4.webp',             width: 1200 },
  { src: 'fotoDrone2.png',                 dst: 'fotoDrone2.webp',             width: 1200 },
  { src: 'fotoDrone3.png',                 dst: 'fotoDrone3.webp',             width: 1200 },
  { src: 'fotoDrone1.png',                 dst: 'fotoDrone1.webp',             width: 1200 },
  { src: 'drones-para-agricultura-1.png',  dst: 'drones-para-agricultura-1.webp', width: 1200 },
  { src: 'cruise-1578528_1280.jpg',        dst: 'cruise-1578528_1280.webp',    width: 1200 },
  { src: 'fachadas-casas-modernas-tempo-smoke-grespaniac-1-683x1024.jpg', dst: 'fachada-residencial.webp', width: 800 },
  { src: 'eolico.jpeg',                    dst: 'eolico.webp',                 width: 1000 },
  { src: 'istockphoto-481846822-612x612.jpg', dst: 'ventana-limpieza.webp',    width: 800 },
  { src: 'file_01730700462067.jpg',        dst: 'embarcacion.webp',            width: 1000 },
  { src: '13970387-seat-in-football-field.jpg', dst: 'estadio.webp',          width: 1000 },
  { src: 'osmosis2.jpg',                   dst: 'osmosis2.webp',               width: 900 },
]

for (const { src, dst, width } of targets) {
  const srcPath = path.join(imgDir, src)
  const dstPath = path.join(imgDir, dst)
  try {
    await sharp(srcPath)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(dstPath)
    const { size: s1 } = await import('fs').then(m => m.promises.stat(srcPath))
    const { size: s2 } = await import('fs').then(m => m.promises.stat(dstPath))
    console.log(`✓ ${src} (${Math.round(s1/1024)}KB) → ${dst} (${Math.round(s2/1024)}KB) — saved ${Math.round((1-s2/s1)*100)}%`)
  } catch (e) {
    console.error(`✗ ${src}: ${e.message}`)
  }
}
