import { useEffect } from 'react';
import { FaCheck, FaBuilding, FaGlobe, FaCertificate } from 'react-icons/fa';
import '../styles/pages.css';
import heroFactory from '../assets/hero_factory.png';
import { useTranslation } from '../contexts/TranslationContext';

export default function AboutPage() {
    const { t } = useTranslation();
    useEffect(() => window.scrollTo(0, 0), []);

    const VALUES = [
        { icon: <FaCertificate />, title: t('Qualidade'), desc: t('Compromisso com o máximo desempenho dos nossos produtos.') },
        { icon: <FaBuilding />, title: t('Inovação'), desc: t('Busca constante por aprimoramento tecnológico.') },
        { icon: <FaCheck />, title: t('Comprometimento'), desc: t('Foco nos resultados e no sucesso dos nossos clientes.') },
        { icon: <FaGlobe />, title: t('Alcance Nacional'), desc: t('Atendendo e equipando indústrias em todo o Brasil.') },
    ];

    return (
        <>
            <header className="page-hero">
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <span className="eyebrow fade-in">{t('Nossa Empresa')}</span>
                    <h1 className="heading-xl fade-in fade-in-delay-1" style={{ marginBottom: '16px' }}>
                        {t('A Pacico')}<br /><span className="highlight">{t('Máquinas')}</span>
                    </h1>
                    <p className="body-lg fade-in fade-in-delay-2" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        {t('Fornecendo soluções tecnológicas de alta performance para a indústria de artefatos de concreto.')}
                    </p>
                </div>
            </header>

            <section className="section bg-1">
                <div className="container">
                    <div className="grid-2 fade-in fade-in-delay-3" style={{ alignItems: 'flex-start' }}>
                        {/* Esquerda: Texto */}
                        <div>
                            <span className="eyebrow">{t('SOBRE NÓS')}</span>
                            <h2 className="heading-lg" style={{ marginBottom: 'var(--s3)' }}>{t('Tecnologia que impulsiona clientes')}</h2>
                            <p className="body-lg" style={{ marginBottom: 'var(--s6)' }}>
                                {t('A Pacico fornece soluções tecnológicas de alta performance para a indústria de artefatos de concreto, impulsionando o crescimento dos nossos clientes com máquinas robustas e suporte de excelência. Projetamos o que há de melhor em vibro-prensas e misturadores.')}
                            </p>

                            {/* Valores */}
                            <div className="values-grid">
                                {VALUES.map((v, i) => (
                                    <div key={i} className="value-card">
                                        <div className="value-icon">{v.icon}</div>
                                        <div className="value-title">{v.title}</div>
                                        <div className="value-desc">{v.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Direita: Imagem */}
                        <div>
                            <div style={{ borderRadius: 'var(--r-lg)', overflow: 'hidden', height: '450px', marginBottom: 'var(--s5)' }}>
                                <img src={heroFactory} alt="Galpão Pacico" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0%)' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: 'var(--bg-2)' }}>
                <div className="container">
                    <div className="diffs-card">
                        <span className="eyebrow fade-in" style={{ color: '#fff' }}>{t('DIFERENCIAIS')}</span>
                        <h2 className="heading-lg fade-in fade-in-delay-1" style={{ color: '#fff', marginBottom: 'var(--s6)' }}>
                            {t('O compromisso da Pacico')}
                        </h2>

                        <div className="diffs-grid fade-in fade-in-delay-2">
                            {[
                                t('Fabricado 100% no Brasil'),
                                t('Assistência presencial'),
                                t('Treinamento completo'),
                                t('Garantia de 1 ano'),
                                t('Opções de Financiamento'),
                                t('Suporte via WhatsApp')
                            ].map((txt, i) => (
                                <div key={i} className="diff-item">
                                    <div className="diff-check"><FaCheck /></div>
                                    <div className="diff-text">{txt}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

