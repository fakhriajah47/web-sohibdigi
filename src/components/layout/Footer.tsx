/**
 * Footer with copyright and navigation links
 */
import { useI18n } from '@/i18n/I18nProvider';
export function Footer() {
    const { t } = useI18n();
    const footerLinks = [
        { href: '#', label: t('footer.latest_project') },
        { href: '#', label: t('footer.pricing') },
        { href: '#', label: t('footer.contact') },
        { href: '#', label: t('footer.privacy') },
        { href: '#', label: t('footer.terms') },
    ];

    return (
        <footer>
            <div className="pt-12.5 pb-10">
                <div className="container">
                    <div className="flex lg:flex-row flex-col items-center justify-between gap-y-4">
                        <div className="copyright-text">
                            <p>
                                Copyright{' '}
                                <a href="/" className="text-primary">
                                    &copy;Sohibdigi.id
                                </a>{' '}
                                All Rights Reserved.
                            </p>
                        </div>
                        <ul className="flex flex-wrap justify-center gap-x-7.5 gap-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
