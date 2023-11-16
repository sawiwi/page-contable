import React from 'react';


const Footer = () => (
 <footer className='bg-gray-100 pt-10 pb-6 xl:px-32'>
    <div className='flex flex-wrap justify-start mx4 lg:mx-0'>
        <div className='w-2/6'>
            <h2 className='w-86 py-1 text-2xl text-start my-2 uppercase font-semibold font-sans'>
                Menu
            </h2>
            <hr className='w-60 border border-1 border-zinc-800'></hr>
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
        <div className='w-1/6'>
            <h2 className='w-86 py-1 text-2xl text-start my-2 uppercase'>
                Social
            </h2>
            <hr className='w-60 border border-1 border-zinc-800'></hr>
            <div className='h-56 text-start mt-14'>
                <ul className='list-none flex justify-between'>
                    <li className='mb-3'>
                        <button className='h-10 w-10 bg-blue-500 borde rounded-full'>
                            <i className='uppercase text-lg text-slate-300 font-bold'>F</i>
                        </button>
                    </li>
                    <li className='mb-3'>
                        <button className='h-10 w-10 bg-black borde rounded-full'>
                            <i className='uppercase text-lg text-slate-300 font-bold'>x</i>
                        </button>
                    </li>
                    <li className=''>
                        <button className='h-10 w-10 bg-green-500 borde rounded-full'>
                            <i className='uppercase text-lg text-slate-300 font-bold'>W</i>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <div className='w-3/6'>
            <h2 className='w-86 py-1 text-2xl mt-28 text-center uppercase'>
                <h1 className='uppercase font-bold text-[110px]'>Logo</h1>
            </h2>       
        </div>
    </div>
 </footer>
)

export default Footer;