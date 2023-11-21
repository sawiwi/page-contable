import React, { useState } from 'react'
import { Link } from 'react-scroll';

const NavigationItem = ({menuItem}) => {

  const [viewActive, setViewActive] = useState(false);
  const handleActive = (viewName) => setViewActive(viewName);
  const handleInActive = (viewName) => setViewActive(viewName);

  const ActiveClassTw = 'rounded-none px-3 py-2 text-lg font-medium hover:border-b-2  hover:rounded-none hover:transition-all duration-100 cursor-pointer border-b-2  rounded-none text-white';
  const NoActiveClassTw = 'rounded-none px-3 py-2 text-lg font-medium hover:border-b-2  hover:rounded-none hover:transition-all duration-100 cursor-pointer text-gray-300 border-b-2 border-transparent';

  return (
    <>
      <Link 
        activeClass={ActiveClassTw}
        className={viewActive ? ActiveClassTw : NoActiveClassTw} 
        to={menuItem.href} 
        spy={true} 
        smooth={true} 
        offset={-150} 
        duration={500} 
        onSetActive={() => handleActive(true)} 
        onSetInactive={() => handleInActive(false)}
      >
        {menuItem.name}
      </Link>
    </>
  )
}

export default NavigationItem
