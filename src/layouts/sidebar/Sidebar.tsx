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
import { FaGraduationCap } from 'react-icons/fa'
import { GiOrganigram } from 'react-icons/gi'

export function Sidebar() {
    return (
        <aside className='w-[15vw] fixed top-0 left-0 h-full bg-slate-600 flex flex-wrap flex-col justify-between gap-3'>
            <div className='mt-20 scroll-m-0'>
                <Link to='/dashboard'>
                    <Text as='h1' className='text-white text-lg py-3 pl-5 flex items-center gap-1'><AiFillHome />Dashboard</Text>
                </Link>
                <Link to='/organization'>
                    <Text as='h1' className='text-white text-lg py-3 pl-5 flex items-center gap-1'><GiOrganigram />Organization</Text>
                </Link>
                <Link to='/employees'>
                    <Text as='h1' className='text-white text-lg py-3 pl-5 flex items-center gap-1'><BsPeopleFill />Employees</Text>
                </Link>
                <Link to='/timesheet'>
                    <Text as='h1' className='text-white text-lg py-1 pl-5 flex items-center gap-1'>
                        <BiTime /> Timesheet
                    </Text>
                </Link>
                <Link to='/payroll'>
                    <Text as='h1' className='text-white text-lg py-1 pl-5 flex items-center gap-1'><MdOutlinePayments />Payroll</Text>
                </Link>

                <Link to='/invocing'>
                    <Text as='h1' className='text-white text-lg py-1 pl-5 flex items-center gap-1'>
                        <BsFileSpreadsheet />Invoicing
                    </Text>
                </Link>

                <Link to='/projects'>
                    <Text as='h1' className='text-white text-lg py-1 pl-5 flex items-center gap-1'><AiOutlineProject />Projects</Text>
                </Link>
                <Link to='/tasks'>
                    <Text as='h1' className='text-white text-lg py-1 pl-5 flex items-center gap-1'><HiOutlineDocumentReport />Tasks</Text>
                </Link>
                <Link to='/tickets'>
                    <Text as='h1' className='text-white text-lg py-1 pl-5 flex items-center gap-1'><HiOutlineDocumentReport />Tickets</Text>
                </Link><Link to='/employees'>
                    <Text as='h1' className='text-white text-lg py-1 pl-5 flex items-center gap-1'><FaGraduationCap />Recruitment</Text>
                </Link>
                <Link to='/settings'>
                    <Text as='h1' className='text-white text-lg py-1 pl-5 flex items-center gap-1'>
                        <FiSettings /> Settings
                    </Text>
                </Link>
                <Link to='/employees'>
                    <Text as='h1' className='text-white text-lg py-1 pl-5 flex items-center gap-1'>
                        <FiDatabase />Database Backup
                    </Text>
                </Link>



            </div>

        </aside>
    )
}
