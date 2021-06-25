import { Disclosure } from '@headlessui/react'
import Logo from '../img/ben-photo-logo.png';
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-00">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-20">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <NavLink to="/" exact>
                    <img
                      src={Logo} 
                      style={{width: 250, height: 60 }} 
                      alt="logo"
                    />
                  </NavLink>
                </div>
                <div className="hidden sm:block sm:ml-10">
                  <div className="flex space-x-4">
                    <NavLink
                      to="/"
                      exact
                      className="nav-link text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                      activeClassName="underline"
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to="/about"
                      exact
                      className="nav-link text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                      activeClassName="underline"
                    >
                      About
                    </NavLink>
                    <NavLink
                      to="/pricing"
                      exact
                      className="nav-link text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                      activeClassName="underline"
                    >
                      Pricing
                    </NavLink>
                    <NavLink
                      to="/portfolio"
                      exact
                      className="nav-link text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                      activeClassName="underline"
                    >
                      Portfolio
                    </NavLink>
                    <NavLink
                      to="/blog"
                      exact
                      className="nav-link text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                      activeClassName="underline"
                    >
                      Blog
                    </NavLink>
                    <NavLink
                      to="/contact"
                      exact
                      className="nav-link text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                      activeClassName="underline"
                    >
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block sm:ml-10">
                <SocialIcon 
                  url="https://www.instagram.com/benjaminbrittonphotography/?hl=en/" 
                  className="mr-4" 
                  target="_blank" 
                  fgColor="#fff" 
                  style={{ height: 35, width: 35 }}
                />
                <SocialIcon
                  url="https://www.facebook.com/benjaminbrittonphotography" 
                  className="mr-4" 
                  target="_blank" 
                  fgColor="#fff" 
                  style={{ height: 35, width: 35, float: 'right' }}
                />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink
                to="/"
                exact
                className="nav-link text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md font-medium"
                activeClassName="underline"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                exact
                className="nav-link text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md font-medium"
                activeClassName="underline"
              >
                About
              </NavLink>
              <NavLink
                to="/pricing"
                exact
                className="nav-link text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md font-medium"
                activeClassName="underline"
              >
                Pricing
              </NavLink>
              <NavLink
                to="/portfolio"
                exact
                className="nav-link text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md font-medium"
                activeClassName="underline"
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/blog"
                exact
                className="nav-link text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md font-medium"
                activeClassName="underline"
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                exact
                className="nav-link text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md font-medium"
                activeClassName="underline"
              >
                Contact
              </NavLink>
              <div style={{textAlign: "center"}}>
                <p>Find us on...</p><br/>
                <SocialIcon 
                  url="https://www.instagram.com/benjaminbrittonphotography/?hl=en/" 
                  className="mr-4" 
                  target="_blank" 
                  fgColor="#fff" 
                  style={{ height: 35, width: 35 }}
                />
                <SocialIcon
                  url="https://www.facebook.com/benjaminbrittonphotography" 
                  target="_blank" 
                  fgColor="#fff" 
                  style={{ height: 35, width: 35 }}
                />
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}