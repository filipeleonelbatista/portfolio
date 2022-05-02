import React from "react";
import Head from "next/head";

export default function SEO({
  description = "Desenvolvedor de aplicativos com foco em desenvolvimento web e mobile com experiência na stack JavaScript, ReactJS, React Native e NodeJS. Tire suas idéias do papel!",
  author = "Filipe Batista",
  meta,
  title = "Filipe Batista | Desenvolvedor de aplicativos",
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
      content:
        "portfólio, desenvolvedor, aplicação, aplicativos, react js, react native, nodejs, javascript, desenvolvedor de aplicativos, apk, ipa, android, ios, iphone, aplicativo, fullstack, postgres, sql, oracle",
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
      content: "/images/header.png",
    },
    {
      property: `og:url`,
      content: "https://desenvolvedordeaplicativos.com.br",
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      property: `twitter:site`,
      content: "https://desenvolvedordeaplicativos.com.br",
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
      {/* SEO TRADICIONAL */}
      <meta
        name="title"
        content="Filipe Batista | Desenvolvedor de aplicativos"
      />
      <meta name="robots" content="index" />
      <meta
        name="keywords"
        content="portfólio, desenvolvedor, aplicação, aplicativos, react js, react native, nodejs, javascript, desenvolvedor de aplicativos, apk, ipa, android, ios, iphone, aplicativo, fullstack, postgres, sql, oracle"
      />

      <meta
        name="description"
        content="Desenvolvedor de aplicativos com foco em desenvolvimento web e mobile com experiência na stack JavaScript, ReactJS, React Native e NodeJS. Tire suas idéias do papel!"
      />
      <link rel="canonical" href="https://desenvolvedordeaplicativos.com.br" />
      <meta
        name="author"
        content="Filipe Batista | Desenvolvedor de aplicativos"
      />
      <meta name="robots" content="index" />

      <meta
        itemProp="name"
        content="Filipe Batista | Desenvolvedor de aplicativos"
      />
      <meta
        itemProp="description"
        content="Desenvolvedor de aplicativos com foco em desenvolvimento web e mobile com experiência na stack JavaScript, ReactJS, React Native e NodeJS. Tire suas idéias do papel!"
      />
      <meta itemProp="image" content="/images/header.png" />

      <meta
        property="og:title"
        content="Filipe Batista | Desenvolvedor de aplicativos"
      />
      <meta
        property="og:description"
        content="Desenvolvedor de aplicativos com foco em desenvolvimento web e mobile com experiência na stack JavaScript, ReactJS, React Native e NodeJS. Tire suas idéias do papel!"
      />
      <meta
        property="og:url"
        content="https://desenvolvedordeaplicativos.com.br"
      />
      <meta
        property="og:site_name"
        content="Filipe Batista | Desenvolvedor de aplicativos"
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/images/header.png" />

      <meta
        name="twitter:title"
        content="Filipe Batista | Desenvolvedor de aplicativos"
      />
      <meta
        name="twitter:description"
        content="Desenvolvedor de aplicativos com foco em desenvolvimento web e mobile com experiência na stack JavaScript, ReactJS, React Native e NodeJS. Tire suas idéias do papel!"
      />
      <meta
        name="twitter:url"
        content="https://desenvolvedordeaplicativos.com.br"
      />
      <meta
        name="twitter:site"
        content="https://desenvolvedordeaplicativos.com.br"
      />
      <meta
        name="twitter:creator"
        content="Filipe Batista | Desenvolvedor de aplicativos"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content="/images/header.png" />

      {/* {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))} */}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `pt-br`,
  meta: [],
  description: ``,
};
