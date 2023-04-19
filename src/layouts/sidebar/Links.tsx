import React from 'react'
import { Link } from 'react-router-dom'
import { Text } from '../../core/components/common'

import {
    FiMail,
    FiSettings,
    FiDownload,
    FiUpload,
    FiPlus,
    FiDatabase
} from 'react-icons/fi'

import {
    AiOutlineEye,
    AiOutlineCaretDown,
    AiOutlineDelete,
    AiOutlineSync,
    AiFillHome,
    AiOutlineProject
} from 'react-icons/ai'

import {
    BiLogOut,
    BiTime
} from 'react-icons/bi'

import {
    BsFillTelephonePlusFill,
    BsFileSpreadsheet,
    BsPeopleFill
} from 'react-icons/bs'

import { CiEdit } from 'react-icons/ci'
import { MdReportProblem, MdOutlinePayments } from 'react-icons/md'

import { HiOutlineDocumentReport } from 'react-icons/hi'
import { FaBusinessTime, FaGraduationCap } from 'react-icons/fa'
import { GiOrganigram } from 'react-icons/gi'


const sidebarLinks = [
    {
        linkTo: '/dashboard',
        linkText: 'Dashboard',
        linkIcon: <AiFillHome />
    },
    {
        linkTo: '/organization',
        linkText: 'Organization',
        linkIcon: <GiOrganigram />      
    },
    {
        linkTo: '/employees',
        linkText: 'Employees',
        linkIcon: <BsPeopleFill />       
    },
    {
        linkTo: '/timesheet',
        linkText: 'Timesheet',
        linkIcon: <FaBusinessTime/>       
    },
    {
        linkTo: '/payroll',
        linkText: 'Payroll',
        linkIcon: <MdOutlinePayments />       
    },
    {
        linkTo: '/invocing',
        linkText: 'Invoicing',
        linkIcon: <BsFileSpreadsheet />       
    },       
    {
        linkTo: '/projects',
        linkText: 'Projects',
        linkIcon: <AiOutlineProject />       
    },
    {
        linkTo: '/tasks',
        linkText: 'Tasks',
        linkIcon: <HiOutlineDocumentReport />      
    },
    {
        linkTo: '/tickets',
        linkText: 'Tickets',
        linkIcon: <HiOutlineDocumentReport />       
    },
    {
        linkTo: '/recruitment',
        linkText: 'Recruitmen',
        linkIcon: <FaGraduationCap />       
    },
    {
        linkTo: '/settings',
        linkText: 'Settings',
        linkIcon: <FiSettings />       
    },
    {
        linkTo: '/db-backup',
        linkText: 'DB Backup',
        linkIcon: <FiDatabase />       
    },
]

export default function Links() {
  return (
    <div className='mt-20 scroll-m-0'>
        {
            sidebarLinks.map((link)=>(
                <Link to={link.linkTo} key={link.linkTo}>
                    <Text as='h1' className='text-white text-lg py-3 pl-5 items-center gap-1'>
                        {link.linkIcon} {link.linkText}
                    </Text>
                </Link>
            ))
        }
    </div>
  )
}
