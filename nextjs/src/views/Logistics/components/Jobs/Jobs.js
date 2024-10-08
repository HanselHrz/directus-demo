import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const mock = [
  {
    title: 'Desarrollador Front-End',
    location: 'Madrid',
    type: 'Remoto',
  },
  {
    title: 'Gerente de Comunidad',
    location: 'París',
    type: 'Tiempo completo',
  },
  {
    title: 'Diseñador UX/UI',
    location: 'Ereván',
    type: 'Medio tiempo',
  },
];

const Jobs = ({ data }) => {
  const title = data?.title || 'Estamos contratando';
  const subtitle = data?.subtitle || 'Mantén un registro de lo que sucede con tus datos, cambia permisos y ejecuta informes sobre tus datos en cualquier lugar del mundo.';

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          {subtitle}
        </Typography>
        <Box display="flex" justifyContent={'center'} marginTop={2}>
          <Button variant="contained" color="primary" size="large">
            Ver todas las posiciones
          </Button>
        </Box>
      </Box>
      <Box maxWidth={800} margin={'0 auto'}>
        <Grid container spacing={2}>
          {mock.map((item, i) => (
            <Grid item xs={12} key={i}>
              <Box
                component={Card}
                variant={'outlined'}
                bgcolor={'transparent'}
                sx={{
                  '&:hover': {
                    boxShadow: 2,
                  },
                }}
              >
                <Box
                  component={CardContent}
                  display={'flex'}
                  alignItems={'center'}
                >
                  <Box
                    display={'flex'}
                    flexDirection={{ xs: 'column', sm: 'row' }}
                    flex={'1 1 100%'}
                    justifyContent={{ sm: 'space-between' }}
                    alignItems={{ sm: 'center' }}
                  >
                    <Typography
                      variant={'h6'}
                      fontWeight={700}
                      sx={{ marginBottom: { xs: 1, sm: 0 } }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant={'subtitle1'} color={'text.secondary'}>
                      {`${item.location} / ${item.type}`}
                    </Typography>
                  </Box>
                  <Box marginLeft={2} color={'primary.main'}>
                    <Box
                      component={'svg'}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      width={{ xs: 30, sm: 40 }}
                      height={{ xs: 30, sm: 40 }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

Jobs.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      }),
    ),
  }),
};

export default Jobs;
