'use client';

import Image from 'next/image';
import { useLang } from '@/context/LangContext';
import { translations } from '@/lib/content';

export default function Hero() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <header id="top" style={{
      scrollMarginTop: 88,
      backgroundImage: 'linear-gradient(#E9E4D8 1px, transparent 1px), linear-gradient(90deg, #E9E4D8 1px, transparent 1px)',
      backgroundSize: '88px 88px',
      backgroundPosition: 'center',
    }}>
      <div style={{
        maxWidth: 1180, margin: '0 auto',
        padding: 'clamp(56px,8vw,108px) 32px clamp(48px,7vw,88px)',
        display: 'flex', flexWrap: 'wrap', gap: 'clamp(40px,6vw,72px)', alignItems: 'flex-end',
      }}>
        {/* Left: text */}
        <div style={{ flex: '1 1 460px', minWidth: 300 }}>
          <div style={{
            fontFamily: 'var(--font-mono), monospace', fontSize: 13, letterSpacing: '1px',
            color: 'var(--muted)', textTransform: 'uppercase', marginBottom: 28,
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <span style={{ width: 24, height: 1, background: 'var(--ink)', display: 'inline-block' }} />
            {t.eyebrow}
          </div>

          <h1 style={{
            fontSize: 'clamp(44px,6.4vw,98px)', lineHeight: 0.98, fontWeight: 600,
            letterSpacing: '-0.03em', margin: '0 0 30px',
          }}>
            {t.heroLead}
            <span style={{ color: 'var(--accent)' }}>{t.heroAccent}</span>
            {t.heroTail}
          </h1>

          <p style={{ fontSize: 'clamp(17px,1.4vw,20px)', lineHeight: 1.6, color: 'var(--body)', maxWidth: 580, margin: '0 0 36px' }}>
            {t.heroSub}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <HoverBtn
              href="#projects"
              base={{ background: 'var(--ink)', color: 'var(--paper)' }}
              hover={{ background: 'var(--accent)' }}
            >
              {t.cta_projects} <span style={{ fontSize: 16 }}>→</span>
            </HoverBtn>
            <HoverBtn
              href="#contact"
              base={{ background: 'transparent', color: 'var(--ink)', border: '1.5px solid var(--ink)' }}
              hover={{ background: 'var(--ink)', color: 'var(--paper)' }}
            >
              {t.cta_contact}
            </HoverBtn>
          </div>
        </div>

        {/* Spec card */}
        <div style={{
          flex: '0 1 360px', minWidth: 280,
          background: 'var(--surface)', border: '1px solid var(--hairline)',
          borderRadius: 16, padding: 24, boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
            <div style={{
              position: 'relative', width: 64, height: 64, borderRadius: 12,
              overflow: 'hidden', background: 'var(--ink)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <span style={{ position: 'absolute', color: 'var(--paper)', fontWeight: 700, fontSize: 22, letterSpacing: 1, zIndex: 0 }}>JV</span>
              <Image
                src="https://avatars.githubusercontent.com/u/42288345?v=4"
                alt="José Vinícius"
                width={64} height={64}
                style={{ position: 'relative', zIndex: 1, objectFit: 'cover' }}
                priority
              />
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 18, lineHeight: 1.1 }}>José Vinícius</div>
              <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>Santos de Melo</div>
            </div>
          </div>

          <div style={{
            display: 'flex', alignItems: 'center', gap: 9,
            padding: '9px 12px', background: 'var(--paper)', borderRadius: 9, marginBottom: 18,
          }}>
            <span className="pulse-dot" style={{ width: 8, height: 8, borderRadius: 999, background: '#3FA66A', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 12, color: 'var(--body)' }}>{t.status}</span>
          </div>

          {([
            [t.spec_now_k, t.spec_now_v],
            [t.spec_exp_k, t.spec_exp_v],
            [t.spec_focus_k, t.spec_focus_v],
            [t.spec_stack_k, 'React · Next · Java'],
          ] as [string, string][]).map(([k, v]) => (
            <div key={k} style={{
              display: 'flex', justifyContent: 'space-between', gap: 12,
              padding: '11px 0', borderTop: '1px solid var(--divider)',
              fontFamily: 'var(--font-mono), monospace', fontSize: 12.5,
            }}>
              <span style={{ color: 'var(--faint)' }}>{k}</span>
              <span style={{ color: 'var(--ink)', textAlign: 'right', fontWeight: 500, maxWidth: 200 }}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

function HoverBtn({ href, base, hover, children }: {
  href: string;
  base: React.CSSProperties;
  hover: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 9,
        textDecoration: 'none', padding: '14px 26px', borderRadius: 999,
        fontSize: 15, fontWeight: 500, transition: 'all 0.15s',
        ...base,
      }}
      onMouseEnter={e => Object.assign(e.currentTarget.style, hover)}
      onMouseLeave={e => Object.assign(e.currentTarget.style, base)}
    >
      {children}
    </a>
  );
}
