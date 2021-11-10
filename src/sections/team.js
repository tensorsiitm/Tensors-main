import React from "react";
import { Box, Container, Flex, Heading, Text, Image } from "theme-ui";
import { Link } from "components/link";
import { IoIosCheckmarkCircle } from "react-icons/io";

import { FaAngleRight } from "react-icons/fa";
import image1 from "assets/team.png";
import "@fontsource/nunito";

const Team = () => {
  return (
    <Box sx={styles.boostAgencies} id="team">
      <Container>
        <Box sx={styles.row}>
          <Flex sx={styles.col}>
            <Box sx={styles.content}>
              <Box sx={styles.titleBox}>
                <Heading as="h3">
                  A team is what makes an organization what it is
                </Heading>
                <Text as="p">
                  Tensors is a team that comprises of four teams under two directors.
                  The public Relations team, has the responsibility to increase the publicity of the events
                  of tensors. The tenment team conducts the events for students appearing for JEE like that of
                  annual tensors exam, JOSAA counselling support etc.. The tensors social campaign initiatives
                  (TenSCI) team bring in social project and work on
                  them by providing technical assistance and the design team look after all the design works of
                  tensors
                </Text>
              </Box>
              <Link path="/team/2020-21/" sx={styles.link}>
                See the team <FaAngleRight />
              </Link>
            </Box>
          </Flex>
          <Flex sx={styles.col}>
            <Image src={image1} sx={styles.image} alt="" />
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Team;

const styles = {
  row: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: ["column", null, null, "row-reverse"],
  },
  col: {
    flex: ["0 0 100%", null, null, "0 0 50%"],
  },
  image: {
    mt: ["25px", null, null, "20px"],
    display: "flex",
    marginLeft: ["0", null, null, null, "auto"],
    marginRight: ["0", null, null, null, "auto"],
    height: ["385px", null, null, "auto"],
    position: "relative",
    top: [null, null, null, "-20px", "-45px", "auto"],
  },
  titleBox: {
    textAlign: ["center", null, null, "left"],
    h3: {
      color: "black",
      fontSize: [5, null, null, "21px", "36px", "32px", 8],
      lineHeight: [1.6, null, null, "1.5"],
      fontWeight: "bold",
      letterSpacing: ["-0.5px", null, null, null, null, null, "-1.5px"],
      fontFamily: "Raleway",
    },
    p: {
      fontSize: [0, null, 2, null, "17px"],
      color: "text_secondary",
      color: "text",
      lineHeight: ["26px", null, null, 1.8, null, 2.06],
      padding: ["0 20px", null, null, "0"],
      mt: ["15px"],
      fontFamily: "Roboto",
    },
  },
  link: {
    color: "primary",
    fontSize: [1, null, 2],
    display: "inline-block",
    verticalAlign: "middle",
    fontWeight: "bold",
    fontFamily: "Nunito",
    pl: ["0px", null, null, "4px", null, "4px"],
    mt: ["5px", null, null, null, "10px"],
  },
  content: {
    width: "100%",
    textAlign: ["center", null, null, null, "left"],
    pt: [null, null, null, null, null, "100px"],
    pl: [null, null, null, null, null, "60px", "140px"],
  },
};
