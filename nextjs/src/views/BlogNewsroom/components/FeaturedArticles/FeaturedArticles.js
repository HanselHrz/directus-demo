import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { getBlogs } from 'services/strapi';

const mock = [
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img13.jpg',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
    title: 'Eiusmod tempor incididunt',
    author: {
      name: 'Clara Bertoletti',
      avatar: 'https://assets.maccarianagency.com/avatars/img1.jpg',
    },
    date: '10 Sep',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img14.jpg',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus',
    title: 'Sed ut perspiciatis',
    author: {
      name: 'Jhon Anderson',
      avatar: 'https://assets.maccarianagency.com/avatars/img2.jpg',
    },
    date: '02 Aug',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img17.jpg',
    description:
      'Qui blanditiis praesentium voluptatum deleniti atque corrupti',
    title: 'Unde omnis iste natus',
    author: {
      name: 'Chary Smith',
      avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
    },
    date: '05 Mar',
  },
];

const FeaturedArticles = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    let isMounted = true; // bandera para evitar la actualización si el componente está desmontado
    const fetchPosts = async () => {
      try {
        const data = await getBlogs();
        if (isMounted) {
          console.log('Fetched data:', data);
          setPosts(data);
        }
      } catch (error) {
        if (isMounted) {
          console.error('Error fetching blog posts:', error);
          setError(error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchPosts();

    return () => {
      isMounted = false; // desmontar el componente
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
        marginBottom={4}
      >
        <Box>
          <Typography fontWeight={700} variant={'h4'} gutterBottom>
            Featured stories
          </Typography>
          <Typography color={'text.secondary'}>
            Here’s what we’ve been up to recently.
          </Typography>
        </Box>
        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
          <Box
            component={Button}
            variant="outlined"
            color="primary"
            size="large"
            marginLeft={2}
          >
            View all
          </Box>
        </Box>
      </Box>
      <Grid container spacing={4}>
        {posts.slice(2, 5).map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              component={'a'}
              href={''}
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                boxShadow={0}
                sx={{ bgcolor: 'transparent', backgroundImage: 'none' }}
              >
                <CardMedia
                  image={`http://localhost:1337${item.attributes.image.data[0].attributes.url}`}
                  title={item.attributes.title}
                  sx={{
                    height: { xs: 300, md: 360 },
                    position: 'relative',
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.7)'
                        : 'none',
                  }}
                />
                <Box
                  width={'90%'}
                  margin={'0 auto'}
                  display={'flex'}
                  flexDirection={'column'}
                  boxShadow={3}
                  borderRadius={2}
                  bgcolor={'background.paper'}
                  position={'relative'}
                  zIndex={3}
                  sx={{ transform: 'translateY(-30px)' }}
                >
                  <Box component={CardContent} position={'relative'}>
                    <Typography variant={'h6'} gutterBottom>
                      {item.attributes.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {item.attributes.description}
                    </Typography>
                  </Box>
                  <Box flexGrow={1} />
                  <Box padding={2} display={'flex'} flexDirection={'column'}>
                    <Box marginBottom={2}>
                      <Divider />
                    </Box>
                    <Box
                      display={'flex'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                    >
                      <Box display={'flex'} alignItems={'center'}>
                        <Avatar
                          src={`http://localhost:1337${item.attributes.avatar.data.attributes.url}`}
                          sx={{ marginRight: 1 }}
                        />
                        <Typography color={'text.secondary'}>
                          {item.attributes.user.data.attributes.username}
                        </Typography>
                      </Box>
                      <Typography color={'text.secondary'}>
                        {item.attributes.publishedDate}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedArticles;
