// const tag = document.createElement('style')
// tag.type = 'text/css'
// tag.setAttribute('made-tag-and-set-a-value', '')
// tag.setAttribute('rel', '=stylesheet') //? Valid

// console.log(tag)

// The above was inspired from mantine, function to makeStyleTag

// TODO: For me, I wanna create function to create any tag, 
// TODO, for now, JS will take tagName, but in TS, we will validate it!

// TS code will be within this dazzle facade code! Let's enjoy!

// generic but valid: in TS
// TS will allow any tag but once defined, prevent access to what is not its properties!

function createHTMLTag(tagName){
    const tag = document.createElement(tagName)
    // if(tag is this) create its default properties/ attributes
    // How can TS help load tagName with its default values?
    return tag
}

// When do we decide if tag needs certain properties, e.g attributes?

const tag = createHTMLTag("style")
// console.log(tag)

document.addEventListener('scroll', (e)=>{
    console.log(window.innerWidth, window.document.documentElement.clientWidth)
    // 
})

// document.body.style.paddingRight = '10px'
// console.log(window.getComputedStyle(document.body).paddingRight)

console.log(tag.styleSheet)