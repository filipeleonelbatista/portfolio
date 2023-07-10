/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import { useI18n } from 'hooks/useI18n';
import { useMemo } from 'react';

export default function Logo() {
  const { currentLanguage, languagesObject } = useI18n();

  const selectedLanguage = useMemo(() => {
    return currentLanguage === 'pt' ? languagesObject.pt : languagesObject.en
  }, [currentLanguage])
  
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <Image
        src={selectedLanguage.nav_logo}
        alt={selectedLanguage.nav_logo_alt}
        title={selectedLanguage.nav_logo_alt} />
    </Link>
  );
}
