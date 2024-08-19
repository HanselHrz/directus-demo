import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { getWebBasicData } from 'services/strapi';
import {
  About,
  Contact,
  Faq,
  Features,
  Hero,
  Partners,
  Pricings,
  Reviews,
  Services,
  Users,
} from './components';

function pageRender(data) {
  const theme = useTheme();
  switch (data.__component) {
    case 'web-basic.encabezado':
      return <Box
      position={'relative'}
      sx={{
        backgroundColor: theme.palette.alternate.main,
        marginTop: -13,
        paddingTop: 13,
      }}
    >
      <Container>
        <Hero data={data}/>
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
    </Box>;
    case 'web-basic.servicios':
      return <Container paddingTop={'0 !important'}>
      <Services data = {data} />
    </Container>;
    case 'web-basic.socios-iconos':
      return <Container maxWidth={1} paddingTop={'0 !important'}>
      <Partners data = {data}/>
    </Container>;
    case 'web-basic.contacto':
      return <Container>
                <Contact data = {data} />
              </Container>;
    case 'web-basic.acerca':
      return <Box
      position={'relative'}
      sx={{
        backgroundColor: theme.palette.alternate.main,
      }}
    >
      <Box>
        <Container paddingTop={'0 !important'}>
          <About data = {data} />
        </Container>
      </Box>
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
    </Box>;
    case 'web-basic.usuarios':
      return <Container paddingTop={'0 !important'}>
      <Users data = {data}/>
    </Container>;
    case 'enterprise.resenas':
      return       <Box bgcolor={'alternate.main'}>
      <Container>
        <Reviews data = {data}/>
      </Container>
    </Box>;
    case 'web-basic.caracteristicas':
      return <Container>
      <Features data = {data}/>
    </Container>
    case 'web-basic.precios':
      return<Box
      position={'relative'}
      sx={{
        backgroundColor: theme.palette.alternate.main,
      }}
    >
            <Container>
              <Pricings data = {data} />
            </Container>
            </Box>;
    case 'web-basic.faq':
        return  <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Box>
          <Container paddingTop={'0 !important'}>
            <Faq data = {data}/>
          </Container>
        </Box>
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
      </Box>;
    default:
      return null;
    }
}

const WebBasic = () => {
  const theme = useTheme();
  const [data, setData] = React.useState(null); 
  React.useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      try {
        const response = await getWebBasicData();
        console.log(response);
        if (mounted) {
          setData(response.PageContent);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Main>
      <Box marginTop={-13} paddingTop={13}>
        {data ? data.map((item, index) => (
          <div key={index}>
            {pageRender(item)}
          </div>
        )) : null}
      </Box>
    </Main>
  );
};

export default WebBasic;
