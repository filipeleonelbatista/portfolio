import SEO from "components/seo";
import SwitchLanguage from "components/SwitchLanguage";
import { useI18n } from "hooks/useI18n";
import Head from "next/head";
import { payload } from "pix-payload";

import { useMemo, useState } from "react";
import {
  FaArrowLeft,
  FaCode,
  FaGithub,
  FaGlobeAmericas,
  FaDiscord,
  FaGooglePlay,
  FaInstagram,
  FaLinkedin,
  FaRegFileAlt,
  FaWallet,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import {
  IoCopyOutline,
  IoQrCodeOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import QRCode from "react-qr-code";
import profilePic from "../assets/pfp.png";
import pixLogo from "../assets/pix_logo.png";
import styles from "../styles/pages/Links.module.css";
import LastVideo from "components/last-video";

export default function Links() {
  const { currentLanguage, languagesObject } = useI18n();

  const selectedLanguage = useMemo(() => {
    return currentLanguage === "pt" ? languagesObject.pt : languagesObject.en;
  }, [currentLanguage]);

  const linksArray = {
    en: [
      {
        href: "/FilipeBatistaCVEn.pdf",
        icon: <FaRegFileAlt style={{ marginRight: "8px" }} />,
        text: "Download CV",
        donwload: true,
        target: "",
      },
      // {
      //   href: "https://docs.google.com/forms/d/e/1FAIpQLSeMOvLLlrmnCi94BUOAvgJDEfyRltBTRv2k75F74LMwExjmEA/viewform",
      //   icon: <FaFileArchive style={{ marginRight: "8px" }} />,
      //   text: "Do you want to build website? Answer here!",
      //   donwload: false,
      //   target: "_blank",
      // },
      // {
      //   href: "https://app.rocketseat.com.br/me/filipeleonelbatista",
      //   icon: <FaRocket style={{ marginRight: "8px" }} />,
      //   text: "My Rocketseat Profile",
      //   donwload: false,
      //   target: "_blank",
      // },
      {
        href: "https://filipeleonelbatista.vercel.app",
        icon: <FaGlobeAmericas style={{ marginRight: "8px" }} />,
        text: "Portfolio",
        donwload: false,
        target: "_blank",
      },
      {
        href: "https://discord.gg/YddwjGj7tf",
        icon: <FaDiscord style={{ marginRight: "8px" }} />,
        text: "Discord server",
        donwload: false,
        target: "_blank",
      },
      {
        href: "https://filipeleonelbatista.vercel.app/challenges",
        icon: <FaCode style={{ marginRight: "8px" }} />,
        text: "Dev Challenges",
        donwload: false,
        target: "_blank",
      },
      {
        href: "https://www.youtube.com/channel/UCYUeJiqZCXcABWukG9RvQtw",
        icon: <FaYoutube style={{ marginRight: "8px" }} />,
        text: "Youtube Channel",
        donwload: false,
        target: "_blank",
      },
      {
        href: "https://github.com/filipeleonelbatista",
        icon: <FaGithub style={{ marginRight: "8px" }} />,
        text: "Github",
        donwload: false,
        target: "_blank",
      },
      // {
      //   href: "https://cadastrapet.vercel.app/",
      //   icon: <FaPaw style={{ marginRight: "8px" }} />,
      //   text: "Medical Pet Data in your hand.",
      //   donwload: false,
      //   target: "_blank",
      // },
      {
        href: "https://enviodemensagensemmassa.vercel.app/",
        icon: <FaWhatsapp style={{ marginRight: "8px" }} />,
        text: "Send automated messages throught Whatsapp.",
        donwload: false,
        target: "_blank",
      },
      {
        href: "https://play.google.com/store/apps/details?id=com.finances",
        icon: <FaWallet style={{ marginRight: "8px" }} />,
        text: "Finances App - Manage your payments (in PT-br Only).",
        donwload: false,
        target: "_blank",
      },
      // {
      //   href: "https://play.google.com/store/apps/details?id=bussleep.br",
      //   icon: <FaBus style={{ marginRight: "8px" }} />,
      //   text: "BusSleep - Alarm to your locations (in PT-br Only)",
      //   donwload: false,
      //   target: "_blank",
      // },
      {
        href: "https://play.google.com/store/apps/developer?id=Leonel+Informatica",
        icon: <FaGooglePlay style={{ marginRight: "8px" }} />,
        text: "Published Apps on Google Play (in PT-br Only)",
        donwload: false,
        target: "_blank",
      },
    ],
    pt: [
      {
        href: "/FilipeBatistaCV.pdf",
        icon: <FaRegFileAlt style={{ marginRight: "8px" }} />,
        text: "Curriculum",
        donwload: true,
        target: "",
      },
      // {
      //   href: "https://docs.google.com/forms/d/e/1FAIpQLSeMOvLLlrmnCi94BUOAvgJDEfyRltBTRv2k75F74LMwExjmEA/viewform",
      //   icon: <FaFileArchive style={{ marginRight: "8px" }} />,
      //   text: "Quer criar seu site, responda esse form aqui!",
      //   donwload: false,
      //   target: "_blank",
      // },
      // {
      //   href: "https://app.rocketseat.com.br/me/filipeleonelbatista",
      //   icon: <FaRocket style={{ marginRight: "8px" }} />,
      //   text: "Perfil na Rocketseat",
      //   donwload: false,
      //   target: "_blank",
      // },
      {
        href: "https://filipeleonelbatista.vercel.app",
        icon: <FaGlobeAmericas style={{ marginRight: "8px" }} />,
        text: "Portifólio",
        donwload: false,
        target: "_blank",
      },
      {
        href: "https://discord.gg/YddwjGj7tf",
        icon: <FaDiscord style={{ marginRight: "8px" }} />,
        text: "Comunidade do discord",
        donwload: false,
        target: "_blank",
      },
      {
        href: "https://filipeleonelbatista.vercel.app/challenges",
        icon: <FaCode style={{ marginRight: "8px" }} />,
        text: "Desafios Dev",
        donwload: false,
        target: "_blank",
      },
      {
        href: "https://www.youtube.com/channel/UCYUeJiqZCXcABWukG9RvQtw",
        icon: <FaYoutube style={{ marginRight: "8px" }} />,
        text: "Canal do Youtube",
        donwload: false,
        target: "_blank",
      },
      {
        href: "https://github.com/filipeleonelbatista",
        icon: <FaGithub style={{ marginRight: "8px" }} />,
        text: "Github",
        donwload: false,
        target: "_blank",
      },
      // {
      //   href: "https://cadastrapet.vercel.app/",
      //   icon: <FaPaw style={{ marginRight: "8px" }} />,
      //   text: "Histórico médico do seu pet na sua mão.",
      //   donwload: false,
      //   target: "_blank",
      // },
      {
        href: "https://enviodemensagensemmassa.vercel.app/",
        icon: <FaWhatsapp style={{ marginRight: "8px" }} />,
        text: "Envie mensagens automaticas via Whatsapp.",
        donwload: false,
        target: "_blank",
      },
      {
        href: "https://play.google.com/store/apps/details?id=com.finances",
        icon: <FaWallet style={{ marginRight: "8px" }} />,
        text: "Finanças - Controle os gastos (Google Play)",
        donwload: false,
        target: "_blank",
      },
      // {
      //   href: "https://play.google.com/store/apps/details?id=bussleep.br",
      //   icon: <FaBus style={{ marginRight: "8px" }} />,
      //   text: "BusSleep - Alarme para Destinos (Google Play)",
      //   donwload: false,
      //   target: "_blank",
      // },
      {
        href: "https://play.google.com/store/apps/developer?id=Leonel+Informatica",
        icon: <FaGooglePlay style={{ marginRight: "8px" }} />,
        text: "Aplicativos publicados na Google Play",
        donwload: false,
        target: "_blank",
      },
    ],
  };

  const selectedLanguageLinks = useMemo(() => {
    return currentLanguage === "pt" ? linksArray.pt : linksArray.en;
  }, [currentLanguage]);

  const [showPix, setShowPix] = useState(false);
  const sharableContent = {
    title: "Desennvolvedor de aplicativos",
    text: "Vi este Este contato no site https://filipeleonelbatista.vercel.app",
    url: "https://filipeleonelbatista.vercel.app",
  };

  // const [pixKey, setPixKey] = useState("");
  // const pixKey =
  //   "00020126580014BR.GOV.BCB.PIX013649b3aa64-47eb-47a3-b439-b765a4d0f22c5204000053039865802BR5925FILIPE DE LEONEL BATISTA 6009SAO PAULO61080540900062250521hGjPosyoJ4dswj614vgvd63046514";
  const pixKey =
    "00020126580014BR.GOV.BCB.PIX0136f1bfe5be-67eb-42ad-8928-f71e02e1c99b5204000053039865802BR5924Filipe de Leonel Batista6009SAO PAULO62140510KYWrrTDFwc63041370";

  const [pixValue, setPixValue] = useState();

  function formatarMoeda(e) {
    let value = e;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
    return value;
  }

  const handleGeneratePix = () => {
    if (pixValue == "") return alert("Digite um valor para gerar o pix!");
    const comparativeValue = parseFloat(
      pixValue.replaceAll(".", "").replace(",", ".")
    );

    if (!(comparativeValue >= 1 && comparativeValue < 1000000))
      return alert(
        "O Valor não está dentro do previsto, por favor corrija isso."
      );

    const QRCode = payload({
      name: "FILIPE DE LEONEL BATISTA", // Receptor name
      key: "f1bfe5be-67eb-42ad-8928-f71e02e1c99b",
      amount: comparativeValue, // Amount
      city: "SAO PAULO", // The city name
      transactionId: "PAGAMENTO PELO LINK", // Payment identifier
    });

    setPixKey(QRCode);
  };

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
        src={"https://github.com/filipeleonelbatista.png" || profilePic}
        alt={selectedLanguage.links_title}
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
              <h3 className={styles.title}>{selectedLanguage.links_title}</h3>
              <p className={styles.subtitle}>
                {selectedLanguage.links_subtitle_title}
              </p>
            </div>
          </div>

          <div className={styles.pixContainer} style={{ alignItems: "center" }}>
            <div className={styles.pixContainerImage}>
              <img
                className={styles.pixImage}
                src={pixLogo}
                alt={selectedLanguage.pix}
              />
            </div>
            <div className={styles.pixContainerImage}>
              <QRCode value={pixKey} />
            </div>
            <div
              className={styles.pixText}
              dangerouslySetInnerHTML={{
                __html: selectedLanguage.links_pix_description,
              }}
            ></div>

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
              {selectedLanguage.links_pix_button_copy_text}
            </button>
          </div>

          {/* {pixKey.length > 0 ? (
            <>
              <button
                onClick={() => setShowPix(false)}
                style={{ position: "absolute", top: 15, left: 15 }}
                className={styles.actionTransparent}
              >
                <FaArrowLeft size={18} />
              </button>
              <div className={styles.aboutContainer}>
                <div className={styles.aboutInfo}>
                  <h3 className={styles.title}>
                    {selectedLanguage.links_title}
                  </h3>
                  <p className={styles.subtitle}>
                    {selectedLanguage.links_subtitle_title}
                  </p>
                </div>
              </div>

              <div
                className={styles.pixContainer}
                style={{ alignItems: "center" }}
              >
                <div className={styles.pixContainerImage}>
                  <img
                    className={styles.pixImage}
                    src={pixLogo}
                    alt={selectedLanguage.pix}
                  />
                </div>
                <div className={styles.pixContainerImage}>
                  <QRCode value={pixKey} />
                </div>
                <div
                  className={styles.pixText}
                  dangerouslySetInnerHTML={{
                    __html: selectedLanguage.links_pix_description,
                  }}
                ></div>

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
                  {selectedLanguage.links_pix_button_copy_text}
                </button>
                <button
                  onClick={() => setPixKey("")}
                  className={styles.action}
                  style={{
                    width: "100%",
                    margin: "0.2rem 0 0 0",
                    fontSize: "small",
                    backgroundColor: "#dc2626",
                    color: "white",
                  }}
                >
                  <FaArrowLeft />
                  {selectedLanguage.links_pix_button_cancel_text}
                </button>
              </div>
            </>
          ) : (
            <>
              <button
                onClick={() => setShowPix(false)}
                style={{ position: "absolute", top: 15, left: 15 }}
                className={styles.actionTransparent}
              >
                <FaArrowLeft size={18} />
              </button>
              <div className={styles.aboutContainer}>
                <div className={styles.aboutInfo}>
                  <h3 className={styles.title}>
                    {selectedLanguage.links_title}
                  </h3>
                  <p className={styles.subtitle}>
                    {selectedLanguage.links_subtitle_title}
                  </p>
                </div>
              </div>

              <div
                className={styles.pixContainer}
                style={{ alignItems: "center" }}
              >
                <div className={styles.pixContainerImage}>
                  <QRCode value={pixKey} />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    width: "100%",
                  }}
                >
                  <label
                    style={{
                      color: "white",
                    }}
                    htmlFor="pixValue"
                  >
                    {selectedLanguage.links_input_label}
                  </label>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        left: 8,
                        fontSize: 20,
                        position: "absolute",
                        opacity: 0.7,
                      }}
                    >
                      R$
                    </span>
                    <input
                      style={{
                        width: "100%",
                        padding: 8,
                        borderRadius: 8,
                        height: 48,
                        fontWeight: "bold",
                        fontSize: 18,
                        paddingLeft: 36,
                      }}
                      placeholder="1,00"
                      id="pixValue"
                      value={pixValue}
                      onChange={(e) => {
                        setPixValue(formatarMoeda(e.target.value));
                      }}
                      className="whats-form-input"
                    />
                  </div>

                  <p
                    style={{
                      color: "white",
                      fontSize: 12,
                    }}
                  >
                    {selectedLanguage.links_input_helper_text}
                  </p>
                </div>

                <button
                  onClick={handleGeneratePix}
                  className={styles.action}
                  style={{
                    width: "100%",
                    margin: "1.6rem 0 0 0",
                    fontSize: "small",
                  }}
                >
                  <IoQrCodeOutline />
                  {selectedLanguage.links_generate_pix}
                </button>
              </div>
            </>
          )} */}
        </div>
      ) : (
        <div className={styles.content}>
          <div className={styles.aboutContainer}>
            <div className={styles.aboutInfo}>
              <SwitchLanguage />
              <h3 className={styles.title}>{selectedLanguage.links_title}</h3>
              <p className={styles.subtitle}>
                {selectedLanguage.links_subtitle_title}
              </p>
              <p className={styles.subtitle}>
                {selectedLanguage.links_second_subtitle}
              </p>
            </div>
            <div className={styles.aboutActions}>
              <button
                onClick={() => setShowPix(true)}
                className={styles.actionTransparent}
              >
                <IoQrCodeOutline size={18} />
                <p className={styles.actionTransparentLabel}>
                  {selectedLanguage.links_pix_button_text}
                </p>
              </button>
              <a
                href={selectedLanguage.links_vcard_link_text}
                download
                className={styles.action}
              >
                {selectedLanguage.links_vcard_button_text}
              </a>
              <button
                onClick={handleShare}
                className={styles.actionTransparent}
              >
                <IoShareSocialOutline size={18} />
                <p className={styles.actionTransparentLabel}>
                  {selectedLanguage.links_share_button_text}
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
            {/* <a
              href="https://www.threads.net/@filipeleonelbatista"
              target="_blank"
              rel="noopener noreferer"
              className={styles.actionsLink}
            >
              <FaAt size={48} />{" "}
              <p className={styles.label}>Threads</p>
            </a> */}
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
          <LastVideo />
          <div className={styles.divider}></div>
          <div className={styles.linksContainer}>
            <h4 className={styles.title} style={{ textTransform: "uppercase" }}>
              {selectedLanguage.links_link_section_title}
            </h4>

            <button
              onClick={handleCopyPix}
              className={styles.link}
              style={{
                width: "100%",
                margin: "4px 0",
                fontSize: "small",
              }}
            >
              <IoCopyOutline style={{ marginRight: "8px" }} />
              {selectedLanguage.links_pix_button_copy_text}
            </button>
            {selectedLanguageLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                download={link.download}
                target={link.target}
                rel="noopener noreferer"
                className={styles.link}
                style={{
                  width: "100%",
                  margin: "4px 0",
                  fontSize: 12,
                }}
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
            {selectedLanguage.links_share_button_text}
          </button>
        </div>
      )}
    </div>
  );
}
