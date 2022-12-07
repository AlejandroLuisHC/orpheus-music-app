import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Aside, GridStyle } from '../../style/generalStyle'
import AsideDesktop from './AsideDesktop';
import AsideMobile from './AsideMobile';

const AsideMenu = () => {
  const [windowSize, setWindowSize] = useState(false);
  useEffect(() => {
    if(innerWidth>750){
      return setWindowSize(!windowSize);
    }
     console.log(innerWidth)
  }, [innerWidth])
//should render the component in the useEffect when the windows width change

  return (
   <>
   { windowSize
    ? //desktop
      
      <AsideDesktop />
      
    : //movile
    
      <AsideMobile />
    }
    
   </>
    
  )

}

export default AsideMenu   