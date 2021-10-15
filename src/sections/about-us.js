import React from 'react';
import { Box, Container, Flex, Heading, Text, Image } from 'theme-ui';
import { Link } from 'components/link';
import BlockTitle from "components/block-title";

import { IoIosCheckmarkCircle } from 'react-icons/io';

import { FaAngleRight } from 'react-icons/fa';
import image1 from 'assets/boost-1-1.png';

const AboutUs = () => {
  return (
    <Box sx={styles.boostAgencies} id="about-us">
      <Container>
      <BlockTitle
        slogan="About Us"
        title="What are we doing"
        styles={styles.blockTitle}
      />
        <Box sx={styles.content}>
          <Text as="p">
            Create custom landing pages with Shades that convert more visitors
            than any website, no coding required. Create custom landing pages
            with Shades that convert more visitors than any website, no coding
            required. Create custom landing pages with Shades that convert more
            visitors than any website, no coding required. Create custom landing
            pages with Shades that convert more visitors than any website, no
            coding required.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;

const styles = {
  boostAgencies: {
    pt: ["70px", null, null, "80px", "120px", null, "130px"],
  },
  blockTitle: {
    textAlign: "center",
  },
  content: {
    width: ["90%", null, null, null, null, "60%"],
    textAlign: "center",
    pt: [null, null, null, null, null, "0px"],
    ml: ["5%", null, null, null, null, "20%"],
  },
};
