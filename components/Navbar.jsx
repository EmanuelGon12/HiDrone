'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <header className="header" ref={menuRef}>
      <div className="logo">
        <Link href="/" onClick={close}>
          <Image
            src="/Logo Hidrone.jpg"
            alt="Logo HiDrone"
            width={120}
            height={80}
            style={{ height: '70px', width: 'auto' }}
            priority
          />
        </Link>
      </div>

      <button
        className="toggle-btn"
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Nav desktop */}
      <nav className="nav" aria-label="Navegación principal">
        <Link href="/">Inicio</Link>
        <Link href="/sobre-nosotros">Sobre Nosotros</Link>
        <Link href="/limpieza">Limpieza</Link>
        <Link href="/fumigacion">Fumigación</Link>
        <Link href="/#trabajos-realizados">Trabajos</Link>
        <Link href="/#preguntas-frecuentes">FAQ</Link>
        <a
          href="https://wa.me/59894010550"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          Contacto
        </a>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <Link href="/" onClick={close}>Inicio</Link>
        <Link href="/sobre-nosotros" onClick={close}>Sobre Nosotros</Link>
        <Link href="/limpieza" onClick={close}>Limpieza</Link>
        <Link href="/fumigacion" onClick={close}>Fumigación</Link>
        <Link href="/#trabajos-realizados" onClick={close}>Trabajos</Link>
        <Link href="/#preguntas-frecuentes" onClick={close}>Preguntas Frecuentes</Link>
        <a
          href="https://wa.me/59894010550"
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
          className="mobile-cta"
        >
          Contacto por WhatsApp
        </a>
      </div>
    </header>
  )
}
