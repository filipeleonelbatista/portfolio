import BlockTitle from 'components/block-title';
import FavoriteCardProject from 'components/favorite-card-project';
import React, { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Container } from 'theme-ui';

const FavoriteCourse = () => {
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
        title: 'Queridômetro.dev',
        description: 'Medidor de socialização de grupo voltado para desenvolvedores.',
        image: `/images/projects/1.png`,
        project_url: 'https://github.com/filipeleonelbatista/queridometro-dev',
        download_app_url: '',
        view_app_url: 'https://queridometro-dev.vercel.app/',
      },
      {
        title: 'Dev.finance$',
        description: 'Aplicação local de gestão de contas a receber e a pagar.',
        image: `/images/projects/4.png`,
        project_url: 'https://github.com/filipeleonelbatista/dev-finances',
        download_app_url: 'https://github.com/filipeleonelbatista/dev-finances/raw/master/.github/app.apk',
        view_app_url: 'https://minhasfinancas.vercel.app',
      },
      {
        title: 'Quiz App 2020',
        description: 'Projeto desenvolvido para participar do Hacktoberfest da Digital Ocean.',
        image: `/images/projects/2.png`,
        project_url: 'https://github.com/filipeleonelbatista/Quiz-App-Hacktoberfest-2020',
        download_app_url: 'https://github.com/filipeleonelbatista/Quiz-App-Hacktoberfest-2020/raw/main/.github/Quiz%20App%20-%20Hacktoberfest.apk',
        view_app_url: '',
      },
      {
        title: 'Tip Calculator',
        description: 'Projeto desenvolvido para participar do Hacktoberfest da Digital Ocean.',
        image: `/images/projects/5.png`,
        project_url: 'https://github.com/filipeleonelbatista/Tip-Calculator-Hacktoberfest-2020',
        download_app_url: '',
        view_app_url: 'https://tipcalculator-lovat.vercel.app/',
      },
      {
        title: 'Cartas para o papai noel',
        description: 'Projeto desenvolvido para ensinar conceitos básicos de programação.',
        image: `/images/projects/6.png`,
        project_url: 'https://github.com/filipeleonelbatista/cartas-para-o-papai-noel-devchallenge',
        download_app_url: 'https://github.com/filipeleonelbatista/cartas-para-o-papai-noel-devchallenge/raw/main/.github/app.apk',
        view_app_url: 'https://cartasparaopapainoel.vercel.app/',
      },
      {
        title: 'Countdown Timer App',
        description: 'Coloque contadores regressivos para suas datas importantes.',
        image: `/images/projects/3.png`,
        project_url: 'https://github.com/filipeleonelbatista/App-Ideas-CTA',
        download_app_url: 'https://github.com/filipeleonelbatista/App-Ideas-CTA/raw/master/assets/Countdown-Timer-App.apk',
        view_app_url: '',
      },
    ];

    setFavoriteCourseData(newfavoriteCourseData)


  }

  useEffect(() => {
    loadItens();
  }, [])

  return (
    <Box as="section" id="projetos" sx={styles.fevCourse}>
      <Container sx={styles.fevCourse.container}>
        <BlockTitle
          sx={styles.fevCourse.blockTitle}
          tagline="Principais projetos"
          heading="Os projetos mais legais que ja criei."
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

        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center', margin: '1.4rem 0 5.8rem 0' }}>
          <a href="https://github.com/filipeleonelbatista" target="_blank" rel="noreferer noopener nofollow"
            style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', padding: '0.8rem 1.8rem', borderRadius: '0.8rem', color: '#FFF', backgroundColor: '#0063c6', transition: '0.2s', "&:hover": { backgroundColor: '#82b4eb' } }}
          >
            <FaGithub size={24} style={{ marginRight: '1.2rem' }} />Veja mais no Github
          </a>
        </div>

      </Container>
    </Box>
  );
};

export default FavoriteCourse;

const styles = {
  fevCourse: {
    paddingTop: ['60px', null, null, '80px', '110px'],
    pb: [null, null, null, '30px', '50px', '0'],
    container: {
      maxWidth: 1440,
      '@media(max-width:1440px)': {
        maxWidth: 1240,
      },
      '.swiper-container': {
        pb: '30px',
        overflow: [null, null, null, null, null, 'visible'],
      },
    },
    blockTitle: {
      textAlign: 'center',
      marginBottom: '30px',
    },
    row: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridGap: 30,
      '@media(max-width: 991px)': {
        gridTemplateColumns: '1fr 1fr',
      },
      '@media(max-width: 575px)': {
        gridTemplateColumns: '1fr',
      },
    },
    col: {
      display: 'flex',
    },
  },
};
