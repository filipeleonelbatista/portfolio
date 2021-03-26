import { Box, Container } from 'theme-ui';
import React from 'react';
import BlockTitle from 'components/block-title';
import PopularCard from 'components/popular-card';

import { FaFileDownload } from 'react-icons/fa';

const popularCourseData = [
  {
    title:
      'Salux - Informatização em saúde',
    date: 'De 11/2019 até Hoje',
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
    date: 'De 04/2019 até 11/2019 (7 meses)',
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
    date: 'De 09/2017 até 01/2019 (7 meses)',
    description: 'Suporte e manutenção das estações de trabalho dos colaboradores da empresa.',
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
              expanded={index == 1 ? true : false}
              listData={course.list}
              description={course.description}
              title={course.title}
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
