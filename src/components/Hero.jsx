import Icon from './Icon.jsx'

// Nodo cuadrado estilo n8n con icono centrado.
function Node({ x, y, w = 76, h = 76, icon, delay, size = 34 }) {
  return (
    <g className="wf-node" style={{ '--d': `${delay}s` }}>
      <rect x={x} y={y} width={w} height={h} rx="18" />
      <Icon
        name={icon}
        size={size}
        x={x + (w - size) / 2}
        y={y + (h - size) / 2 - (h > 90 ? 12 : 0)}
      />
    </g>
  )
}

function Label({ x, y, children, delay }) {
  return (
    <text className="wf-label" x={x} y={y} textAnchor="middle" style={{ '--d': `${delay}s` }}>
      {children}
    </text>
  )
}

function Wire({ d, delay, dashed }) {
  return (
    <path
      className={`wf-wire${dashed ? ' wf-wire-dashed' : ''}`}
      d={d}
      pathLength="1"
      style={{ '--d': `${delay}s` }}
    />
  )
}

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 className="hero-name">
            <span className="line">Marcos</span>
            <span className="line">Cabello Florido</span>
          </h1>
          <p className="hero-role">AI Engineer y desarrollador full-stack.</p>
          <p className="hero-text">
            Integro inteligencia artificial dentro de aplicaciones web reales:
            CRMs a medida, servidores MCP para agentes y automatizaciones con
            n8n. Puedes ver lo que hago en <a href="#proyectos">mis proyectos</a>{' '}
            o conocer mi recorrido en <a href="#historia">mi historia</a>.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="#proyectos">
              Ver proyectos
            </a>
            <a className="btn btn-ghost" href="#contacto">
              Contactar
            </a>
          </div>
        </div>

        <figure className="flow">
          <figcaption className="flow-bar">
            <Icon name="n8n" size={18} />
            Flujo de n8n
            <span className="flow-note">Ejemplo</span>
          </figcaption>
          <svg
            className="flow-canvas"
            viewBox="0 0 560 380"
            role="img"
            aria-label="Flujo de n8n: un webhook lanza el flujo, un agente de IA con Claude, ChatGPT y Gemini lo procesa y Gmail envía la respuesta."
          >
            <Wire d="M100 150H232" delay={0.4} />
            <Wire d="M328 150H460" delay={0.9} />
            <Wire d="M170 274C170 240 252 250 252 208" delay={1.3} dashed />
            <Wire d="M280 274V208" delay={1.45} dashed />
            <Wire d="M390 274C390 240 308 250 308 208" delay={1.6} dashed />

            <Node x={24} y={112} icon="webhook" delay={0.1} />
            <Label x={62} y={222} delay={0.2}>Webhook</Label>

            <g className="wf-node wf-agent" style={{ '--d': '0.6s' }}>
              <rect x="232" y="92" width="96" height="116" rx="20" />
              <Icon name="bot" size={36} x={262} y={116} />
              <text x="280" y="184" textAnchor="middle">Agente de IA</text>
            </g>

            <Node x={460} y={112} icon="gmail" delay={1.1} />
            <Label x={498} y={222} delay={1.2}>Respuesta</Label>

            {[
              [170, 'claude', 'Claude', 1.5],
              [280, 'openai', 'ChatGPT', 1.65],
              [390, 'gemini', 'Gemini', 1.8],
            ].map(([cx, icon, name, delay]) => (
              <g key={name}>
                <g className="wf-node wf-model" style={{ '--d': `${delay}s` }}>
                  <circle cx={cx} cy="300" r="26" />
                  <Icon name={icon} size={24} x={cx - 12} y={288} />
                </g>
                <Label x={cx} y={352} delay={delay}>
                  {name}
                </Label>
              </g>
            ))}
          </svg>
        </figure>
      </div>
    </section>
  )
}
