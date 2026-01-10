interface SectionHeaderProps {
    badge: string;
    title: string;
    subtitle?: string;
    className?: string;
}

/**
 * Consistent section header pattern used across multiple sections
 * Includes badge icon, main title, and optional subtitle
 */
export function SectionHeader({
    badge,
    title,
    subtitle,
    className = '',
}: SectionHeaderProps) {
    return (
        <div className={`text-center pb-15 fadeInUp ${className}`} data-delay="0.2">
            <h3 className="border border-[#bebebe] py-2.5 px-5 rounded-3xl md:text-base md:leading-5 text-sm inline-block font-normal mb-[5px]">
                <i className="ri-arrow-right-up-line text-primary"></i>
                {badge}
            </h3>
            <h2 className="xl:leading-[90px] xl:text-[80px] md:leading-[60px] md:text-[50px] leading-[50px] text-[40px] text-black-100 font-medium">
                {title}
            </h2>
            {subtitle && (
                <p className="md:text-xl md:leading-7 text-base mt-2">{subtitle}</p>
            )}
        </div>
    );
}
