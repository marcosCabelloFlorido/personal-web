import { BRAND } from '../icons.js'

const GLYPH = {
  bot: (
    <>
      <rect x="4" y="8" width="16" height="11" rx="3" />
      <path d="M12 8V5" />
      <circle cx="12" cy="4" r="1" />
      <path d="M9 13.5h.01M15 13.5h.01" strokeWidth="2.4" />
    </>
  ),
  sparkles: (
    <>
      <path d="M11 3l1.9 5.1L18 10l-5.1 1.9L11 17l-1.9-5.1L4 10l5.1-1.9z" />
      <path d="M19 16v4M17 18h4" />
    </>
  ),
  db: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </>
  ),
  webhook: (
    <>
      <circle cx="12" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M11 8.3l-4 7.4M13 8.3l4 7.4M8.5 18h7" />
    </>
  ),
  table: (
    <>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M4 10h16M4 14.5h16M10 10v9" />
    </>
  ),
  arrow: <path d="M7 17 17 7M8 7h9v9" />,
  braces: (
    <path d="M8 4c-2 0-3 1-3 3v2c0 1-1 2-2 3 1 1 2 2 2 3v2c0 2 1 3 3 3M16 4c2 0 3 1 3 3v2c0 1 1 2 2 3-1 1-2 2-2 3v2c0 2-1 3-3 3" />
  ),
}

export function GmailColor({ size = 24 }) {
  return (
    <svg width={size * 1.33} height={size} viewBox="52 42 88 66" aria-hidden="true">
      <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
      <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
      <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" />
      <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
      <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2" />
    </svg>
  )
}

export default function Icon({ name, size = 24, ...rest }) {
  const brand = BRAND[name]
  if (brand) {
    return (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${brand.vb} ${brand.vb}`}
        fill="currentColor"
        aria-hidden="true"
        {...rest}
      >
        <path d={brand.d} />
      </svg>
    )
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {GLYPH[name]}
    </svg>
  )
}
