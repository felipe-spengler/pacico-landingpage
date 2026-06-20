import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logoImg from '../assets/logo_final_marca_dagua2.png';
import '../styles/footer.css';
import { useTranslation } from '../contexts/TranslationContext';

export default function Footer() {
    const { t } = useTranslation();
    const goWA = () => window.open('https://wa.me/554591456949', '_blank');

    return (
        <footer className="footer">
            <div className="footer-stripe" />
            <div className="container">
                <div className="footer-top">
                    <div>
                        <img src={logoImg} alt="Pacico" className="footer-logo-img" />
                        <p className="footer-desc">
                            {t('A PACICO Indústria Metalúrgica desenvolve fábricas completas e tecnologias de ponta para a produção de artefatos de concreto — do misturador ao robô empilhador.')}
                        </p>
                        <div className="footer-socials">
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon"><FaInstagram /></a>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon"><FaFacebook /></a>
                            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon"><FaYoutube /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon"><FaLinkedin /></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h5>{t('Navegação')}</h5>
                        <NavLink to="/">{t('Home')}</NavLink>
                        <NavLink to="/produtos">{t('Equipamentos')}</NavLink>
                        <NavLink to="/sobre">{t('A Empresa')}</NavLink>
                        <NavLink to="/contato">{t('Contato')}</NavLink>
                    </div>

                    <div className="footer-col">
                        <h5>{t('Equipamentos')}</h5>
                        <a href="#">{t('Máquina de Blocos e Pavers')}</a>
                        <a href="#">{t('Robô Empilhador')}</a>
                        <a href="#">{t('Misturador de Concreto')}</a>
                        <a href="#">{t('Central Dosadora')}</a>
                        <a href="#">{t('Plantas Automáticas')}</a>
                    </div>

                    <div className="footer-col">
                        <h5>{t('Fale Conosco')}</h5>
                        <div className="footer-contact-item">
                            <FaPhone className="footer-contact-icon" />
                            <span>(45) 9145-6949</span>
                        </div>
                        <div className="footer-contact-item">
                            <FaEnvelope className="footer-contact-icon" />
                            <span>comercial@pacicomaquinas.com.br</span>
                        </div>
                        <div className="footer-contact-item">
                            <FaMapMarkerAlt className="footer-contact-icon" />
                            <span>{t('Cascavel – PR, Brasil')}</span>
                        </div>
                        <button
                            onClick={goWA}
                            style={{
                                marginTop: '16px',
                                background: '#25D366',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '6px',
                                padding: '12px 22px',
                                fontWeight: 800,
                                fontSize: '0.85rem',
                                letterSpacing: '0.06em',
                                textTransform: 'uppercase',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                            }}
                        >
                            <FaWhatsapp size={16} /> WhatsApp
                        </button>
                    </div>
                </div>
            </div>

            <div className="footer-bar">
                <div className="container">
                    <div className="footer-bar-inner">
                        <p>© {new Date().getFullYear()} <span>{t('Pacico Máquinas & Automação Industrial')}</span>. {t('Todos os direitos reservados.')}</p>
                        <p>{t('Cascavel – Paraná – Brasil')}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

