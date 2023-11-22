import { Disclosure, } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
//import Logo from '../../assets/img/logoVero.png'
import NavigationItem from '../navigation/NavigationItem';
import NavMobile from '../navigation/NavMobile';

const navigation = [
  { name: 'Inicio', href: 'HeroSectionScroll', current: false },
  { name: 'Nosotros', href: 'AboutSectionScroll', current: false },
  { name: 'Servicios', href: 'ServicesSectionScroll', current: false },
]

const Header = () => {

  return (
    <Disclosure as="nav" className="bg-[#0707079d] py-6 fixed w-full backdrop-blur-sm z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              
              <div className="flex flex-1 items-center justify-end sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  {/* <img
                    className="h-28 xl:h-48 w-auto cursor-pointer"
                    src={Logo}
                    alt="CYVM"
                  /> */}
                  <h1 className='text-white text-5xl font-bold tracking-widest'>
                    CYVM
                  </h1>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item,index) => (
                      <NavigationItem key={index} menuItem={item}/>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 left-0 flex items-center justify-between sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
          {({ close }) => (
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item,index) => (
                <NavMobile key={index} menuItem={item} close={close}/>
              ))}
            </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Header