import Head from "next/head";
import React, { useEffect, useState } from "react";
import {
  FaDog,
  FaGithub,
  FaGlobeAmericas,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaRegFileAlt,
  FaYoutube,
  FaArrowLeft,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoQrCodeOutline, IoShareSocialOutline } from "react-icons/io5";
import profilePic from "../assets/banner-image-1.png";
import pixLogo from "../assets/pix_logo.png";
import styles from "../styles/pages/Links.module.css";
import QRCode from "react-qr-code";

export default function Links() {
  const [canShare, setCanShare] = useState(false);
  const [showPix, setShowPix] = useState(false);
  const [isPixGenerated, setIsPixGenerated] = useState(false);
  const sharableContent = {
    title: "Desennvolvedor de aplicativos",
    text: "Vi este Este contato no site https://desenvolvedordeaplicativos.vercel.app",
    url: "https://desenvolvedordeaplicativos.vercel.app",
  };

  const [pixGenerated, setPixGenerated] = useState("");
  const [pixValue, setPixValue] = useState("1.0");
  const [pixValueInput, setPixValueInput] = useState("1,00");

  const pixKey = `00020126580014BR.GOV.BCB.PIX013649b3aa64-47eb-47a3-b439-b765a4d0f22c52040000530398654@SIZE@#VALUE#5802BR5925FILIPE DE LEONEL BATISTA 6009SAO PAULO61080540900062070503***6304E7EE`;

  const money = (e) => {
    let value = e;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
    return value;
  };

  const handleSharePix = async () => {
    try {
      await navigator.share({ title: "PIX", text: pixGenerated });
    } catch (err) {
      console.log("Error: " + e);
    }
    console.log("MDN compartilhado com sucesso!");
  };

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixGenerated);
    console.log("CHAVEPIX: ", pixGenerated);
    alert("Copiado!");
  };

  const handleGeneratePix = () => {
    const tam = pixValue.length;
    const val = pixValue;

    const qrCode = pixKey.replace("@SIZE@", tam).replace("#VALUE#", val);
    setPixGenerated(qrCode);
    setIsPixGenerated(true);
  };

  const handlePixValue = (e) => {
    const pixCurrentValue = e.target.value;

    const pixFloatValue = pixCurrentValue
      .replace(/\D/g, "")
      .replace(/(\d)(\d{2})$/, "$1.$2");

    if (pixFloatValue.length > 8)
      return alert("Não é possivel enviar este valor!");

    setPixValueInput(money(pixCurrentValue));
    setPixValue(pixFloatValue);
  };

  const handleShare = async () => {
    try {
      await navigator.share(sharableContent);
    } catch (err) {
      console.log("Error: " + e);
    }
    console.log("MDN compartilhado com sucesso!");
  };

  useEffect(() => {
    setCanShare(navigator.canShare(sharableContent));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins"
          rel="stylesheet"
        />
      </Head>
      <img
        className={styles.imageProfile}
        src={profilePic}
        alt="Filipe Batista"
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
              <h3 className={styles.title}>Filipe Batista</h3>
              <p className={styles.subtitle}>Desenvolvedor Fullstack</p>
            </div>
          </div>

          {isPixGenerated ? (
            <div
              className={styles.pixContainer}
              style={{ alignItems: "center" }}
            >
              <div className={styles.pixContainerImage}>
                <img
                  className={styles.pixImage}
                  src={pixLogo}
                  alt="Pix Banco central do Brasil"
                />
              </div>
              <p className={styles.pixText}>
                <b>Valor: </b> R$ {pixValueInput}
              </p>
              <div className={styles.pixContainerImage}>
                <QRCode value={pixKey} />
              </div>
              <p className={styles.pixText}>
                Abra o App do seu banco e pague atravez do <b>QRCode</b> ou{" "}
                <b>Pix Copia e Cola</b>
              </p>

              <button
                onClick={handleCopyPix}
                className={styles.action}
                style={{ width: "100%", margin: "1.6rem 0 0 0" }}
              >
                <IoShareSocialOutline />
                Copiar Código Pix - <b>R$ {pixValueInput}</b>
              </button>

              <button
                onClick={handleSharePix}
                className={styles.action}
                style={{ width: "100%" }}
              >
                <IoShareSocialOutline />
                Compartilhar
              </button>
            </div>
          ) : (
            <>
              <div className={styles.pixContainer}>
                <p className={styles.subtitle}>Digite o valor do seu Pix:</p>
                <label htmlFor="valor_pix" className={styles.valorPix}>
                  Valor:
                </label>
                <input
                  type="text"
                  id="valor_pix"
                  className={styles.valorPixInput}
                  value={pixValueInput}
                  onChange={handlePixValue}
                />
              </div>
              <button
                onClick={handleGeneratePix}
                className={styles.action}
                style={{ width: "100%", margin: "1.6rem 0" }}
              >
                Gerar Pix
              </button>
            </>
          )}
        </div>
      ) : (
        <div className={styles.content}>
          <div className={styles.aboutContainer}>
            <div className={styles.aboutInfo}>
              <h3 className={styles.title}>Filipe Batista</h3>
              <p className={styles.subtitle}>Desenvolvedor Fullstack</p>
              <p className={styles.subtitle}>
                React JS | React Native | Node JS
              </p>
            </div>
            <div className={styles.aboutActions}>
              <button
                onClick={() => setShowPix(true)}
                className={styles.actionTransparent}
              >
                <IoQrCodeOutline size={18} />
                <p className={styles.actionTransparentLabel}>Qr Code</p>
              </button>
              <a href="/filipevcard.vcf" download className={styles.action}>
                Salvar na agenda
              </a>
              {canShare && (
                <button
                  onClick={handleShare}
                  className={styles.actionTransparent}
                >
                  <IoShareSocialOutline size={18} />
                  <p className={styles.actionTransparentLabel}>Compartilhar</p>
                </button>
              )}
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
              href="https://github.com/filipeleonelbatista"
              target="_blank"
              rel="noopener noreferer"
              className={styles.actionsLink}
            >
              <FaGithub size={48} /> <p className={styles.label}>Github</p>
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
          <div className={styles.linksContainer}>
            <h4 className={styles.title} style={{ textTransform: "uppercase" }}>
              Meus Links
            </h4>
            <a
              href="/FilipeBatistaCV.pdf"
              download
              rel="noopener noreferer"
              className={styles.link}
            >
              <FaRegFileAlt /> Curriculum
            </a>
            <a
              href="https://desenvolvedordeaplicativos.vercel.app"
              target="_blank"
              rel="noopener noreferer"
              className={styles.link}
            >
              <FaGlobeAmericas /> Site Portifolio
            </a>
            <a
              href="https://www.youtube.com/channel/UCYUeJiqZCXcABWukG9RvQtw"
              target="_blank"
              rel="noopener noreferer"
              className={styles.link}
            >
              <FaYoutube /> Canal do Youtube
            </a>
            <a
              href="https://github.com/filipeleonelbatista"
              target="_blank"
              rel="noopener noreferer"
              className={styles.link}
            >
              <FaGithub /> Github
            </a>
            <a
              href="https://cadastrapet.com.br"
              target="_blank"
              rel="noopener noreferer"
              className={styles.link}
            >
              <FaDog /> Dados Médicos do pet na palma da mão
            </a>
            <a
              href="https://moben.com.br"
              target="_blank"
              rel="noopener noreferer"
              className={styles.link}
            >
              <FaHome /> Gerencie o aluguel do seu imóvel
            </a>
          </div>
          {canShare && (
            <button
              onClick={handleShare}
              className={styles.action}
              style={{ margin: "1.6rem 0" }}
            >
              <IoShareSocialOutline />
              Compartilhar
            </button>
          )}
        </div>
      )}
    </div>
  );
}
