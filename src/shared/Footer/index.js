import React from 'react'
import { iconList } from '../../components/icons/index'


const Footer = () => {

  const { FaFacebookF, FaInstagram, FaYoutube } = iconList;

  return (
    <footer className='grid bg-gray-400/10 xl:pt-10 xl:pb-6 xl:px-32' >
      <div className='grid-cols-1 xl:flex xl:flex-wrap xl:justify-start mx-4 my-4 lg:mx-0'>
          <div className='xl:w-2/6'>
              <h2 className='w-86 py-1 text-2xl text-start my-2 uppercase font-bold '>
                  Menu
              </h2>
              {/* <hr className='w-60 border border-1 border-zinc-800'></hr> */}
              <div className='h-56 text-start mt-6'>
                  <ul className='list-none'>
                      <li className='mb-3'>
                          <span className='font-sans font-medium text-lg'>Inicio</span>
                      </li>
                      <li className='mb-3'>
                          <span className='font-sans font-medium text-lg'>Nosotros</span>
                      </li>
                      <li className=''>
                          <span className='font-sans font-medium text-lg'>Servicios</span>
                      </li>
                  </ul>
              </div>
          </div>
          <div className='xl:w-1/6'>
              <h2 className='w-86 py-1 text-2xl text-start xl:my-2 uppercase font-bold '>
                  Social
              </h2>
              <div className='h-56 text-center xl:text-start mt-8 xl:mt-14'>
                  <ul className='list-none flex justify-around xl:justify-between '>
                      <li className='mb-2'>
                          <button className='h-10 w-10 bg-none hover:bg-[#EABE3F] border-2 border-[#EABE3F] rounded-full px-[23%] hover:text-slate-50'>
                              <FaFacebookF/>
                          </button>
                      </li>
                      <li className='mb-2'>
                          <button className='h-10 w-10 bg-none hover:bg-[#EABE3F] border-2 border-[#EABE3F]  rounded-full px-[25%] hover:text-slate-50'>
                              <FaInstagram/>
                          </button>
                      </li>
                      <li className=''>
                          <button className='h-10 w-10 bg-none hover:bg-[#EABE3F] border-2 border-[#EABE3F]  rounded-full px-[25%] hover:text-slate-50'>
                              <FaYoutube/>
                          </button>
                      </li>
                  </ul>
              </div>
          </div>
          <div className='xl:w-3/6'>
              <h2 className='w-86 pb-10 text-2xl mt-10 xl:mt-28 text-center uppercase'>
                  <h1 className='uppercase font-bold text-[110px]'>Logo</h1>
              </h2>       
          </div>
      </div>
 </footer>
  )
}

export default Footer
