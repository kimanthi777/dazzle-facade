
export function appendTagAttributes(tag: HTMLElement | any, tagAttributes: string[]){
    if((!tagAttributes || tagAttributes?.length < 1) && (!tag)){
        console.log(`Cannot append attributes: tag or attributes missing`)
    }

    const tagWithAttributes =  tagAttributes.forEach((tagAttribute)=>{
        tag?.setAttribute(tagAttribute, '')
    })

    return tagWithAttributes
}