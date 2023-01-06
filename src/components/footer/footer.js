/** @jsx jsx */
import { useI18n } from "hooks/useI18n";
import {
  FaEnvelope, FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";
import { Container, Divider, jsx } from "theme-ui";

export default function Footer() {
  const { currentLanguageObject } = useI18n()
  return (
    <footer sx={styles.footer}>
      <Divider sx={styles.footer.divider} />
      <Container sx={styles.footer.container}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            target="_blank"
            rel="noopener noreferer"
            href="https://www.linkedin.com/in/filipeleonelbatista/"
            style={{
              padding: "0.8rem",
              border: "solid 1px #343d48",
              borderRadius: "0.3rem",
              margin: "0.2rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              color: "#343d48",
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
              border: "solid 1px #343d48",
              borderRadius: "0.3rem",
              margin: "0.2rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              color: "#343d48",
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
              border: "solid 1px #343d48",
              borderRadius: "0.3rem",
              margin: "0.2rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              color: "#343d48",
              svg: { width: 24, heigth: 24 },
              "&:hover": { color: "#666" },
            }}
          >
            <FaEnvelope />
          </a>
        </div>

        <p style={{ textAlign: "center" }}>
          {`${new Date().getFullYear()} © ${currentLanguageObject.footer_copyright}.`}
          <br />
          {currentLanguageObject.footer_subtitle}
        </p>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    paddingBottom: "60px",
    "@media(max-width: 1024px)": {
      paddingBottom: "70px",
    },
    "@media(max-width: 991px)": {
      paddingBottom: "30px",
    },
    divider: {
      borderColor: "#E5ECF4",
      margin: 0,
      borderWidth: "1px",
      width: "100%",
      maxWidth: "900px",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "55px",
    },
    container: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justfyContent: "center",
    },
    widget: {
      "@media(max-width: 991px)": {
        marginBottom: "30px",
      },
      "a:hover": {
        color: "primary",
        cursor: "pointer",
      },
      "a+a": {
        marginTop: "6px",
      },
    },
    title: {
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: 1.67,
      margin: 0,
      marginBottom: "14px",
    },
    text: {
      fontSize: "14px",
      cursor: "pointer",
    },
  },
};
