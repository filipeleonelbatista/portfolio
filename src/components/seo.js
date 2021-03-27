import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = 'Desenvolvedor de aplicativos com foco em desenvolvimento web e mobile com experiência na stack JavaScript, ReactJS, React Native e NodeJS. Tire suas idéias do papel!',
  author = 'Filipe Batista',
  meta,
  title = 'Filipe Batista | Desenvolvedor de aplicativos',
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      name: `robots`,
      content: "index",
    },
    {
      name: `autor`,
      content: author,
    },
    {
      name: `keywords`,
      content: 'portfólio, desenvolvedor, aplicação, aplicativos, react js, react native, nodejs, javascript, desenvolvedor de aplicativos, apk, ipa, android, ios, iphone, aplicativo, fullstack, postgres, sql, oracle',
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:image`,
      content: '/images/banner-image-1.png',
    },
    {
      property: `og:url`,
      content: 'https://desenvolvedordeaplicativos.ga',
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      property: `twitter:site`,
      content: 'https://desenvolvedordeaplicativos.ga',
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `pt-br`,
  meta: [],
  description: ``,
};
