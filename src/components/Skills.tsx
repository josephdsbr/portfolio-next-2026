'use client';

import { useLang } from '@/context/LangContext';
import { translations } from '@/lib/content';

const skillGroups = [
  { key: 'group_frontend' as const, items: ['React · Next.js','React Native','TypeScript','Storybook','Tailwind CSS','Angular'] },
  { key: 'group_backend' as const, items: ['Spring Boot','Spring Cloud','NestJS','GraphQL','REST · Express'] },
  { key: 'group_lang' as const, items: ['TypeScript','JavaScript','Java','Python','Go'] },
  { key: 'group_messaging' as const, items: ['Apache Kafka','RabbitMQ','PostgreSQL','Oracle DB','Cassandra'] },
  { key: 'group_cloud' as const, items: ['Docker','Kubernetes','GitHub Actions','Jenkins'] },
];

export default function Skills() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section id="skills" style={{ scrollMarginTop: 88, borderTop: '1px solid var(--hairline)', background: 'var(--surface)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(64px,9vw,128px) 32px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 18, marginBottom: 14 }}>
          <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: 13, color: 'var(--accent)' }}>/04</div>
          <h2 style={{ fontSize: 'clamp(32px,4.4vw,56px)', fontWeight: 600, letterSpacing: '-0.025em', margin: 0 }}>Skills</h2>
        </div>
        <p style={{ fontSize: 16, color: 'var(--muted)', margin: '0 0 48px', maxWidth: 540 }}>{t.skills_sub}</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 36 }}>
          {skillGroups.map(group => (
            <div key={group.key}>
              <div style={{
                fontFamily: 'var(--font-mono), monospace', fontSize: 13,
                textTransform: 'uppercase', letterSpacing: '1px',
                color: 'var(--accent)', paddingBottom: 14,
                borderBottom: '1px solid var(--hairline)', marginBottom: 18,
              }}>{t[group.key]}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11, fontSize: 16, color: 'var(--ink)' }}>
                {group.items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
