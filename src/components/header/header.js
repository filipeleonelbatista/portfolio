/** @jsx jsx */
import Logo from 'components/logo';
import { DrawerProvider } from 'contexts/drawer/drawer.provider';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { Container, Flex, jsx } from 'theme-ui';
import menuItems from './header.data';
import MobileDrawer from './mobileDrawer';


export default function Header({ className }) {
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className}>
        <Container sx={styles.container}>
          <Logo />

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
              <ScrollLink
                activeClass="active"
                sx={styles.nav.navLink}
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                key={i}
              >
                {label}
              </ScrollLink>
            ))}
          </Flex>

          {/* <Link
            path="/"
            ml={2}
            label="Entrar em contato"
            sx={styles.headerBtn}
            variant="buttons.primary"
          /> */}

          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <a target="_blank" rel="noopener noreferer" href="https://github.com/filipeleonelbatista" style={{ padding: '0.8rem', border: 'solid 1px #0063c6', borderRadius: '0.3rem', margin: '0.2rem', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', color: '#0063c6', svg: { width: 24, heigth: 24 }, "&:hover": { color: '#666' } }}>
              <FaGithub />
            </a>
            <a target="_blank" rel="noopener noreferer" href="https://www.linkedin.com/in/filipeleonelbatista/" style={{ padding: '0.8rem', border: 'solid 1px #0063c6', borderRadius: '0.3rem', margin: '0.2rem', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', color: '#0063c6', svg: { width: 24, heigth: 24 }, "&:hover": { color: '#666' } }}>
              <FaLinkedinIn />
            </a>
            <a target="_blank" rel="noopener noreferer" href="https://www.instagram.com/filipeleonelbatista/" style={{ padding: '0.8rem', border: 'solid 1px #0063c6', borderRadius: '0.3rem', margin: '0.2rem', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', color: '#0063c6', svg: { width: 24, heigth: 24 }, "&:hover": { color: '#666' } }}>
              <FaInstagram />
            </a>
            <a target="_blank" rel="noopener noreferer" href="mailto:filipe.x2016@gmail.com" style={{ padding: '0.8rem', border: 'solid 1px #0063c6', borderRadius: '0.3rem', margin: '0.2rem', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', color: '#0063c6', svg: { width: 24, heigth: 24 }, "&:hover": { color: '#666' } }}>
              <FaEnvelope />
            </a>
          </div>

          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const styles = {
  headerBtn: {
    fontSize: '16px',
    fontWeight: 700,
    backgroundColor: '#ACCEF7',
    display: ['none', null, null, null, 'inline-block'],
  },
  header: {
    color: 'text_white',
    fontWeight: 'normal',
    py: '25px',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    '&.sticky': {
      backgroundColor: 'background',
      color: 'text',
      py: '15px',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '1430px',
    '@media(max-width:1440px)': {
      maxWidth: '1230px',
    },
    '@media screen and (max-width: 991px)': {
      justifyContent: 'space-between',
    },
  },
  nav: {
    mx: 'auto',
    '@media screen and (max-width: 991px)': {
      display: 'none',
    },
    navLink: {
      fontSize: '16px',
      color: '#02073E',
      fontWeight: '400',
      cursor: 'pointer',
      lineHeight: '1.2',
      mr: '48px',
      transition: '500ms',
      ':last-child': {
        mr: '0',
      },
      '&:hover, &.active': {
        color: 'primary',
      },
    },
  },
};
