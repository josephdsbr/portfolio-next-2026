export type Lang = 'en' | 'pt';

export interface Dict {
  nav_about: string; nav_exp: string; nav_proj: string; nav_skills: string;
  nav_writing: string; nav_contact: string;
  eyebrow: string;
  heroLead: string; heroAccent: string; heroTail: string; heroSub: string;
  cta_projects: string; cta_contact: string;
  status: string;
  spec_now_k: string; spec_now_v: string;
  spec_exp_k: string; spec_exp_v: string;
  spec_focus_k: string; spec_focus_v: string;
  spec_stack_k: string;
  secAbout: string;
  about_p1: string; about_p2: string; pullquote: string;
  secExp: string; exp_more: string;
  secProj: string;
  proj_featured_label: string; proj_all: string; proj1_meta: string;
  proj1_title: string; proj1_desc: string;
  proj2_title: string; proj2_desc: string;
  proj3_title: string; proj3_desc: string;
  proj4_title: string; proj4_desc: string;
  proj5_title: string; proj5_desc: string;
  proj5_stat_k: string; proj5_stat_v: string;
  proj6_title: string; proj6_desc: string; proj6_tag: string;
  proj7_title: string; proj7_desc: string; proj7_tag: string;
  skills_sub: string;
  group_frontend: string; group_backend: string; group_lang: string;
  group_messaging: string; group_cloud: string;
  secWriting: string; writing_sub: string;
  blog1_sub: string; blog2_sub: string; writing_all: string;
  contact_head: string; contact_sub: string;
  footer_note: string;
}

export const translations: Record<Lang, Dict> = {
  en: {
    nav_about: 'About', nav_exp: 'Experience', nav_proj: 'Projects',
    nav_skills: 'Skills', nav_writing: 'Writing', nav_contact: 'Contact',
    eyebrow: 'Senior Software Engineer · Full-Stack — React + Java',
    heroLead: 'I build products that hold up under ',
    heroAccent: 'high volume',
    heroTail: '.',
    heroSub: 'Full-stack Senior Software Engineer with 6+ years building web and mobile products with React, Next.js, React Native and TypeScript — on a solid Java/Spring foundation. Today I lead frontend for Red Ventures’ solar energy vertical, driving a ~30% conversion uplift in Q1.',
    cta_projects: 'View projects', cta_contact: 'Get in touch',
    status: 'Open to new opportunities',
    spec_now_k: 'now', spec_now_v: 'Red Ventures',
    spec_exp_k: 'experience', spec_exp_v: '6+ years',
    spec_focus_k: 'focus', spec_focus_v: 'Full-stack · high volume',
    spec_stack_k: 'stack',
    secAbout: 'About',
    about_p1: 'I’m José Vinícius — a full-stack Senior Software Engineer from Pernambuco, with 6+ years spanning the frontend of products that convert and the backend of systems that scale.',
    about_p2: 'I’ve led frontend for Red Ventures’ solar energy vertical and built, at Livelo, a points → PIX platform that became one of the company’s largest products. That product sense rests on years of backend work in high-throughput fintech (Java/Spring, Kafka, Kubernetes), giving me a genuine full-stack view on architectural decisions.',
    pullquote: 'Reliability isn’t a detail. It’s the feature.',
    secExp: 'Experience', exp_more: 'Full history on LinkedIn',
    secProj: 'Featured projects',
    proj_featured_label: 'Featured', proj_all: 'More on GitHub', proj1_meta: 'Customer Acquisition',
    proj1_title: 'Solar Energy Acquisition Flow',
    proj1_desc: 'Grid/Cart — the React/Next.js acquisition flow that connects customers to major solar energy operators. Built around conversion, performance and a design system, driving a ~30% conversion uplift in Q1.',
    proj2_title: 'Real-time Interchange+ Calculator',
    proj2_desc: 'Real-time calculation of card-brand interchange fees (Mastercard, Visa, Elo), built on event pipelines processing ~3–4 million records daily.',
    proj3_title: 'Open Finance Accounting Platform',
    proj3_desc: 'An Open Finance platform for Dcifre (accounting), centralizing and controlling its clients’ many bank accounts.',
    proj4_title: 'Payment Totems & Online Checkout',
    proj4_desc: 'Co-led Celpe’s payment totems and Flexpag’s online payment rollout during the pandemic, keeping billing alive for utility companies.',
    proj5_title: 'Points → PIX',
    proj5_desc: 'A platform that converts Livelo points into PIX — within months, one of Livelo’s largest products, redeeming millions of points monthly. I architected bank integrations, a complex settlement workflow, balance management and payment batches. I also worked on the PIX module in Livelo’s React Native app.',
    proj5_stat_k: 'Monthly redemption', proj5_stat_v: 'Millions of points',
    proj6_title: 'Bacen Resolution 4.966 compliance',
    proj6_desc: 'Adapting accounting criteria to the new rules of Bacen Resolution 4.966/2021, adjusting the treatment and classification of financial instruments in the platform.',
    proj6_tag: 'Accounting criteria',
    proj7_title: 'Receivables · Resolution 264 (CERC)',
    proj7_desc: 'Architecture of a system that calculated the receivables of the companies served (Flexpag was a sub-acquirer for Celpe, Cosern, Elektro and others), plus generating and sending the batches to CERC (the receivables registry), following financial-market infrastructure standards.',
    proj7_tag: 'Receivables',
    skills_sub: 'From the frontend that converts to the backend that scales — the stack I use end to end.',
    group_frontend: 'Frontend & Mobile', group_backend: 'Backend & APIs',
    group_lang: 'Languages', group_messaging: 'Data & Messaging', group_cloud: 'Cloud & DevOps',
    secWriting: 'Writing', writing_sub: 'Technical notes and essays, published on Medium.',
    blog1_sub: 'Modeling concurrency and payment settlement at scale on the JVM.',
    blog2_sub: 'An essay on freedom, limits and Brazilian neoliberalism.',
    writing_all: 'Read everything on Medium',
    contact_head: 'Let’s build something.',
    contact_sub: 'Open to freelance, projects and new opportunities. Drop me a line — I reply fast.',
    footer_note: 'Crafted with care · Pernambuco, BR',
  },
  pt: {
    nav_about: 'Sobre', nav_exp: 'Experiência', nav_proj: 'Projetos',
    nav_skills: 'Skills', nav_writing: 'Escrita', nav_contact: 'Contato',
    eyebrow: 'Senior Software Engineer · Full-Stack — React + Java',
    heroLead: 'Construo produtos que sustentam ',
    heroAccent: 'alto volume',
    heroTail: '.',
    heroSub: 'Senior Software Engineer full-stack com 6+ anos construindo produtos web e mobile com React, Next.js, React Native e TypeScript — sobre uma base sólida de Java/Spring. Hoje lidero o frontend da vertical de energia solar da Red Ventures, com ~30% de aumento de conversão no Q1.',
    cta_projects: 'Ver projetos', cta_contact: 'Falar comigo',
    status: 'Aberto a novas oportunidades',
    spec_now_k: 'agora', spec_now_v: 'Red Ventures',
    spec_exp_k: 'experiência', spec_exp_v: '6+ anos',
    spec_focus_k: 'foco', spec_focus_v: 'Full-stack · alto volume',
    spec_stack_k: 'stack',
    secAbout: 'Sobre',
    about_p1: 'Sou o José Vinícius — Senior Software Engineer full-stack de Pernambuco, com 6+ anos entre o frontend de produtos que convertem e o backend de sistemas que escalam.',
    about_p2: 'Já liderei o frontend da vertical de energia solar da Red Ventures e construí, na Livelo, uma plataforma de pontos → PIX que virou um dos maiores produtos da empresa. Essa visão de produto se apoia em anos de backend em fintechs de alto throughput (Java/Spring, Kafka, Kubernetes), o que me dá uma perspectiva full-stack real nas decisões de arquitetura.',
    pullquote: 'Confiabilidade não é um detalhe. É a feature.',
    secExp: 'Experiência', exp_more: 'Histórico completo no LinkedIn',
    secProj: 'Projetos em destaque',
    proj_featured_label: 'Em destaque', proj_all: 'Ver mais no GitHub', proj1_meta: 'Captação de clientes',
    proj1_title: 'Captação de energia solar',
    proj1_desc: 'Grid/Cart — o fluxo de aquisição em React/Next.js que conecta clientes a grandes operadoras de energia solar. Foco em conversão, performance e design system, com ~30% de aumento de conversão no Q1.',
    proj2_title: 'Calculadora Interchange+ em tempo real',
    proj2_desc: 'Cálculo em tempo real das taxas de intercâmbio das bandeiras (Mastercard, Visa, Elo), sobre pipelines de eventos que processam ~3–4 milhões de registros por dia.',
    proj3_title: 'Plataforma Open Finance contábil',
    proj3_desc: 'Plataforma de Open Finance para a Dcifre (contabilidade), centralizando e controlando as diversas contas bancárias de seus clientes.',
    proj4_title: 'Totens & pagamento online',
    proj4_desc: 'Co-responsável pelos totens de pagamento da Celpe e pela disponibilização do pagamento online da Flexpag durante a pandemia, mantendo a cobrança ativa para concessionárias.',
    proj5_title: 'Pontos → PIX',
    proj5_desc: 'Plataforma que converte pontos Livelo em PIX — em poucos meses, um dos maiores produtos da Livelo, com resgate mensal de milhões de pontos. Arquitetei integrações bancárias, um workflow complexo de liquidação, gestão de saldo e batches de pagamento. Também atuei no módulo de PIX do app Livelo em React Native.',
    proj5_stat_k: 'Resgate mensal', proj5_stat_v: 'Milhões de pontos',
    proj6_title: 'Adequação à Resolução 4.966 (Bacen)',
    proj6_desc: 'Adaptação de critérios contábeis às novas regras da Resolução Bacen 4.966/2021, ajustando o tratamento e a classificação de instrumentos financeiros na plataforma.',
    proj6_tag: 'Critérios contábeis',
    proj7_title: 'Recebíveis · Resolução 264 (CERC)',
    proj7_desc: 'Arquitetura de um sistema que calculava os recebíveis das empresas atendidas (a Flexpag era subadquirente de Celpe, Cosern, Elektro e outras), com a geração e o envio dos lotes à CERC (Central de Recebíveis), seguindo a infraestrutura do mercado financeiro.',
    proj7_tag: 'Recebíveis',
    skills_sub: 'Do frontend que converte ao backend que escala — a stack que uso de ponta a ponta.',
    group_frontend: 'Frontend & Mobile', group_backend: 'Backend & APIs',
    group_lang: 'Linguagens', group_messaging: 'Dados & Mensageria', group_cloud: 'Cloud & DevOps',
    secWriting: 'Escrita', writing_sub: 'Notas técnicas e ensaios, publicados no Medium.',
    blog1_sub: 'Modelando concorrência e liquidação de pagamentos em larga escala com a JVM.',
    blog2_sub: 'Um ensaio sobre liberdade, limites e o neoliberalismo brasileiro.',
    writing_all: 'Ler tudo no Medium',
    contact_head: 'Vamos construir algo.',
    contact_sub: 'Aberto a freelance, projetos e novas oportunidades. Me manda uma mensagem — respondo rápido.',
    footer_note: 'Feito com cuidado · Pernambuco, BR',
  },
};

export interface Job {
  current: boolean;
  period: string;
  loc: string;
  role: string;
  company: string;
  desc: string;
  tags: string[];
}

export const experience: Record<Lang, Job[]> = {
  en: [
    { current: true, period: '2024 – Present', loc: 'San Francisco, CA (Remote)', role: 'Senior Software Engineer', company: 'Red Ventures · BairesDev', desc: 'Leading frontend engineering for the solar energy vertical — React/Next.js + TypeScript conversion experiences, in partnership with Vistra, driving ~30% conversion uplift in Q1 and ~60% cumulative growth. Built a Storybook + Tailwind design system consumed by multiple teams and a GraphQL layer that cut API latency by ~90%.', tags: ['React', 'Next.js', 'TypeScript', 'Storybook', 'GraphQL', 'Tailwind'] },
    { current: false, period: '2022 – 2024', loc: 'Remote, BR', role: 'Senior Software Engineer', company: 'Livelo', desc: 'Built the points-to-PIX conversion platform — within months, one of Livelo’s largest products, redeeming millions of points monthly: bank integrations, a complex settlement workflow, balance management and payment batches. I also developed the PIX module in Livelo’s React Native app.', tags: ['Java', 'PIX', 'React Native', 'Integrations', 'Batch'] },
    { current: false, period: '2021 – 2022', loc: 'São Paulo, BR', role: 'Senior Software Engineer', company: 'PagSeguro · PagBank', desc: 'Designed the interchange fee estimation and billing system, processing ~3–4 million records daily, with event-driven pipelines (Kafka, RabbitMQ, Spring Cloud) on Kubernetes. Also delivered internal Angular and Next.js modules for offer configuration and fee management.', tags: ['Java', 'Spring Cloud', 'Kafka', 'Angular', 'Next.js', 'Kubernetes'] },
    { current: false, period: '2021 · concurrent', loc: 'Remote', role: 'Technical Writer', company: 'Baeldung', desc: 'Authored Spring Boot articles for a global developer audience, translating complex backend engineering concepts into actionable technical guidance.', tags: ['Spring Boot', 'Technical Writing'] },
    { current: false, period: '2021', loc: 'Brasília, BR', role: 'Senior Mobile Developer', company: 'Ília', desc: 'Delivered React Native features inside Banco do Brasil’s Social Security app — serving ~2.5M users — working across mobile UI, API integration and release constraints in a high-visibility banking environment.', tags: ['React Native', 'Mobile UI', 'Banco do Brasil'] },
    { current: false, period: '2019 – 2021', loc: 'Recife, BR', role: 'Software Developer → Senior Software Engineer', company: 'Flexpag', desc: 'Built a payment checkout platform deployed across major Brazilian utilities (Celpe, Compesa, Cosern, Enel), enabling continuous billing during COVID-19. Promoted from Junior to Senior in under 2 years. Engineered a metrics platform that evolved from weekly manual reports to daily — and later real-time — reporting.', tags: ['Java', 'Payments', 'Reporting'] },
    { current: false, period: '2016 – 2023', loc: 'Education', role: 'B.Sc. in Economics', company: 'UFPE — Federal University of Pernambuco', desc: 'A quantitative grounding in economics, statistics and modeling — a different lens on financial-systems problems.', tags: [] },
  ],
  pt: [
    { current: true, period: '2024 – atual', loc: 'San Francisco, CA (remoto)', role: 'Senior Software Engineer', company: 'Red Ventures · BairesDev', desc: 'Lidero a engenharia de frontend da vertical de energia solar — experiências de conversão em React/Next.js + TypeScript, em parceria com a Vistra, com ~30% de aumento de conversão no Q1 e ~60% acumulado. Construí um design system em Storybook + Tailwind consumido por vários times e uma camada GraphQL que cortou a latência das APIs em ~90%.', tags: ['React', 'Next.js', 'TypeScript', 'Storybook', 'GraphQL', 'Tailwind'] },
    { current: false, period: '2022 – 2024', loc: 'Remoto, BR', role: 'Senior Software Engineer', company: 'Livelo', desc: 'Construí a plataforma de conversão de pontos em PIX — em poucos meses, um dos maiores produtos da Livelo, com resgate mensal de milhões de pontos: integrações bancárias, workflow complexo de liquidação, gestão de saldo e batches de pagamento. Também desenvolvi o módulo de PIX no app Livelo em React Native.', tags: ['Java', 'PIX', 'React Native', 'Integrações', 'Batch'] },
    { current: false, period: '2021 – 2022', loc: 'São Paulo, BR', role: 'Senior Software Engineer', company: 'PagSeguro · PagBank', desc: 'Projetei o sistema de estimativa de tarifas de intercâmbio e billing, processando ~3–4 milhões de registros por dia, com pipelines orientados a eventos (Kafka, RabbitMQ, Spring Cloud) em Kubernetes. Também entreguei módulos internos em Angular e Next.js para configuração de ofertas e gestão de taxas.', tags: ['Java', 'Spring Cloud', 'Kafka', 'Angular', 'Next.js', 'Kubernetes'] },
    { current: false, period: '2021 · concomitante', loc: 'Remoto', role: 'Technical Writer', company: 'Baeldung', desc: 'Escrevi artigos sobre Spring Boot para uma audiência global de desenvolvedores, traduzindo conceitos complexos de backend em orientações técnicas práticas.', tags: ['Spring Boot', 'Technical Writing'] },
    { current: false, period: '2021', loc: 'Brasília, BR', role: 'Senior Mobile Developer', company: 'Ília', desc: 'Entreguei features em React Native no app de Previdência Social do Banco do Brasil — ~2,5M de usuários — trabalhando entre UI mobile, integração de APIs e restrições de release em um ambiente bancário de alta visibilidade.', tags: ['React Native', 'Mobile UI', 'Banco do Brasil'] },
    { current: false, period: '2019 – 2021', loc: 'Recife, BR', role: 'Software Developer → Senior Software Engineer', company: 'Flexpag', desc: 'Construí uma plataforma de checkout de pagamentos para grandes concessionárias (Celpe, Compesa, Cosern, Enel), garantindo cobrança contínua durante a COVID-19. Promovido de Júnior a Sênior em menos de 2 anos. Criei uma plataforma de métricas que evoluiu de relatórios manuais semanais para geração diária e, depois, em tempo real.', tags: ['Java', 'Payments', 'Reporting'] },
    { current: false, period: '2016 – 2023', loc: 'Formação', role: 'Bacharelado em Economia', company: 'UFPE — Univ. Federal de Pernambuco', desc: 'Base quantitativa em economia, estatística e modelagem — uma lente diferente para problemas de sistemas financeiros.', tags: [] },
  ],
};
