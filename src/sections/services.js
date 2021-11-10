import React from 'react';
import { Image, Box, Container, Grid, Heading, Text } from 'theme-ui';
import BlockTitle from 'components/block-title';

import { FaGraduationCap, FaChalkboardTeacher, FaRegChartBar, FaWhmcs, } from "react-icons/fa";

import {
  GiGrowth,
  GiSkills,
} from "react-icons/gi";

const SERVICES_DATA = [
  {
    icon: <FaGraduationCap/>,
    title: "Learning",
    text: "Learn from the best sources, with enhanced user experience",
  },
  {
    icon: <FaChalkboardTeacher/>,
    title: "Mentorship",
    text: "Guidance and mentorship from the best minds of the country",
  },
  {
    icon: <FaRegChartBar/>,
    title: "Social Impact",
    text: "Creating sustainable and impactful changes in society",
  },
  {
    icon: <FaWhmcs/>,
    title: "Skill Development",
    text: "Evolve and Upskill yourself",
  },
];

const Services = () => {
  return (
    <Box sx={styles.services} id="services">
      <Container>
        <BlockTitle
          slogan="Our values"
          title="What makes us who we are"
          styles={styles.blockTitle}
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map((service, index) => (
            <Box
              className="service-card"
              sx={styles.serviceCard}
              key={`service-post-${index}`}
            >
              <Box className="service-icon" sx={styles.icon}>
                {service.icon}
              </Box>
              <Heading as="h3">{service.title}</Heading>
              <Text as="p">{service.text}</Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ["80px", null, null, null, null, null, "140px"],
    ".service-card:nth-of-type(2)": {
      ".service-icon": {
        backgroundImage:
          "linear-gradient(320.89deg, #25D9D9 10.83%, rgba(37, 217, 217, 0.5) 88.7%)",
      },
    },
    ".service-card:nth-of-type(3)": {
      ".service-icon": {
        backgroundImage:
          "linear-gradient(319.4deg, #0898E7 5.17%, rgba(8, 152, 231, 0.5) 94.34%)",
      },
    },
    ".service-card:nth-of-type(4)": {
      ".service-icon": {
        backgroundImage:
          "linear-gradient(322.63deg, #FF9066 9.94%, rgba(255, 144, 102, 0.5) 91.14%)",
      },
    },
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
    textAlign: "center",
    color: "white",
    ml: "auto",
    mr: "auto",
    fontSize: [7, null, null, 8],
    width: ["80px", null, null, "110px"],
    height: ["80px", null, null, "110px"],
    justifyContent: "center",
    alignItems: "center",
    borderRadius: ["20px", null, null, "40px"],
    backgroundImage:
      "linear-gradient(323.91deg, #FFCC40 7.09%, rgba(255, 204, 64, 0.5) 88.82%)",
  },
  serviceCard: {
    textAlign: "center",
    h3: {
      margin: 0,
      fontSize: ["18px", null, null, 3],
      fontWeight: "bold",
      lineHeight: 1,
      color: "black",
      mt: ["30px", null, null],
      mb: ["20px", null, null],
      fontFamily: "Raleway",
    },
    p: {
      margin: 0,
      fontSize: [0, null, null, "15px"],
      color: "heading_secondary",
      width: "100%",
      maxWidth: [null, null, null, null, "84%", "100%"],
      mx: [null, null, null, null, "auto", "0"],
      px: ["60px", null, null, null],
      fontFamily: "Roboto",
    },
  },
};
