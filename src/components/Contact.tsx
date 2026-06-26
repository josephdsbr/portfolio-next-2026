'use client';

import { useLang } from '@/context/LangContext';
import { translations } from '@/lib/content';

export default function Contact() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section id="contact" style={{ scrollMarginTop: 88, borderTop: '1px solid var(--hairline)', background: 'var(--ink)', color: 'var(--paper)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(72px,10vw,140px) 32px' }}>
        <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 13, color: 'var(--accent)', marginBottom: 22 }}>
          /06 · {t.nav_contact}
        </div>
        <h2 style={{ fontSize: 'clamp(40px,6vw,88px)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1, margin: '0 0 28px' }}>
          {t.contact_head}
        </h2>
        <p style={{ fontSize: 'clamp(17px,1.5vw,21px)', lineHeight: 1.6, color: 'var(--dark-muted)', maxWidth: 520, margin: '0 0 44px' }}>
          {t.contact_sub}
        </p>
        <a
          href="mailto:josephdsbr@gmail.com"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            background: 'var(--paper)', color: 'var(--ink)',
            textDecoration: 'none', padding: '16px 30px', borderRadius: 999,
            fontSize: 'clamp(16px,1.5vw,19px)', fontWeight: 600, transition: 'all 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = 'var(--paper)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--paper)'; e.currentTarget.style.color = 'var(--ink)'; }}
        >
          josephdsbr@gmail.com <span>→</span>
        </a>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28, marginTop: 56, fontFamily: 'var(--font-mono), monospace', fontSize: 14 }}>
          {[
            { href: 'https://www.linkedin.com/in/josephdsbr/', label: 'LinkedIn' },
            { href: 'https://github.com/josephdsbr', label: 'GitHub' },
            { href: 'https://medium.com/@josephdsbr', label: 'Medium' },
            { href: 'https://wa.me/5581997667754', label: 'WhatsApp' },
          ].map(link => (
            <a
              key={link.href}
              href={link.href}
              target="_blank" rel="noopener"
              style={{ color: 'var(--dark-muted)', textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--paper)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--dark-muted)')}
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--dark-border-deep)' }}>
        <div style={{
          maxWidth: 1180, margin: '0 auto', padding: '24px 32px',
          display: 'flex', flexWrap: 'wrap', gap: 14,
          justifyContent: 'space-between',
          fontFamily: 'var(--font-mono), monospace', fontSize: 12, color: '#807A6E',
        }}>
          <span>© 2026 José Vinícius Santos de Melo</span>
          <span>{t.footer_note}</span>
        </div>
      </div>
    </section>
  );
}
