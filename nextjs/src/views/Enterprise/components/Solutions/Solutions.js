import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';


const Solutions = (data) => {
  const info = data.data;
  const { titulo, descripcion, card } = info;
  console.log('Solutions', card);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
        >
          Solutions
        </Typography>
        <Typography
          variant="h4"
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          {titulo}
        </Typography>
        <Typography variant="h6" color={'text.secondary'} data-aos={'fade-up'}>
          {descripcion}
        </Typography>
      </Box>
      <Grid container spacing={isMd ? 8 : 4}>
        {card.map((item, i) => (
          <Grid
            key={i}
            item
            xs={12}
            md={6}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Box
              component={Card}
              height={1}
              bgcolor={alpha(colors[item.color][200], 0.2)}
              boxShadow={0}
              sx={{
                transform: i % 2 === 1 ? { md: 'translateY(80px)' } : 'none',
              }}
            >
              <CardContent sx={{ padding: 4 }}>
                <Box
                  display={'flex'}
                  justifyContent={'center'}
                  marginBottom={{ xs: 2, md: 4 }}
                >
                  <Box
                    component={'img'}
                    loading="lazy"
                    src={
                      `http://localhost:1337${item.imagen.url}`
                    }
                    width={1}
                  />
                </Box>
                <Box>
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                  >
                    {item.titulo}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.descripcion}
                  </Typography>
                  <Button
                    size={'large'}
                    sx={{ marginTop: 2 }}
                    endIcon={
                      <Box
                        component={'svg'}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={24}
                        height={24}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </Box>
                    }
                  >
                    Learn more
                  </Button>
                </Box>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Solutions;
