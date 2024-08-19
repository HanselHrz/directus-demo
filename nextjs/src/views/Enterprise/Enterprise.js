import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { getEnterpriseData } from 'services/strapi';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Hero,
  Browsers,
  Reviews,
  Partners,
  Solutions,
  VideoSection,
} from './components';

function pageRender(data) {
  switch (data.__component) {
    case 'enterprise.header':
      return <Container>
        <Hero data={data} />
        </Container>;
    case "enterprise.video-section":
      return <Container maxWidth={1} paddingTop={'0 !important'}>
              <VideoSection data={data} />
              </Container>;
    case "enterprise.partners":
      return <Container paddingY={'0 !important'}>
                <Partners data={data} />
                <Container><Divider/></Container>
              </Container>
              ;
    case "enterprise.solutions":
      return <Container>
                <Solutions data={data} />
              </Container>;
    case "enterprise.compatibility":
      return <Container paddingTop={{ md: 16 }}>
                <Browsers data={data} />
                <Container><Divider /></Container>
              </Container>;
    case "enterprise.resenas":
      return <Container>
                <Reviews data={data} />
                <Container><Divider /></Container>
              </Container>;
    default:
      return null;
  }
}

const Enterprise = () => {

  const [data, setData] = React.useState(null); 
  React.useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      try {
        const response = await getEnterpriseData();
        if (mounted) {
          setData(response.PageContent);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Main>
      <Box bgcolor={'alternate.main'} marginTop={-13} paddingTop={13}>
        {data ? data.map((item, index) => (
          <div key={index}>
            {pageRender(item)}
          </div>
        )) : null}
      </Box>
    </Main>
  );
};

export default Enterprise;
