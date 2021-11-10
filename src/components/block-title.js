import React from 'react';
import { Box, Heading, Text } from 'theme-ui';
import "@fontsource/raleway/700.css";
import "@fontsource/roboto/500.css";


const BlockTitle = (props) => {
  return (
    <Box variant="blockTitle" className="blockTitle" sx={props.styles}>
      <Text as="p" style={{fontFamily: "Roboto"}} >{props.slogan}</Text>
      <Heading as="h2" style={{ fontFamily: "Raleway" }}>
        {props.title}
      </Heading>
    </Box>
  );
};

export default BlockTitle;
