'use client';

import { useLang } from '@/context/LangContext';
import { translations, experience } from '@/lib/content';

export default function Experience() {
  const { lang } = useLang();
  const t = translations[lang];
  const jobs = experience[lang];

  return (
    <section id="experience" style={{ scrollMarginTop: 88, borderTop: '1px solid var(--hairline)', background: 'var(--surface)' }}>
      <div style={{
        maxWidth: 1180, margin: '0 auto',
        padding: 'clamp(64px,9vw,128px) 32px',
        display: 'flex', flexWrap: 'wrap', gap: 'clamp(36px,5vw,80px)',
      }}>
        <div style={{ flex: '0 0 auto', width: 180, minWidth: 140 }}>
          <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 13, color: 'var(--accent)', marginBottom: 8 }}>/02</div>
          <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 14, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--muted)' }}>{t.secExp}</div>
        </div>

        <div style={{ flex: '1 1 480px', minWidth: 300 }}>
          {jobs.map((job, i) => (
            <div key={i} style={{ display: 'flex', gap: 22, padding: '30px 0', borderTop: '1px solid var(--divider)' }}>
              <div style={{ flexShrink: 0, paddingTop: 8 }}>
                <span style={job.current ? {
                  display: 'block', width: 10, height: 10, borderRadius: 999,
                  background: 'var(--accent)',
                } : {
                  display: 'block', width: 10, height: 10, borderRadius: 999,
                  border: '2px solid #C9C2B4', background: 'var(--surface)',
                }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 12.5, color: 'var(--faint)', marginBottom: 8 }}>
                  {job.period} · {job.loc}
                </div>
                <h3 style={{ fontSize: 'clamp(19px,2vw,25px)', fontWeight: 600, margin: '0 0 4px', letterSpacing: '-0.01em' }}>{job.role}</h3>
                <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 13, color: job.current ? 'var(--accent)' : 'var(--muted)' }}>{job.company}</div>
                <p style={{ fontSize: 15.5, lineHeight: 1.65, color: 'var(--body)', margin: '0 0 14px', maxWidth: 600 }}>{job.desc}</p>
                {job.tags.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {job.tags.map(tag => (
                      <span key={tag} style={{
                        fontFamily: 'var(--font-mono), monospace', fontSize: 12,
                        padding: '5px 11px', border: '1px solid var(--hairline)',
                        borderRadius: 999, color: 'var(--body)',
                      }}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          <a
            href="https://www.linkedin.com/in/josephdsbr/"
            target="_blank" rel="noopener"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              marginTop: 30, marginLeft: 32,
              fontFamily: 'var(--font-mono), monospace', fontSize: 13,
              color: 'var(--ink)', textDecoration: 'none',
              borderBottom: '1px solid #C9C2B4', paddingBottom: 2,
              transition: 'color 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink)')}
          >
            {t.exp_more} ↗
          </a>
        </div>
      </div>
    </section>
  );
}
