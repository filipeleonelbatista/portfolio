import { Box, Container } from 'theme-ui';
import React, { useMemo } from 'react';
import BlockTitle from 'components/block-title';
import PopularCard from 'components/popular-card';
import { FaFileDownload } from 'react-icons/fa';
import { useI18n } from 'hooks/useI18n';

const PopularCourse = () => {
  const { currentLanguage, languagesObject } = useI18n();

  const selectedLanguage = useMemo(() => {
    return currentLanguage === 'pt' ? languagesObject.pt : languagesObject.en
  }, [currentLanguage])

  const popularCourseData = {
    en: [
      {
        title:
          'Stefanini Group',
        link:
          'https://stefanini.com',
        date: 'From 8/2022 To Today',
        description: 'Development and maintenance of applications in ReactJS with TypeScript and Material UI',
        role: 'Systems Analyst',
        list: [
          {
            content: 'Development and maintenance of applications in ReactJS with Typescript and Material UI.',
          },
          {
            content: 'Development and maintenance of applications in React-Native with Typescript and Papper UI.',
          },
          {
            content: 'Backend development and maintenance in C# and SQL Server.'
          },
          {
            content: 'Documentation development in Jira, Swagger tools'
          }
        ],
      },
      {
        title:
          'Moben',
        link:
          'https://moben.com.br',
        date: 'From 6/2021 To 8/2022',
        description: 'Development and maintence of applications in ReactJS using Firebase as database and Redux to maintain application states',
        role: 'Fullstack Developer',
        list: [
          {
            content: 'Development and maintenance of applications in ReactJS with Firebase.',
          },
          {
            content: 'Development and maintenance of Backend Node JS, Express JS, Cron Jobs, email templates and Firebase with TypeScript.',
          },
          {
            content: 'Development and maintenance of payment system integrations for Pagar-me',
          },
          {
            content: 'Development and maintenance of integrations for TakeBlip service automation systems.',
          },
          {
            content: 'Development and maintenance of internal alert automation systems integrations with Discord.'
          }
        ],
      },
      {
        title:
          'Interprocess - Technology in Helthcare',
        link:
          'https://www.interprocess.com.br/',
        date: 'From 7/2021 To 10/2021',
        description: 'Development of electronic medical record application in React JS with Typescript using SQLServer as database',
        role: 'Software Developer I',
        list: [
          {
            content: 'Development and maintenance of applications in ReactJS with Typescript',
          },
          {
            content: 'Development and maintenance of Gemed System integrations in C#',
          },
          {
            content: 'SQLServer database maintenance',
          },
          {
            content: 'Documentation development in Devops tools, Storybook.',
          },
        ],
      },
      {
        title:
          'Salux - Informatization in health',
        link:
          'https://www.salux.com.br/',
        date: 'From 11/2019 To 04/2021',
        description: "PowerBuilder 11.5 support for the company's main system and maintenance on the Oracle database",
        role: 'Software Developer I',
        list: [
          {
            content: 'API development in C# for Salux System integration with third parties',
          },
          {
            content: 'Maintenance of rules in the Oracle database',
          },
          {
            content: 'Development and maintenance of the Salux system in PowerBuilder 11.5',
          },
          {
            content: 'Documentation development in Jira, Confluence and Dokuwiki tools',
          },
          {
            content: 'Environment configuration for the installation of Webservices for the client',
          },
        ],
      },
      {
        title:
          'Salux - Informatization in health',
        link:
          'https://www.salux.com.br/',
        date: 'From 04/2019 To 11/2019',
        description: "Support and maintenance of the workstations of the company's employees.",
        role: 'IT Intern',
        list: [
          {
            content: 'Support for local users and customers (Hospitals) (Help Desk)',
          },
          {
            content: 'Maintenance and configuration of Notebook, Desktop and Servers',
          },
          {
            content: 'Configuration of switches, routers, modems, etc.',
          },
          {
            content: 'Infrastructure monitoring (Zabbix, Nagios, PRTG, etc).',
          },
        ],
      },
      {
        title:
          'Gerdau Long Steel - Sapucaia do sul-RS Plant',
        link:
          'https://www2.gerdau.com.br/',
        date: 'From 09/2017 To 01/2019',
        description: "Answering requests from the JIRA tool. Payment of suppliers and support in IT Change Management and Demand Management.",
        role: 'IT Intern',
        list: [
          {
            content: 'Support in reviewing configuration standards, development and change management',
          },
          {
            content: 'Support in the configuration and maintenance of the Jira (Atlassian) Demand Management and IT Change Management tool',
          },
          {
            content: 'Monitoring and alignment of new business demands with suppliers.',
          },
          {
            content: 'Support in the escalation and prioritization of critical incidents with a relevant impact on the business.',
          },
          {
            content: 'Monitoring of performance indicators with suppliers, analyzing and pointing out cases of divergence.',
          },
          {
            content: 'Support in reviewing new contracts and mobilizing third parties.',
          },
          {
            content: 'Monitoring of measurements and creation of carts/purchase orders for payment to suppliers.',
          },
        ],
      },
    ],
    pt: [
      {
        title:
          'Stefanini Group',
        link:
          'https://stefanini.com',
        date: 'De 8/2022 até hoje',
        description: 'Desenvolvimento e manutenção de aplicações em ReactJS com TypeScript e Material UI',
        role: 'Analista de sistemas',
        list: [
          {
            content: 'Desenvolvimento e manutenção de aplicações em ReactJS com Typescript e Material UI.',
          },
          {
            content: 'Desenvolvimento e manutenção de aplicações em React-Native com Typescript e Papper UI.',
          },
          {
            content: 'Desenvolvimento e manutenção de Backend em C# e SQL Server'
          },
          {
            content: 'Desenvolvimento de documentação nas ferramentas Jira, Swagger'
          }
        ],
      },
      {
        title:
          'Moben',
        link:
          'https://moben.com.br',
        date: 'De 6/2021 até 8/2022',
        description: 'Suporte em ReactJS usando Firebase como base de dados e Redux para manter estados da aplicação',
        role: 'Desenvolvedor Fullstack',
        list: [
          {
            content: 'Desenvolvimento e manutenção de aplicações em ReactJS com Firebase.',
          },
          {
            content: 'Desenvolvimento e manutenção de Backend Node JS, Express JS, Cron Jobs, email templates e Firebase com TypeScript.',
          },
          {
            content: 'Desenvolvimento e manutenção de integrações do Sistemas de pagamento da Pagar-me',
          },
          {
            content: 'Desenvolvimento e manutenção de integrações do Sistemas de automação de atendimento TakeBlip.',
          },
          {
            content: 'Desenvolvimento e manutenção de integrações do Sistemas de automação de alertas internos com Discord.'
          }
        ],
      },
      {
        title:
          'Interprocess - Tecnologia em Saúde',
        link:
          'https://www.interprocess.com.br/',
        date: 'De 7/2021 até 10/2021',
        description: 'Desenvolvimento da aplicação de prontuário eletronico em React JS com Typescript usando SQLServer como base de dados',
        role: 'Desenvolvedor Jr',
        list: [
          {
            content: 'Desenvolvimento e manutenção de aplicações em ReactJS com Typescript',
          },
          {
            content: ' Desenvolvimento e manutenção de integrações do Sistema Gemed em C#',
          },
          {
            content: 'Manutenção de banco de dados SQLServer',
          },
          {
            content: ' Desenvolvimento de documentação nas ferramentas Devops, Storybook.',
          },
        ],
      },
      {
        title:
          'Salux - Informatização em saúde',
        link:
          'https://www.salux.com.br/',
        date: 'De 11/2019 até 04/2021',
        description: 'Suporte em PowerBuilder 11.5 para o sistema principal da empresa e manutenção no banco de dados Oracle',
        role: 'Desenvolvedor Jr',
        list: [
          {
            content: 'Desenvolvimento de API em C# para integração do Sistema Salux com terceiros',
          },
          {
            content: 'Manutenção em regras no banco de dados Oracle',
          },
          {
            content: 'Desenvolvimento e manutenção do sistema Salux em PowerBuilder 11.5',
          },
          {
            content: 'Desenvolvimento de documentação nas ferramentas Jira, Confluence e Dokuwiki',
          },
          {
            content: 'Configuração de ambiente para a instalação de Webservices para o cliente',
          },
        ],
      },
      {
        title:
          'Salux - Informatização em saúde',
        link:
          'https://www.salux.com.br/',
        date: 'De 04/2019 até 11/2019',
        description: 'Suporte e manutenção das estações de trabalho dos colaboradores da empresa.',
        role: 'Estágiario TI',
        list: [
          {
            content: 'Suporte a usuários locais e clientes (Hospitais) (Help Desk)',
          },
          {
            content: 'Manutenção e configuração de Notebook, Desktop e Servidores',
          },
          {
            content: 'Configuração de switch, roteadores, modems, etc.',
          },
          {
            content: 'Monitoramento de infraestrutura (Zabbix, Nagios, PRTG, etc).',
          },
        ],
      },
      {
        title:
          'Gerdau Aços Longos - Sapucaia do sul-RS',
        link:
          'https://www2.gerdau.com.br/',
        date: 'De 09/2017 até 01/2019',
        description: 'Atendimento a demandas da ferramenta JIRA. Pagamento de fornecedores e suporte na Gestão de mudança de TI  e Gestão de demandas.',
        role: 'Estágiario TI',
        list: [
          {
            content: 'Suporte na revisão dos padrões de configuração, desenvolvimento e gestão da mudança',
          },
          {
            content: 'Suporte na configuração e manutenção da ferramenta Jira (Atlassian) de Gestão de Demanda e Gestão da Mudança de TI',
          },
          {
            content: 'Acompanhamento e alinhamento de novas demandas do negócio junto aos fornecedores.',
          },
          {
            content: 'Apoio na escalação e priorização de incidentes críticos de impacto relevante para o negócio.',
          },
          {
            content: 'Acompanhamento dos indicadores de performance junto aos fornecedores, analisando e apontando casos de divergência.',
          },
          {
            content: 'Suporte na revisão de novos contratos e mobilização de terceiros.',
          },
          {
            content: 'Acompanhamento das medições e criação dos carrinhos/pedidos de compra para pagamento aos fornecedores.',
          },
        ],
      },
    ]
  };


  const selectedPopularCourseData = currentLanguage === 'pt' ? popularCourseData.pt : popularCourseData.en
  return (
    <Box as="section" id="xp" sx={styles.popularCourse}>
      <Container>
        <BlockTitle
          sx={styles.popularCourse.blockTitle}
          tagline=""
          heading={selectedLanguage.popular_course_title_section}
        />
        {selectedPopularCourseData.map((course, index) => (
          <Box sx={styles.popularCourse.col} key={index}>
            <PopularCard
              key={index}
              expanded={index === 0 ? true : false}
              listData={course.list}
              description={course.description}
              title={course.title}
              link={course.link}
              date={course.date}
              role={course.role}
            />
          </Box>
        ))}

        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <a href={selectedLanguage.popular_course_download_url_cv} target="_blank" rel="noreferer noopener nofollow"
            style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', padding: '0.8rem 1.8rem', borderRadius: '0.8rem', color: '#FFF', backgroundColor: '#0063c6', transition: '0.2s', "&:hover": { backgroundColor: '#82b4eb' } }}
          >
            <FaFileDownload size={24} style={{ marginRight: '1.2rem' }} />
            {selectedLanguage.popular_course_button_text}
          </a>
        </div>
      </Container>
    </Box>
  );
};

export default PopularCourse;

const styles = {
  popularCourse: {
    paddingBottom: ['100px'],
    '@media(max-width: 575px)': {
      paddingBottom: '60px',
    },
    blockTitle: {
      textAlign: 'center',
      marginBottom: '60px',
      '@media(max-width: 575px)': {
        marginBottom: '30px',
      },
    },
    col: {},
  },
};
