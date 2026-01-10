import type { NavItem } from '@/types';

/**
 * Main navigation items with i18n keys for translation
 * - href: URL path with hash for section anchors
 * - label: Fallback label if translation not found
 * - icon: Remix Icon class
 * - i18nKey: Translation key for internationalization
 */
export const navItems: NavItem[] = [
    { href: '/#services', label: 'Services', icon: 'ri-briefcase-line', i18nKey: 'nav.services' },
    { href: '/#projects', label: 'Projects', icon: 'ri-image-line', i18nKey: 'nav.projects' },
    { href: '/#how', label: 'How It Works', icon: 'ri-question-line', i18nKey: 'nav.how' },
    { href: '/#faqs', label: 'Faqs', icon: 'ri-chat-1-line', i18nKey: 'nav.faqs' },
];
