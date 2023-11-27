import ChallengeCard from "components/challenge-card";
import { Box, Container } from "theme-ui";

const ChallengeList = ({ list, setSelectedProject }) => {
  return (
    <Box as="section" id="#challenges-list" sx={styles.fevCourse}>
      <Container sx={styles.fevCourse.container}>
        <Box sx={styles.carousel}>
          {list.map((project, index) => (
            <button
              key={index}
              onClick={() => setSelectedProject(project)}
              style={{
                width: "fit-content",
                backgroundColor: "transparent",
                border: "none",
                overflow: "hidden"
              }}
            >
              <ChallengeCard project={project} />
            </button>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ChallengeList;

const styles = {
  fevCourse: {
    width: "100%",
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
  carousel: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    flexWrap: "wrap"
  },
};
