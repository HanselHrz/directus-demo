/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Headline = (data) => {
  const info = data.data;
  const { titulo, subTitulo } = info;
  return (
    <Box>
      <Box>
        <Typography variant="h3" gutterBottom>
          {titulo}
        </Typography>
        <Typography variant="h3" color={'primary'} fontWeight={700}>
          {subTitulo}
        </Typography>
      </Box>
    </Box>
  );
};

export default Headline;
