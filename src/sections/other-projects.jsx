import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Container } from "theme-ui";
import BlockTitle from "../components/block-title";
import OtherCardProject from "../components/other-card-projects";
import { useI18n } from "../hooks/useI18n";

const OtherProjects = () => {
  const { currentLanguageObject, currentLanguage } = useI18n()

  const FavoriteCarousel = {
    spaceBetween: 30,
    slidesPerView: 3,
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      376: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      576: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      768: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
    },
  };

  let favoriteCourseData = {
    "en": [
      {
        title: "BusSleep - Alarm to your locations",
        description:
          "Create locations safearea then when you enter at this area play a alart to wake you up or just advise.",
        image: `/images/other-projects/9.png`,
        view_app_url:
          "https://play.google.com/store/apps/details?id=bussleep.br",
      },
      {
        title: "Finances - Manage payments",
        description:
          "Manage your family payments with this eazy tool.",
        image: `/images/other-projects/8.png`,
        view_app_url: "https://play.google.com/store/apps/details?id=com.finances",
      },
      {
        title: "WhatsApp Sender App",
        description:
          "Send WhatsApp Messages quickly.",
        image: `/images/other-projects/6.png`,
        view_app_url: "https://enviodemensagensemmassa.vercel.app/",
      },
      {
        title: "IF Pads - Web",
        description:
          "Audio Buttons of streamers of Instinct Family Crew.",
        image: `/images/other-projects/7.png`,
        view_app_url: "https://ifpads.vercel.app/",
      },
      {
        title: "Cadastra Pet",
        description:
          "Keep your pet's medical records anywhere.",
        image: `/images/other-projects/3.png`,
        view_app_url: "https://cadastrapet.com.br/",
      },
      {
        title: "Unique",
        description:
          "Car rental with owner with contract, GPS and insurance.",
        image: `/images/other-projects/1.png`,
        view_app_url: "https://aluguel-de-veiculos.vercel.app/",
      },
      {
        title: "Ascorsan",
        description: "News and information portal for members.",
        image: `/images/other-projects/2.png`,
        view_app_url: "https://ascorsan.com.br/",
      },
      {
        title: "SinaPark - Sinalização Viária",
        description:
          "Company specialized in road signs, accessibility and emergency signs.",
        image: `/images/other-projects/4.png`,
        view_app_url: "https://sinapark.com.br/",
      },
      {
        title: "Sistema de votação - Ascorsan",
        description:
          "Voting system for members with security and printed vote.",
        image: `/images/other-projects/2.png`,
        view_app_url: "https://ascorsan.com.br/votacao",
      },
      {
        title: "Park Jardinagem",
        description:
          "Company specializing in lawn mowing, pruning and landscaping services.",
        image: `/images/other-projects/5.png`,
        view_app_url: "https://parkjardinagem.com.br/",
      },
    ],
    "pt-BR": [
      {
        title: "BusSleep - Alarme para destinos",
        description:
          "Crie pontos de alarme no mapa e seja avisado quando se aproximar dele.",
        image: `/images/other-projects/9.png`,
        view_app_url:
          "https://play.google.com/store/apps/details?id=bussleep.br",
      },
      {
        title: "Finanças - Controle os gastos",
        description:
          "Administre os gastos de sua família de forma fácil.",
        image: `/images/other-projects/8.png`,
        view_app_url: "https://play.google.com/store/apps/details?id=com.finances",
      },
      {
        title: "WhatsApp Sender App",
        description:
          "Enviar mensagens pelo whatsapp em massa de forma rápida.",
        image: `/images/other-projects/6.png`,
        view_app_url: "https://enviodemensagensemmassa.vercel.app/",
      },
      {
        title: "IF Pads - Web",
        description:
          "Botões com audios dos streamers da Instinct Family.",
        image: `/images/other-projects/7.png`,
        view_app_url: "https://ifpads.vercel.app/",
      },
      {
        title: "Cadastra Pet",
        description:
          "Mantenha os registros clinicos do seu pet em qualquer lugar.",
        image: `/images/other-projects/3.png`,
        view_app_url: "https://cadastrapet.com.br/",
      },
      {
        title: "Unique",
        description:
          "Aluguel de carros com o proprietário com contrato, GPS e seguro.",
        image: `/images/other-projects/1.png`,
        view_app_url: "https://aluguel-de-veiculos.vercel.app/",
      },
      {
        title: "Ascorsan",
        description: "Portal de notícias e informações para associados.",
        image: `/images/other-projects/2.png`,
        view_app_url: "https://ascorsan.com.br/",
      },
      {
        title: "SinaPark - Sinalização Viária",
        description:
          "Empresa especializada em sinalização viária, acessibilidade e sinalização de emergência.",
        image: `/images/other-projects/4.png`,
        view_app_url: "https://sinapark.com.br/",
      },
      {
        title: "Sistema de votação - Ascorsan",
        description:
          "Sistema de votação para os associados com segurança e voto impresso.",
        image: `/images/other-projects/2.png`,
        view_app_url: "https://ascorsan.com.br/votacao",
      },
      {
        title: "Park Jardinagem",
        description:
          "Empresa especializada em serviços de corte de grama, podas e paisagismo.",
        image: `/images/other-projects/5.png`,
        view_app_url: "https://parkjardinagem.com.br/",
      },
    ]
  };

  return (
    <Box as="section" id="outros-projetos" sx={styles.fevCourse}>
      <Container sx={styles.fevCourse.container}>
        <BlockTitle
          sx={styles.fevCourse.blockTitle}
          tagline={currentLanguageObject.other_projects_title_section}
          heading={currentLanguageObject.other_projects_description_section}
        />
        <Swiper {...FavoriteCarousel} sx={styles.carousel}>
          {favoriteCourseData[currentLanguage].map((course, index) => (
            <SwiperSlide key={index}>
              <OtherCardProject
                title={course.title}
                description={course.description}
                view_app_url={course.view_app_url}
                image={course.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default OtherProjects;

const styles = {
  fevCourse: {
    paddingTop: ["60px", null, null, "80px", "10px"],
    pb: [null, null, null, "30px", "50px", "0"],
    container: {
      maxWidth: 1440,
      "@media(max-width:1440px)": {
        maxWidth: 1240,
      },
      ".swiper-container": {
        pb: "30px",
        overflow: [null, null, null, null, null, "visible"],
      },
    },
    blockTitle: {
      textAlign: "center",
      marginBottom: "30px",
    },
    row: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridGap: 30,
      "@media(max-width: 991px)": {
        gridTemplateColumns: "1fr 1fr",
      },
      "@media(max-width: 575px)": {
        gridTemplateColumns: "1fr",
      },
    },
    col: {
      display: "flex",
    },
  },
};
