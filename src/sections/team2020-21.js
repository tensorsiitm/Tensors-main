import React from "react";
import { Image, Box, Container, Grid, Heading, Text } from "theme-ui";
import BlockTitle from "components/block-title";

import fazil from "assets/fazil.png";
import firoz from "assets/firoz.png";
import raneesh from "assets/raneesh.png";
import faseeh from "assets/faseeh.png";
import jithin from "assets/jithin.png";
import juraij from "assets/juraij.png";
import rahul from "assets/rahul.png";
import sreedarsh from "assets/sreedarsh.png";
import reshma from "assets/reshma.png";
import sabari from "assets/sabari.png";
import mahboob from "assets/mahboob.png";
import danish from "assets/danish.png";
import nihal from "assets/nihal.png";
import nagappan from "assets/nagappan.png";
import hadi from "assets/hadi.png";
import akhil from "assets/akhil.png";
import davis from "assets/davis.png";
import zameel from "assets/zameel.png";
import amrutha from "assets/amrutha.png";
import ahzam from "assets/ahzam.png";
import bazwith from "assets/bazwith.png";
import anfas from "assets/anfas.png";
import shihad from "assets/shihad.png";
import sriraj from "assets/sriraj.png";
import rishaab from "assets/rishaab.png";
import hisham from "assets/hisham.png";
import neelanjana from "assets/neelanjana.png";
import akshay from "assets/akshay.png";
import nithin from "assets/nithin.png";
import raagul from "assets/raagul.png";
import joel from "assets/joel.png";
import gokul from "assets/gokul.png";
import hameem from "assets/hameem.png";
import teamBanner from "assets/team.jpg";

import none from "assets/none.png";


const TEAM_MEMBERS_DIRECTORS = [
    {
      image: anfas,
      name: "Anfas Nujum K",
      designation: "",
      },
  {
    image: faseeh,
    name: "Faseeh Ahmad",
    designation: "",
  },
];

const TEAM_MEMBERS_PR = [
  {
    image: sabari,
    name: "Sabari Krishna M",
    designation: "Senior Executive",
  },
  {
    image: none,
    name: "Afeef P",
    designation: "Senior Executive",
  },
  {
    image: none,
    name: "Amrit Sharma",
    designation: "Senior Executive",
  },
  {
    image: raneesh,
    name: "M R Mohammed Raneesh",
    designation: "Coordinator",
  },
  {
    image: danish,
    name: "Danish Mohamed O",
    designation: "Coordinator",
  },
  {
    image: jithin,
    name: "Jithin L",
    designation: "Coordinator",
  },
  {
    image: rahul,
    name: "Rahul Krishna K",
    designation: "Coordinator",
  },
  {
    image: reshma,
    name: "Reshma Aiyappan",
    designation: "Coordinator",
  },
  {
    image: mahboob,
    name: "Mahboob Ali",
    designation: "Coordinator",
  },
  {
    image: juraij,
    name: "Juraij Ibn M Basheer",
    designation: "Coordinator",
  },
  {
    image: nihal,
    name: "Nihal N P",
    designation: "Coordinator",
  },
  {
    image: sreedarsh,
    name: "Sreedarsh S J",
    designation: "Coordinator",
  },
  {
    image: none,
    name: "R Adwaith Krishna",
    designation: "Coordinator",
  },
  {
    image: none,
    name: "Sreeram Krishna R",
    designation: "Coordinator",
  },
  {
    image: firoz,
    name: "Firoz P S",
    designation: "Coordinator",
  },
];

const TEAM_MEMBERS_WEB = [
  {
    image: gokul,
    name: "Gokulkrishnan A V",
    designation: "Senior Executive",
  },
  {
    image: akshay,
    name: "Akshay Krishna",
    designation: "Senior Executive",
  },
  {
    image: none,
    name: "Vinay P",
    designation: "Senior Executive",
  },
  {
    image: none,
    name: "Mathew George Kalathoor",
    designation: "Senior Executive",
  },
  {
    image: joel,
    name: "Joel Jose",
    designation: "Project Executive",
  },
  {
    image: none,
    name: "Hari Sankar C N",
    designation: "Project Executive",
  },
  {
    image: none,
    name: "Hrithwik Shalu",
    designation: "Project Executive",
  },
  {
    image: none,
    name: "Rishikesh S",
    designation: "Project Executive",
  },
  {
    image: hadi,
    name: "Abdul Hadi P V",
    designation: "Coordinator",
  },
  {
    image: fazil,
    name: "Fazil P S",
    designation: "Coordinator",
  },
  {
    image: firoz,
    name: "Firoz P S",
    designation: "Coordinator",
  },
];

const TEAM_MEMBERS_DESIGN = [
  {
    image: none,
    name: "Sreeram Krishna R",
    designation: "Coordinator",
  },
  {
    image: none,
    name: "R Adwaith Krishna",
    designation: "Coordinator",
  },
];

  const TEAM_MEMBERS_EDU = [
    {
      image: nagappan,
      name: "Nagappan N",
      designation: "Manager",
    },
    {
      image: shihad,
      name: "Mohamed Shihad P",
      designation: "Manager",
    },
    {
      image: fazil,
      name: "Fazil P S",
      designation: "Manager",
    },
    {
      image: raagul,
      name: "Raagul K",
      designation: "Manager",
    },
    {
      image: zameel,
      name: "Muhamed Zameel",
      designation: "Manager",
    },
    {
      image: hisham,
      name: "Muhammed Hisham",
      designation: "Manager",
    },
    {
      image: neelanjana,
      name: "Neelanjana Pramod A v",
      designation: "Manager",
    },
    {
      image: ahzam,
      name: "Ahzam Parvez Ashraf",
      designation: "Consultant",
    },
    {
      image: hameem,
      name: "Hameem Mohammed Ridwan",
      designation: "Consultant",
    },
    {
      image: bazwith,
      name: "S Bazwith Muhammed",
      designation: "Consultant",
    },
    {
      image: davis,
      name: "Davis T Vempeny",
      designation: "Consultant",
    },
    {
      image: amrutha,
      name: "Amrutha M U",
      designation: "Consultant",
    },
    {
      image: none,
      name: "Pooja Ramapurath",
      designation: "Consultant",
    },
    {
      image: akhil,
      name: "Akhil Krishna M M",
      designation: "Consultant",
    },
    {
      image: rishaab,
      name: "R Rishaab Karthik",
      designation: "Consultant",
    },
    {
      image: nithin,
      name: "S Nithin",
      designation: "Consultant",
    },
    {
      image: sriraj,
      name: "Valeti Sriraj",
      designation: "Consultant",
    },
    {
      image: none,
      name: "Aaysha Anser Babu",
      designation: "Consultant",
    },
    {
      image: none,
      name: "Shashank Swaminathan",
      designation: "Consultant",
    },
  ];

const Team2020_21 = () => {
  return (
    <Box sx={styles.services} id="services">
      <Container>
        <Heading as="h1" sx={styles.mainHeading}>
          Tensors Team of 2024-25
        </Heading>
  <Box sx={{ textAlign: "center", mt: "40px" }}>
  <Image
    src={teamBanner}
    alt="Tensors Team Banner"
    sx={{
      width: ["90%", "80%", "70%"],
      borderRadius: "12px",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
      margin: "0 auto",
    }}
  />
</Box>

           <Heading as="h1" sx={styles.mainHeading}>
          Tensors Team of 2020-21
        </Heading>
        <BlockTitle title="Directors" styles={styles.blockTitle} />
        <Grid sx={styles.directorsGrid}>
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
        <Grid sx={styles.prGrid}>
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
        <BlockTitle title="Tenment Team" styles={styles.blockTitle} />
        <Grid sx={styles.eduGrid}>
          {TEAM_MEMBERS_EDU.map((service, index) => (
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
        <BlockTitle title="Design Team" styles={styles.blockTitle} />
        <Grid sx={styles.designGrid}>
          {TEAM_MEMBERS_DESIGN.map((service, index) => (
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
        <BlockTitle title="TenSCI team" styles={styles.blockTitle} />
        <Grid sx={styles.webGrid}>
          {TEAM_MEMBERS_WEB.map((service, index) => (
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
        <Box sx={styles.bottomline}></Box>
      </Container>
    </Box>
  );
};

export default Team2020_21;

const styles = {
  mainHeading: {
    fontSize: [4, null, null, null, 6],
    textAlign: "center",
    fontWeight: "bolder",
    color: "primary",
    mt: ["30px", null, null, null, null, null, "50px"],
  },
  services: {
    pt: ["80px", null, null, null, null, null, "140px"],
  },
  blockTitle: {
    textAlign: "center",
    mt: ["80px", null, null, null, null, null, "140px"],
  },
  directorsGrid: {
    display: "grid",
    gridGap: ["30px", null, null, null, null, "60px"],
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr", null, "1fr 1fr"],
  },
  prGrid: {
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
  eduGrid: {
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
  designGrid: {
    display: "grid",
    gridGap: ["30px", null, null, null, null, "60px"],
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr", null, "1fr 1fr"],
  },
  webGrid: {
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
      lineHeight: 1,
      color: "black",
      mt: ["10px", null, null],
      fontFamily: "Raleway",
    },
    p: {
      margin: 0,
      fontSize: [0, null, null, "15px"],
      color: "heading_secondary",
      width: "100%",
      maxWidth: [null, null, null, null, "84%", "100%"],
      mx: [null, null, null, null, "auto", "0"],
      fontFamily: "Roboto",
    },
  },
  bottomline: {
    width: "100%",
    backgroundColor: "primary",
    height: "3px",
    mt: ["20px", null, null, null, "60px"],
  },
};
