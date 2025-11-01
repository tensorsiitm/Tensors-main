import React from "react";
import { Box, Container, Flex, Text, Image } from "theme-ui";
import BlockTitle from "components/block-title";

import anfas from "assets/anfas.png";
import devan from "assets/devan.jpg";
import aadil from "assets/aadil.jpg"; // ✅ Add this image in assets folder

const DirectorsMessage = () => {
  return (
    <Box sx={styles.boostAgencies} id="team">
      <Container>
        <BlockTitle
          slogan="Directors Message"
          title="What our leaders say"
          styles={styles.blockTitle}
        />
        <Box sx={styles.col}>
          {/* 1️⃣ First Member */}
          <Box sx={styles.row}>

    
          <Flex sx={styles.imageCol}>
            <Image src={anfas} sx={styles.image} alt="Anfas" />
          </Flex>
          <Flex sx={styles.contentCol}>
            <Box sx={styles.content}>
              <Box sx={styles.titleBox}>
                <Text as="p">
                  "To build an ecosystem for change, where each individual adds
                  value to themselves and the society simultaneously. That's what
                  drove us towards Tensors."
                </Text>
                <Text as="h6">- Anfas Nujum, Founder & Advisory Board Member</Text>
              </Box>
            </Box>
          </Flex>

          {/* 2️⃣ Second Member */}
          <Flex sx={styles.imageCol}>
            <Image src={aadil} sx={styles.image} alt="Aadil" />
          </Flex>
          <Flex sx={styles.contentCol}>
            <Box sx={styles.content}>
              <Box sx={styles.titleBox}>
                <Text as="p">
                  "Growth blooms in the fertile ground of shared vision and raw
                  talent. Together, we build something extraordinary."
                </Text>
                <Text as="h6">- Aadil, Advisory Board Member</Text>
              </Box>
            </Box>
          </Flex>

      </Box>

          {/* 3️⃣ Third Member (NEW) */}
          <Box sx={styles.row}>
          <Flex sx={styles.imageCol}>
            <Image src={devan} sx={styles.image} alt="Devan" />
          </Flex>
          <Flex sx={styles.contentCol}>
            <Box sx={styles.content}>
              <Box sx={styles.titleBox}>
                <Text as="p">
                  "We believe that technology’s truest power is not in what it creates, but in what it awakens, the courage to grow, the will to lead and the compassion to make a difference"
                </Text>
                <Text as="h6">- Devanarayanan V S, Director</Text>
              </Box>
            </Box>
          </Flex>
              </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default DirectorsMessage;

const styles = {
  col:{
display: "flex",
flexDirection: "column",
gap: "60px",
justifyContent: "center",
alignItems: "center",
  },
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
    justifyContent: "center",
    alignItems: "center",
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
    borderRadius: "50%",
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
