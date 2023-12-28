import React from 'react'
import ImageTGR from '../../assets/img/Logo de TGR.webp'
import ImageSII from '../../assets/img/Logo de SII.webp'
import ImageCMF from '../../assets/img/Logo de CMF.webp'
import ImageDT from '../../assets/img/Logo de DT.webp'
import ImagePR from '../../assets/img/Logo de Previred.webp'
import Balanza from '../../assets/img/balanza.jpeg'
import { Link } from 'react-scroll'

const Hero = () => {
  const color = 'bg-[#070707]';
  return (
    <>
      <div id='HeroSectionScroll' className={`min-h-[816px]  pt-28 xl:pt-40`}>
        <div className={`px-4 py-16 xl:py-8 max-w-[1276px] mx-auto`}>
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-10 items-stretch">

            <div className="flex flex-col rounded-md shadow-sm text-white justify-center">
              <p className="mx-1 max-w-xl sm:text-3xl/relaxed font-semibold">
                Asesoría Contable
              </p>
              <h1 className="bg-gradient-to-r from-[#EABE3F] via-[#c05b28] to-[#a73e0a] bg-clip-text text-3xl font-bold text-transparent sm:text-5xl pb-5">
                Enfócate en el crecimiento de tu empresa, confianos tu contabilidad
              </h1>

              {/* <p className="mx-1 max-w-xl sm:text-xl/relaxed">
                Remuneraciones, Asesoría Contable y Tributaria para Emprendedores, PyMes y Empresas. Haz que tu negocio crezca de forma ordenada y controlada.
              </p> */}

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link 
                  className={'block w-full rounded border border-[#EABE3F] px-12 py-3 text-sm font-medium text-white hover:bg-[#EABE3F] focus:outline-none focus:ring ring-[#EABE3F] active:bg-[#EABE3F] sm:w-auto transition-all duration-500 cursor-pointer'} 
                  to='OurServicesScroll'
                  spy={true} 
                  smooth={true} 
                  offset={-150} 
                  duration={500} 
                >
                  Nuestros clientes
                </Link>
                {/* <Link 
                  className={'block w-full rounded border border-[#a73e0a] px-12 py-3 text-sm font-medium text-white hover:bg-[#a73e0a] focus:outline-none focus:ring ring-[#a73e0a] active:bg-[#a73e0a] sm:w-auto transition-all duration-500 cursor-pointer'} 
                  to='ServicesSectionScroll'
                  spy={true} 
                  smooth={true} 
                  offset={-140} 
                  duration={500} 
                >
                  Nuestros Servicios
                </Link> */}
              </div>
            </div>
            <div className='flex justify-center'>

              <div className="relative h-[350px] w-[500px] flex items-center justify-center">
                <div className=" relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50">

                  <button className="profile_item left-[10px] -top-[15px] sm:left-[20px] sm:-top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                    <span className="overflow-hidden block w-[70px] h-[70px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                    <img src={ImagePR} alt="PR logo" className="" />
                    </span>
                  </button>

                  <button className="profile_item right-[10px] -top-[15px] sm:right-[20px] sm:-top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                    <span className="overflow-hidden block w-[70px] h-[70px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                    <img src={ImageCMF} alt="CMF logo" className="" />
                    </span>
                  </button>

                  <button className="profile_item bottom-[4.6rem] -left-10 sm:bottom-28 sm:-left-10 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                    <span className="overflow-hidden block w-[70px] h-[70px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                    <img src={ImageTGR} alt="TGR logo" className="" />
                    </span>
                  </button>

                  <button className="profile_item bottom-[4.6rem] -right-10 sm:bottom-28 sm:-right-10 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                    <span className="overflow-hidden block w-[70px] h-[70px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                    <img src={ImageDT} alt="DT logo" className="" />
                    </span>
                  </button>

                  <button className="profile_item right-[40%] -bottom-12 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                    <span className="overflow-hidden block w-[70px] h-[70px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                    <img src={ImageSII} alt="SII logo" className="" />
                    </span>
                  </button>

                  <button className="profile_item w-[220px] sm:w-[280px] h-[220px] sm:h-[280px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
                    <div className="w-full bg-white h-full overflow-hidden rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
                      <span className="w-full h-40 inline-block">
                        <img src={Balanza} alt="" className="drop-shadow-lg" />
                      </span>
                    </div>
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
     <div class="absolute xl:-top-20  inset-0 -z-10  xl:h-[790px] w-full items-center  px-5 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#a73e0a_100%)]"></div>
      </div>
      
    </>
  )
}

export default Hero