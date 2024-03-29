import Floating from "components/floating";
import Layout from "components/layout";
import SEO from "components/seo";
import { StickyProvider } from "contexts/app/app.provider";
import { VideoProvider } from "contexts/video/video.provider";
import theme from "theme";
import { ThemeProvider } from "theme-ui";

import BannerBG from "assets/banner-bg-1-1.png";
import BannerPattern from "assets/banner-pattern.png";
import BannerTextLine from "assets/banner-text-line.png";
import BannerImage from "assets/headerImage.png";
import ChallengeModal from "components/challenge-modal";
import ModalComponent from "components/ModalComponent";
import { useChallenge } from "hooks/useChallenge";
import { useI18n } from "hooks/useI18n";
import { useMemo, useState } from "react";
import ChallengeList from "sections/challenge-list";
import { Box, Container, Flex, Heading, Image, Text } from "theme-ui";

export default function PoliticasDePrivacidadePage() {
  const { currentLanguage, languagesObject } = useI18n();
  const { challengesList } = useChallenge();

  const selectedLanguage = useMemo(() => {
    return currentLanguage === "pt" ? languagesObject.pt : languagesObject.en;
  }, [currentLanguage]);

  const [selectedProject, setSelectedProject] = useState();
  const [open, setOpen] = useState(false);

  const featuredChallenges = useMemo(() => {
    return challengesList.filter((challenge) => challenge.isFeatured);
  }, [challengesList]);

  const frontEnd = useMemo(() => {
    return challengesList.filter((challenge) => challenge.type === "Front-end");
  }, [challengesList]);

  const backEnd = useMemo(() => {
    return challengesList.filter((challenge) => challenge.type === "Back-end");
  }, [challengesList]);

  const fullstack = useMemo(() => {
    return challengesList.filter(
      (challenge) => challenge.type === "Full Stack"
    );
  }, [challengesList]);

  const mobile = useMemo(() => {
    return challengesList.filter((challenge) => challenge.type === "Mobile");
  }, [challengesList]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <ModalComponent open={open} onClose={() => setOpen(false)}>
          {selectedProject && (
            <div
              style={{
                height: "100%",
                display: "flex",
              }}
            >
              <ChallengeModal project={selectedProject} />
            </div>
          )}
        </ModalComponent>
        <StickyProvider>
          <VideoProvider>
            <Layout>
              <SEO />
              <Box as="section" id="banner" sx={styles.banner}>
                <Container sx={styles.banner.container}>
                  <Flex sx={styles.banner.row}>
                    <Box
                      sx={{
                        ...styles.banner.col,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          ...styles.banner.content,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <Heading as="h3">
                          {selectedLanguage.challenges_header_title}
                        </Heading>
                        <Text
                          sx={{ mt: 2 }}
                          as="div"
                          dangerouslySetInnerHTML={{
                            __html: selectedLanguage.challenges_header_subtitle,
                          }}
                        ></Text>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            justifyContent: "start",
                            alignItems: "center",
                            marginTop: "0.8rem",
                            marginBottom: "0.8rem",
                          }}
                        >
                          <a
                            href="#list"
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
                            {selectedLanguage.challenges_button_text}
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

              <Container>
                <p>
                  <small>
                    {currentLanguage === "pt"
                      ? "* Desafios criados para o projeto Opensource DevChallenge onde fui colaborador"
                      : "* Challenges created for DevChallenge's Opensource project where i was a colaborator"}
                  </small>
                </p>
              </Container>
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
                  <h2>
                    {currentLanguage === "pt"
                      ? "Desafios em destaque"
                      : "Featured Challenges"}
                  </h2>

                  <ChallengeList
                    list={featuredChallenges}
                    setSelectedProject={(project) => {
                      setOpen(true);
                      setSelectedProject(project);
                    }}
                  />
                </div>
              </div>

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
                  <h2>Front-End</h2>

                  <ChallengeList
                    list={frontEnd}
                    setSelectedProject={(project) => {
                      setOpen(true);
                      setSelectedProject(project);
                    }}
                  />
                </div>
              </div>

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
                  <h2>Back-End</h2>

                  <ChallengeList
                    list={backEnd}
                    setSelectedProject={(project) => {
                      setOpen(true);
                      setSelectedProject(project);
                    }}
                  />
                </div>
              </div>

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
                  <h2>Fullstack</h2>

                  <ChallengeList
                    list={fullstack}
                    setSelectedProject={(project) => {
                      setOpen(true);
                      setSelectedProject(project);
                    }}
                  />
                </div>
              </div>

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
                  <h2>Mobile</h2>

                  <ChallengeList
                    list={mobile}
                    setSelectedProject={(project) => {
                      setOpen(true);
                      setSelectedProject(project);
                    }}
                  />
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
    overflowX: "hidden",
    paddingTop: ["100px", "120px"],
    paddingBottom: ["0px", null, "80px"],
    backgroundImage: [
      "linear-gradient(-180deg, #E0F5FA 0%, #FFFDE6 100%)",
      `url(${BannerBG})`,
    ],
    backgroundPosition: "left top",
    backgroundRepeat: "no-repeat",
    container: {
      maxWidth: ["100%", null, null, null, null, "1240px", "1440px"],
    },
    row: {
      flexWrap: "wrap",
      display: "flex",
      alignIgems: "center",
      marginLeft: "-15px",
      marginRight: "-15px",
    },
    col: {
      pl: "15px",
      pr: "15px",
      flex: ["1 1 100%", null, "0 0 50%"],
    },
    content: {
      paddingRight: [0, 0, 0, 0, "40px", 0, 0],
      h3: {
        lineHeight: 1.18,
        color: "black",
        fontWeight: "bold",
        position: "relative",
        width: "100%",
        fontSize: ["28px", "35px", null, "45px", null, "50px", "85px"],
        maxWidth: ["500px", null, null, null, null, null, "100%"],
        "&:before": {
          content: '""',
          width: ["290px", null, null, null, null, "260px", "381px"],
          height: "15px",
          backgroundImage: `url(${BannerTextLine})`,
          backgroundPosition: "center center",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          bottom: "-15px",
          right: ["15px", null, null, null, null, "140px", "100px"],
          display: ["none", null, null, null, null, "block"],
        },
      },
      p: {
        lineHeight: 2.33,
        color: "#02073E",
        marginTop: ["10px", null, null, "35px"],
        fontSize: ["15px", "18px"],
        pr: ["15px", 0],
        br: {
          display: ["none", null, null, null, null, "block"],
        },
      },
    },
    stars: {
      marginTop: ["0", null, null, null, null, "40px"],
      marginBottom: "20px",
      display: "flex",
      color: "#02073E",
      fontSize: ["15px"],
      alignItems: "center",
      lineHeight: 1,
      svg: {
        color: "primary",
        "+svg": {
          marginLeft: ["3px", null, "5px"],
        },
        "&:last-of-type": {
          color: "rgba(2, 7, 62, 0.2)",
          marginRight: "10px",
        },
      },
    },
    form: {
      position: "relative",
      width: "100%",
      maxWidth: ["480px", null, null, "520px"],
      boxShadow: "0px 10px 50px rgba(48, 98, 145, 0.08)",
      marginTop: ["15px", "40px"],
      height: ["45px", null, null, "55px", null, null, "70px"],
      marginBottom: ["20px", "30px", null, null, "40px"],

      input: {
        backgroundColor: "#fff",
        position: "absolute",
        top: 0,
        left: 0,
        paddingLeft: "25px",
        width: "100%",
        height: "100%",
        color: "rgba(2, 7, 62, .4)",
        boxShadow: "none !important",
        outline: "none !important",
        borderRadius: "8px",
        fontSize: ["15px", "16px"],
      },
      button: {
        position: "absolute",
        top: "50%",
        right: "25px",
        padding: 0,
        transform: "translateY(-50%)",
        fontSize: ["16px", "22px"],
        color: "#02073E",
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        "&:hover": {
          color: "#02073E",
          backgroundColor: "#fff",
        },
      },
    },
    partner: {
      display: "flex",
      flexDirection: ["column", null, null, null, null, "row"],
      alignItems: ["flex-start", null, null, null, null, "center"],
      color: "rgba(2, 7, 62,.6)",
      fontSize: ["15px", null, "16px"],
      span: {
        display: ["block", null, "inline-block"],
      },
      img: {
        marginLeft: ["0", "0px", null, null, null, "20px"],
        mt: ["20px", null, null, null, null, "0"],
      },
    },
    imageBox: {
      display: "flex",
      justifyContent: ["flex-start", null, null, "flex-end"],
      marginTop: ["60px", null, null, "0"],
    },
    imageInner: {
      position: "relative",
      "&:before": {
        content: '""',
        width: "100%",
        height: "100%",
        border: "2px solid #0063c6",
        borderRadius: "5px",
        top: "30px",
        left: "30px",
        position: "absolute",
        zIndex: 2,
        display: ["none", null, "block"],
        "@media(max-width: 991px)": {
          left: "10px",
          top: "15px",
          height: "calc(100% - 15px)",
        },
      },
      "&:after": {
        content: '""',
        width: "302px",
        height: "347px",
        backgroundImage: `url(${BannerPattern})`,
        backgroundPosition: "center",
        top: "-30px",
        right: "-73px",
        position: "absolute",
        zIndex: 1,
        "@media(max-width: 991px)": {
          right: "-10px",
        },
      },
      img: {
        position: "relative",
        zIndex: 9,
        maxWidth: "100%",
      },
      ".videoBtn": {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        zIndex: 10,
      },
    },
  },
};
