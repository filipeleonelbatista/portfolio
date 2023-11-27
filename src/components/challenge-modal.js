import { Box, Heading, Image, Text } from "theme-ui";

const ChallengeModal = ({ project }) => {
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
            backgroundColor: colors[project?.level],
            padding: "4px 16px",
            borderRadius: 8,
            height: "fit-content",
            color: "white",
          }}
        >
          {project?.level}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {project?.techs.slice(0, 2).map((item) => (
            <Box
              key={`${item}-${project?.id}`}
              sx={{
                backgroundColor: "#3f3f46",
                padding: "4px 16px",
                borderRadius: 8,
                height: "fit-content",
                color: "white",
              }}
            >
              {item}
            </Box>
          ))}

          {project?.techs.length >= 2 && (
            <Box
              sx={{
                backgroundColor: "#3f3f46",
                padding: "4px 16px",
                borderRadius: 16,
                color: "white",
              }}
            >
              + {project?.techs.length - 2}
            </Box>
          )}
        </Box>
      </Box>
      <Box sx={styles.fevCard.image}>
        <Image src={project?.background} alt="content image" />
      </Box>
      <Box sx={styles.fevCard.content}>
        <Heading as="h3">{project?.name}</Heading>
        <Box
          as="a"
          href={`https://github.com/${project.username}`}
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
            margin: "16px 0",
          }}
        >
          <Image
            src={`https://github.com/${project.username}.png`}
            sx={{
              width: 32,
              height: 32,
              borderRadius: "50%",
            }}
          />
          <Text as="p" sx={{ textAlign: "left" }}>
            {project?.username}
          </Text>
        </Box>

        <Text as="p" sx={{ textAlign: "left" }}>
          {project?.description}
        </Text>
        <a
          href={project?.githubRepository}
          target="_blank"
          rel="noreferer noopener nofollow"
          style={{
            fontSize: 14,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
            padding: "0.4rem",
            margin: "0.8rem",
            borderRadius: "0.4rem",
            color: "#FFF",
            backgroundColor: "#0063c6",
            transition: "0.2s",
            "&:hover": { backgroundColor: "#82b4eb" },
          }}
        >
          <b>Iniciar o desafio</b>
        </a>
      </Box>
    </Box>
  );
};

export default ChallengeModal;

const styles = {
  fevCard: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxHeigth: "80%",
    overflow: "auto",
    image: {
      position: "relative",
      borderTopLeftRadius: "5px",
      borderTopRightRadius: "5px",
      overflow: "hidden",
      height: 250,
      width: "100%",
      display: "flex",
      img: {
        display: "block",
        width: "100%",
        objectFit: "cover",
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
