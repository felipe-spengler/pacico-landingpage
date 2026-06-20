import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaArrowRight, FaShieldAlt, FaIndustry, FaRobot, FaHammer, FaWrench, FaStar } from 'react-icons/fa';
import imgPrensa from '../assets/img_prensa.png';
import imgRobo from '../assets/img_robo.png';
import imgMisturador from '../assets/img_misturador.png';
import imgDosadora from '../assets/img_dosadora.png';
import { useTranslation } from '../contexts/TranslationContext';
import ScrollReveal from '../components/ScrollReveal';

const STATS = [
    { num: 'Qualidade', lbl: 'Superior no mercado' },
    { num: 'Garantia', lbl: 'Apoio contínuo e técnico' },
    { num: 'Nacional', lbl: '100% de fabricação brasileira' },
    { num: 'Robusta', lbl: 'Estruturação reforçada' },
];

const FEATURE_PRODUCTS = [
    { name: 'Máquina de Bloco e Paver', sub: 'Automação na fabricação estrutural', tag: 'Máquinas', img: imgPrensa, highlight: true },
    { name: 'Robô Empilhador', sub: 'Paletização automatizada de blocos', tag: 'Máquinas', img: imgRobo, highlight: false },
    { name: 'Misturador de Concreto', sub: 'Homogeneidade de alto nível', tag: 'Acessórios', img: imgMisturador, highlight: false },
    { name: 'Central Dosadora', sub: 'Precisão em formulações de agregados', tag: 'Acessórios', img: imgDosadora, highlight: false },
];

const FEATURES = [
    { icon: <FaRobot />, title: 'Indústria 4.0', desc: 'CLP Siemens, IHM touchscreen e monitoramento remoto integrados em cada equipamento.' },
    { icon: <FaHammer />, title: 'Robustez Extrema', desc: 'Estrutura em aço carbono de alta espessura, projetada para décadas de operação contínua.' },
    { icon: <FaWrench />, title: 'Suporte Premium', desc: 'Assistência técnica presencial em todo o Brasil com peças em estoque para entrega imediata.' },
];

const ABOUT_HIGHLIGHTS = [
    'Fabricado 100% no Brasil com aço nacional',
    'Garantia estendida de 1 ano com peças originais',
    'Treinamento completo de operadores incluso',
    'Suporte técnico via WhatsApp 7 dias por semana',
    'Financiamento facilitado com parceiros bancários',
    'Entrega e instalação em todo o território nacional',
];

export default function HomePage() {
    const { t } = useTranslation();
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const heroRef = useRef<HTMLElement>(null);
    const goWA = () => window.open('https://wa.me/554591456949?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento.', '_blank');

    const handleMouseMove = (e: React.MouseEvent) => {
        setMousePos({ x: (e.clientX / window.innerWidth - 0.5) * 20, y: (e.clientY / window.innerHeight - 0.5) * 10 });
    };

    return (
        <>
            {/* ═══ HERO ═══ */}
            <header className="hero" ref={heroRef} onMouseMove={handleMouseMove}>
                <div className="hero-noise" />
                <div className="hero-vignette" />
                <div className="hero-glow-ball" />

                <img
                    src={imgPrensa}
                    alt="Máquina de Blocos Pacico"
                    className="hero-bg-img"
                    style={{ transform: `translateY(calc(-50% + ${mousePos.y}px)) translateX(${mousePos.x * 0.4}px)` }}
                />

                <div className="container">
                    <div className="hero-content">
                        <div className="hero-badge fade-in">
                            <span className="hero-badge-dot" />
                            {t('INDÚSTRIA 4.0 · FEITO NO BRASIL')}
                        </div>

                        <h1 className="heading-xl hero-title fade-in fade-in-delay-1">
                            {t('Engenharia de precisão')}<br />
                            <span className="highlight">{t('em cada bloco.')}</span>
                        </h1>

                        <p className="body-lg hero-sub fade-in fade-in-delay-2">
                            {t('Transformando matérias-primas em operações de alta lucratividade. Descubra o portfólio de engenharia pesada do misturador à paletização.')}
                        </p>

                        <div className="hero-actions fade-in fade-in-delay-3">
                            <Link to="/produtos" className="btn btn-primary btn-lg">
                                {t('Ver Equipamentos')} <FaArrowRight />
                            </Link>
                            <button className="btn btn-ghost btn-lg" onClick={goWA}>
                                <FaWhatsapp size={20} /> {t('Fale com Consultor')}
                            </button>
                        </div>

                        <div className="hero-trust fade-in fade-in-delay-3">
                            <div className="trust-item"><FaShieldAlt className="trust-icon" /> {t('Garantia técnica')}</div>
                            <div className="trust-item"><FaIndustry className="trust-icon" /> {t('Equipamentos robustos')}</div>
                            <div className="trust-item"><FaStar className="trust-icon" /> {t('Atendimento de excelência')}</div>
                        </div>
                    </div>
                </div>
                <div className="hero-bottom-fade" />
            </header>

            {/* ═══ STATS RIBBON ═══ */}
            <section className="stats-ribbon">
                <div className="container">
                    <ScrollReveal direction="fade" delay={100}>
                        <div className="stats-grid">
                            {STATS.map((s, i) => (
                                <div key={i} className="stat-item">
                                    <div className="stat-num">{t(s.num)}</div>
                                    <div className="stat-label">{t(s.lbl)}</div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ═══ EQUIPAMENTOS EM DESTAQUE ═══ */}
            <section className="section" style={{ background: 'var(--bg-2)' }}>
                <div className="container">
                    <ScrollReveal direction="up">
                        <div className="section-header-row">
                            <div>
                                <span className="eyebrow">{t('Portfólio')}</span>
                                <h2 className="heading-lg">{t('Nossas Soluções')}</h2>
                            </div>
                            <Link to="/produtos" className="btn btn-ghost">
                                {t('Ver todos os 10 equipamentos')} <FaArrowRight />
                            </Link>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={200}>
                        <div className="grid-4">
                            {FEATURE_PRODUCTS.map((p, i) => (
                                <Link to="/produtos" key={i} className="product-card" style={{ textDecoration: 'none' }}>
                                    <div className="product-img-box">
                                        <img src={p.img} alt={t(p.name)} className="product-img" />
                                    </div>
                                    <div className="product-body">
                                        <span className="product-tag">{t(p.tag)}</span>
                                        <div className="product-name">{t(p.name)}</div>
                                        <p className="product-sub">{t(p.sub)}</p>
                                        <div className="product-cta">{t('Ver detalhes')} <FaArrowRight size={11} /></div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ═══ FEATURES / DIFERENCIAIS ═══ */}
            <section className="features-section section">
                <div className="features-bg-circle" />
                <div className="container">
                    <ScrollReveal direction="up">
                        <div style={{ textAlign: 'center', marginBottom: 'var(--s6)' }}>
                            <span className="eyebrow">{t('Por que a Pacico?')}</span>
                            <h2 className="heading-lg">{t('Engenharia que multiplica seus resultados')}</h2>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={200}>
                        <div className="grid-3">
                            {FEATURES.map((f, i) => (
                                <div key={i} className="feature-card">
                                    <div className="feature-icon-wrap">{f.icon}</div>
                                    <h3 className="feature-title">{t(f.title)}</h3>
                                    <p className="feature-desc">{t(f.desc)}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ═══ SOBRE MINI ═══ */}
            <section className="section">
                <div className="container">
                    <ScrollReveal direction="up">
                        <div className="grid-2 about-grid">
                            <div className="about-img-wrap">
                                <img src={imgPrensa} alt="Sobre a Pacico" />
                                <div className="about-img-overlay" />
                                <div className="about-years-badge">
                                    <span className="num">BR</span>
                                    <span className="lbl">{t('Nacional')}</span>
                                </div>
                            </div>
                            <div className="about-text">
                                <span className="eyebrow">{t('Sobre a Pacico')}</span>
                                <h2 className="heading-lg" style={{ marginBottom: 'var(--s3)' }}>
                                    {t('Tradição que se')} <span className="highlight">{t('traduz em resultados.')}</span>
                                </h2>
                                <p className="body-lg" style={{ marginBottom: 'var(--s3)' }}>
                                    {t('Nascemos com uma missão simples: elevar o padrão industrial das fábricas de blocos brasileiras. Hoje, com equipamentos em operação por todo o país, entregamos tecnologia de nível mundial com DNA 100% brasileiro.')}
                                </p>
                                <ul className="about-perks">
                                    {ABOUT_HIGHLIGHTS.map((p, i) => (
                                        <li key={i} className="about-perk">
                                            <span className="perk-dot" />
                                            {t(p)}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/sobre" className="btn btn-primary">
                                    {t('Conheça nossa história')} <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ═══ CTA BAND ═══ */}
            <section className="cta-band">
                <div className="cta-band-glow" />
                <div className="container">
                    <ScrollReveal direction="up">
                        <div className="cta-band-inner">
                            <div className="cta-band-text">
                                <h2 className="heading-lg">{t('Pronto para elevar sua indústria?')}</h2>
                                <p>{t('Converse com nosso time de engenheiros. Projeto personalizado para sua capacidade de investimento.')}</p>
                            </div>
                            <button className="btn btn-primary btn-lg" onClick={goWA} style={{ flexShrink: 0 }}>
                                <FaWhatsapp size={22} /> {t('Solicitar Proposta Agora')}
                            </button>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* FAB WhatsApp */}
            <a href="https://wa.me/554591456949" target="_blank" rel="noreferrer" className="fab">
                <FaWhatsapp />
            </a>
        </>
    );
}

