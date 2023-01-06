const { createContext, useState, useEffect } = require("react");

import LogoDarkPt from 'assets/logo.svg';
import LogoDarkEn from 'assets/logo_en.svg';

export const I18nContext = createContext({});

export function I18nContextProvider(props) {
  const [currentLanguage, setCurrentLanguage] = useState("pt-BR");

  let languagesObject = {
    "en": {
      seo_title: "Filipe Batista | Software Developer",
      seo_description: "Software Developer focused in web and mobile with solid work experience with stack JavaScript, ReactJS, React Native e NodeJS. Put your projects online with me!",
      nav_logo: LogoDarkEn,
      nav_logo_alt: "Filipe Batista | Software Developer",
      nav_home: "Home",
      nav_about: "About",
      nav_projects: "Projects",
      nav_experiences: "Professional Experiences",
      nav_contact: "Get in touch",
      banner_title: "Looking for Software developer?",
      banner_subtitle: `
        <p>Im <strong>Filipe Batista</strong>, i'm a Software Developer with solid work experience with <strong>JavaScript </strong>
        I like to put in practice project ideas and help others to <strong>
        to facilitate</strong> and <strong>boosting</strong> your business through technology.</p>
      `,
      banner_button_text: "Download CV",
      banner_download_url_cv: "/FilipeBatistaCVEn.pdf",
      banner_job_title: "Fullstack Software Developer:",
      cta_two_title_section: "About me",
      cta_two_title: "👋 Hi, i'm Filipe Batista.",
      cta_two_description: `
        I love so much my family.
        I Feel realized when develop and can reach my goals in my projects and bring business solutions to reality.
        I work with PHP, Python for web, Oracle SQL, SQLite, MySql and Postgres and Fullstack with ReactJS ReactNative and NodeJS 💻
      `,
      cta_two_button_text: "My projects",
      favorite_course_title_section: "My Projects",
      favorite_course_description_section: "Coolest projects that i made.",
      favorite_course_button_text: "See more on Github",
      favorite_card_project_button_see_app_text: "View app",
      favorite_card_project_button_download_app_text: "Download app",
      favorite_card_project_button_see_code_text: "View on Github",
      popular_course_title_section: "Professional Experiences",
      popular_course_button_text: "Download CV",
      popular_course_download_url_cv: "/FilipeBatistaCVEn.pdf",
      other_projects_title_section: "OTHER REALIZED PROJECTS",
      other_projects_description_section: "Client delivered projects.",
      other_card_projects_button_see_app_text: "View app",
      floating_ballon_text: "Get in touch on WhatsApp!",
      floating_header_form_text: "Type your Name/WhatsApp to get in touch.",
      floating_erro_message_name: "Name is empty!",
      floating_erro_message_phone: "Number is empty!",
      floating_erro_message_phone_length: "Number maybe are incorrect!",
      floating_field_label_name: "Your Name",
      floating_field_label_phone: "Your WhatsApp Number",
      floating_form_button_text: "Call on WhatsApp",
      floating_span_text: "I do not send anything beyond the contact. It's a promise!",
      footer_copyright: "Rights reserved",
      footer_subtitle: "Develop in NextJS by Filipe Batista",
    },
    "pt-BR": {
      seo_title: "Filipe Batista | Desenvolvedor de aplicativos",
      seo_description: "Desenvolvedor de aplicativos com foco em desenvolvimento web e mobile com experiência na stack JavaScript, ReactJS, React Native e NodeJS. Tire suas idéias do papel!",
      nav_logo: LogoDarkPt,
      nav_logo_alt: "Filipe Batista | Desenvolvedor de aplicativos",
      nav_home: "Inicio",
      nav_about: "Sobre",
      nav_projects: "Projetos",
      nav_experiences: "Experiências",
      nav_contact: "Entrar em contato",
      banner_title: "Porcurando Desenvolvedor de aplicativos?",
      banner_subtitle: `
        <p>Sou <strong>Filipe Batista</strong>, desenvolvedor de apps com experiência na stack <strong>JavaScript </strong>
        Gosto de tirar as ideias do papel e ajudar pessoas a <strong>automatizar</strong> e <strong>impulsionar </strong>
        seu negócio por meio da tecnologia.</p>
      `,
      banner_button_text: "Baixar Curriculo",
      banner_download_url_cv: "/FilipeBatistaCV.pdf",
      banner_job_title: "Desenvolvedor Fullstack",
      cta_two_title_section: "Sobre mim",
      cta_two_title: "👋 Olá, sou o Filipe Batista.",
      cta_two_description: `
        Amo muito minha família.
        Tenho uma grande realização no desenvolvimento especialmente quando consigo tirar idéias do papel e tornar em realidade.
        Sou desenvolvedor PHP, Python for web, um pouquinho de Oracle SQL, SQLite, MySql e Postgres e Fullstack com ReactJS ReactNative e NodeJS 💻
      `,
      cta_two_button_text: "Ver meus projetos",
      favorite_course_title_section: "Principais Projetos",
      favorite_course_description_section: "Os projetos mais legais que ja criei.",
      favorite_course_button_text: "Veja mais no Github",
      favorite_card_project_button_see_app_text: "Ver aplicação",
      favorite_card_project_button_download_app_text: "Baixar o App",
      favorite_card_project_button_see_code_text: "Veja no Github",
      popular_course_title_section: "Experiências profissionais",
      popular_course_button_text: "Baixar Curriculo",
      popular_course_download_url_cv: "/FilipeBatistaCV.pdf",
      other_projects_title_section: "OUTROS PROJETOS REALIZADOS",
      other_projects_description_section: "Projetos entregues para clientes.",
      other_card_projects_button_see_app_text: "Ver aplicação",
      floating_ballon_text: "Chama no WhatsApp!",
      floating_header_form_text: "Digite seu Nome/WhatsApp para entrar em contato.",
      floating_erro_message_name: "Nome não foi digitado!",
      floating_erro_message_phone: "Número não foi digitado!",
      floating_erro_message_phone_length: "Numero digitado incorreto!",
      floating_field_label_name: "Seu Nome",
      floating_field_label_phone: "Seu Número do WhatsApp",
      floating_form_button_text: "Chamar no WhatsApp",
      floating_span_text: "Não envio nada além do contato. É uma promessa!",
      footer_copyright: "Direitos reservados",
      footer_subtitle: "Desenvolvido em NextJS por Filipe Batista",
    },
  };

  useEffect(() => {
    const selectedLanguage = localStorage.getItem("@language")
    if (selectedLanguage) {
      setCurrentLanguage(selectedLanguage)
    } else {
      setCurrentLanguage(navigator.language)
      localStorage.setItem("@language", navigator.language)
    }
  }, [])

  return (
    <I18nContext.Provider value={{
      currentLanguage,
      setCurrentLanguage,
      currentLanguageObject: languagesObject[currentLanguage]
    }}>
      {props.children}
    </I18nContext.Provider>
  )
}