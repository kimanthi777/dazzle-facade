const getLockStyles = ({ disableBodyPadding }) => {
  const scrollWidth = disableBodyPadding ? null : getScrollWidth();

  const styles = `body {
        --removed-scroll-width: ${scrollWidth}px;
        touch-action: none;
        overflow: hidden !important;
        position: relative !important;
        ${scrollWidth ? 'padding-right: var(--removed-scroll-width) !important;' : ''}
        `;

  return styles;
};


function getScrollWidth() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return 0;

  const paddingRight = parseInt(window.getComputedStyle(document.body).paddingRight, 10);
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

  return paddingRight + scrollbarWidth;
}


function injectStyles(tag, css) {
  if (tag.styleSheet) {
    // eslint-disable-next-line no-param-reassign
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}

function makeStyleTag() {
  const tag = document.createElement('style');
//   tag.type = 'text/css';
  tag.setAttribute('mantine-scroll-lock', '');

  return tag;
}

function insertStyleTag(tag) {
  const head = document.head || document.getElementsByTagName('head')[0];

  head.appendChild(tag);
}


let scrollTop = 0
let stylesheet = null

scrollTop.current = window.scrollY;

  const lockScroll = () => {
    scrollTop.current = window.scrollY;

    const styles = getLockStyles({ disableBodyPadding:false });

    /**
     * by applying styles via style tag
     * we dont care about previous styles due to inheritance
     * when scroll gets unlocked we delete that style tag
     */
    const sheet = makeStyleTag();

    injectStyles(sheet, styles);
    insertStyleTag(sheet);

    // stylesheet?.current = sheet; ///Useful in React since React adds a .current!!
  };

  const unlockScroll = () => {
    // if (!stylesheet?.current) return;

    const stylesheet = document.querySelector('style')
    const p= stylesheet.parentNode
    p.removeChild(stylesheet)
    console.log('done to unlock scroll')
    // stylesheet.current = null;
  };
// unlockScroll() 


// setTimeout(lockScroll, 3500)

// setTimeout(unlockScroll, 5000) Never worked as expected!!


// useScrollIntoView

const div = document.querySelector('div')

div.addEventListener((e)=>console.log('mouse down'), 'mousedown')
// div.addEventListener('touchstart' (e)=>console.log('touch start',))