import { FORMACION, TRAYECTORIA } from '../data.js'

function Timeline({ title, items }) {
  return (
    <div className="timeline-group">
      <h3 className="group-title">{title}</h3>
      <ol className="timeline">
        {items.map((item) => (
          <li className="row" key={item.title}>
            <p className="row-period">{item.period}</p>
            <h4 className="row-title">{item.title}</h4>
            <p className="row-org">{item.org}</p>
            <p className="row-desc">{item.desc}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function Historia() {
  return (
    <section id="historia" className="section">
      <div className="container split">
        <header className="section-head">
          <h2 className="section-title">Mi historia</h2>
          <p className="section-intro">
            Empecé en el desarrollo web y acabé construyendo la capa de
            inteligencia artificial de productos reales.
          </p>
        </header>
        <div>
          <Timeline title="Trayectoria" items={TRAYECTORIA} />
          <Timeline title="Formación" items={FORMACION} />
        </div>
      </div>
    </section>
  )
}
