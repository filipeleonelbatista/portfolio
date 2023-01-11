import Floating from "components/floating";
import Layout from "components/layout";
import SEO from "components/seo";
import { StickyProvider } from "contexts/app/app.provider";
import { VideoProvider } from "contexts/video/video.provider";
import theme from "theme";
import { ThemeProvider } from "theme-ui";

import BannerBG from 'assets/banner-bg-1-1.png';
import BannerImage from 'assets/headerImage.png';
import BannerPattern from 'assets/banner-pattern.png';
import BannerTextLine from 'assets/banner-text-line.png';
import ModalComponent from "components/ModalComponent";
import { useI18n } from 'hooks/useI18n';
import { useState } from "react";
import { FaFigma, FaGithub } from "react-icons/fa";
import ChallengeList from "sections/challenge-list";
import {
  Box, Container, Flex, Heading, Image, Text
} from 'theme-ui';

export default function PoliticasDePrivacidadePage() {
  const { currentLanguageObject, currentLanguage } = useI18n();
  const [selectedProject, setSelectedProject] = useState()
  const [open, setOpen] = useState(false);

  const categories = [
    { id: 1, name: 'Frontend' },
    { id: 2, name: 'Backend' },
    { id: 3, name: 'Mobile' },
  ];

  const challengeList = {
    "en": [
      {
        title: 'Music Player',
        description: 'Create a functional music player that has the possibility to play the music, follow the progress through the progress bar, a timer with the time elapsed and another with the duration of the music that is playing. add the basic functionality of going to the next song and going back to the previous song. After that, the challenge will be completed.',
        dificult: 'Easy',
        featured_image: './images/challenges/1.png',
        github_repo_url: '',
        figma_url: 'https://www.figma.com/file/xDc16HIINcGqJ5mHqmWr7h/%23boraCodar---Desafio-1-(Copy)?node-id=0%3A1&t=HPtUTCSWr4F4Ysyg-1',
        category_id: 3,
      },
      {
        title: 'Blog - Post.Io',
        description: 'You will create a blog post page and post listing using NextJS and CMS as a basis for fetching Posts. (I recommend Hygraph). Use Javascript or Typescript as you prefer; Create the main screen where you will list the categories of posts and pagination every 5 posts sorted by date, and Create the post page with its complete content.',
        dificult: 'Moderate',
        featured_image: './images/challenges/2.png',
        github_repo_url: 'https://github.com/filipeleonelbatista/simple-blog',
        figma_url: '',
        category_id: 1,
      },
      {
        title: 'Behind Store',
        description: "Create a RESTFULL api, as well as its documentation (Using Swagger API) for the backend of a e-commerce where you will have the CRUD of products, the products, each one in turn will belong to a category only, so a CRUD for categories will be necessary also. You will need to store each product's image as the featured image and a set of other images for display in a carousel. The API needs to have authentication, that is, only authenticated clients can access it.",
        dificult: 'Hard',
        featured_image: './images/challenges/3.png',
        github_repo_url: '',
        figma_url: '',
        category_id: 2,
      },
    ],
    "pt-BR": [
      {
        title: 'Player de música',
        description: 'Crie um player funcional de musica que tenha a possibilidade de reproduzir a musica, acompanhar o progresso pela barra de progresso, um timer com o tempo deocrrido e outro com a duração da musica que está tocando. adicione as funcionalidades basicas de avançar para a próxima musica e retornar a musica anterior. Feito isso o desafio estará concluído.',
        dificult: 'Fácil',
        featured_image: './images/challenges/1.png',
        github_repo_url: '',
        figma_url: 'https://www.figma.com/file/xDc16HIINcGqJ5mHqmWr7h/%23boraCodar---Desafio-1-(Copy)?node-id=0%3A1&t=HPtUTCSWr4F4Ysyg-1',
        category_id: 3,
      },
      {
        title: 'Blog - Post.Io',
        description: 'Você irá criar uma página de post de um blog e a listagem de posts usando NextJS e CMS como base para buscar os Posts. (Recomendo Hygraph). Usar Javascript ou Typescript como preferir; Criar a tela principal onde listará as categorias de posts e uma paginação de 5 em 5 posts ordenados por data, e Criar a página do post com o seu conteúdo completo.',
        dificult: 'Moderado',
        featured_image: './images/challenges/2.png',
        github_repo_url: 'https://github.com/filipeleonelbatista/simple-blog',
        figma_url: '',
        category_id: 1,
      },
      {
        title: 'Behind Store',
        description: 'Crie uma api RESTFULL, bem como sua documentação (Usando Swagger API) para o backend de uma loja virtual onde você terá o CRUD de produtos, os produtos, cada um por sua vez pertencerá a uma categoria apenas, então será necessário um CRUD para categorias também. Será necessário armazenar a imagem de cada produto sendo a imagem destacada e um conjunto de outras imagens para a exibição em um carrocel. A API precisa ter autenticação, ou seja, somente clientes autenticados podem entrar nela.',
        dificult: 'Difícil',
        featured_image: './images/challenges/3.png',
        github_repo_url: '',
        figma_url: '',
        category_id: 2,
      },
    ]
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <ModalComponent open={open} onClose={() => setOpen(false)}>
          {
            selectedProject && (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: 'column',
                  gap: '16px'
                }}>
                <div
                  style={{
                    width: "100%",
                    height: "250px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: 'hidden',
                    borderRadius: '1.6rem'
                  }}>
                  <img
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                    src={selectedProject.featured_image} alt={selectedProject.title} />
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: 'column',
                    gap: '16px'
                  }}>
                  <h1>{selectedProject.title}</h1>
                  <p>{selectedProject.description}</p>
                  {
                    selectedProject.github_repo_url !== "" && (
                      <a
                        href={selectedProject.github_repo_url}
                        target="_blank"
                        rel="noreferer noopener nofollow"
                        style={{
                          fontSize: 14,
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          textDecoration: 'none',
                          padding: '0.4rem',
                          margin: '0 0.2rem',
                          borderRadius: '0.4rem',
                          color: '#FFF',
                          backgroundColor: '#0063c6',
                          transition: '0.2s',
                          "&:hover": { backgroundColor: '#82b4eb' }
                        }}
                      >
                        <FaGithub size={24} style={{ marginRight: '0.4rem' }} />
                        {currentLanguageObject.challenges_modal_github_button_text}
                      </a>
                    )
                  }
                  {
                    selectedProject.figma_url !== "" && (
                      <a
                        href={selectedProject.figma_url}
                        target="_blank"
                        rel="noreferer noopener nofollow"
                        style={{
                          fontSize: 14,
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          textDecoration: 'none',
                          padding: '0.4rem',
                          margin: '0 0.2rem',
                          borderRadius: '0.4rem',
                          color: '#FFF',
                          backgroundColor: '#0063c6',
                          transition: '0.2s',
                          "&:hover": { backgroundColor: '#82b4eb' }
                        }}
                      >
                        <FaFigma size={24} style={{ marginRight: '0.4rem' }} />
                        {currentLanguageObject.challenges_modal_figma_button_text}
                      </a>
                    )
                  }
                </div>
              </div>
            )
          }

        </ModalComponent>
        <StickyProvider>
          <VideoProvider>
            <Layout>
              <SEO />
              <Box as="section" id="banner" sx={styles.banner}>
                <Container sx={styles.banner.container}>
                  <Flex sx={styles.banner.row}>
                    <Box sx={{ ...styles.banner.col, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <Box sx={{ ...styles.banner.content, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Heading as="h3">
                          {currentLanguageObject.challenges_header_title}
                        </Heading>
                        <Text sx={{ mt: 2 }} as="div" dangerouslySetInnerHTML={{ __html: currentLanguageObject.challenges_header_subtitle }}>

                        </Text>
                        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'start', alignItems: 'center', marginTop: '0.8rem', marginBottom: '0.8rem' }}>
                          <a href="#list"
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                              textDecoration: 'none',
                              padding: '0.8rem 1.8rem',
                              borderRadius: '0.8rem',
                              color: '#FFF',
                              backgroundColor: '#0063c6',
                              transition: '0.2s',
                              "&:hover": { backgroundColor: '#82b4eb' }
                            }}
                          >
                            {currentLanguageObject.challenges_button_text}
                          </a>
                        </div>
                      </Box>
                    </Box>
                    <Box sx={styles.banner.col}>
                      <Box sx={styles.banner.imageBox}>
                        <Box sx={styles.banner.imageInner}>
                          <Image src={BannerImage} alt="banner image" />
                        </Box>
                      </Box>
                    </Box>
                  </Flex>
                </Container>
              </Box>

              <div
                id="list"
                style={{
                  width: "100%",
                  display: "flex",
                  alignIgems: "center",
                  justifyContent: "center",
                  margin: "2rem 0",
                }}
              >
                <div
                  style={{
                    maxWidth: "1024px",
                    width: "100%",
                    padding: "1.4rem",
                  }}
                >
                  <h2>{currentLanguageObject.challenges_list_section_title}</h2>

                  <ChallengeList list={challengeList[currentLanguage]} setSelectedProject={(project) => {
                    setOpen(true)
                    setSelectedProject(project)
                  }} />
                </div>
              </div>
            </Layout>
          </VideoProvider>
        </StickyProvider>
      </ThemeProvider>
      <Floating />
    </>
  );
}

const styles = {
  banner: {
    overflowX: 'hidden',
    paddingTop: ['100px', '120px'],
    paddingBottom: ['0px', null, '80px'],
    backgroundImage: [
      'linear-gradient(-180deg, #E0F5FA 0%, #FFFDE6 100%)',
      `url(${BannerBG})`,
    ],
    backgroundPosition: 'left top',
    backgroundRepeat: 'no-repeat',
    container: {
      maxWidth: ['100%', null, null, null, null, '1240px', '1440px'],
    },
    row: {
      flexWrap: 'wrap',
      display: 'flex',
      alignIgems: 'center',
      marginLeft: '-15px',
      marginRight: '-15px',
    },
    col: {
      pl: '15px',
      pr: '15px',
      flex: ['1 1 100%', null, '0 0 50%'],
    },
    content: {
      paddingRight: [0, 0, 0, 0, '40px', 0, 0],
      h3: {
        lineHeight: 1.18,
        color: 'black',
        fontWeight: 'bold',
        position: 'relative',
        width: '100%',
        fontSize: ['28px', '35px', null, '45px', null, '50px', '85px'],
        maxWidth: ['500px', null, null, null, null, null, '100%'],
        '&:before': {
          content: '""',
          width: ['290px', null, null, null, null, '260px', '381px'],
          height: '15px',
          backgroundImage: `url(${BannerTextLine})`,
          backgroundPosition: 'center center',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          position: 'absolute',
          bottom: '-15px',
          right: ['15px', null, null, null, null, '140px', '100px'],
          display: ['none', null, null, null, null, 'block'],
        },
      },
      p: {
        lineHeight: 2.33,
        color: '#02073E',
        marginTop: ['10px', null, null, '35px'],
        fontSize: ['15px', '18px'],
        pr: ['15px', 0],
        br: {
          display: ['none', null, null, null, null, 'block'],
        },
      },
    },
    stars: {
      marginTop: ['0', null, null, null, null, '40px'],
      marginBottom: '20px',
      display: 'flex',
      color: '#02073E',
      fontSize: ['15px'],
      alignItems: 'center',
      lineHeight: 1,
      svg: {
        color: 'primary',
        '+svg': {
          marginLeft: ['3px', null, '5px'],
        },
        '&:last-of-type': {
          color: 'rgba(2, 7, 62, 0.2)',
          marginRight: '10px',
        },
      },
    },
    form: {
      position: 'relative',
      width: '100%',
      maxWidth: ['480px', null, null, '520px'],
      boxShadow: '0px 10px 50px rgba(48, 98, 145, 0.08)',
      marginTop: ['15px', '40px'],
      height: ['45px', null, null, '55px', null, null, '70px'],
      marginBottom: ['20px', '30px', null, null, '40px'],

      input: {
        backgroundColor: '#fff',
        position: 'absolute',
        top: 0,
        left: 0,
        paddingLeft: '25px',
        width: '100%',
        height: '100%',
        color: 'rgba(2, 7, 62, .4)',
        boxShadow: 'none !important',
        outline: 'none !important',
        borderRadius: '8px',
        fontSize: ['15px', '16px'],
      },
      button: {
        position: 'absolute',
        top: '50%',
        right: '25px',
        padding: 0,
        transform: 'translateY(-50%)',
        fontSize: ['16px', '22px'],
        color: '#02073E',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
          color: '#02073E',
          backgroundColor: '#fff',
        },
      },
    },
    partner: {
      display: 'flex',
      flexDirection: ['column', null, null, null, null, 'row'],
      alignItems: ['flex-start', null, null, null, null, 'center'],
      color: 'rgba(2, 7, 62,.6)',
      fontSize: ['15px', null, '16px'],
      span: {
        display: ['block', null, 'inline-block'],
      },
      img: {
        marginLeft: ['0', '0px', null, null, null, '20px'],
        mt: ['20px', null, null, null, null, '0'],
      },
    },
    imageBox: {
      display: 'flex',
      justifyContent: ['flex-start', null, null, 'flex-end'],
      marginTop: ['60px', null, null, '0'],
    },
    imageInner: {
      position: 'relative',
      '&:before': {
        content: '""',
        width: '100%',
        height: '100%',
        border: '2px solid #0063c6',
        borderRadius: '5px',
        top: '30px',
        left: '30px',
        position: 'absolute',
        zIndex: 2,
        display: ['none', null, 'block'],
        '@media(max-width: 991px)': {
          left: '10px',
          top: '15px',
          height: 'calc(100% - 15px)',
        },
      },
      '&:after': {
        content: '""',
        width: '302px',
        height: '347px',
        backgroundImage: `url(${BannerPattern})`,
        backgroundPosition: 'center',
        top: '-30px',
        right: '-73px',
        position: 'absolute',
        zIndex: 1,
        '@media(max-width: 991px)': {
          right: '-10px',
        },
      },
      img: {
        position: 'relative',
        zIndex: 9,
        maxWidth: '100%',
      },
      '.videoBtn': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        zIndex: 10,
      },
    },
  },
};