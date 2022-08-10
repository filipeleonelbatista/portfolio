import { Box, Container } from 'theme-ui';
import React from 'react';
import BlockTitle from 'components/block-title';
import PopularCard from 'components/popular-card';

import { FaFileDownload } from 'react-icons/fa';

const popularCourseData = [
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
    role: 'Estágiario',
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
];

const PopularCourse = () => {
  return (
    <Box as="section" id="xp" sx={styles.popularCourse}>
      <Container>
        <BlockTitle
          sx={styles.popularCourse.blockTitle}
          tagline=""
          heading="Experiências profissionais"
        />
        {popularCourseData.map((course, index) => (
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
          <a href="/FilipeBatistaCV.pdf" target="_blank" rel="noreferer noopener nofollow"
            style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', padding: '0.8rem 1.8rem', borderRadius: '0.8rem', color: '#FFF', backgroundColor: '#0063c6', transition: '0.2s', "&:hover": { backgroundColor: '#82b4eb' } }}
          >
            <FaFileDownload size={24} style={{ marginRight: '1.2rem' }} />Baixar CV
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
