import type { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

/**
 * Container wrapper component for consistent max-width and padding
 */
export function Container({ children, className = '' }: ContainerProps) {
    return <div className={`container ${className}`}>{children}</div>;
}
