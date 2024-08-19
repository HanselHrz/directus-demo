import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Story = (data) => {
  const info = data.data;
  const { titulo, descripcion, iconos } = info;
  const iconsArray = Array.isArray(iconos) ? iconos : Object.values(iconos);
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography fontWeight={700} variant={'h5'}>
            {titulo}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography component={'p'} color={'text.secondary'} fontWeight={400}>
            {descripcion}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" flexWrap="wrap" justifyContent={'center'}>
            {iconsArray.map((item, i) => (
              <Box maxWidth={90} marginTop={2} marginRight={4} key={i}>
                <Box
                  component="img"
                  height={1}
                  width={1}
                  src={`http://localhost:1337${item.url}`}
                  alt="..."
                  sx={{
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0) invert(0.7)'
                        : 'none',
                  }}
                />
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Story;
