import { useState, useEffect } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaYoutube, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import '../styles/pages.css';

const CONTACTS = [
    { icon: <FaWhatsapp />, lbl: 'WhatsApp', val: '+55 45 9145-6949', act: () => window.open('https://wa.me/554591456949', '_blank'), green: true },
    { icon: <FaPhoneAlt />, lbl: 'Fábrica / Comercial', val: '(45) 3037-0000', act: () => window.open('tel:+554530370000', '_blank'), green: false },
    { icon: <FaEnvelope />, lbl: 'Orçamentos', val: 'vendas@pacicomaquinas.com.br', act: () => window.open('mailto:vendas@pacicomaquinas.com.br', '_blank'), green: false },
    { icon: <FaMapMarkerAlt />, lbl: 'Parque Fabril', val: 'Av. Brasil, 4444 - Cascavel, PR', act: () => { }, green: false },
];

export default function ContactPage() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => window.scrollTo(0, 0), []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !phone) return alert('Por favor, preencha nome e WhatsApp.');

        const text = `Nome: ${name}\nWhats/Tel: ${phone}\nMensagem: ${message || 'Solicitação de orçamento.'}`;
        window.open(`https://wa.me/554591456949?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <>
            <header className="page-hero">
                <div className="container">
                    <span className="eyebrow fade-in">Fale Conosco</span>
                    <h1 className="heading-xl fade-in fade-in-delay-1" style={{ marginBottom: '16px' }}>Estamos à disposição</h1>
                    <p className="body-lg fade-in fade-in-delay-2" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Nossa engenharia e time comercial estão prontos para projetar a sua próxima linha de produção.
                    </p>
                </div>
            </header>

            <section className="section bg-1">
                <div className="container">
                    <div className="contact-grid">

                        {/* Esquerda: Infos */}
                        <div className="contact-info-side fade-in fade-in-delay-3">
                            <h2 className="heading-md" style={{ marginBottom: 'var(--s4)' }}>Canais Imediatos</h2>

                            <div className="contact-cards">
                                {CONTACTS.map((c, i) => (
                                    <div key={i} className="contact-card" onClick={c.act}>
                                        <div className={`contact-card-icon ${c.green ? 'green' : ''}`}>
                                            {c.icon}
                                        </div>
                                        <div>
                                            <div className="contact-card-label">{c.lbl}</div>
                                            <div className="contact-card-value">{c.val}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="hours-card">
                                <div className="hours-title">🕒 Horário de Expediente</div>
                                <div className="hours-line">Seg – Sex: 08h00 às 18h00</div>
                                <div className="hours-line">Sábados: Plantão Técnico Especial</div>
                            </div>

                            <div className="social-row">
                                <a href="#" className="social-btn"><FaInstagram color="#E1306C" /> Instagram</a>
                                <a href="#" className="social-btn"><FaYoutube color="#FF0000" /> YouTube </a>
                                <a href="#" className="social-btn"><FaLinkedin color="#0A66C2" /> LinkedIn </a>
                            </div>
                        </div>

                        {/* Direita: Form */}
                        <div className="contact-form-side fade-in fade-in-delay-3">
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <h3 className="heading-md" style={{ marginBottom: 'var(--s4)' }}>Solicitar Orçamento</h3>

                                <div className="form-group">
                                    <label className="form-label">Nome da Empresa / Responsável *</label>
                                    <input
                                        type="text"
                                        className="form-input"
                                        placeholder="Ex: Construtora Silva"
                                        value={name} onChange={e => setName(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">WhatsApp *</label>
                                    <input
                                        type="tel"
                                        className="form-input"
                                        placeholder="(00) 00000-0000"
                                        value={phone} onChange={e => setPhone(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Equipamento de Interesse</label>
                                    <textarea
                                        className="form-textarea"
                                        placeholder="Desejo abrir uma fábrica de calçadas..."
                                        value={message} onChange={e => setMessage(e.target.value)}
                                    />
                                </div>

                                <button type="submit" className="form-submit">
                                    <FaPaperPlane /> Enviar para Análise
                                </button>
                                <div className="form-hint">Enviaremos diretamente para nosso balcão de engenharia.</div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
