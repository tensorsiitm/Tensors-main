/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui";
import { Link } from "components/link";
import { Link as ScrollLink } from "react-scroll";
import Logo from "components/logo";
import { DrawerProvider } from "contexts/drawer/drawer.provider";
import MobileDrawer from "./mobileDrawer";
import menuItems from "./header.data";

export default function Header({ className, page }) {

  return (
    <DrawerProvider>
      <header sx={styles.header} className={className}>
        <Container sx={styles.container}>
          <Logo />

          {page == "home" && (
            <Flex as="nav" sx={styles.nav}>
              {menuItems.map(({ path, label }, i) => (
                <ScrollLink
                  activeClass="active"
                  sx={styles.nav.navLink}
                  to={path}
                  spy={true}
                  smooth={true}
                  duration={500}
                  key={i}
                >
                  {label}
                </ScrollLink>
              ))}
            </Flex>
          )}
          {page == "team" && (
            <Flex as="nav" sx={styles.nav}>
              {/* 
                            <Link
                activeClass="active"
                path="/team/2021-22/"
                label="Team 2021-22"
                sx={styles.nav.navLink}
              />
              */}
              <Link
                activeClass="active"
                path="/team/2020-21/"
                label="Team 2020-21"
                sx={styles.nav.navLink}
              />
            </Flex>
          )}

          {page != "home" && (
            <Link
              path="/"
              ml={2}
              label="Home"
              sx={styles.headerBtn}
              variant="buttons.primary"
            />
          )}

          <MobileDrawer page={page} />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const styles = {
  headerBtn: {
    backgroundColor: "rgba(0,0,0,0)",
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: "-0.16px",
    borderRadius: "5px",
    border: "2px solid",
    borderColor: "primary",
    color: "primary",
    padding: "8px 24px",
    fontFamily: "Raleway",
    display: ["none", null, null, null, "inline-block"],
    ml: ["0", null, null, "auto", "0"],
    mr: ["0", null, null, "20px", "0"],
    "&:hover": {
      color: "#fff",
      backgroundColor: "primary",
    },
  },
  header: {
    color: "text_white",
    fontWeight: "normal",
    py: "25px",
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",

    "&.sticky": {
      backgroundColor: "background",
      color: "text",
      py: "15px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    width: [null, null, null, null, null, null, "1390px"],
    "@media screen and (max-width: 960px)": {
      justifyContent: "space-between",
    },
  },
  nav: {
    mx: "auto",
    fontFamily: "Raleway",
    "@media screen and (max-width: 960px)": {
      display: "none",
    },
    navLink: {
      fontSize: "16px",
      color: "#02073E",
      fontWeight: "400",
      cursor: "pointer",
      lineHeight: "1.2",
      mr: "48px",
      transition: "500ms",
      ":last-child": {
        mr: "0",
      },
      "&:hover, &.active": {
        color: "primary",
      },
    },
  },
};
