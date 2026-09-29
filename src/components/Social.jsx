import Icon from './Icon.jsx'

const SOCIAL = [
  { name: 'GitHub', icon: 'github', href: 'https://github.com/marcosCabelloFlorido' },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/marcos-jes%C3%BAs-cabello-florido-bb9295336',
  },
]

export default function Social({ className = '' }) {
  return (
    <ul className={`social ${className}`}>
      {SOCIAL.map(({ name, icon, href }) => (
        <li key={name}>
          <a href={href} target="_blank" rel="noreferrer" aria-label={name} title={name}>
            <Icon name={icon} size={20} />
          </a>
        </li>
      ))}
    </ul>
  )
}
