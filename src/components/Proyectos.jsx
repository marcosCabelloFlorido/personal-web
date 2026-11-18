import { PROYECTOS } from '../data.js'

const SHOTS = ['/apps/facturacion.png', '/apps/valtasy.png', '/apps/doucecreative.png']

function host(url) {
  return new URL(url).host
}

export default function Proyectos() {
  return (
    <section id="proyectos" className="section inverse">
      <div className="container">
        <header className="section-head section-head-wide">
          <h2 className="section-title">Mis proyectos</h2>
          <p className="section-intro">
            Tres aplicaciones en producción: una para facturar, otra para
            gestionar equipos y otra para reservar citas. Todas con código
            abierto en GitHub.
          </p>
        </header>

        <div className="projects">
          {PROYECTOS.map((p, i) => (
            <article className="project" key={p.name}>
              <a
                className="window"
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                aria-label={`Abrir la demo de ${p.name}`}
              >
                <span className="window-bar">
                  <i />
                  <i />
                  <i />
                  <span>{host(p.demo)}</span>
                </span>
                <img
                  src={SHOTS[i]}
                  alt={`Captura de ${p.name}`}
                  width="1440"
                  height="900"
                  loading="lazy"
                />
              </a>
              <div className="project-info">
                <p className="project-kind">{p.kind}</p>
                <h3 className="project-name">{p.name}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-links">
                  <a className="link-plain" href={p.demo} target="_blank" rel="noreferrer">
                    Ver demo
                  </a>
                  {p.repo && (
                    <a className="link-plain" href={p.repo} target="_blank" rel="noreferrer">
                      Código en GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
