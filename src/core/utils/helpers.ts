/**
 * @param  {string} text
 */
export function upperCaseFirstLetter(text: string) {
    return typeof text === 'string' ? text.charAt(0).toUpperCase() + text.slice(1) : ''
}

/**
 * @param  {string} text
*/

export function maskInput(text: string) {
    // I suck at regex, 
    // TODO: 
    const regexTextInput = /^(.{4}).*$/g

    return typeof text === 'string' ? text.replace(regexTextInput, '$1******') : ''
}