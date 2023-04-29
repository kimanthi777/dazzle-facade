import { useEffect, useLayoutEffect } from "react";

/**
 * useLayoutEffect runs before DOM update. which is what we want
 * well... update document title before render
 * But a fallback for SSR since it shows an error in tools like Next.js
 */

export const useIsomorphicEffect = typeof document == 'undefined'? useEffect : useLayoutEffect