import React from 'react'

const Hero = () => {
  const color = 'bg-[#07031F]';
  return (
    <>
      <div className={`min-h-[616px] ${color}`}>
        <div className={`px-4 py-8 max-w-[1276px] mx-auto ${color}`}>
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-10 items-stretch">
            <div className="flex flex-col rounded-md shadow-sm text-white">
              <p className="mx-1 max-w-xl sm:text-3xl/relaxed font-semibold">
                Servicios de contabilidad
              </p>
              <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-bold text-transparent sm:text-5xl pb-5">
                Déjanos la contabilidad a nosotros y concéntrate en tu negocio
              </h1>

              <p className="mx-1 max-w-xl sm:text-xl/relaxed">
                Remuneraciones, Asesoría Contable y Tributaria para Emprendedores, PyMes y Empresas. Haz que tu negocio crezca de forma ordenada y controlada.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  className="block w-full rounded border border-[#55D6C2] px-12 py-3 text-sm font-medium text-white hover:bg-[#55D6C2] focus:outline-none focus:ring active:bg-[#55D6C2] sm:w-auto transition-all duration-500"
                  href="#nosotros"
                >
                  Nosotros
                </a>
                <a
                  className="block w-full rounded border border-[#55D6C2] px-12 py-3 text-sm font-medium text-white hover:bg-[#55D6C2] focus:outline-none focus:ring active:bg-[#55D6C2] sm:w-auto transition-all duration-500"
                  href="#services"
                >
                  Nuestros Servicios
                </a>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-col-reverse">
              <img src="https://talentocontable.cl/wp-content/uploads/2023/03/servicios-contables.png" alt="" className="" />
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Hero
