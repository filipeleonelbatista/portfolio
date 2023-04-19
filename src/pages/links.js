import SEO from "components/seo";
import SwitchLanguage from "components/SwitchLanguage";
import { useI18n } from "hooks/useI18n";
import Head from "next/head";
import { useState } from "react";
import {
  FaArrowLeft,
  FaCode,
  FaDog,
  FaFileArchive,
  FaGamepad,
  FaGithub,
  FaGlobeAmericas, FaInstagram,
  FaLinkedin,
  FaPaw,
  FaRegFileAlt,
  FaRocket,
  FaWhatsapp,
  FaYoutube
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import {
  IoCopyOutline,
  IoQrCodeOutline,
  IoShareSocialOutline
} from "react-icons/io5";
import QRCode from "react-qr-code";
import profilePic from "../assets/banner-image-1.png";
import pixLogo from "../assets/pix_logo.png";
import styles from "../styles/pages/Links.module.css";

export default function Links() {
  const { currentLanguageObject, currentLanguage } = useI18n()
  const linksArray = {
    "en": [
      {
        href: "/FilipeBatistaCV.pdf",
        icon: <FaRegFileAlt />,
        text: "Download CV",
        donwload: true,
        target: ''
      },
      {
        href: "https://docs.google.com/forms/d/e/1FAIpQLSeMOvLLlrmnCi94BUOAvgJDEfyRltBTRv2k75F74LMwExjmEA/viewform",
        icon: <FaFileArchive />,
        text: "Do you want to build website? Answer here!",
        donwload: false,
        target: '_blank'
      },
      {
        href: "https://app.rocketseat.com.br/me/filipeleonelbatista",
        icon: <FaRocket />,
        text: "My Rocketseat Profile",
        donwload: false,
        target: '_blank'
      },
      {
        href: "https://filipeleonelbatista.vercel.app",
        icon: <FaGlobeAmericas />,
        text: "Portfolio",
        donwload: false,
        target: '_blank'
      },
      {
        href: "https://filipeleonelbatista.vercel.app/challenges",
        icon: <FaCode />,
        text: "Dev Challenges",
        donwload: false,
        target: '_blank'
      },
      {
        href: "https://www.youtube.com/channel/UCYUeJiqZCXcABWukG9RvQtw",
        icon: <FaYoutube />,
        text: "Youtube Channel",
        donwload: false,
        target: '_blank'
      },
      {
        href: "https://github.com/filipeleonelbatista",
        icon: <FaGithub />,
        text: "Github",
        donwload: false,
        target: '_blank'
      },
      {
        href: "https://cadastrapet.vercel.app/",
        icon: <FaPaw />,
        text: "Medical Pet Data in your hand.",
        donwload: false,
        target: '_blank'
      },
      {
        href: "https://enviodemensagensemmassa.vercel.app/",
        icon: <FaWhatsapp />,
        text: "Send automated messages throught Whatsapp.",
        donwload: false,
        target: '_blank'
      },
    ],
    "pt-BR": [
      {
        href: "/FilipeBatistaCV.pdf",
        icon: <FaRegFileAlt />,
        text: "Curriculum",
        donwload: true,
        target: ''
      },
      {
        href: "https://docs.google.com/forms/d/e/1FAIpQLSeMOvLLlrmnCi94BUOAvgJDEfyRltBTRv2k75F74LMwExjmEA/viewform",
        icon: <FaFileArchive />,
        text: "Quer criar seu site, responda esse form aqui!",
        donwload: false,
        target: '_blank'
      },
      {
        href: "https://app.rocketseat.com.br/me/filipeleonelbatista",
        icon: <FaRocket />,
        text: "Perfil na Rocketseat",
        donwload: false,
        target: '_blank'
      },
      {
        href: "https://filipeleonelbatista.vercel.app",
        icon: <FaGlobeAmericas />,
        text: "Portifólio",
        donwload: false,
        target: '_blank'
      },
      {
        href: "https://filipeleonelbatista.vercel.app/challenges",
        icon: <FaCode />,
        text: "Desafios Dev",
        donwload: false,
        target: '_blank'
      },
      {
        href: "https://www.youtube.com/channel/UCYUeJiqZCXcABWukG9RvQtw",
        icon: <FaYoutube />,
        text: "Canal do Youtube",
        donwload: false,
        target: '_blank'
      },
      {
        href: "https://github.com/filipeleonelbatista",
        icon: <FaGithub />,
        text: "Github",
        donwload: false,
        target: '_blank'
      },
      {
        href: "https://cadastrapet.vercel.app/",
        icon: <FaPaw />,
        text: "Histórico médico do seu pet na sua mão.",
        donwload: false,
        target: '_blank'
      },
      {
        href: "https://enviodemensagensemmassa.vercel.app/",
        icon: <FaWhatsapp />,
        text: "Envie mensagens automaticas via Whatsapp.",
        donwload: false,
        target: '_blank'
      },
    ],
  }

  const [showPix, setShowPix] = useState(false);
  const sharableContent = {
    title: "Desennvolvedor de aplicativos",
    text: "Vi este Este contato no site https://filipeleonelbatista.vercel.app",
    url: "https://filipeleonelbatista.vercel.app",
  };

  const pixKey =
    "00020126580014BR.GOV.BCB.PIX013649b3aa64-47eb-47a3-b439-b765a4d0f22c5204000053039865802BR5925FILIPE DE LEONEL BATISTA 6009SAO PAULO61080540900062250521hGjPosyoJ4dswj614vgvd63046514";

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    alert("Copiado!");
  };

  const handleShare = async () => {
    try {
      await navigator.share(sharableContent);
    } catch (err) {
      console.log("Error: " + e);
    }
    console.log("MDN compartilhado com sucesso!");
  };

  return (
    <div className={styles.container}>
      <SEO />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins"
          rel="stylesheet"
        />
      </Head>
      <img
        className={styles.imageProfile}
        src={profilePic}
        alt={currentLanguageObject.links_title}
      />
      {showPix ? (
        <div className={styles.content} style={{ position: "relative" }}>
          <button
            onClick={() => setShowPix(false)}
            style={{ position: "absolute", top: 15, left: 15 }}
            className={styles.actionTransparent}
          >
            <FaArrowLeft size={18} />
          </button>
          <div className={styles.aboutContainer}>
            <div className={styles.aboutInfo}>
              <h3 className={styles.title}>{currentLanguageObject.links_title}</h3>
              <p className={styles.subtitle}>{currentLanguageObject.links_subtitle_title}</p>
            </div>
          </div>

          <div className={styles.pixContainer} style={{ alignItems: "center" }}>
            <div className={styles.pixContainerImage}>
              <img
                className={styles.pixImage}
                src={pixLogo}
                alt={currentLanguageObject.pix}
              />
            </div>
            <div className={styles.pixContainerImage}>
              <QRCode value={pixKey} />
            </div>
            <div className={styles.pixText} dangerouslySetInnerHTML={{ __html: currentLanguageObject.links_pix_description }}>

            </div>

            <button
              onClick={handleCopyPix}
              className={styles.action}
              style={{
                width: "100%",
                margin: "1.6rem 0 0 0",
                fontSize: "small",
              }}
            >
              <IoCopyOutline />
              {currentLanguageObject.links_pix_button_copy_text}
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.content}>
          <div className={styles.aboutContainer}>
            <div className={styles.aboutInfo}>
              <SwitchLanguage />
              <h3 className={styles.title}>
                {currentLanguageObject.links_title}
              </h3>
              <p className={styles.subtitle}>
                {currentLanguageObject.links_subtitle_title}
              </p>
              <p className={styles.subtitle}>
                {currentLanguageObject.links_second_subtitle}
              </p>
            </div>
            <div className={styles.aboutActions}>
              <button
                onClick={() => setShowPix(true)}
                className={styles.actionTransparent}
              >
                <IoQrCodeOutline size={18} />
                <p className={styles.actionTransparentLabel}>
                  {currentLanguageObject.links_pix_button_text}
                </p>
              </button>
              <a href={currentLanguageObject.links_vcard_link_text} download className={styles.action}>
                {currentLanguageObject.links_vcard_button_text}
              </a>
              <button
                onClick={handleShare}
                className={styles.actionTransparent}
              >
                <IoShareSocialOutline size={18} />
                <p className={styles.actionTransparentLabel}>
                  {currentLanguageObject.links_share_button_text}
                </p>
              </button>
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.actionsList}>
            <a
              href="https://www.linkedin.com/in/filipeleonelbatista/"
              target="_blank"
              rel="noopener noreferer"
              className={styles.actionsLink}
            >
              <FaLinkedin size={48} /> <p className={styles.label}>Linkedin</p>
            </a>
            <a
              href="https://instagram.com/filipeleonelbatista"
              target="_blank"
              rel="noopener noreferer"
              className={styles.actionsLink}
            >
              <FaInstagram size={48} />{" "}
              <p className={styles.label}>Instagram</p>
            </a>
            <a
              href="mailto:filipe.x2016@gmail.com"
              target="_blank"
              rel="noopener noreferer"
              className={styles.actionsLink}
            >
              <FiMail size={48} /> <p className={styles.label}>E-mail</p>
            </a>
          </div>
          <div className={styles.divider}></div>
          <iframe className={styles.videoFrame}
            src="https://www.youtube.com/embed/6z0ulsaxsAY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
          <div className={styles.divider}></div>
          <div className={styles.linksContainer}>
            <h4 className={styles.title} style={{ textTransform: "uppercase" }}>
              {currentLanguageObject.links_link_section_title}
            </h4>

            <button
              onClick={handleCopyPix}
              className={styles.link}
              style={{
                width: "100%",
                margin: "1.6rem 0 0 0",
                fontSize: "small",
              }}
            >
              <IoCopyOutline />
              {currentLanguageObject.links_pix_button_copy_text}
            </button>
            {linksArray[currentLanguage].map((link, index) => (
              <a
                key={index}
                href={link.href}
                download={link.download}
                target={link.target}
                rel="noopener noreferer"
                className={styles.link}
              >
                {link.icon} {link.text}
              </a>
            ))}

          </div>
          <button
            onClick={handleShare}
            className={styles.action}
            style={{ margin: "1.6rem 0", fontSize: "small" }}
          >
            <IoShareSocialOutline />
            {currentLanguageObject.links_share_button_text}
          </button>
        </div>
      )}
    </div>
  );
}
