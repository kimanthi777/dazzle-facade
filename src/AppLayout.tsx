import React from 'react'
import { useAppRoutes } from './core/hooks';
import routes from './routes/routes'

//layouts
import { HeaderNav, Footer } from './layouts';

import { Calendar } from './core/components/calender';

type AppLayoutProps = {
    children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
    const isAuthenticated = false

    const appRoutes = useAppRoutes(routes)

    return (
        <>
            <HeaderNav />
            {appRoutes}

            {children} {/**
             * This "children" thing allows me to add a Demo directly into my App.tsx file to just, well,  
             * display a component on screen. I wish I picked storybook rather 😑️✍️
             * */}

            {isAuthenticated ? '' : <Footer />}
        </>
    )
}
