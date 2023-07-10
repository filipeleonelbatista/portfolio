import { useI18n } from "hooks/useI18n";
import Head from "next/head";
import { useMemo } from "react";

export default function SEO() {
  const { currentLanguage, languagesObject } = useI18n();

  const selectedLanguage = useMemo(() => {
    return currentLanguage === 'pt' ? languagesObject.pt : languagesObject.en
  }, [currentLanguage])
  
  return (
    <Head>
      <title>{selectedLanguage.seo_title}</title>
      {/* SEO TRADICIONAL */}
      <meta
        name="title"
        content={selectedLanguage.seo_title}
      />
      <meta name="robots" content="index" />
      <meta
        name="keywords"
        content="portfólio, desenvolvedor, aplicação, aplicativos, react js, react native, nodejs, javascript, desenvolvedor de aplicativos, apk, ipa, android, ios, iphone, aplicativo, fullstack, postgres, sql, oracle"
      />

      <meta
        name="description"
        content={selectedLanguage.seo_description}
      />
      <link rel="canonical" href="https://filipeleonelbatista.vercel.app" />
      <meta
        name="author"
        content={selectedLanguage.seo_title}
      />
      <meta name="robots" content="index" />

      <meta
        itemProp="name"
        content={selectedLanguage.seo_title}
      />
      <meta
        itemProp="description"
        content={selectedLanguage.seo_description}
      />
      <meta itemProp="image" content="https://filipeleonelbatista.vercel.app/images/header.png" />

      <meta
        property="og:title"
        content={selectedLanguage.seo_title}
      />
      <meta
        property="og:description"
        content={selectedLanguage.seo_description}
      />
      <meta
        property="og:url"
        content="https://filipeleonelbatista.vercel.app"
      />
      <meta
        property="og:site_name"
        content={selectedLanguage.seo_title}
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://filipeleonelbatista.vercel.app/images/header.png" />

      <meta
        name="twitter:title"
        content={selectedLanguage.seo_title}
      />
      <meta
        name="twitter:description"
        content={selectedLanguage.seo_description}
      />
      <meta
        name="twitter:url"
        content="https://filipeleonelbatista.vercel.app"
      />
      <meta
        name="twitter:site"
        content="https://filipeleonelbatista.vercel.app"
      />
      <meta
        name="twitter:creator"
        content={selectedLanguage.seo_title}
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content="https://filipeleonelbatista.vercel.app/images/header.png" />
    </Head>
  );
}

