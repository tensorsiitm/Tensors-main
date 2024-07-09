/** @jsx jsx */
import { jsx, Box, Text, Container } from 'theme-ui';
import { Link } from 'components/link';
import Logo from 'components/logo';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaExternalLinkAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      sx={{
        variant: "layout.footer",
        backgroundColor: "#fff",
      }}
    >
      <Container
        sx={{
          variant: "layout.toolbar",
          justifyContent: ["center", null, null, "space-between"],
          flexDirection: ["column", null, null, null, "row"],
          paddingTop: ["30px", "40px"],
          paddingBottom: ["30px", "10px"],
        }}
      >
        <Box sx={styles.phoneNo}>
          <Text as="p">
            <FaPhoneAlt /> &nbsp; Aadil : +91 8330020642 &nbsp;
          </Text>
          <Text as="p">
            <FaPhoneAlt />
            &nbsp; Devanarayanan : +91 8281913830
          </Text>
        </Box>
        <Box sx={styles.email}>
          <Text as="p">
            <FaEnvelope /> &nbsp; tensorsofficial@gmail.com
          </Text>
        </Box>
        <Box sx={styles.social}>
          <Link path="https://www.facebook.com/tensorsofficial">
            <FaFacebookF />
          </Link>
          <Link path="https://www.instagram.com/tensors_official/">
            <FaInstagram />
          </Link>
          <Link path="https://www.linkedin.com/company/53201198">
            <FaLinkedinIn />
          </Link>
          <Link path="https://www.youtube.com/channel/UCYQ-dJn04bDDjs1t6eUzq7A">
            <FaYoutube />
          </Link>
        </Box>
      </Container>
      <Container
        sx={{
          variant: "layout.toolbar",
          justifyContent: ["center", null, null, "space-between"],
          flexDirection: ["column", null, null, null, "row"],
          paddingTop: ["30px", "20px"],
          paddingBottom: ["30px", "40px"],
        }}
      >
        <Box sx={styles.copyRight}>
          <Logo />
          <Text as="p">
            &copy; {new Date().getFullYear()} All right reserved - Tensors
            WebOps
          </Text>
        </Box>
        <Box sx={styles.visitEdu}>
          <Link path="https://edu.tensors.in/">
            Visit Tensors-Edu &nbsp; <FaExternalLinkAlt />
          </Link>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  phoneNo: {
    display: "flex",
    flexDirection: ["column", null, "row"],
    alignItems: "center",
    p: {
      color: "black",
      fontFamily: "Roboto",
      ml: ["0px", null, null, "20px"],
      paddingBottom: ["10px", "10px", "0px"],
      svg: {
        color: "primary",
      },
    },
  },
  email: {
    display: "flex",
    flexDirection: ["column", null, "row"],
    alignItems: "center",
    p: {
      color: "black",
      fontFamily: "Roboto",
      ml: ["0px", null, null, "20px"],
      paddingBottom: ["25px", "25px", "0px"],
      svg: {
        color: "primary",
      },
    },
  },
  copyRight: {
    display: "flex",
    flexDirection: ["column", null, "row"],
    alignItems: "center",
    p: {
      fontSize: [0, 1],
      fontFamily: "Roboto",
      color: "black",
      opacity: 0.6,
      mt: ["10px", null, "0"],
    },
  },
  social: {
    display: ["flex", null, null, null, "flex"],
    fontSize: 4,
    alignItems: "center",
    color: "black",
    a: {
      transition: "500ms",
      height: "30px",
      width: "30px",
      border: "2px solid black",
      borderRadius: "50%",
      "&:hover": {
        backgroundColor: "primary",
        color: "white",
      },
      svg: {
        position: "relative",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -80%)",
      },
    },
    "a+a": {
      marginLeft: "30px",
    },
  },

  visitEdu: {
    display: ["none", null, null, null, "flex"],
    fontSize: 2,
    alignItems: "center",
    color: "black",
    fontFamily: "Roboto",
    a: {
      transition: "500ms",
      color: "black",
      textAlign: "center",
      "&:hover": {
        color: "primary",
      },
    },
  },
};
