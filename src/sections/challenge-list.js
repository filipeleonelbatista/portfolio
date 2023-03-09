import ChallengeCard from "components/challenge-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Container } from "theme-ui";

const ChallengeList = ({ list, setSelectedProject }) => {

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

  return (
    <Box as="section" id="#project-list" sx={styles.fevCourse}>
      <Container sx={styles.fevCourse.container}>
        <Swiper {...FavoriteCarousel} sx={styles.carousel}>
          {list.map((project, index) => (
            <SwiperSlide key={index}>
              <button
                onClick={() => setSelectedProject(project)}
                style={{
                  width: '100%',
                  backgroundColor: 'transparent',
                  border: 'none'
                }}>
                <ChallengeCard
                  project={project}
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default ChallengeList;

const styles = {
  fevCourse: {
    width: '100%',
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
