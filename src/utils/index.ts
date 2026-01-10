/**
 * Generate animation delay value for staggered animations
 * @param index - Item index in the list
 * @param baseDelay - Starting delay (default: 0.1)
 * @param step - Delay increment per item (default: 0.1)
 * @returns Delay string (e.g., "0.3")
 */
export function getAnimationDelay(
    index: number,
    baseDelay = 0.1,
    step = 0.1
): string {
    return (baseDelay + index * step).toFixed(1);
}

/**
 * Combine class names, filtering out falsy values
 * @param classes - Class names to combine
 * @returns Combined class string
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(' ');
}
