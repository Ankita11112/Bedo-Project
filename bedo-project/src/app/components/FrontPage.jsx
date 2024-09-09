import { Box, Button, Card, Grid2, Typography } from '@mui/material'
import React from 'react'
import ButtonGlobal from './ButtonGlobal';
import banner from '../assets/images/bedoBanner.jpg';

const FrontPage = ({content}) => {
  return (
    <>
      <Box sx={{
        py: {xs: 24, sm: 24, md: 30},
        px: {xs: 4, sm: 20, md: 40},
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',  
        // background: "pink",
        width: "100%",
        height: "100%"
      }}>
        <Grid2 container>
          <Grid2 size={12} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} textAlign={'center'}>

            <Typography variant="h2">Designing Dreams: where vision meets reality</Typography>
            <ButtonGlobal content = "Start a Project"/>     

          </Grid2>
          </Grid2>
      </Box>
    </>
  )
}

export default FrontPage