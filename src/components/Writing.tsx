'use client';

import { useLang } from '@/context/LangContext';
import { translations } from '@/lib/content';

interface Article { href: string; title: string; subKey: 'blog1_sub' | 'blog2_sub'; date: string; }

const articles: Article[] = [
  {
    href: 'https://medium.com/@josephdsbr/building-a-pix-settlement-simulator-with-java-virtual-threads-9b743f50257c',
    title: 'Building a PIX Settlement Simulator with Java Virtual Threads',
    subKey: 'blog1_sub',
    date: 'Jun 2026',
  },
  {
    href: 'https://medium.com/@josephdsbr',
    title: 'Por que pássaros conseguem voar e humanos não?',
    subKey: 'blog2_sub',
    date: 'Mar 2020',
  },
];

export default function Writing() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section id="writing" style={{ scrollMarginTop: 88, borderTop: '1px solid var(--hairline)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(64px,9vw,128px) 32px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 18, marginBottom: 14 }}>
          <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 13, color: 'var(--accent)' }}>/05</div>
          <h2 style={{ fontSize: 'clamp(32px,4.4vw,56px)', fontWeight: 600, letterSpacing: '-0.025em', margin: 0 }}>{t.secWriting}</h2>
        </div>
        <p style={{ fontSize: 16, color: 'var(--muted)', margin: '0 0 40px' }}>{t.writing_sub}</p>

        {articles.map(article => (
          <a
            key={article.href}
            href={article.href}
            target="_blank" rel="noopener"
            style={{
              display: 'flex', flexWrap: 'wrap', gap: 20,
              justifyContent: 'space-between', alignItems: 'baseline',
              textDecoration: 'none', color: 'var(--ink)',
              padding: '26px 0', borderTop: '1px solid var(--hairline)',
              transition: 'color 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink)')}
          >
            <div style={{ flex: '1 1 420px' }}>
              <h3 style={{ fontSize: 'clamp(19px,1.8vw,24px)', fontWeight: 600, letterSpacing: '-0.01em', margin: '0 0 8px' }}>{article.title}</h3>
              <p style={{ fontSize: 15, color: 'var(--muted)', margin: 0 }}>{t[article.subKey]}</p>
            </div>
            <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 13, color: 'var(--faint)', whiteSpace: 'nowrap' }}>{article.date} ↗</span>
          </a>
        ))}

        <a
          href="https://medium.com/@josephdsbr" target="_blank" rel="noopener"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 30,
            fontFamily: 'var(--font-mono), monospace', fontSize: 13, color: 'var(--ink)',
            textDecoration: 'none', borderBottom: '1px solid #C9C2B4', paddingBottom: 2,
            transition: 'color 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink)')}
        >
          {t.writing_all} ↗
        </a>
      </div>
    </section>
  );
}
