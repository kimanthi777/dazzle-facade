import React from 'react'

/**
 * TODO: Polymorphic Button component [classnames]
 */

type ButtonProps = {
    chilren?: React.ReactNode;
    primary?: boolean;
    secondary?: boolean;
}

export default function Button() {
    return (
        <div>Button</div>
    )
}

Button.displayName = '@Button'