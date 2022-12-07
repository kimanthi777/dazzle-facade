import React from 'react'
import './App.css'

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


/***
 * TODO: Object based routing
 */

function App() {

  const appRoutes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/reset-password', element: <ResetPassword /> },
    { path: '/employees', element: <Employees /> },
    { path: '/organization', element: <Organization /> },
    { path: '/invoicing', element: <Invoicing /> },
    { path: '/reciepts', element: <Reciepts /> },
    { path: '/recruitment', element: <Recruitment /> },
    { path: '/reports', element: <Reports /> },
    { path: '/payroll', element: <Payroll /> },
    { path: '/projects', element: <Projects /> },
    { path: '/db-backups', element: <DbBackups /> },
    { path: '/notice-board', element: <NoticeBoard /> },
    { path: '/tickets', element: <Tickets /> },
    { path: '/timesheet', element: <TimeSheet /> },
    { path: '/settings', element: <Settings /> },
    { path: '*', element: <Error404 /> },
  ])

  return (
    <>
      <HeaderNav />
      {appRoutes}
      <Footer />
    </>
  );
}

export default App; 