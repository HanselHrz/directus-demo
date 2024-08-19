import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Breadcrumb, Categories, Questions } from './components';
import { getHelpCenterData } from '../../services/strapi';

const HelpCenterArticle = () => {
  const theme = useTheme();
  const [helpCenterData, setHelpCenterData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHelpCenterData();
        setHelpCenterData(data);
      } catch (error) {
        console.error('Error fetching Help Center data:', error);
      }
    };
    fetchData();
  }, []);

  if (!helpCenterData) {
    return <div>Loading...</div>;
  }

  return (
    <Main>
      <Box bgcolor={'alternate.main'}>
        <Container paddingY={`${theme.spacing(2)} !important`}>
          <Breadcrumb />
        </Container>
      </Box>
      <Container>
        <Questions faqData={helpCenterData.attributes.FAQpage} />
      </Container>
      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Container>
          <Categories categoriesData={helpCenterData.attributes.FAQpage} />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            width: '100%',
            marginBottom: theme.spacing(-1),
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
    </Main>
  );
};

export default HelpCenterArticle;
