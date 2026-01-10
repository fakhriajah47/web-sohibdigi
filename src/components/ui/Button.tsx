import type { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    href?: string;
    variant?: 'primary' | 'secondary';
    className?: string;
    onClick?: () => void;
}

/**
 * Reusable Button component with primary and secondary variants
 * Matches the original .btn styling from the HTML template
 */
export function Button({
    children,
    href,
    variant = 'primary',
    className = '',
    onClick,
}: ButtonProps) {
    const baseClasses = 'btn';

    const variantClasses = {
        primary: 'bg-primary text-secondary text-white border-primary hover:bg-black-200 hover:text-white',
        secondary: 'bg-black-200 text-white border-black-200 hover:text-primary',
    };

    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

    if (href) {
        return (
            <a href={href} className={combinedClasses}>
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={combinedClasses}>
            {children}
        </button>
    );
}
