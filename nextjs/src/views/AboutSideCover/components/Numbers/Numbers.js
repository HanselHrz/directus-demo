import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Numbers = (data) => {
  const info = data.data;
  const {numeros} = info;
  return (
    <Box>
      <Grid container spacing={2}>
        {numeros.map((item, i) => (
          <Grid key={i} item xs={12} sm={4}>
            <Typography
              variant="h3"
              align={'center'}
              gutterBottom
              sx={{
                fontWeight: 900,
              }}
            >
              {item.titulo}
            </Typography>
            <Typography color="text.secondary" align={'center'} component="p">
              {item.subTitulo}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Numbers;
