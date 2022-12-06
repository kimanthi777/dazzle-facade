import React from 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom'

//layouts
import { HeaderNav, Footer } from './layouts';

//pages
import {
  Home, Login, Register, ResetPassword,
  Employees, Organization, Invoicing,
  Reciepts, Recruitment, Reports,
  Payroll, Projects, dbBackups as DbBackups,
  NoticeBoard, Tickets, TimeSheet, Settings
} from './pages'


/***
 * TODO: Object based routing
 */

function App() {
  return (
    <>
      <HeaderNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/employees' element={<Employees />} />
        <Route path='/organization' element={<Organization />} />
        <Route path='/invoicing' element={<Invoicing />} />
        <Route path='/reciepts' element={<Reciepts />} />
        <Route path='/recruitment' element={<Recruitment />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/payroll' element={<Payroll />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/db-backups' element={<DbBackups />} />
        <Route path='/notice-board' element={<NoticeBoard />} />
        <Route path='/tickets' element={<Tickets />} />
        <Route path='/timesheet' element={<TimeSheet />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;