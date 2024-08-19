import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Footer = ({ data }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  if (!data) return null;

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant='h4'
          align={'center'}
          sx={{
            fontWeight: 'medium',
          }}
        >
          {data.title}
        </Typography>
      </Box>
      <Box
        display='flex'
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent={'center'}
        alignItems={{ xs: 'stretched', sm: 'center' }}
      >
        {data.button.map((button, index) => (
          <Box
            key={button.id}
            component={Button}
            variant={index === 0 ? 'contained' : 'outlined'}
            color='primary'
            size='large'
            fullWidth={!isMd}
            startIcon={index === 0 && (
              <svg
                width={24}
                height={24}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
                />
              </svg>
            )}
            marginLeft={index === 1 ? { sm: 2 } : 0}
            marginTop={index === 1 ? { xs: 1, sm: 0 } : 0}
          >
            {button.title}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

Footer.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    button: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Footer;
