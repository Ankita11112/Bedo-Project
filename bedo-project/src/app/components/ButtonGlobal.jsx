import React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { GoArrowRight } from "react-icons/go";

const ButtonGlobal = ({content}) => {
  return (
    <>
        <Button sx={{
            background: 'linear-gradient(45deg, #ff4d4d, #dc143c)',
            backgroundShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
            borderRadius: 2, 
            color: "white",
            padding: "10px 20px",
            my: {xs: 2, sm: 4}
        }}>{content}<GoArrowRight size={20} color='inherit' className='mx-[5px]' /></Button>
    </>
  )
}

export default ButtonGlobal;