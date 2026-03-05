import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import logoImg from '../assets/logo_final_marca_dagua2.png';
import '../styles/navbar.css';

export default function Navbar() {
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
        { to: '/', label: 'Home' },
        { to: '/produtos', label: 'Equipamentos' },
        { to: '/sobre', label: 'A Empresa' },
        { to: '/contato', label: 'Contato' },
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
                <button className="nav-cta desktop-only" onClick={goWA}>
                    <FaWhatsapp style={{ marginRight: 6 }} /> Orçamento
                </button>

                {/* Mobile hamburger */}
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
                <button className="nav-cta" onClick={() => { goWA(); setOpen(false); }}>
                    <FaWhatsapp style={{ marginRight: 8 }} /> Solicitar Orçamento
                </button>
            </div>
        </nav>
    );
}
