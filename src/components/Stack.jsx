import { STACK } from '../data.js'
import Icon from './Icon.jsx'

export default function Stack() {
  return (
    <section id="stack" className="section">
      <div className="container">
        <header className="section-head section-head-wide">
          <h2 className="section-title">Mi Stack</h2>
          <p className="section-intro">
            Con qué trabajo hoy: lenguajes de siempre, entornos modernos y la
            capa de IA y automatización que sostiene mis proyectos.
          </p>
        </header>

        <div className="stack">
          {STACK.map((group) => (
            <div className="stack-group" key={group.label}>
              <h3 className="group-title">{group.label}</h3>
              <ul className="stack-items">
                {group.items.map(([name, icon]) => (
                  <li key={name}>
                    <span className="stack-icon">
                      <Icon name={icon} size={22} />
                    </span>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
