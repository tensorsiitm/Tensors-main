import React from 'react';
import { Box, Container, Grid, Heading, Text, Image } from 'theme-ui';
import "@fontsource/roboto/400.css";
import "@fontsource/raleway/900.css";

import { FaGooglePlay } from "react-icons/fa";
import { Link } from 'components/link';

import img1 from 'assets/decov-app6.png';

const DecovApp = () => {
  return (
    <Box as="section" sx={styles.customerSupport} id="decov-app">
      <Container>
        <Grid sx={styles.row}>
          <Box sx={styles.col}>
            <Box sx={styles.content}>
              <Heading as="h3">
                A mobile app that supports people in need
              </Heading>
              <Text as="p">
                Decov is a mobile app designed and developed by the Tensors
                webops team as a part of its techno-social projects in
                partnership with calicut medical college hospital. It is
                structured in a way as to assist in blood, plasma, oxygen and food
                donations. Registered recipients are able to view nearest
                registered donors in the attached map. And can contact them
                using the contact details such as mobile number and location
                provided in the app. It efficiently connects the recipient and
                the recipee along with respecting the privacy and security of
                both.
              </Text>
              {/* 
                            <Link path="/" sx={styles.link}>
                <FaGooglePlay /> &nbsp; Download the App
              </Link>
              */}
            </Box>
          </Box>
          <Box sx={styles.col}>
            <Image src={img1} alt="" />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default DecovApp;

const styles = {
  customerSupport: {
    overflow: "hidden",
    pt: ["75px", null, null, null, "80px", "120px"],
    pb: ["75px", null, null, null, null, "120px", "210px"],
  },
  row: {
    display: "grid",
    gridGap: [0, null, null, null, "25px", null, "55px"],
    gridTemplateColumns: ["1fr", null, null, null, "1fr 1fr"],
  },
  col: {
    img: {
      mx: [null, null, null, "auto", "0"],
      display: [null, null, null, "block"],
      mt: [null, null, null, null, "0px", "0"],
    },
  },
  content: {
    pt: [0, null, null, null, "0px", "0px"],
    mb: [null, null, null, "-40px", "0"],
    position: "relative",
    zIndex: 10,
    paddingLeft: ["12px", null, null, null, "0"],
    paddingRight: ["12px", null, null, null, "0", "75px", "0"],
    pb: ["10px"],
    maxWidth: [null, null, null, "590px", null, "100%"],
    width: ["100%"],
    mx: [null, null, null, "auto", null, "0"],
    textAlign: ["center", null, null, null, "left"],
    h3: {
      fontSize: [5, null, "21px", null, 7, "32px", 8],
      fontFamily: "Raleway",
      maxWidth: [null, null, null, "400px", "none"],
      mx: [null, null, null, "auto", "0"],
      color: "black",
      fontWeight: "bold",
      letterSpacing: ["-0.5px", null, null, null, null, null, "-1.5px"],
      lineHeight: [1.5, null, 1.25],
      mb: ["30px", null, null, null, "30px"],
    },
    p: {
      fontSize: [0, null, 2, null, "17px"],
      fontFamily: "Roboto",
      color: "text",
      lineHeight: ["26px", null, null, 1.8, null, 2.06],
      "+p": {
        mt: ["15px", null, null, null, "15px"],
      },
    },
  },
  specialText: {
    color: "heading",
    opacity: 0.6,
  },
  link: {
    color: "primary",
    fontSize: [1, null, 2],
    display: "inline-block",
    verticalAlign: "middle",
    fontFamily: "Nunito",
    fontWeight: "bold",
    mt: ["10px", null, null, null, "10px"],
  },
};
