import React, { useState, useRef, useId } from 'react';

type TooltipProps = {
    label: string;
    children: React.ReactElement;
};

const Tooltip = ({ label, children }: TooltipProps) => {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const tooltipId = useId();

    const handleShowTooltip = () => {
        setIsTooltipVisible(true);
    };

    const handleHideTooltip = () => {
        setIsTooltipVisible(false);
    };

    const tooltipRef = useRef<HTMLDivElement>(null);

    return (
        <div style={{ position: 'relative' }}>
            <div
                onMouseEnter={handleShowTooltip}
                onMouseLeave={handleHideTooltip}
                onFocus={handleShowTooltip}
                onBlur={handleHideTooltip}
                aria-describedby={tooltipId}
            >
                {children}
            </div>
            {isTooltipVisible && (
                <div
                    ref={tooltipRef}
                    role="tooltip"
                    id={tooltipId}
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translate(-50%, 8px)',
                        backgroundColor: 'black',
                        color: 'white',
                        padding: '8px',
                        borderRadius: '4px',
                        zIndex: 1,
                    }}
                >
                    {label}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
