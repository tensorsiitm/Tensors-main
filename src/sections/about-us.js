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
          title="What we do"
          styles={styles.blockTitle}
        />
        <Box sx={styles.content}>
          <Text as="p">
            Tensors is a non profit organization by the students of IIT Madras
            aiming to help the society. We take several social initiatives and
            organize social campaigns throughout the year. We generate our funds
            for these social events by conducting various exams and counselling
            programs for JEE and JoSAA.
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
    color: "text",
    pt: [null, null, null, null, null, "0px"],
    mt: [null, null, null, null, null, "-5%"],
    ml: ["5%", null, null, null, null, "20%"],
    fontFamily: "Roboto",
  },
};
