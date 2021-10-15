import React from "react";
import { Image, Box, Container, Grid, Heading, Text } from "theme-ui";
import BlockTitle from "components/block-title";

import Firoz from "assets/team/Firoz.png";

const TEAM_MEMBERS_DIRECTORS = [
    {},
    {
      image: Firoz,
      name: "Anfas Nujum",
      designation: "",
      },
  {
    image: Firoz,
    name: "Faseeh Ahmad",
    designation: "",
  },
  {}
];

const TEAM_MEMBERS_PR = [
  {
    image: Firoz,
    name: "Sabari Krishna",
    designation: "Senior Executive",
  },
  {
    image: Firoz,
    name: "Afeef",
    designation: "Senior Executive",
  },
  {
    image: Firoz,
    name: "Raneesh Rafeeq",
    designation: "Coordinator",
  },
  {
    image: Firoz,
    name: "Danish Ovungal",
    designation: "Coordinator",
  },
  {
    image: Firoz,
    name: "Jithin Laxman",
    designation: "Coordinator",
  },
  {
    image: Firoz,
    name: "Rahul Krishna",
    designation: "Coordinator",
  },
  {
    image: Firoz,
    name: "Reshma",
    designation: "Coordinator",
  },
  {
    image: Firoz,
    name: "Mahboob Ali",
    designation: "Coordinator",
  },
  {
    image: Firoz,
    name: "Juraij",
    designation: "Coordinator",
  },
  {
    image: Firoz,
    name: "Anfal Nihal",
    designation: "Coordinator",
  },
  {
    image: Firoz,
    name: "Raneesh Rafeeq",
    designation: "Coordinator",
  },
  {
    image: Firoz,
    name: "Sreedarsh SJ",
    designation: "Coordinator",
  },
  {
    image: Firoz,
    name: "Firoz P S",
    designation: "Coordinator",
  },
  {
    image: Firoz,
    name: "Adwaith",
    designation: "Coordinator",
  },
  {
    image: Firoz,
    name: "Sreeram",
    designation: "Coordinator",
  },
];

const Team2020_21 = () => {
  return (
    <Box sx={styles.services} id="services">
      <Container>
        <BlockTitle title="Directors" styles={styles.blockTitle} />
        <Grid sx={styles.grid}>
          {TEAM_MEMBERS_DIRECTORS.map((service, index) => (
            <Box
              className="service-card"
              sx={styles.serviceCard}
              key={`service-post-${index}`}
            >
              <Box className="service-icon" sx={styles.icon}>
                <Image src={service.image} alt="" />
              </Box>
              <Heading as="h3">{service.name}</Heading>
              <Text as="p">{service.designation}</Text>
            </Box>
          ))}
        </Grid>
        <BlockTitle title="Public Relations Team" styles={styles.blockTitle} />
        <Grid sx={styles.grid}>
          {TEAM_MEMBERS_PR.map((service, index) => (
            <Box
              className="service-card"
              sx={styles.serviceCard}
              key={`service-post-${index}`}
            >
              <Box className="service-icon" sx={styles.icon}>
                <Image src={service.image} alt="" />
              </Box>
              <Heading as="h3">{service.name}</Heading>
              <Text as="p">{service.designation}</Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Team2020_21;

const styles = {
  services: {
    pt: ["80px", null, null, null, null, null, "140px"],

  },
  blockTitle: {
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridGap: ["30px", null, null, null, null, "60px"],
    gridTemplateColumns: [
      "1fr",
      null,
      null,
      "1fr 1fr",
      null,
      "1fr 1fr 1fr 1fr",
    ],
    
  },
  icon: {
    display: "flex",
    ml: "auto",
    mr: "auto",
    width: ["100px", null, null, "160px"],
    height: ["100px", null, null, "160px"],
    justifyContent: "center",
    alignItems: "center",
  },
  serviceCard: {
    textAlign: "center",
    h3: {
      margin: 0,
      fontSize: ["18px", null, null, 3],
      fontWeight: "bold",
      lineHeight: 1,
      color: "black",
      mt: ["10px", null, null],
    },
    p: {
      margin: 0,
      fontSize: [0, null, null, "15px"],
      color: "heading_secondary",
      width: "100%",
      maxWidth: [null, null, null, null, "84%", "100%"],
      mx: [null, null, null, null, "auto", "0"],
    },
  },
};
