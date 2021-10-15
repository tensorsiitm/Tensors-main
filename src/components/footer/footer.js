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
          paddingTop: [30, 40],
          paddingBottom: [15, 30],
        }}
      >
        <Box sx={styles.left}>
          <Text>
            <FaPhoneAlt /> &nbsp; Anfas : +91 9999999999 &nbsp;
            <FaPhoneAlt />
            &nbsp;Faseeh : +91 9999999999
          </Text>
        </Box>
        <Box>
          <FaEnvelope /> &nbsp; tensorsofficial@gmail.com
        </Box>
        <Box sx={styles.right}>
          <Link path="/">
            <FaFacebookF />
          </Link>
          <Link path="/">
            <FaInstagram />
          </Link>
          <Link path="/">
            <FaLinkedinIn />
          </Link>
          <Link path="/">
            <FaYoutube />
          </Link>
        </Box>
      </Container>
      <Container
        sx={{
          variant: "layout.toolbar",
          justifyContent: ["center", null, null, "space-between"],
          flexDirection: ["column", null, null, null, "row"],
          paddingTop: [10, 15],
          paddingBottom: [30, 65],
        }}
      >
        <Box sx={styles.left}>
          <Logo />
          <Text as="p">
            &copy; {new Date().getFullYear()} All right reserved - Tensors
            WebOps
          </Text>
        </Box>
        <Box sx={styles.visitEdu}>
          <Link path="/">
            Visit Tensors-Edu &nbsp; <FaExternalLinkAlt />
          </Link>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  left: {
    display: "flex",
    flexDirection: ["column", null, "row"],
    alignItems: "center",
    p: {
      fontSize: [0, 1],
      color: "black",
      opacity: 0.6,
      mt: ["10px", null, "0"],
    },
  },
  right: {
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
      textAlign: "center",
      "&:hover": {
        backgroundColor: "primary",
        color: "white",
      },
    },
    "a+a": {
      marginLeft: "30px",
    },
  },

  visitEdu: {
    display: ["none", null, null, null, "flex"],
    fontSize: 4,
    alignItems: "center",
    color: "black",
    a: {
      transition: "500ms",
      border: "4px solid",
      borderColor: "primary",
      borderRadius: "10px",
      padding: "3px 5px",
      color: "primary",
      textAlign: "center",
      "&:hover": {
        backgroundColor: "primary",
        color: "white",
      },
    },
  },
};
