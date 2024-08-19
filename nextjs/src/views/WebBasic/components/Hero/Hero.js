/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Hero = (data) => {
  const info = data.data;
  const { titulo, tituloResaltado, descripcion, primerBoton, segundoBoton, imagen } = info;
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography
              variant="h2"
              color="text.primary"
              sx={{
                fontWeight: 700,
              }}
            >
             {titulo}{' '}
              <Typography
                component={'span'}
                variant={'inherit'}
                color={'primary'}
                sx={{
                  background: `linear-gradient(180deg, transparent 82%, ${alpha(
                    theme.palette.secondary.main,
                    0.3,
                  )} 0%)`,
                }}
              >
                {tituloResaltado}
              </Typography>
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
              {descripcion}
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          >
            <Button
              component={'a'}
              variant="contained"
              color="primary"
              size="large"
              fullWidth={isMd ? false : true}
              href={primerBoton.link}
              target={'_blank'}
            >
              {primerBoton.titulo}
            </Button>
            <Box
              marginTop={{ xs: 2, sm: 0 }}
              marginLeft={{ sm: 2 }}
              width={{ xs: '100%', md: 'auto' }}
            >
              <Button
                component={'a'}
                href={segundoBoton.link}
                target={'blank'}
                variant="outlined"
                color="primary"
                size="large"
                fullWidth={isMd ? false : true}
              >
                {segundoBoton.titulo}
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          height={1}
          width={1}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box height={1} width={1} maxWidth={500}>
            <Box
              component={'img'}
              src={
                `http://localhost:1337${imagen.url}`
              }
              width={1}
              height={1}
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
              }}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
