import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

const mock = [
  {
    name: 'Chary Smith',
    title: 'SEO at Comoti',
    avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
    about:
      'I am an ambitious workaholic, but apart from that, pretty simple person.',
  },
  {
    name: 'Clara Bertoletti',
    title: 'Junior Designer',
    avatar: 'https://assets.maccarianagency.com/avatars/img4.jpg',
    about:
      'I am an ambitious workaholic, but apart from that, pretty simple person.',
  },
  {
    name: 'Jhon Anderson',
    title: 'Senior Frontend Developer',
    avatar: 'https://assets.maccarianagency.com/avatars/img5.jpg',
    about:
      'I am an ambitious workaholic, but apart from that, pretty simple person.',
  },
  {
    name: 'Chary Smith',
    title: 'SEO at Comoti',
    avatar: 'https://assets.maccarianagency.com/avatars/img6.jpg',
    about:
      'I am an ambitious workaholic, but apart from that, pretty simple person.',
  },
];

const Team = (data) => {
  const info = data.data;
  const { card } = info;
  console.log(card);
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'text.secondary'}
          align={'center'}
        >
          Our team
        </Typography>
        <Typography fontWeight={700} variant={'h4'} align={'center'}>
          Trust the professionals
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {card.map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Box
              component={Card}
              boxShadow={2}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <CardContent>
                <Box
                  component={Avatar}
                  src={`http://localhost:1337${item.avatar.url}`}
                  height={80}
                  width={80}
                />
                <Box marginTop={4}>
                  <ListItemText primary={item.nombre} secondary={item.titulo} />
                  <Typography variant={'subtitle2'} color={'text.secondary'}>
                    {item.descripcion}
                  </Typography>
                  <Box marginTop={4}>
                    <IconButton size={'small'} color={'primary'}>
                      <FacebookIcon />
                    </IconButton>
                    <IconButton size={'small'} color={'primary'}>
                      <GitHubIcon />
                    </IconButton>
                    <IconButton size={'small'} color={'primary'}>
                      <TwitterIcon />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Team;
