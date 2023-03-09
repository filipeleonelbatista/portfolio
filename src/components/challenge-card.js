import { useI18n } from 'hooks/useI18n';
import React from 'react';
import { FaGlobe } from 'react-icons/fa';
import { Box, Heading, Image, Text } from 'theme-ui';

const ChallengeCard = ({ project }) => {
  const { currentLanguageObject } = useI18n()

  const colors = {
    "Easy": "#28a745",
    "Moderate": "#ffc107",
    "Hard": "#dc3545",
    "Fácil": "#28a745",
    "Moderado": "#ffc107",
    "Difícil": "#dc3545",
  }

  return (
    <Box sx={styles.fevCard}>
      <Box sx={styles.fevCard.image}>
        <Image src={project.featured_image} alt="content image" />
      </Box>
      <Box sx={styles.fevCard.content}>
        <div style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
          <Heading as="h3">
            <a href={project.github_repo_url} style={{ textDecoration: 'none', color: '#0f2137', transition: '0.2s', '&:hover': { color: '#0063c6' } }} >{project.title}</a>
          </Heading>
          <div
            style={{
              display: "flex",
              alignItems: 'center',
              justifyContent: "center",
              padding: "0.4rem 0.8rem",
              borderRadius: "0.8rem",
              backgroundColor: colors[project.dificult],
              color: (project.dificult === 'Moderado') || (project.dificult === 'Moderate') ? "black" : "white",
              fontWeight: "bold"
            }}
          >{project.dificult}</div>
        </div>
        <Text as="p" sx={{ textAlign: "left" }}>{project.description.substr(0, 150) + "(...)"}</Text>

        {
          project.github_repo_url !== '' && (
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center', margin: '1.4rem 0 0 0' }}>
              <a href={project.github_repo_url} target="_blank" rel="noreferer noopener nofollow"
                style={{ fontSize: 14, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', padding: '0.4rem', margin: '0 0.2rem', borderRadius: '0.4rem', color: '#FFF', backgroundColor: '#0063c6', transition: '0.2s', "&:hover": { backgroundColor: '#82b4eb' } }}
              >
                <FaGlobe size={24} style={{ marginRight: '0.4rem' }} />
                {currentLanguageObject.challenges_modal_github_button_text}
              </a>
            </div>
          )
        }{
          project.figma_url !== '' && (
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center', margin: '1.4rem 0 0 0' }}>
              <a href={project.figma_url} target="_blank" rel="noreferer noopener nofollow"
                style={{ fontSize: 14, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', padding: '0.4rem', margin: '0 0.2rem', borderRadius: '0.4rem', color: '#FFF', backgroundColor: '#0063c6', transition: '0.2s', "&:hover": { backgroundColor: '#82b4eb' } }}
              >
                <FaGlobe size={24} style={{ marginRight: '0.4rem' }} />
                {currentLanguageObject.challenges_modal_figma_button_text}
              </a>
            </div>
          )
        }
      </Box>
    </Box>
  );
};

export default ChallengeCard;

const styles = {
  fevCard: {
    backgroundColor: '#fff',
    transition: '500ms',
    border: '1px solid #F3F4F5',
    display: 'flex',
    flexDirection: 'column',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px',
    width: '100%',
    height: 450,
    '&:hover': {
      boxShadow: '0px 15px 50px rgba(69, 88, 157, 0.1)',
    },
    image: {
      position: 'relative',
      borderTopLeftRadius: '5px',
      borderTopRightRadius: '5px',
      overflow: 'hidden',
      width: '100%',
      height: 200,
      display: 'flex',
      img: {
        display: 'block',
        width: '100%',
      },
      '.videoBtn': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
    },
    content: {
      padding: ['10px 20px 20px', null, null, '10px 30px 20px'],
      h3: {
        fontSize: ['18px', null, null, '16px', null, '18px', '20px'],
        lineHeight: 1.5,
        color: 'black',
        margin: 0,
        fontWeight: 700,
        marginTop: '5px',
        marginBottom: '10px',
        a: {
          cursor: 'pointer',
          transition: '500ms',
          '&:hover': {
            color: 'primary',
          },
        },
      },
      p: {
        margin: 0,
        color: '#343D48',
        opacity: 0.8,
        display: 'flex',
        alignItems: 'center',
        fontSize: ['14px', null, null, '16px'],
        img: {
          marginRight: '15px',
        },
      },
    },
    stars: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '15px',
      color: '#0F2137',
      opacity: 0.8,
      marginTop: ['0px', null, '10px'],
      svg: {
        color: '#FFCE1F',
        fontSize: ['14px', null, null, '16px'],
        opacity: 1,
        '&:last-of-type': {
          marginRight: '10px',
        },
      },
      'svg + svg': {
        marginLeft: '5px',
      },
      '&.starCount-4': {
        'svg:last-of-type': {
          color: '#F0ECDF',
        },
      },
      '&.starCount-3': {
        'svg:nth-of-type(4), svg:last-of-type': {
          color: '#F0ECDF',
        },
      },
      '&.starCount-2': {
        'svg:nth-of-type(3), svg:nth-of-type(4), svg:last-of-type': {
          color: '#F0ECDF',
        },
      },
      '&.starCount-1': {
        'svg:nth-of-type(2), svg:nth-of-type(3), svg:nth-of-type(4), svg:last-of-type': {
          color: '#F0ECDF',
        },
      },
      '&.starCount-0': {
        svg: {
          color: '#F0ECDF',
        },
      },
    },
  },
};
