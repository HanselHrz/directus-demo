import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';

const Team = ({ data }) => {
  const theme = useTheme();

  if (!data) {
    return null;
  }

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item container alignItems={'center'} xs={12} md={6}>
          <Box>
            <Box marginBottom={2}>
              <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
                {data.title}
              </Typography>
              <Typography color="text.secondary">
                {data.description}
              </Typography>
            </Box>
            <Grid container spacing={1}>
              {data.items.map((item, i) => (
                <Grid item xs={12} key={i}>
                  <Box
                    component={ListItem}
                    disableGutters
                    width={'auto'}
                    padding={0}
                  >
                    <Box
                      component={ListItemAvatar}
                      minWidth={'auto !important'}
                      marginRight={2}
                    >
                      <Box
                        component={Avatar}
                        bgcolor={theme.palette.secondary.main}
                        width={20}
                        height={20}
                      >
                        <svg
                          width={12}
                          height={12}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Box>
                    </Box>
                    <ListItemText primary={item.description} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box height={1} width={1} display={'flex'} flexDirection={'column'}>
            {data.items.map((item, i) => (
              <Box
                key={i}
                component={'img'}
                src={`http://localhost:1337${item.images?.data?.[0]?.attributes?.url}`}
                alt={item.title || '...'}
                width={160}
                height={160}
                marginLeft={i === 0 ? 'calc(60% - 160px)' : 0}
                marginTop={i !== 0 ? '-8%' : 0}
                zIndex={3 - i}
                borderRadius={'100%'}
                boxShadow={4}
                data-aos={'fade-up'}
                sx={{
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.5)' : 'none',
                }}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

Team.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Team;
