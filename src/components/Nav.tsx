'use client';

import { useLang } from '@/context/LangContext';
import { translations } from '@/lib/content';

export default function Nav({ showWriting = true }: { showWriting?: boolean }) {
  const { lang, setLang } = useLang();
  const t = translations[lang];

  const linkStyle: React.CSSProperties = {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: 13,
    color: 'var(--ink)',
    textDecoration: 'none',
    transition: 'color 0.15s',
  };

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(244,241,234,0.82)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--hairline)',
    }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '14px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', color: 'var(--ink)' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, border: '1.5px solid var(--ink)', borderRadius: 7, fontWeight: 700, fontSize: 15, letterSpacing: '0.5px' }}>JV</span>
          <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 13, color: 'var(--muted)', letterSpacing: '0.3px' }}>josephdsbr</span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 26 }}>
            {([
              ['#about', t.nav_about],
              ['#experience', t.nav_exp],
              ['#projects', t.nav_proj],
              ['#skills', t.nav_skills],
              ...(showWriting ? [['#writing', t.nav_writing]] as [string,string][] : []),
              ['#contact', t.nav_contact],
            ] as [string, string][]).map(([href, label]) => (
              <a
                key={href}
                href={href}
                style={linkStyle}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink)')}
              >
                {label}
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--hairline)', borderRadius: 999, overflow: 'hidden', fontFamily: 'var(--font-mono), monospace', fontSize: 12 }}>
            {(['pt','en'] as const).map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  padding: '7px 13px', border: 'none', cursor: 'pointer',
                  fontFamily: 'var(--font-mono), monospace', fontSize: 12,
                  background: lang === l ? 'var(--ink)' : 'transparent',
                  color: lang === l ? 'var(--paper)' : 'var(--muted)',
                  transition: 'all 0.15s',
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
