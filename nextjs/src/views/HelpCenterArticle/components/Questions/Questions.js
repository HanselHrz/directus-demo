import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Questions = ({ faqData }) => {
  return (
    <Box>
      {faqData
        .filter(section => section.section_name === 'Accordions')
        .flatMap(section => section.accordion)
        .map(item => (
          <Box
            component={Accordion}
            key={item.id}
            paddingY={1}
            elevation={0}
            sx={{
              '&:first-of-type': {
                borderTopLeftRadius: 1,
                borderTopRightRadius: 1,
              },
              '&:not(:first-of-type):before': {
                opacity: '1 !important',
                display: 'block !important',
              },
              '&.Mui-expanded': {
                margin: 0,
              },
            }}
          >
            <Box
              component={AccordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={`panel1a-header--${item.id}`}
              padding={'0 !important'}
            >
              <Box>
                <Typography fontWeight={600}>{item.title}</Typography>
                <Typography color="text.secondary">{item.subtitle}</Typography>
              </Box>
            </Box>
            <AccordionDetails>
              <Typography>{item.description}</Typography>
              {item.button && item.button.length > 0 && (
                <Box display={'flex'} justifyContent={'flex-end'}>
                  {item.button.map(btn => (
                    <Box
                      key={btn.id}
                      component={Button}
                      color="primary"
                      size="small"
                      marginTop={2}
                      variant={'outlined'}
                      endIcon={
                        <Box
                          component={'svg'}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          width={24}
                          height={24}
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </Box>
                      }
                      sx={{ float: 'right' }}
                    >
                      {btn.title}
                    </Box>
                  ))}
                </Box>
              )}
            </AccordionDetails>
          </Box>
        ))}
    </Box>
  );
};

Questions.propTypes = {
  faqData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      __component: PropTypes.string.isRequired,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      description: PropTypes.string,
      section_name: PropTypes.string.isRequired,
      items: PropTypes.array,
      accordion: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
          subtitle: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          button: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.number.isRequired,
              title: PropTypes.string.isRequired,
              icon: PropTypes.object,
            })
          ),
        })
      ),
    })
  ).isRequired,
};

export default Questions;
