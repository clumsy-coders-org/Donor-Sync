import React from 'react'
import logonb from '../../assets/logo-final-navbar.png'
import bicon from '../../assets/logo.png'
import pro from '../../assets/profile.png'
import search from '../../assets/search.png'
import { Fragment } from 'react'
import { Disclosure,  Transition } from '@headlessui/react'
import { SearchCircleOutline, X ,Menu, BellIcon,  UserCircleOutline } from 'heroicons-react'
import { useNavigate } from 'react-router-dom'

const navigation = [
  
  
  { name: 'DonorSync', href: '/home', current: true },
  { name: 'Home', href: '/home', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Contact', href: '/contact', current: false },
  {name:  <UserCircleOutline/>, href:'/login', current: false},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Header() {


  const navigate=useNavigate()




  return (

    <Disclosure as="nav" className="bg-red-600">
    {({ open }) => (
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="relative inline-flex items-center justify-center rounded-3xl p-2 text-black hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
                
              </Disclosure.Button>
            </div>
            <div className="flex flex-1 items-center justify-start sm:items-center sm:justify-start">
              <div className="flex flex-shrink-0 justify-normal items-center ">
               <a href='/'> <img 
                  className="h-12 w-auto "
                  src={logonb}
                  alt="Your Company"
                /> </a>
              </div>
              <div className="hidden sm:ml-1 sm:block">
                <div className="flex space-x-4 ">
                 
                  {navigation.map((item) => (
                    <span
                      key={item.name}
                      onClick={()=>{navigate(item.href)}}
                      className={classNames(
                        item.current ? 'bg-red-600 text-white text-lg' : 'text-gray-300 hover:bg-gray-700 hover:text-white text-lg',
                        'rounded-md px-3 py-4 text-sm font-medium cursor-pointer'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {/* <div className="absolute hidden sm:block inset-y-0 left-0  items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"> */}
              <button
                type="button"
                className="relative rounded-full right-12 md:right-4 text-gray-900 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Search</span>
                
                <SearchCircleOutline className="h-7 w-7" aria-hidden="true" />
              </button>

              {/* Profile dropdown */}
              {/* <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className=" relative  rounded-full bg-white p-1 text-sm focus:outline-none  hover:text-gray-900 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2">
                    <span className=" absolute -inset-1.5" />
                    <span className=" sr-only">Open user menu</span>
                    < UserCircleOutline className=" h-7 w-7" aria-hidden="true" />
                    
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                         
                        onClick={()=>{navigate("/userdetails")}}
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer ')}
                        >
                          Your Profile
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <span
                          
                          onClick={()=>{navigate("/login")}}
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer ')}
                        >
                          Login
                        </span>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) =>(
                        <span
                          
                          onClick={()=>{navigate("/signup")}}
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}
                        >
                          Sign Up
                        </span>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu> */}
            </div>
          </div>
        {/* </div> */}

        <Disclosure.Panel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Disclosure.Button>
            ))}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
  )
}

export default Header

