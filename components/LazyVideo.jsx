'use client'
import { useEffect, useRef, useState } from 'react'

export default function LazyVideo({ videoId, src, poster, title = 'Video HiDrone' }) {
  const ref = useRef(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!videoId && !src) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [videoId, src])

  return (
    <div ref={ref} className="lazy-video-wrapper">
      {loaded && src ? (
        <video
          src={src}
          poster={poster}
          title={title}
          controls
          playsInline
          preload="metadata"
        />
      ) : loaded && videoId ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <div className="video-placeholder">
          <div className="video-drone-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.504 21h-.006a1.5 1.5 0 0 1-1.177-2.428l.372-.472c.103-.023.201-.053.31-.067A3.847 3.847 0 0 1 6.504 18a3.756 3.756 0 0 1 .51.036l-.908 1.154a.5.5 0 0 0 .083.703.441.441 0 0 0 .703-.083l1.146-1.46a2.042 2.042 0 0 1 .775.634L7.68 20.427a1.492 1.492 0 0 1-1.176.572z" fill="#00a3e9"/>
              <circle cx="12" cy="12" r="10" stroke="#00a3e9" strokeWidth="1.5" strokeDasharray="4 2"/>
            </svg>
          </div>
          <p className="video-placeholder-text">
            {videoId || src ? 'Cargando video...' : 'Video próximamente disponible'}
          </p>
          <p className="video-placeholder-sub">Seguinos en nuestras redes para ver nuestros trabajos</p>
        </div>
      )}
    </div>
  )
}
