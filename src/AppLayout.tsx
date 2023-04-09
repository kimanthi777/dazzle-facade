import React from 'react'
import { useAppRoutes } from './core';
import { routes } from '@routes'

//layouts
import { HeaderNav, Footer } from '@layouts';

type AppLayoutProps = {
    children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
    const isAuthenticated = false

    const appRoutes = useAppRoutes(routes)

    return (
        <>
            {/* <HeaderNav /> */}
            {/* {appRoutes} */}
            {children}
            {/* {isAuthenticated ? '' : <Footer />} */}
        </>
    )
}
