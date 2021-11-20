import React, { useState } from 'react'
import { Link, Route } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faTimes, faUserAlt } from '@fortawesome/free-solid-svg-icons'

const ActiveEffect = () => {
    return (
        <span className='absolute top-0 left-0 right-1/2 bottom-0 bg-yellow-450 transform activeNavLinkAnimation'></span>
    )
}


const UserDropDown = (props) => {

    const [dropDownActive, setDropDownActive] = useState(false)

    return (
        <div className='relative'>
            <span onClick={() => { setDropDownActive(!dropDownActive) }}>
                <img className='w-10 cursor-pointer ' src={process.env.PUBLIC_URL + '/images/profilepic.png'} alt="Logo" />
            </span>

            {
                dropDownActive ?
                    <div className='absolute top-full mt-5 right-0 bg-gray-600 rounded-lg text-white z-50 w-72'>
                        <div className='py-4 px-4 flex items-center gap-4'>
                            <img className='w-16 ' src={process.env.PUBLIC_URL + '/images/profilepic.png'} alt="Logo" />
                            <div>
                                <p className='font-medium text-lg'>Maryam Safdar</p>
                                <p className='text-sm'>Maryam.Safdar@gmail.com</p>
                            </div>
                        </div>
                        <hr />
                        <div className='p-7'>
                            <Link to='/dashboard/student/' className='text-lg relative w-full block mb-4'>
                                Dashboard
                            </Link>
                            <Link to='/cart/' className='text-lg relative w-full block mb-4'>
                                Cart
                                <span className='absolute right-0 bg-yellow-450 w-6 top-0 flex items-center justify-center h-6 rounded-full'>
                                    1
                                </span>
                            </Link>
                            <Link to='/wishlist/' className='text-lg relative w-full block'>
                                Wishlist
                                <span className='absolute right-0 bg-yellow-450 w-6 top-0 flex items-center justify-center h-6 rounded-full'>
                                    1
                                </span>
                            </Link>
                        </div>
                        <hr />
                        <div className='p-6'>
                            <Link to='/dashboard/student/' className='text-lg relative w-full block'>
                                Profile Setting
                            </Link>
                        </div>
                        <hr />
                        <div className='p-6'>
                            <span className='text-lg cursor-pointer' onClick={() => { props.setLoggedIn(false) }}>
                                Logout
                            </span>
                        </div>

                    </div>
                    :
                    <></>
            }
        </div>
    )
}


const NotificationItem = () => {
    return (
        <div className='py-2 overflow-hidden cursor-pointer '>
            <p className='text-lg whitespace-nowrap'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p className='text-gray-300'>26 Sep, 2021</p>
            <span className='block w-full bg-gray-500 mt-2' style={{height:'1px'}}></span>
        </div>
    )
}

const NotificationDropDown = () => {

    const [NotifyActive , setNotifyActive] = useState(false)
    return (
        <div className='relative'>
            <span onClick={()=>{setNotifyActive(!NotifyActive)}} >
                <FontAwesomeIcon icon={faBell} className='text-indigo-900 text-xl cursor-pointer' />
            </span>
            {
                NotifyActive ?
            <div className='absolute top-full mt-5 right-0 bg-gray-600 text-white w-96 rounded-lg z-50'>
                <h3 className='text-xl px-3 py-1'>Notifications</h3>
                <hr />
                <div className='px-2'>
                    <NotificationItem />
                    <NotificationItem />
                    <NotificationItem />
                    <NotificationItem />
                    <NotificationItem />
                </div>
            </div>
            :<></>
            }
        </div>
    )
}

const LoggedUser = (props) => {
    return (
        <div className='flex items-center gap-5'>
            <NotificationDropDown />
            <UserDropDown setLoggedIn={props.setLoggedIn} />
        </div>
    )
}



const NavLink = (props) => {
    return (
        <li className="py-2 px-3 rounded-sm overflow-hidden cursor-pointer relative">
            <Route path={props.nextPath} exact >
                <ActiveEffect />
            </Route>
            <Link className="relative capitalize" to={props.nextPath}>{props.text}</Link>
        </li>
    )
}

export const HamburgerIcon = (props) => {
    return (
        <span className='lg:hidden block cursor-pointer' {...props}>
            <span className='block w-8 h-1 rounded-full mb-1 bg-gray-700'></span>
            <span className='block w-8 h-1 rounded-full mb-1 bg-gray-700'></span>
            <span className='block w-8 h-1 rounded-full  bg-gray-700'></span>
        </span>
    )
}

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false)

    const [mobileNavshow, setMobileNavShow] = useState('hidden')

    return (
        <header className='container py-4 lg:px-14 px-3 mx-auto flex items-center justify-between '>
            <HamburgerIcon onClick={() => { setMobileNavShow('block') }} />
            <div className='LOGO '>
                <img className='w-40' src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo" />
            </div>
            <nav className={`absolute top-0 left-0 right-0 p-6 lg:p-0 z-50 lg:relative ${mobileNavshow} lg:block`} >
                <ul className="flex items-center text-xs gap-1 pentutor-shadow lg:shadow-none lg:flex-row py-5 flex-col bg-white relative">
                    <span className='absolute top-3 left-5 text-xl cursor-pointer lg:hidden' onClick={() => { setMobileNavShow('hidden') }}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                    <NavLink nextPath='/' text='Home' />
                    <NavLink nextPath='/courses/' text='Courses' />
                    <NavLink nextPath='/our-tutor/' text='Our Tutors' />
                    <NavLink nextPath='/about-us/' text='About Us' />
                    <NavLink nextPath='/contact-us/' text='Contact Us' />
                    <NavLink nextPath='/blogs/' text='Blogs' />
                    <NavLink nextPath='/jobs/' text='Jobs' />
                </ul>
            </nav>
            <ul className='flex items-center text-xs gap-2'>
                {
                    loggedIn ?
                        <LoggedUser setLoggedIn={setLoggedIn} />
                        :
                        <>
                            <li className='py-2 px-4 rounded overflow-hidden bg-gray-700 text-white cursor-pointer'>
                                <Link to='/auth/login/'>Sign In</Link>
                            </li>
                            <li className='py-2 px-4 rounded overflow-hidden border border-gray-700  cursor-pointer'>
                                <Link to='/auth/register/student/'>Sign Up</Link>
                            </li>
                        </>
                }
            </ul>
        </header>
    )
}

export default Header