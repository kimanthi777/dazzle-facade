
export function createHTMLTag(tagName: HTMLElement | any) {
    if(!tagName || tagName === undefined){
        console.log(`Cannot create tag. No valid HTML tag name provided`)
    }

    const tag = document.createElement(tagName)
    return tag
}