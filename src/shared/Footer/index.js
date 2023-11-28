import React from 'react'
import { iconList } from '../../components/icons/index'
import Logo from '../../assets/img/Logopit_.png'
import { Link } from 'react-scroll';


const navigation = [
    { id:1, name: 'Inicio', href: 'HeroSectionScroll', current: false },
    { id:2, name: 'Nosotros', href: 'AboutSectionScroll', current: false },
    { id:3, name: 'Servicios', href: 'ServicesSectionScroll', current: false },
  ]

const Footer = () => {

  const { FaFacebookF, FaInstagram } = iconList;
  return (
    <footer className='grid bg-[#070707]  xl:pt-10 xl:pb-6 xl:px-32  backdrop-blur-xl' >
      <div className='grid-cols-1 mx-10 xl:max-w-[1200px] xl:mx-72  xl:flex xl:flex-wrap  my-2'>
            <div className='xl:w-3/6 '>
                <div className=''>
                <img
                    className="h-72 cursor-pointer pb-1"
                    src={Logo}
                    alt="CYVM"
                  />
                </div>
           
                  {/* <h1 className='uppercase font-bold text-[110px] text-[#EABE3F]'>Logo</h1>    */}
            </div>
          <div className='xl:w-2/6 my-14'>
              <h2 className='w-86 py-1 text-2xl text-start  uppercase font-bold text-[#e5e5e5]'>
                  Menu
              </h2>
              <hr className='h-2 w-20 bg-[##e5e5e5]'></hr>
              <hr className='h-1 w-10 bg-[##e5e5e5]'></hr>
              {/* <hr className='w-60 border border-1 border-zinc-800'></hr> */}
              <div  className='h-44 text-start mt-6'>
                {navigation.length > 0 ? navigation.map((item) => { 
                    return (
                    <div key={item.id}>
                        <ul className='list-none' >
                            <Link   
                                to={item.href}
                                smooth={true} 
                                offset={-110} 
                                duration={500} >
                                <li className='mb-3 text-white py-2' >
                                    <span className='font-sans font-medium text-lg hover:text-primary-default'><a href='/'>{item.name}</a></span>
                                </li>
                            </Link>
                       
                        </ul>
                    </div>
                    )
                }): null}
            </div>     
          </div>
          <div className='xl:w-1/6 py-14' >
              <h2 className='w-86 py-1 text-2xl text-start  uppercase font-bold text-[#e5e5e5]'>
                  Social
              </h2>
              <hr className='h-2 w-20 bg-[##e5e5e5]'></hr>
              <hr className='h-1 w-10 bg-[##e5e5e5]'></hr>
              <div className='h-28 text-center xl:text-start mt-8 xl:mt-14'>
                  <ul className='list-none flex justify-around xl:justify-evenly '>
                      <li className='mb-2'>
                        <a href='https://www.facebook.com/cyvm.contabilidad?mibextid=ZbWKwL' rel='noreferrer' target='_blank'>
                          <div className='h-12 w-12 bg-none text-[#EABE3F] hover:bg-[#EABE3F]  border-2 border-[#EABE3F] rounded-full px-[20%] py-2 hover:text-slate-50'>
                             <FaFacebookF className='h-6 w-6'/>
                          </div>
                          </a>
                      </li>
                      <li className='mb-2'>
                            <a href='https://instagram.com/cyvm_contabilidad?igshid=OGQ5ZDc2ODk2ZA==' rel='noreferrer' target='_blank'>
                                <button className='h-12 w-12 bg-none text-[#EABE3F] hover:bg-[#EABE3F] border-2 border-[#EABE3F]  rounded-full px-[22%] hover:text-slate-50'>
                                    <FaInstagram className='h-8 w-6'/>
                                </button>
                            </a>
                      </li>
                      {/* <li className=''>
                          <button className='h-14 w-14 bg-none text-[#EABE3F] hover:bg-[#EABE3F] border-2 border-[#EABE3F]  rounded-full px-[25%] hover:text-slate-50'>
                              <FaYoutube className='h-12 w-6'/>
                          </button>
                      </li> */}
                  </ul>
              </div>
          </div>

      </div>
 </footer>
  )
}

export default Footer
