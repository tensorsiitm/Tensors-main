import React from "react";
import { Box, Container, Flex, Heading, Text, Image } from "theme-ui";
import { Link } from "components/link";
import { IoIosCheckmarkCircle } from "react-icons/io";

import { FaAngleRight } from "react-icons/fa";
import image1 from "assets/team.png";

const Team = () => {
  return (
    <Box sx={styles.boostAgencies} id="team">
      <Container>
        <Box sx={styles.row}>
          <Flex sx={styles.col}>
            <Box sx={styles.content}>
              <Box sx={styles.titleBox}>
                <Heading as="h3">
                  A team is what makes an organization it is
                </Heading>
                <Text as="p">
                  An answer to all your JEE questions from exam preparation to
                  branch counselling. We offer the following services. An answer
                  to all your JEE questions from exam preparation to branch
                  counselling. We offer the following services
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
    mt: ["25px", null, null, "0"],
    display: "flex",
    marginLeft: ["0", null, null, null, "auto"],
    marginRight: ["0", null, null, null, "auto"],
    height: ["385px", null, null, "auto"],
    position: "relative",
    top: [null, null, null, "-20px", "-45px", "auto"],
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    ml: ["25px", null, null, "0"],
    mb: ["10px"],
    mt: ["30px"],
    li: {
      display: "flex",
      alignItems: "center",
      justifyContent: ["flex-start", null, null, null, null, "flex-start"],
      fontSize: [1, null, 2, null, "18px"],
      color: "text_secondary",
      lineHeight: [2.56],
      svg: {
        width: [17, null, null, 23],
        height: [17, null, null, 23],
        color: "#DADADA",
        borderRadius: "50%",
        marginRight: ["10px"],
      },
    },
  },
  titleBox: {
    textAlign: ["center", null, null, "left"],
    h3: {
      color: "black",
      fontSize: [5, null, null, "21px", "36px", "32px", 8],
      lineHeight: [1.6, null, null, "1.5"],
      fontWeight: "bold",
      letterSpacing: ["-0.5px", null, null, null, null, null, "-1.5px"],
    },
    p: {
      fontSize: [0, null, 2, null, "17px"],
      color: "text_secondary",
      opacity: ".6",
      lineHeight: ["26px", null, null, 1.8, null, 2.06],
      padding: ["0 20px", null, null, "0"],
      mt: ["15px"],
    },
  },
  link: {
    color: "primary",
    fontSize: [1, null, 2],
    display: "inline-block",
    verticalAlign: "middle",
    fontWeight: "bold",
    pl: ["30px", null, null, "4px", null, "4px"],
    mt: ["5px", null, null, null, "10px"],
    svg: {
      position: "relative",
      top: "3px",
    },
  },
  content: {
    width: "100%",
    textAlign: ["left", null, null, null, "left"],
    pt: [null, null, null, null, null, "100px"],
    pl: [null, null, null, null, null, "60px", "140px"],
  },
};
