import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import logoImg from '../assets/logo_final_marca_dagua2.png';
import '../styles/navbar.css';
import { useTranslation } from '../contexts/TranslationContext';

export default function Navbar() {
    const { t, language, changeLanguage } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const goWA = () => window.open('https://wa.me/554591456949?text=Olá!%20Vim%20pelo%20site%20da%20Pacico%20e%20gostaria%20de%20um%20orçamento.', '_blank');

    const links = [
        { to: '/', label: t('Home') },
        { to: '/produtos', label: t('Equipamentos') },
        { to: '/sobre', label: t('A Empresa') },
        { to: '/contato', label: t('Contato') },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-inner">
                <div className="nav-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                    <img src={logoImg} alt="Pacico Máquinas" />
                </div>

                {/* Desktop */}
                <div className="nav-links desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
                    {links.map(l => (
                        <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                            {l.label}
                        </NavLink>
                    ))}
                </div>

                <div className="nav-actions desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div className="language-selector-nav">
                        <img 
                            src="https://flagcdn.com/w80/br.png" 
                            alt="Português" 
                            onClick={() => changeLanguage('pt')} 
                            className={`flag-icon-nav ${language === 'pt' ? 'active' : ''}`} 
                        />
                        <img 
                            src="https://flagcdn.com/w80/es.png" 
                            alt="Español" 
                            onClick={() => changeLanguage('es')} 
                            className={`flag-icon-nav ${language === 'es' ? 'active' : ''}`} 
                        />
                        <img 
                            src="https://flagcdn.com/w80/us.png" 
                            alt="English" 
                            onClick={() => changeLanguage('en')} 
                            className={`flag-icon-nav ${language === 'en' ? 'active' : ''}`} 
                        />
                    </div>
                    <button className="nav-cta" onClick={goWA}>
                        <FaWhatsapp style={{ marginRight: 6 }} /> {t('Orçamento')}
                    </button>
                </div>

                {/* Mobile hamburger */}
                <div className="nav-mobile-header" style={{ display: 'none' }}>
                    <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
                        {open ? <FaTimes size={20} color="white" /> : <FaBars size={20} color="white" />}
                    </button>
                </div>
                {/* Actually, let's keep the exact hamburger class name layout */}
                <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
                    {open ? <FaTimes size={20} color="white" /> : <FaBars size={20} color="white" />}
                </button>
            </div>

            {/* Mobile panel */}
            <div className={`nav-links-wrapper ${open ? 'open' : ''}`}>
                <div className="nav-links">
                    {links.map(l => (
                        <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setOpen(false)}>
                            {l.label}
                        </NavLink>
                    ))}
                </div>
                <div className="language-selector-nav mobile-only" style={{ display: 'flex', justifyContent: 'center', gap: '16px', margin: '20px 0' }}>
                    <img 
                        src="https://flagcdn.com/w80/br.png" 
                        alt="Português" 
                        onClick={() => { changeLanguage('pt'); setOpen(false); }} 
                        className={`flag-icon-nav ${language === 'pt' ? 'active' : ''}`} 
                    />
                    <img 
                        src="https://flagcdn.com/w80/es.png" 
                        alt="Español" 
                        onClick={() => { changeLanguage('es'); setOpen(false); }} 
                        className={`flag-icon-nav ${language === 'es' ? 'active' : ''}`} 
                    />
                    <img 
                        src="https://flagcdn.com/w80/us.png" 
                        alt="English" 
                        onClick={() => { changeLanguage('en'); setOpen(false); }} 
                        className={`flag-icon-nav ${language === 'en' ? 'active' : ''}`} 
                    />
                </div>
                <button className="nav-cta" onClick={() => { goWA(); setOpen(false); }}>
                    <FaWhatsapp style={{ marginRight: 8 }} /> {t('Solicitar Orçamento')}
                </button>
            </div>
        </nav>
    );
}

