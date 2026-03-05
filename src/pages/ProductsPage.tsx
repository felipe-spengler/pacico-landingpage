import { useState, useEffect } from 'react';
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import { products, categories } from '../data/products';
import '../styles/pages.css';

export default function ProductsPage() {
    const [filter, setFilter] = useState('Todos');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filtered =
        filter === 'Todos' ? products
            : products.filter(p => p.category === filter);

    const goWA = (p: any) => {
        const text = `Olá! Vim pelo site e gostaria de saber mais sobre: ${p.name} - ${p.subtitle}.`;
        window.open(`https://wa.me/554591456949?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <>
            <header className="page-hero">
                <div className="container">
                    <span className="eyebrow fade-in">Portfólio de Equipamentos</span>
                    <h1 className="heading-xl fade-in fade-in-delay-1" style={{ marginBottom: '16px' }}>Soluções em Concreto</h1>
                    <p className="body-lg fade-in fade-in-delay-2" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Nossa linha completa de tecnologia para fabricação de blocos, pavers, tubos e automação.
                    </p>
                </div>
            </header>

            <section className="section bg-1">
                <div className="container">
                    {/* Filters */}
                    <div className="filter-bar fade-in fade-in-delay-3">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`filter-chip ${filter === cat ? 'active' : ''}`}
                                onClick={() => setFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="products-page-grid fade-in fade-in-delay-3">
                        {filtered.map(p => (
                            <div key={p.id} className="product-full-card">
                                <div className="pfc-img-box">
                                    <img src={p.image} alt={p.name} className="pfc-img" />
                                </div>
                                <div className="pfc-body">
                                    <h3 className="pfc-name">{p.name}</h3>
                                    <p className="pfc-sub" style={{ marginBottom: '20px' }}>{p.subtitle}</p>

                                    <div className="pfc-actions">
                                        <button className="btn btn-primary btn-sm" style={{ width: '100%', justifyContent: 'center' }} onClick={() => goWA(p)}>
                                            <FaWhatsapp size={16} /> Falar sobre este
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: 'var(--s6)' }}>
                        <span className="eyebrow">DÚVIDAS?</span>
                        <h2 className="heading-md" style={{ marginBottom: 'var(--s3)' }}>Qual o equipamento ideal para minha fábrica?</h2>
                        <button className="btn btn-ghost" onClick={() => goWA({ name: 'Projeto Personalizado', subtitle: 'Consultoria' })}>
                            Falar com um Consultor <FaArrowRight />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
