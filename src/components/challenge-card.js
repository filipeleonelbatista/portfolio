import { useI18n } from "hooks/useI18n";
import React, { useMemo } from "react";
import { FaGlobe } from "react-icons/fa";
import { Box, Heading, Image, Text } from "theme-ui";

const ChallengeCard = ({ project }) => {
  const { currentLanguage, languagesObject } = useI18n();

  const selectedLanguage = useMemo(() => {
    return currentLanguage === "pt" ? languagesObject.pt : languagesObject.en;
  }, [currentLanguage]);

  const colors = {
    Iniciante: "#28a745",
    Intermediário: "#ffc107",
    Avançado: "#dc3545",
  };

  return (
    <Box sx={styles.fevCard}>
      <Box
        sx={{
          position: "absolute",
          zIndex: 10,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 2,
        }}
      >
        <Box
          sx={{
            backgroundColor: colors[project.level],
            padding: "4px 16px",
            borderRadius: 16,
            height: "fit-content",
            color: "white",
          }}
        >
          {project.level}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {project.techs.slice(0, 2).map((item) => (
            <Box
              key={`${item}-${project.id}`}
              sx={{
                backgroundColor: "#3f3f46",
                padding: "4px 16px",
                borderRadius: 16,
                height: "fit-content",
                color: "white",
              }}
            >
              {item}
            </Box>
          ))}

          {project.techs.length >= 2 && (
            <Box
              sx={{
                backgroundColor: "#3f3f46",
                padding: "4px 16px",
                borderRadius: 16,
                color: "white",
              }}
            >
              + {project.techs.length - 2}
            </Box>
          )}
        </Box>
      </Box>
      <Box sx={styles.fevCard.image}>
        <Image src={project.background} alt="content image" />
      </Box>
      <Box sx={styles.fevCard.content}>
        <Heading as="h3">{project.name}</Heading>
        <Text as="p" sx={{ textAlign: "left" }}>
          {project.description.substr(0, 150) + "(...)"}
        </Text>
      </Box>
    </Box>
  );
};

export default ChallengeCard;

const styles = {
  fevCard: {
    position: "relative",
    backgroundColor: "#fff",
    transition: "500ms",
    border: "1px solid #F3F4F5",
    display: "flex",
    flexDirection: "column",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
    maxWidth: 300,
    width: "100%",
    height: 380,
    "&:hover": {
      boxShadow: "0px 15px 50px rgba(69, 88, 157, 0.1)",
    },
    image: {
      position: "relative",
      borderTopLeftRadius: "5px",
      borderTopRightRadius: "5px",
      overflow: "hidden",
      width: "100%",
      height: 200,
      display: "flex",
      img: {
        display: "block",
        width: "100%",
        objectFit: "cover",
      },
      ".videoBtn": {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      },
    },
    content: {
      padding: ["10px 20px 20px", null, null, "10px 30px 20px"],
      h3: {
        fontSize: ["18px", null, null, "16px", null, "18px", "20px"],
        lineHeight: 1.5,
        color: "black",
        margin: 0,
        fontWeight: 700,
        marginTop: "5px",
        marginBottom: "10px",
        a: {
          cursor: "pointer",
          transition: "500ms",
          "&:hover": {
            color: "primary",
          },
        },
      },
      p: {
        margin: 0,
        color: "#343D48",
        opacity: 0.8,
        display: "flex",
        alignItems: "center",
        fontSize: ["14px", null, null, "16px"],
        img: {
          marginRight: "15px",
        },
      },
    },
    stars: {
      display: "flex",
      alignItems: "center",
      fontSize: "15px",
      color: "#0F2137",
      opacity: 0.8,
      marginTop: ["0px", null, "10px"],
      svg: {
        color: "#FFCE1F",
        fontSize: ["14px", null, null, "16px"],
        opacity: 1,
        "&:last-of-type": {
          marginRight: "10px",
        },
      },
      "svg + svg": {
        marginLeft: "5px",
      },
      "&.starCount-4": {
        "svg:last-of-type": {
          color: "#F0ECDF",
        },
      },
      "&.starCount-3": {
        "svg:nth-of-type(4), svg:last-of-type": {
          color: "#F0ECDF",
        },
      },
      "&.starCount-2": {
        "svg:nth-of-type(3), svg:nth-of-type(4), svg:last-of-type": {
          color: "#F0ECDF",
        },
      },
      "&.starCount-1": {
        "svg:nth-of-type(2), svg:nth-of-type(3), svg:nth-of-type(4), svg:last-of-type":
          {
            color: "#F0ECDF",
          },
      },
      "&.starCount-0": {
        svg: {
          color: "#F0ECDF",
        },
      },
    },
  },
};
