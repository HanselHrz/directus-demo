import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const iconMapping = {
  'Google Drive': 'https://assets.maccarianagency.com/svg/logos/google-drive.svg',
  'Google Ad Manager': 'https://assets.maccarianagency.com/svg/logos/google-ad-manager.svg',
  'Atlassian': 'https://assets.maccarianagency.com/svg/logos/atlassian.svg',
};

const Integrations = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h4'}
          gutterBottom
          align={'center'}
          sx={{ fontWeight: 700, color: 'common.white' }}
        >
          {data.title || 'Sincronización con diferentes empresas'}
        </Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
          align={'center'}
          sx={{ color: 'common.white' }}
        >
          {data.description || 'Las empresas con visión de futuro utilizan nuestro servicio de respaldo en la nube para garantizar la fiabilidad y seguridad de los datos.'}
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {data.items.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box
                component={Avatar}
                width={{ xs: 60, md: 80 }}
                height={{ xs: 60, md: 80 }}
                marginBottom={2}
                src={iconMapping[item.title] || ''}
              />
              <Typography
                variant={'h6'}
                gutterBottom
                align={'center'}
                sx={{ fontWeight: 600, color: 'common.white' }}
              >
                {item.title}
              </Typography>
              <Typography sx={{ color: 'common.white' }} align={'center'}>
                {item.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

Integrations.propTypes = {
  data: PropTypes.object,
};

export default Integrations;
