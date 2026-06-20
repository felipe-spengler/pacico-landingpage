import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
    delay?: number; // in ms
    duration?: number; // in ms
    className?: string;
}

export default function ScrollReveal({
    children,
    direction = 'up',
    delay = 0,
    duration = 600,
    className = '',
}: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // only reveal once
                }
            },
            {
                threshold: 0.1, // trigger when 10% is visible
                rootMargin: '0px 0px -50px 0px', // trigger slightly before entering viewport fully
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    // Build reveal styles
    const revealStyle: React.CSSProperties = {
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
    };

    return (
        <div
            ref={ref}
            className={`reveal reveal-${direction} ${isVisible ? 'reveal-visible' : ''} ${className}`}
            style={revealStyle}
        >
            {children}
        </div>
    );
}
