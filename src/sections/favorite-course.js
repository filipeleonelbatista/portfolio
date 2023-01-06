import BlockTitle from "components/block-title";
import FavoriteCardProject from "components/favorite-card-project";
import { useI18n } from "hooks/useI18n";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Container } from "theme-ui";

const FavoriteCourse = () => {
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
  const [favoriteCourseData, setFavoriteCourseData] = useState([]);

  async function loadItens() {
    let newfavoriteCourseData = {
      "en": [
        {
          title: "IF Pads - Stramers da instinct",
          description:
            "App Mobile with audio buttons of streamer of IF Crew in ReactJS and React Native.",
          image: `/images/projects/9_en.png`,
          project_url: "https://github.com/filipeleonelbatista/if-pads",
          download_app_url:
            "https://play.google.com/store/apps/details?id=com.ifpads.streamers",
          view_app_url:
            "https://ifpads.vercel.app/",
        },
        {
          title: "GoWhatch - Moovie App",
          description:
            "App with featured moovie list and options to search other moovies in react native.",
          image: `/images/projects/10_en.png`,
          project_url: "https://github.com/filipeleonelbatista/gowatch",
          download_app_url:
            "https://github.com/filipeleonelbatista/gowatch/raw/main/application-b0cb963a-b37d-4de3-9d0f-c3374e9ca9ba.apk",
          view_app_url:
            "https://github.com/filipeleonelbatista/gowatch/",
        },
        {
          title: "Em Cartaz - Moovies around you",
          description: "Single Page simulating movie ticket purchase page.",
          image: `/images/projects/7_en.png`,
          project_url: "https://github.com/filipeleonelbatista/emcartaz",
          download_app_url: "",
          view_app_url: "https://emcartaz.vercel.app/",
        },
        {
          title: "Santa Claus Letters",
          description:
            "Fullstack project to teach basic concepts of programming at christmas season.",
          image: `/images/projects/6_en.png`,
          project_url:
            "https://github.com/filipeleonelbatista/cartas-para-o-papai-noel-devchallenge",
          download_app_url:
            "https://github.com/filipeleonelbatista/cartas-para-o-papai-noel-devchallenge/raw/main/.github/app.apk",
          view_app_url: "https://cartasparaopapainoel.vercel.app/",
        },
        {
          title: "Motivational Phrases",
          description:
            "Dayli paragraph with motivational message with TTS option.",
          image: `/images/projects/8_en.png`,
          project_url:
            "https://github.com/filipeleonelbatista/frases-inspiradoras",
          download_app_url: "",
          view_app_url: "https://frases-inspiradoras.vercel.app/",
        },
        {
          title: "Queridômetro.dev",
          description:
            "Social level meter using user identification of Github.",
          image: `/images/projects/1_en.png`,
          project_url: "https://github.com/filipeleonelbatista/queridometro-dev",
          download_app_url: "",
          view_app_url: "https://queridometro-dev.vercel.app/",
        },
        {
          title: "Dev.finance$",
          description: "Manage your finances with this small and simple application.",
          image: `/images/projects/4_en.png`,
          project_url: "https://github.com/filipeleonelbatista/dev-finances",
          download_app_url:
            "https://github.com/filipeleonelbatista/dev-finances/raw/master/.github/app.apk",
          view_app_url: "https://minhasfinancas.vercel.app",
        },
        {
          title: "Quiz App 2020",
          description:
            "Simple quiz app develop for Hacktoberfest 2020 by Digital Ocean.",
          image: `/images/projects/2_en.png`,
          project_url:
            "https://github.com/filipeleonelbatista/Quiz-App-Hacktoberfest-2020",
          download_app_url:
            "https://github.com/filipeleonelbatista/Quiz-App-Hacktoberfest-2020/raw/main/.github/Quiz%20App%20-%20Hacktoberfest.apk",
          view_app_url: "",
        },
        {
          title: "Tip Calculator",
          description:
            "Simple Tip Calculator develop for Hacktoberfest 2020 by Digital Ocean.",
          image: `/images/projects/5_en.png`,
          project_url:
            "https://github.com/filipeleonelbatista/Tip-Calculator-Hacktoberfest-2020",
          download_app_url: "",
          view_app_url: "https://tipcalculator-lovat.vercel.app/",
        },
        {
          title: "Countdown Timer App",
          description:
            "Put countdown timers for your important dates.",
          image: `/images/projects/3_en.png`,
          project_url: "https://github.com/filipeleonelbatista/App-Ideas-CTA",
          download_app_url:
            "https://github.com/filipeleonelbatista/App-Ideas-CTA/raw/master/assets/Countdown-Timer-App.apk",
          view_app_url: "",
        },
      ],
      "pt-BR": [
        {
          title: "IF Pads - Stramers da instinct",
          description:
            "App com botões de audio dos streamers da IF em react native.",
          image: `/images/projects/9.png`,
          project_url: "https://github.com/filipeleonelbatista/if-pads",
          download_app_url:
            "https://play.google.com/store/apps/details?id=com.ifpads.streamers",
          view_app_url:
            "https://ifpads.vercel.app/",
        },
        {
          title: "GoWhatch - App de filmes",
          description:
            "App com Listas de filmes em destaque e opções de pesquisa em react native.",
          image: `/images/projects/10.png`,
          project_url: "https://github.com/filipeleonelbatista/gowatch",
          download_app_url:
            "https://github.com/filipeleonelbatista/gowatch/raw/main/application-b0cb963a-b37d-4de3-9d0f-c3374e9ca9ba.apk",
          view_app_url:
            "https://github.com/filipeleonelbatista/gowatch/",
        },
        {
          title: "Em Cartaz - Filmes perto de você",
          description: "Reserve filmes no cinema mais perto de você.",
          image: `/images/projects/7.png`,
          project_url: "https://github.com/filipeleonelbatista/emcartaz",
          download_app_url: "",
          view_app_url: "https://emcartaz.vercel.app/",
        },
        {
          title: "Cartas para o papai noel",
          description:
            "Projeto desenvolvido para ensinar conceitos básicos de programação.",
          image: `/images/projects/6.png`,
          project_url:
            "https://github.com/filipeleonelbatista/cartas-para-o-papai-noel-devchallenge",
          download_app_url:
            "https://github.com/filipeleonelbatista/cartas-para-o-papai-noel-devchallenge/raw/main/.github/app.apk",
          view_app_url: "https://cartasparaopapainoel.vercel.app/",
        },
        {
          title: "Frases Inspiradoras",
          description:
            "Frases diarias de inspiração com a opção de texto em fala.",
          image: `/images/projects/8.png`,
          project_url:
            "https://github.com/filipeleonelbatista/frases-inspiradoras",
          download_app_url: "",
          view_app_url: "https://frases-inspiradoras.vercel.app/",
        },
        {
          title: "Queridômetro.dev",
          description:
            "Medidor de socialização de grupo voltado para desenvolvedores.",
          image: `/images/projects/1.png`,
          project_url: "https://github.com/filipeleonelbatista/queridometro-dev",
          download_app_url: "",
          view_app_url: "https://queridometro-dev.vercel.app/",
        },
        {
          title: "Dev.finance$",
          description: "Aplicação local de gestão de contas a receber e a pagar.",
          image: `/images/projects/4.png`,
          project_url: "https://github.com/filipeleonelbatista/dev-finances",
          download_app_url:
            "https://github.com/filipeleonelbatista/dev-finances/raw/master/.github/app.apk",
          view_app_url: "https://minhasfinancas.vercel.app",
        },
        {
          title: "Quiz App 2020",
          description:
            "Projeto desenvolvido para participar do Hacktoberfest da Digital Ocean.",
          image: `/images/projects/2.png`,
          project_url:
            "https://github.com/filipeleonelbatista/Quiz-App-Hacktoberfest-2020",
          download_app_url:
            "https://github.com/filipeleonelbatista/Quiz-App-Hacktoberfest-2020/raw/main/.github/Quiz%20App%20-%20Hacktoberfest.apk",
          view_app_url: "",
        },
        {
          title: "Tip Calculator",
          description:
            "Projeto desenvolvido para participar do Hacktoberfest da Digital Ocean.",
          image: `/images/projects/5.png`,
          project_url:
            "https://github.com/filipeleonelbatista/Tip-Calculator-Hacktoberfest-2020",
          download_app_url: "",
          view_app_url: "https://tipcalculator-lovat.vercel.app/",
        },
        {
          title: "Countdown Timer App",
          description:
            "Coloque contadores regressivos para suas datas importantes.",
          image: `/images/projects/3.png`,
          project_url: "https://github.com/filipeleonelbatista/App-Ideas-CTA",
          download_app_url:
            "https://github.com/filipeleonelbatista/App-Ideas-CTA/raw/master/assets/Countdown-Timer-App.apk",
          view_app_url: "",
        },
      ]
    };

    setFavoriteCourseData(newfavoriteCourseData[currentLanguage]);
  }

  useEffect(() => {
    loadItens();
  }, []);

  return (
    <Box as="section" id="projetos" sx={styles.fevCourse}>
      <Container sx={styles.fevCourse.container}>
        <BlockTitle
          sx={styles.fevCourse.blockTitle}
          tagline={currentLanguageObject.favorite_course_title_section}
          heading={currentLanguageObject.favorite_course_description_section}
        />
        <Swiper {...FavoriteCarousel} sx={styles.carousel}>
          {favoriteCourseData.map((course, index) => (
            <SwiperSlide key={index}>
              <FavoriteCardProject
                title={course.title}
                description={course.description}
                project_url={course.project_url}
                download_app_url={course.download_app_url}
                view_app_url={course.view_app_url}
                image={course.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            margin: "1.4rem 0 5.8rem 0",
          }}
        >
          <a
            href="https://github.com/filipeleonelbatista"
            target="_blank"
            rel="noreferer noopener nofollow"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              textDecoration: "none",
              padding: "0.8rem 1.8rem",
              borderRadius: "0.8rem",
              color: "#FFF",
              backgroundColor: "#0063c6",
              transition: "0.2s",
              "&:hover": { backgroundColor: "#82b4eb" },
            }}
          >
            <FaGithub size={24} style={{ marginRight: "1.2rem" }} />
            {currentLanguageObject.favorite_course_button_text}
          </a>
        </div>
      </Container>
    </Box>
  );
};

export default FavoriteCourse;

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
