import { useI18n } from "hooks/useI18n";
import Head from "next/head";

export default function SEO() {
  const { currentLanguageObject } = useI18n()
  
  return (
    <Head>
      <title>{currentLanguageObject.seo_title}</title>
      {/* SEO TRADICIONAL */}
      <meta
        name="title"
        content={currentLanguageObject.seo_title}
      />
      <meta name="robots" content="index" />
      <meta
        name="keywords"
        content="portfólio, desenvolvedor, aplicação, aplicativos, react js, react native, nodejs, javascript, desenvolvedor de aplicativos, apk, ipa, android, ios, iphone, aplicativo, fullstack, postgres, sql, oracle"
      />

      <meta
        name="description"
        content={currentLanguageObject.seo_description}
      />
      <link rel="canonical" href="https://desenvolvedordeaplicativos.com.br" />
      <meta
        name="author"
        content={currentLanguageObject.seo_title}
      />
      <meta name="robots" content="index" />

      <meta
        itemProp="name"
        content={currentLanguageObject.seo_title}
      />
      <meta
        itemProp="description"
        content={currentLanguageObject.seo_description}
      />
      <meta itemProp="image" content="/images/header.png" />

      <meta
        property="og:title"
        content={currentLanguageObject.seo_title}
      />
      <meta
        property="og:description"
        content={currentLanguageObject.seo_description}
      />
      <meta
        property="og:url"
        content="https://desenvolvedordeaplicativos.com.br"
      />
      <meta
        property="og:site_name"
        content={currentLanguageObject.seo_title}
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/images/header.png" />

      <meta
        name="twitter:title"
        content={currentLanguageObject.seo_title}
      />
      <meta
        name="twitter:description"
        content={currentLanguageObject.seo_description}
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
        content={currentLanguageObject.seo_title}
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content="/images/header.png" />
    </Head>
  );
}

