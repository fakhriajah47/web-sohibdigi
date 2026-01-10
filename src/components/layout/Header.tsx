import { useState, useEffect } from 'react';
import { navItems } from '@/data/navigation';
import { socialLinks, contact } from '@/constants';
import { useI18n } from '@/i18n/I18nProvider';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { Button } from '../ui';

/**
 * Fixed header with scroll shrink effect and mobile menu toggle
 */
export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useI18n();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header
            id="header"
            className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${isScrolled
                ? 'py-3 bg-gray-50/90 backdrop-blur-md shadow-sm border-gray-200'
                : 'py-5 bg-gray-50/80 backdrop-blur-sm border-transparent'
                }`}
        >
            <div className="container">
                <div className="flex justify-between items-center">
                    <a href="/" className="relative z-50">
                        <img
                            src="/images/logos/logo.png"
                            alt="logo"
                            className="lg:max-w-[140px] max-w-[120px]"
                        />
                    </a>

                    {/* Mobile menu toggle */}
                    <div
                        className="text-3xl mt-1 cursor-pointer block lg:hidden z-50"
                        onClick={toggleMenu}
                    >
                        <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line`}></i>
                    </div>

                    {/* Navigation */}
                    <nav
                        className={`
                            fixed lg:static inset-0 bg-black-200 lg:bg-transparent lg:w-auto w-full h-screen lg:h-auto 
                            flex flex-col lg:block transition-all duration-500 z-40
                            ${isMenuOpen
                                ? 'opacity-100 visible translate-x-0'
                                : 'opacity-0 invisible translate-x-full lg:translate-x-0 lg:opacity-100 lg:visible'
                            }
                        `}
                    >
                        <div className="lg:hidden absolute top-6 right-0 container flex justify-end" />

                        <div className="flex flex-col justify-between h-full py-20 lg:py-0 lg:h-auto lg:flex-row lg:items-center w-full">
                            <ul className="flex lg:flex-row flex-col items-start lg:items-center w-full max-w-[280px] lg:max-w-none mx-auto gap-4 lg:gap-1">
                                {navItems.map((item) => (
                                    <li key={item.href} className="w-full lg:w-auto">
                                        <a
                                            href={item.href}
                                            className="group flex items-center justify-start lg:justify-center gap-1.5 px-4 py-2 rounded-full
                                                text-lg font-medium font-manrope text-gray-300 lg:text-black-200
                                                hover:bg-white/10 lg:hover:bg-primary/10 hover:text-white lg:hover:text-primary transition-all duration-300
                                                w-full lg:w-auto border border-transparent hover:border-white/5 lg:hover:border-transparent"
                                            onClick={closeMenu}
                                        >
                                            {item.icon && (
                                                <span className="w-6 flex justify-center">
                                                    <i className={`${item.icon} text-xl opacity-70 group-hover:opacity-100`}></i>
                                                </span>
                                            )}
                                            <span>{item.i18nKey ? t(item.i18nKey) : item.label}</span>
                                        </a>
                                    </li>
                                ))}
                                <li className="mt-6 lg:mt-0 lg:ml-4 w-full lg:w-auto text-center lg:text-left">
                                    <LanguageSwitcher />
                                </li>
                                <li className="mt-6 lg:mt-0 lg:ml-4 w-full lg:w-auto text-center lg:text-left">
                                    <Button href={`https://wa.me/${contact.waNumber}?text=${encodeURIComponent('mau hubungi SohibDigi')}`} variant="primary">
                                        {t('footer.contact')}
                                    </Button>
                                </li>
                            </ul>

                            {/* Social Media Icons (Mobile Only) */}
                            <div className="lg:hidden flex justify-center items-center gap-4 mt-auto">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.icon}
                                        href={social.href}
                                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300"
                                    >
                                        <i className={`${social.icon} text-lg`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
