'use client';

import { useLang } from '@/context/LangContext';
import { translations } from '@/lib/content';

export default function About() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section id="about" style={{ scrollMarginTop: 88, borderTop: '1px solid var(--hairline)' }}>
      <div style={{
        maxWidth: 1180, margin: '0 auto',
        padding: 'clamp(64px,9vw,128px) 32px',
        display: 'flex', flexWrap: 'wrap', gap: 'clamp(36px,5vw,80px)',
      }}>
        <div style={{ flex: '0 0 auto', width: 180, minWidth: 140 }}>
          <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 13, color: 'var(--accent)', marginBottom: 8 }}>/01</div>
          <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 14, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--muted)' }}>{t.secAbout}</div>
        </div>
        <div style={{ flex: '1 1 480px', minWidth: 300 }}>
          <p style={{ fontSize: 'clamp(22px,2.4vw,32px)', lineHeight: 1.4, fontWeight: 500, letterSpacing: '-0.01em', margin: '0 0 28px' }}>
            {t.about_p1}
          </p>
          <p style={{ fontSize: 'clamp(16px,1.3vw,18px)', lineHeight: 1.7, color: 'var(--body)', margin: '0 0 36px', maxWidth: 620 }}>
            {t.about_p2}
          </p>
          <blockquote style={{
            margin: 0, padding: '22px 26px',
            borderLeft: '3px solid var(--accent)',
            background: 'var(--surface)', borderRadius: '0 10px 10px 0',
            fontSize: 'clamp(18px,1.6vw,22px)', fontWeight: 500, lineHeight: 1.4,
          }}>
            {t.pullquote}
          </blockquote>
        </div>
      </div>
    </section>
  );
}
