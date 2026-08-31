export default function TrustBar() {
  return (
    <div className="trust-bar animado">
      <div className="trust-bar-inner">
        <div className="trust-item">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L3 6v6c0 5.25 3.6 9.74 9 11 5.4-1.26 9-5.75 9-11V6l-9-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
            <path d="M8.5 12.2l2.4 2.4 4.6-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span><strong>Certificados por DINACIA</strong> — operación de drones autorizada en Uruguay</span>
        </div>
        <div className="trust-divider" aria-hidden="true" />
        <div className="trust-item">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12.5l5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Trabajos <strong>100% autorizados y legales</strong></span>
        </div>
        <div className="trust-divider" aria-hidden="true" />
        <div className="trust-item">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.6"/>
            <path d="M5 20c0-3.6 3.13-6 7-6s7 2.4 7 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
          <span><strong>Pilotos con licencia RPAS</strong> habilitados por DINACIA</span>
        </div>
      </div>
    </div>
  )
}
