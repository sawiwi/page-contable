
import React from 'react'
import { iconList } from '../../components/icons/index'
import Logo from '../../assets/img/logoVero.png'
import { Link } from 'react-scroll';


const navigation = [
    { id:1, name: 'Inicio', href: 'HeroSectionScroll', current: false },
    { id:2, name: 'Nosotros', href: 'AboutSectionScroll', current: false },
    { id:3, name: 'Servicios', href: 'ServicesSectionScroll', current: false },
    { id:4, name: 'Nuestros clientes', href: 'OurCustomerScroll', current: false },
  ]

const Footer = () => {
const phoneNumber = '953703029';
const whatsappBusinessLink = `https://wa.me/${phoneNumber}`;
  const { FaFacebookF, FaInstagram } = iconList;
  return (
    <footer className='grid bg-[#0c0c0c] px-10 xl:pt-10  xl:px-20  backdrop-blur-xl' >
      <div className='grid-cols-1 mx-10 xl:max-w-[1375px] xl:mx-60  xl:flex xl:flex-wrap  my-2'>
            <div className='xl:w-3/6 '>
                <img
                    className="w-full h-full xl:w-80 xl:h-80 cursor-pointer pb-1"
                    src={Logo}
                    alt="CYVM"
                  />               
            </div>
          <div className='xl:w-2/6 my-8'>
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
          <div className='xl:w-1/6 py-8' >
              <h2 className='w-86 py-1 text-2xl text-start  uppercase font-bold text-[#e5e5e5]'>
                  Social
              </h2>
              <hr className='h-2 w-20 bg-[##e5e5e5]'></hr>
              <hr className='h-1 w-10 bg-[##e5e5e5]'></hr>
              <div className='h-28 text-center xl:text-start mt-8 xl:mt-14'>
                  <ul className='list-none flex justify-around  xl:justify-evenly'>
                      <li className='mb-2 xl:mr-4'>
                        <a href='https://www.facebook.com/cyvm.contabilidad?mibextid=ZbWKwL' rel='noreferrer' target='_blank'>
                          <div className='h-12 w-12 bg-none text-[#EABE3F] hover:bg-[#EABE3F]  border-2 border-[#EABE3F] rounded-full px-[20%] py-2 hover:text-slate-50'>
                             <FaFacebookF className='h-6 w-6'/>
                          </div>
                        </a>
                      </li>
                      <li className='mb-2 xl:ml-4'>
                            <a href='https://instagram.com/cyvm_contabilidad?igshid=OGQ5ZDc2ODk2ZA==' rel='noreferrer' target='_blank'>
                                <button className='h-12 w-12 bg-none text-[#EABE3F] hover:bg-[#EABE3F] border-2 border-[#EABE3F]  rounded-full px-[22%] hover:text-slate-50'>
                                    <FaInstagram className='h-8 w-6'/>
                                </button>
                            </a>
                      </li>
                  </ul>
              </div>
          </div>
          <hr className='w-full bg-[#e5e5e5]'/>
      </div>
        <div className='grid grid-cols-2 xl:max-w-[1375px] xl:mx-60 mb-5'>
            <div className='cols-span-1 text-start'>
                <div className=''>
                    <p className='text-primary-default font-light'>contacto@cyvm.cl</p>
                </div>
            </div>
            <div className='cols-span-1 text-end' >
                <div className='text-primary-default font-light hover:text-[#f3f3f3]'>
                    +56 9 <a href={whatsappBusinessLink} target='_blank' 
                    rel="noopener noreferrer">53703029</a>
                </div>
            </div>    
            <div class="absolute xl:-top-20  inset-0 -z-10 h-full xl:h-[500px] w-full items-center px-5 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#a73e0a_100%)]"></div> 
        </div>         
  
 </footer>
  )
}

export default Footer
