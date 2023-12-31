import React from 'react';
import '../../assets/css/style.css';

import { DataCardServices } from '../../data/cardServices';

const Services = () => {
  return (
    <div id='ServicesSectionScroll' className='grid-cols-1 mx-10 xl:max-w-[1200px] xl:mx-auto  xl:flex  my-20 mb-8'>
      <div className='xl:py-10 xl:mt-36'>
        <h1 className='text-center font-bold text-5xl'>Nuestros Servicios</h1>
        <p className='text-center text-lg my-2'>Podemos ayudarte</p>
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-2 w-full'>
        {DataCardServices?.length > 0 ? DataCardServices?.map((item) => {
          return(
            <div className='col-span-1' key={item.id}>
            <div className="card">
              <a className="card1" href="/">
                <p className='text-2xl font-semibold mb-2'>{item.title}</p>
                <p className="small">{item.description}</p>
                <div className="go-corner" href="#">
                  <div className="go-arrow">
                    →
                  </div>
                </div>
              </a>
            </div>
          </div>
          )}
        ):null}
      </div>

    </div>
  )
}

export default Services
