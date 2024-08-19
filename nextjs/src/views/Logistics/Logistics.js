import React, { useEffect, useState } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  About,
  AboutBottom,
  Features,
  Hero,
  Integrations,
  Jobs,
  News,
  Pricings,
  Reviews,
  Team,
  Trucking,
  Video,
} from './components';
import { getLogisticData } from '../../services/strapi'; // Asegúrate de que la ruta sea correcta

const Logistics = () => {
  const theme = useTheme();
  const [logistic, setLogistic] = useState(null);

  useEffect(() => {
    const fetchLogisticData = async () => {
      try {
        const data = await getLogisticData();
        setLogistic(data);
      } catch (error) {
        console.error('Error fetching logistic data:', error);
      }
    };

    fetchLogisticData();
  }, []);

  const getSectionData = (name) => {
    return logistic?.attributes.sections.data.find(
      (section) => section.attributes.section_name === name
    )?.attributes;
  };

  return (
    <Main>
      <Box
        bgcolor={'alternate.main'}
        sx={{
          position: 'relative',
          '&::after': {
            position: 'absolute',
            content: '""',
            width: '30%',
            zIndex: 1,
            top: 0,
            left: '5%',
            height: '100%',
            backgroundSize: '18px 18px',
            backgroundImage: `radial-gradient(${alpha(
              theme.palette.primary.dark,
              0.4,
            )} 20%, transparent 20%)`,
            opacity: 0.2,
          },
        }}
      >
        <Box position={'relative'} zIndex={3}>
          <Hero data={getSectionData('hero')} />
        </Box>
      </Box>
      <Container>
        <Trucking data={getSectionData('trucking')} />
      </Container>
      <Container>
        <About data={getSectionData('about')} />
      </Container>
      <Container>
        <Features data={getSectionData('features')} />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <News data={getSectionData('news')} />
        </Container>
      </Box>
      <Container>
        <Team data={getSectionData('team')} />
      </Container>
      <Container>
        <Video data={getSectionData('video')} />
      </Container>
      <Box bgcolor={'#11092d'}>
        <Container>
          <Integrations data={getSectionData('integrations')} />
        </Container>
      </Box>
      <Container>
        <Pricings data={getSectionData('pricing')} />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Jobs data={getSectionData('jobs')} />
        </Container>
      </Box>
      <Container>
        <AboutBottom data={getSectionData('aboutBottom')} />
      </Container>
      <Box bgcolor={'primary.main'}>
        <Container>
          <Reviews data={getSectionData('reviews')} />
        </Container>
      </Box>
    </Main>
  );
};

export default Logistics;
