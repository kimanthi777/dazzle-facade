import React from 'react';

interface Options {
    active: boolean;
    onTrigger?(): void;
    onKeyDown?(event: React.KeyboardEvent<any>): void;
}

export function closeOnEscape(callback?: (event: any) => void, options: Options = { active: true }) {
    if (typeof callback !== 'function' || !options.active) {
        return options.onKeyDown //|| ''
    }

    return (event: React.KeyboardEvent<any>) => {
        if (event.key === 'Escape') {
            callback(event);
            options.onTrigger?.();
        }
    };
}
