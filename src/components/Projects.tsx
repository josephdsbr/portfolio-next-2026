'use client';

import { useLang } from '@/context/LangContext';
import { translations } from '@/lib/content';

function Tag({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <span style={{
      fontFamily: 'var(--font-mono), monospace', fontSize: 12,
      padding: '5px 11px',
      border: `1px solid ${dark ? 'var(--dark-border)' : 'var(--hairline)'}`,
      borderRadius: 999,
      color: dark ? 'var(--dark-muted)' : 'var(--body)',
    }}>{label}</span>
  );
}

function DarkOutlineLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href} target="_blank" rel="noopener"
      style={{
        fontFamily: 'var(--font-mono), monospace', fontSize: 13,
        color: 'var(--paper)', textDecoration: 'none',
        display: 'inline-flex', alignItems: 'center', gap: 8,
        border: '1px solid var(--dark-border)', padding: '11px 18px', borderRadius: 999,
        transition: 'border-color 0.15s',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--dark-border)')}
    >
      {label} ↗
    </a>
  );
}

function SurfaceCard({ company, metric, title, desc, tags, href }: {
  company: string; metric?: string; title: string; desc: string; tags: string[]; href?: string;
}) {
  const inner = (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'auto' }}>
        <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 12, color: 'var(--faint)' }}>{company}</span>
        {metric && <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 11, color: '#B6AFA2' }}>{metric}</span>}
      </div>
      <h3 style={{ fontSize: 21, fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.15, margin: '24px 0 10px' }}>{title}</h3>
      <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--body)', margin: '0 0 18px' }}>{desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {tags.map(t => <Tag key={t} label={t} />)}
      </div>
    </>
  );

  const baseStyle: React.CSSProperties = {
    color: 'var(--ink)', background: 'var(--surface)',
    border: '1px solid var(--hairline)',
    borderRadius: 16, padding: 28,
    display: 'flex', flexDirection: 'column',
    transition: 'border-color 0.15s',
    textDecoration: 'none',
  };

  if (href) {
    return (
      <a
        href={href} target="_blank" rel="noopener"
        style={baseStyle}
        onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
        onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--hairline)')}
      >
        {inner}
      </a>
    );
  }
  return <div style={baseStyle}>{inner}</div>;
}

export default function Projects() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section id="projects" style={{ scrollMarginTop: 88, borderTop: '1px solid var(--hairline)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(64px,9vw,128px) 32px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 18, marginBottom: 48 }}>
          <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 13, color: 'var(--accent)' }}>/03</div>
          <h2 style={{ fontSize: 'clamp(32px,4.4vw,56px)', fontWeight: 600, letterSpacing: '-0.025em', margin: 0 }}>{t.secProj}</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 18 }}>
          {/* Featured: Red Ventures */}
          <div style={{
            gridColumn: '1 / -1', background: 'var(--ink)', borderRadius: 16,
            padding: 'clamp(28px,3.5vw,44px)',
            display: 'flex', flexWrap: 'wrap', gap: 28,
            justifyContent: 'space-between', alignItems: 'flex-end', overflow: 'hidden',
          }}>
            <div style={{ flex: '1 1 360px' }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 18 }}>
                <span style={{
                  fontFamily: 'var(--font-mono), monospace', fontSize: 12,
                  color: 'var(--paper)', background: 'var(--accent)',
                  padding: '4px 10px', borderRadius: 999,
                }}>{t.proj_featured_label}</span>
                <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 12, color: 'var(--dark-muted2)' }}>
                  Red Ventures · {t.proj1_meta}
                </span>
              </div>
              <h3 style={{
                fontSize: 'clamp(24px,2.8vw,38px)', fontWeight: 600,
                letterSpacing: '-0.02em', lineHeight: 1.08, margin: '0 0 14px',
                color: 'var(--paper)',
              }}>{t.proj1_title}</h3>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--dark-muted)', margin: '0 0 22px', maxWidth: 520 }}>{t.proj1_desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Next.js','React','TypeScript','CRO'].map(tag => <Tag key={tag} label={tag} dark />)}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <DarkOutlineLink href="https://choosetexaspower.com/" label="ChooseTexasPower" />
              <DarkOutlineLink href="https://www.usgande.com/" label="usgande.com" />
            </div>
          </div>

          {/* Featured: Livelo */}
          <div style={{
            gridColumn: '1 / -1', background: 'var(--ink)', borderRadius: 16,
            padding: 'clamp(28px,3.5vw,44px)',
            display: 'flex', flexWrap: 'wrap', gap: 28,
            justifyContent: 'space-between', alignItems: 'flex-end', overflow: 'hidden',
          }}>
            <div style={{ flex: '1 1 360px' }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 18 }}>
                <span style={{
                  fontFamily: 'var(--font-mono), monospace', fontSize: 12,
                  color: 'var(--paper)', background: 'var(--accent)',
                  padding: '4px 10px', borderRadius: 999,
                }}>{t.proj_featured_label}</span>
                <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 12, color: 'var(--dark-muted2)' }}>Livelo</span>
              </div>
              <h3 style={{
                fontSize: 'clamp(24px,2.8vw,38px)', fontWeight: 600,
                letterSpacing: '-0.02em', lineHeight: 1.08, margin: '0 0 14px',
                color: 'var(--paper)',
              }}>{t.proj5_title}</h3>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--dark-muted)', margin: '0 0 22px', maxWidth: 540 }}>{t.proj5_desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Java','PIX','React Native','Batch'].map(tag => <Tag key={tag} label={tag} dark />)}
              </div>
            </div>
            <div style={{ border: '1px solid var(--dark-border)', borderRadius: 12, padding: '18px 22px', minWidth: 180 }}>
              <div style={{
                fontFamily: 'var(--font-mono), monospace', fontSize: 11,
                letterSpacing: '0.5px', textTransform: 'uppercase', color: '#807A6E', marginBottom: 8,
              }}>{t.proj5_stat_k}</div>
              <div style={{ fontSize: 'clamp(22px,2.4vw,30px)', fontWeight: 600, color: 'var(--paper)', lineHeight: 1.05 }}>{t.proj5_stat_v}</div>
            </div>
          </div>

          <SurfaceCard company="PagSeguro · PagBank" metric="~3–4M/dia" title={t.proj2_title} desc={t.proj2_desc} tags={['Java','Spring Cloud','Kafka']} />
          <SurfaceCard company="Dcifre" title={t.proj3_title} desc={t.proj3_desc} tags={['Open Finance','APIs','Backend']} />
          <SurfaceCard company="Dcifre · Bacen" title={t.proj6_title} desc={t.proj6_desc} tags={[t.proj6_tag,'Compliance','Backend']} />
          <SurfaceCard company="Flexpag · Celpe" metric="2020" title={t.proj4_title} desc={t.proj4_desc} tags={['Java','Payments','Utilities']} />
          <SurfaceCard company="Flexpag · CERC" title={t.proj7_title} desc={t.proj7_desc} tags={['Java',t.proj7_tag,'CERC']} />
        </div>

        <a
          href="https://github.com/josephdsbr" target="_blank" rel="noopener"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 28,
            fontFamily: 'var(--font-mono), monospace', fontSize: 13, color: 'var(--ink)',
            textDecoration: 'none', borderBottom: '1px solid #C9C2B4', paddingBottom: 2,
            transition: 'color 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink)')}
        >
          {t.proj_all} ↗
        </a>
      </div>
    </section>
  );
}
