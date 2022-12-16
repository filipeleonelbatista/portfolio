import BlockTitle from "components/block-title";
import OtherCardProject from "components/other-card-projects";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Container } from "theme-ui";

const OtherProjects = () => {
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
  const [favoriteCourseData, setFavoriteCourseData] = useState([]);

  async function loadItens() {
    let newfavoriteCourseData = [
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
    ];

    setFavoriteCourseData(newfavoriteCourseData);
  }

  useEffect(() => {
    loadItens();
  }, []);

  return (
    <Box as="section" id="outros-projetos" sx={styles.fevCourse}>
      <Container sx={styles.fevCourse.container}>
        <BlockTitle
          sx={styles.fevCourse.blockTitle}
          tagline="Outros projetos realizados"
          heading="Projetos entregues para clientes."
        />
        <Swiper {...FavoriteCarousel} sx={styles.carousel}>
          {favoriteCourseData.map((course, index) => (
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
