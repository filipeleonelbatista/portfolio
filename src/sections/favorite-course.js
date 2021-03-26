import axios from 'axios';
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
  const tk_access = "bab3c5a05f5db3d6d2efbc8685453ff0e713ae1f";
  const [favoriteCourseData, setFavoriteCourseData] = useState([]);

  async function loadItens() {

    const result = await axios({
      url: 'https://api.github.com/graphql',
      method: 'post',
      data: {
        query: `
        query {
          viewer {
            id
            pinnedItems(first: 6) {
              edges {
                node {
                  ... on Repository {
                    name
                    description
                    updatedAt               
                    url  
                    stargazers {
                      totalCount
                    }
                    languages(first: 100) {
                      nodes {
                        name
                      }
                    }
                    refs(first: 1, , refPrefix:"refs/heads/") {
                      nodes {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
        `
      },
      headers: {
        'Authorization': 'Bearer ' + tk_access
      }
    });

    let newfavoriteCourseData = [];

    console.log(result.data.data.viewer.pinnedItems.edges);

    result.data.data.viewer.pinnedItems.edges.map(projeto => {
      newfavoriteCourseData.push({
        title: projeto.node.name,
        description: projeto.node.description,
        image: projeto.node.url + `/blob/${projeto.node.refs.nodes[0].name}/.github/site.png?raw=true`,
        project_url: projeto.node.url,
        reviewCount: '5.0 (392 reviews)',
        watchCount: `${projeto.node.stargazers.totalCount} stars`,
        videoLink: '',
        starCount: 0,
      })
    });


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
                starCount={course.starCount}
                title={course.title}
                description={course.description}
                project_url={course.project_url}
                image={course.image}
                reviewCount={course.reviewCount}
                watchCount={course.watchCount}
                videoLink={course.videoLink}
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
