// import { Box, Grid, Typography } from '@mui/material';
// import React from 'react';

// const CountRating = () => {
//   return (
//     <>
//       <Box
//         sx={{
//           width: '100%',
//           py: { xs: 20, sm: 20, md: 20 },
//           px: { xs: 20, sm: 20, md: 20 },
//           display: 'flex',
//           justifyContent: 'center',
//         }}
//       >
//         <Grid container spacing={4} justifyContent="center" alignItems="center">
//           <Grid item xs={12} md={4} textAlign="center">
//             <Typography variant="h4">235+</Typography>
//             <Typography variant="subtitle1">Happy Clients</Typography>
//           </Grid>
//           <Grid item xs={12} md={4} textAlign="center">
//             <Typography variant="h4">150+</Typography>
//             <Typography variant="subtitle1">Projects Completed</Typography>
//           </Grid>
//           <Grid item xs={12} md={4} textAlign="center">
//             <Typography variant="h4">50+</Typography>
//             <Typography variant="subtitle1">Team Members</Typography>
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   );
// };

// export default CountRating;

import { Box, Typography } from '@mui/material';
import Grid2 from '@mui/material/Grid2'; // Import Grid2 from Unstable
import React from 'react';

const CountRating = () => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          py: { xs: 20, sm: 20, md: 20 },
          px: { xs: 20, sm: 20, md: 20 },
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Grid2 container spacing={4} justifyContent="center" alignItems="center">
          <Grid2 item xs={12} md={4} textAlign="center" sx={{mx: "50px", px: "50px"}}>
            <Typography variant="h4">235+</Typography>
            <Typography variant="subtitle1">Happy Clients</Typography>
          </Grid2>
          <Grid2 item xs={12} md={4} textAlign="center" sx={{mx: "50px", px: "50px"}}>
            <Typography variant="h4">92%</Typography>
            <Typography variant="subtitle1">Return Rate</Typography>
          </Grid2>
          <Grid2 item xs={12} md={4} textAlign="center" sx={{mx: "50px", px: "50px"}}>
            <Typography variant="h4">25 Millions</Typography>
            <Typography variant="subtitle1">Lives Changed</Typography>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};

export default CountRating;

