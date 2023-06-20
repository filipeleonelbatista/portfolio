import React, { useContext, useEffect, useState } from 'react';
// import { Scrollbars } from 'react-custom-scrollbars';
import {
  FaEnvelope, FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { Box, jsx } from 'theme-ui';
import LogoDark from '../../assets/logo.svg';
import Drawer from '../../components/drawer';
import { Link } from '../../components/link';
import Logo from '../../components/logo';
import { DrawerContext } from '../../contexts/drawer/drawer.context';
import { useI18n } from '../../hooks/useI18n';

const MobileDrawer = () => {
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

  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: 'TOGGLE',
    });
  }, [dispatch]);

  return (
    <Drawer
      width="320px"
      drawerHandler={
        <Box sx={styles.handler}>
          <IoMdMenu size="22px" />
        </Box>
      }
      open={state.isOpen}
      toggleHandler={toggleHandler}
      closeButton={<IoMdClose size="24px" color="#02073E" />}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      {/* <Scrollbars autoHide>
        <Box sx={styles.content}>
          <Logo src={LogoDark} />
          <Box sx={styles.menu}>
            {menuItems.map(({ path, label }, i) => (
              <Link path={path} key={i} label={label} sx={styles.menu.link} />
            ))}
          </Box>

          <Box sx={styles.menuFooter}>
            <a
              target="_blank"
              rel="noopener noreferer"
              href="mailto:filipe.x2016@gmail.com"
              style={{
                width: '100%',
                padding: "0.4rem",
                border: "solid 1px #0063c6",
                borderRadius: "0.2rem",
                margin: "0.1rem",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                color: "#0063c6",
                textDecoration: 'none',
                transition: '0.2s',
                "&:hover": {
                  color: "#FFF",
                  backgroundColor: "#0063c6"
                },
              }}
            >
              {currentLanguageObject.nav_contact}
            </a>
          </Box>

          <div
            id="social-icons-nav-drawer"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 16
            }}
          >
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
              href="mailto:filipe.x2016@gmail.com"
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
        </Box>
      </Scrollbars> */}
    </Drawer>
  );
};

const styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',

    '@media screen and (min-width: 992px)': {
      display: 'none',
    },
  },

  drawer: {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(180deg, #E1F6F9 0%, #FCFCE8 100%)',
  },

  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '30px',
    right: '30px',
    zIndex: '1',
  },

  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '30px',
    pb: '40px',
    px: '30px',
  },

  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '30px',

    link: {
      fontSize: '15px',
      fontWeight: '500',
      color: '#02073E',
      py: '5px',
      cursor: 'pointer',
    },
  },

  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto',
  },

  button: {
    fontSize: '15px',
    fw: '700',
    height: '48px',
    borderRadius: '3px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0',
    backgroundColor: '#ACCEF7',
    color: '#0063c6',
  },
};

export default MobileDrawer;
