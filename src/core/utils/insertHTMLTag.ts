
export function insertHTMLTag(tag: HTMLElement | any, locationOfParent:HTMLElement | any) {
    if(!tag || !locationOfParent) {
        console.log(`Cannot insert tag, provide tag and parent`)
    }

    locationOfParent.appendChild(tag)
}
