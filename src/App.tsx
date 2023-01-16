import React from 'react'
import { useRoutes } from './core/hooks'

//layouts
import { HeaderNav, Footer } from './layouts';

//pages
import {
  Home, Login, Register, ResetPassword,
  Employees, Organization, Invoicing,
  Reciepts, Recruitment, Reports,
  Payroll, Projects, dbBackups as DbBackups,
  NoticeBoard, Tickets, TimeSheet, Settings,

  Error404
} from './pages'

import { UnderConstruction } from './core/components';
import TestCase from './ReducerTest'
/***
 * TODO: Object based routing
 */

function App() {
  const isAuthenticated = false

  const appRoutes = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'login', element: <Login /> },
    { path: 'register', element: <Register /> },
    { path: 'reset-password', element: <UnderConstruction /> /**<ResetPassword /> */ },
    { path: 'employees', element: <Employees /> },
    { path: 'organization', element: <UnderConstruction /> /**<Organization /> */ },
    { path: 'invoicing', element: <UnderConstruction /> /**<Invoicing /> */ },
    { path: 'reciepts', element: <UnderConstruction /> /**<Reciepts /> */ },
    { path: 'recruitment', element: <UnderConstruction /> /**<Recruitment /> */ },
    { path: 'reports', element: <UnderConstruction /> /**<Reports /> */ },
    { path: 'payroll', element: <UnderConstruction /> /**<Payroll /> */ },
    { path: 'projects', element: <UnderConstruction /> /**<Projects /> */ },
    { path: 'db-backups', element: <UnderConstruction /> /**<DbBackups /> */ },
    { path: 'notice-board', element: <UnderConstruction /> /**<NoticeBoard /> */ },
    { path: 'tickets', element: <UnderConstruction /> /**<Tickets /> */ },
    { path: 'timesheet', element: <UnderConstruction /> /**<TimeSheet /> */ },
    { path: 'settings', element: <UnderConstruction /> /**<Settings /> */ },
    { path: 'mobile-page', element: <UnderConstruction /> },
    { path: 'about', element: <UnderConstruction /> },
    { path: 'app-features', element: <UnderConstruction /> },
    { path: 'pricing', element: <UnderConstruction /> },
    { path: '/uc', element: <UnderConstruction /> }, /**@uc -> under construction */
    { path: '/tests', element: <TestCase /> },
    { path: '*', element: <Error404 /> },

  ])
  return (
    <>
      {/* <HeaderNav /> */}
      {appRoutes}
      {/* {isAuthenticated ? '' : <Footer />} */}
    </>
  );
}

export default App; 