import React from "react";
import { Box, Container, Flex, Heading, Text, Image } from "theme-ui";
import { Link } from "components/link";
import { IoIosCheckmarkCircle } from "react-icons/io";
import BlockTitle from "components/block-title";

import { FaAngleRight } from "react-icons/fa";
import anfas from "assets/anfas.png";
import faseeh from "assets/faseeh.png";


const DirectorsMessage = () => {
  return (
    <Box sx={styles.boostAgencies} id="team">
      <Container>
        <BlockTitle
          slogan="Directors Message"
          title="What our leaders say"
          styles={styles.blockTitle}
        />
        <Box sx={styles.row}>
          <Flex sx={styles.imageCol}>
            <Image src={anfas} sx={styles.image} alt="" />
          </Flex>
          <Flex sx={styles.contentCol}>
            <Box sx={styles.content}>
              <Box sx={styles.titleBox}>
                <Text as="p">
                  "To build an ecosystem for change, where each individual adds
                  value to themselves and the society simultaneously. That's what
                  drove us towards Tensors."
                </Text>
                <Text as="h6">-Anfas Nujum, Director</Text>
              </Box>
            </Box>
          </Flex>
          <Flex sx={styles.imageCol}>
            <Image src={faseeh} sx={styles.image} alt="" />
          </Flex>
          <Flex sx={styles.contentCol}>
            <Box sx={styles.content}>
              <Box sx={styles.titleBox}>
                <Text as="p">
                  "No idea that has the potential to create an impact in our
                  society should ever be disgarded due to poor funding or
                  support. Tensors is our answer to that wish."
                </Text>
                <Text as="h6">-Faseeh Ahmad, Director</Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default DirectorsMessage;

const styles = {
  boostAgencies: {
    pt: ["70px", null, null, "80px", "120px", null, "130px"],
    pb: ["70px", null, null, "80px", "120px", null, "130px"],
  },
  blockTitle: {
    textAlign: "center",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: ["column", null, null, "row"],
  },
  imageCol: {
    flex: ["0 0 100%", null, null, "0 0 10%"],
    alignSelf: ["center", null, null, "start"],
  },
  contentCol: {
    flex: ["0 0 100%", null, null, "0 0 40%"],
  },
  image: {
    mt: ["25px", null, null, "20px"],
    display: "flex",
    marginLeft: ["0", null, null, null, "auto"],
    marginRight: ["0", null, null, null, "auto"],
    height: ["100px", null, null, "200"],
    position: "relative",
    top: [null, null, null, "-20px", "-45px", "auto"],
  },
  titleBox: {
    textAlign: ["center", null, null, "left"],
    h6: {
      color: "black",
      opacity: ".6",
      textAlign: ["center", null, null, "right"],
      fontFamily: "Roboto",
      mt: "10px"
    },
    p: {
      fontSize: [0, null, 2, null, "17px"],
      color: "text_secondary",
      lineHeight: ["26px", null, null, 1.8, null, 2.06],
      padding: ["0 20px", null, null, "0"],
      mt: ["15px"],
      fontFamily: "Nunito",
    },
  },
  content: {
    width: "100%",
    textAlign: ["center", null, null, null, "left"],
    pl: [null, null, null, null, null, "25px", "30px"],
    pr: [null, null, null, null, null, "25px", "30px"],
  },
};
