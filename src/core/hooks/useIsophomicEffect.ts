import { useEffect, useLayoutEffect } from 'react';

// useLayoutEffect will show warning if used during ssr, e.g. with Next.js
// useIsomorphicEffect removes it by replacing useLayoutEffect with useEffect during ssr
export const useIsomorphicEffect = typeof document !== 'undefined' ? useLayoutEffect : useEffect;


// DEF: corresponding or similar in form and relations.

/**An isomorphism is a mapping for which an inverse mapping also exists. 
 * It's a way to describe equivalence. In programming, you often have the choice to 
 * implement a particular feature in more than one way. These alternatives may be 
   equivalent, in which case they're isomorphic
**/