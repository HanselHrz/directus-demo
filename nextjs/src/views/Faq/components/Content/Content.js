import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqGroupItem = ({ title, items }) => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={2}>
        <Typography fontWeight={700} variant={'h5'}>
          {title}
        </Typography>
      </Box>
      <Box>
        {items.map((item, i) => (
          <Box
            component={Accordion}
            key={i}
            padding={1}
            marginBottom={i === items.length - 1 ? 0 : 2}
            borderRadius={`${theme.spacing(1)} !important`}
            sx={{
              '&::before': {
                display: 'none',
              },
            }}
          >
            <Box
              component={AccordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel1a-content-${i}`}
              id={`panel1a-header-${i}`}
            >
              <Typography fontWeight={600}>{item.title}</Typography>
            </Box>
            <AccordionDetails>
              <Typography color="text.secondary">{item.description}</Typography>
            </AccordionDetails>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

FaqGroupItem.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const Content = ({ data }) => {
  return (
    <Box>
      {data.map((section, index) => (
        <Box marginBottom={6} key={index}>
          <FaqGroupItem
            title={section.title}
            items={section.accordion}
          />
        </Box>
      ))}
    </Box>
  );
};

Content.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      accordion: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default Content;
