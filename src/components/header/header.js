/** @jsx jsx */
import Logo from "components/logo";
import SwitchLanguage from "components/SwitchLanguage";
import { DrawerProvider } from "contexts/drawer/drawer.provider";
import { useI18n } from "hooks/useI18n";
import { useEffect, useState } from "react";
import {
  FaEnvelope, FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { Container, Flex, jsx } from "theme-ui";
import MobileDrawer from "./mobileDrawer";
import Link from 'next/link'

import customStyles from 'styles/components/header.module.css';

export default function Header({ className }) {
  const { currentLanguageObject, currentLanguage } = useI18n();

  const [menuItems, setMenuItems] = useState([])

  useEffect(() => {
    setMenuItems([
      {
        path: '/#banner',
        label: currentLanguageObject.nav_home,
      },
      {
        path: '/#sobre',
        label: currentLanguageObject.nav_about,
      },
      {
        path: '/#projetos',
        label: currentLanguageObject.nav_projects,
      },
      {
        path: '/#xp',
        label: currentLanguageObject.nav_experiences,
      },
      {
        path: '/challenges',
        label: currentLanguageObject.nav_challenges,
      },
    ])
  }, [currentLanguage])

  return (
    <DrawerProvider>
      <header sx={styles.header} className={className}>
        <Container sx={styles.container}>
          <Logo />

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
              <Link
                href={path}
                key={i}
              >
                <a style={{
                  fontSize: "16px",
                  color: (path === window.location.pathname + window.location.hash) || (path === window.location.pathname) ? "#0063c6" : "#02073E",
                  fontWeight: "400",
                  cursor: "pointer",
                  lineHeight: "1.2",
                  textDecoration: "none",
                  transition: "500ms",
                  "&:hover, &.active": {
                    color: "primary",
                  },
                }}>{label}</a>
              </Link>
            ))}
          </Flex>


          <div className={customStyles.sideMenu}>
            <SwitchLanguage />

            <div className={customStyles.socialIcons}>
              <a
                target="_blank"
                rel="noopener noreferer"
                href="https://www.linkedin.com/in/filipeleonelbatista/"
                style={{
                  padding: "0.8rem",
                  border: "solid 1px #0063c6",
                  borderRadius: "0.3rem",
                  margin: "0.2rem",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#0063c6",
                  svg: { width: 24, heigth: 24 },
                  "&:hover": { color: "#666" },
                }}
              >
                <FaLinkedinIn />
              </a>
              <a
                target="_blank"
                rel="noopener noreferer"
                href="https://www.instagram.com/filipeleonelbatista/"
                style={{
                  padding: "0.8rem",
                  border: "solid 1px #0063c6",
                  borderRadius: "0.3rem",
                  margin: "0.2rem",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#0063c6",
                  svg: { width: 24, heigth: 24 },
                  "&:hover": { color: "#666" },
                }}
              >
                <FaInstagram />
              </a>
              <a
                target="_blank"
                rel="noopener noreferer"
                href="mailto:filipe.batista@desenvolvedordeaplicativos.com.br"
                style={{
                  padding: "0.8rem",
                  border: "solid 1px #0063c6",
                  borderRadius: "0.3rem",
                  margin: "0.2rem",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#0063c6",
                  svg: { width: 24, heigth: 24 },
                  "&:hover": { color: "#666" },
                }}
              >
                <FaEnvelope />
              </a>
            </div>

            <MobileDrawer />
          </div>
        </Container>
      </header>
    </DrawerProvider>
  );
}

const styles = {
  headerBtn: {
    fontSize: "16px",
    fontWeight: 700,
    backgroundColor: "#ACCEF7",
    display: ["none", null, null, null, "inline-block"],
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
    maxWidth: "1430px",
    "@media(max-width:1440px)": {
      maxWidth: "1230px",
    },
    "@media screen and (max-width: 991px)": {
      justifyContent: "space-between",
    },
  },
  nav: {
    mx: "auto",
    display: "flex",
    justifyContent: 'space-between',
    gap: "2.4rem",
    "@media screen and (max-width: 991px)": {
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
