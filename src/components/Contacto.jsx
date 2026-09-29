import Icon, { GmailColor } from './Icon.jsx'

const EMAIL = 'marcoscabelloflorido084@gmail.com'
const GMAIL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent('Hablemos de un proyecto')}`

const LINKS = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/marcos-jes%C3%BAs-cabello-florido-bb9295336',
  },
  { name: 'GitHub', href: 'https://github.com/marcosCabelloFlorido' },
  {
    name: 'App de Facturación',
    href: 'https://github.com/marcosCabelloFlorido/app-facturacion',
  },
  { name: 'Valtasy', href: 'https://github.com/marcosCabelloFlorido/Grupo4' },
]

export default function Contacto() {
  return (
    <section id="contacto" className="section contact">
      <div className="container contact-grid">
        <div>
          <h2 className="contact-title">¿Hablamos?</h2>
          <p className="contact-text">
            Si tienes un proyecto donde la inteligencia artificial tenga que
            vivir dentro de una web real —un CRM, un agente, una
            automatización— escríbeme. Todo lo que hago está abierto en GitHub.
          </p>
          <a
            className="contact-mail"
            href={GMAIL}
            target="_blank"
            rel="noreferrer"
          >
            <GmailColor size={22} />
            Escribir por Gmail
          </a>
        </div>

        <ul className="contact-list">
          {LINKS.map(({ name, href }) => (
            <li key={name}>
              <a href={href} target="_blank" rel="noreferrer">
                <span>{name}</span>
                <Icon name="arrow" size={20} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
