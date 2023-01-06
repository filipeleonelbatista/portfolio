/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import { useI18n } from 'hooks/useI18n';

export default function Logo() {
  const { currentLanguageObject } = useI18n();
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
        src={currentLanguageObject.nav_logo}
        alt={currentLanguageObject.nav_logo_alt}
        title={currentLanguageObject.nav_logo_alt} />
    </Link>
  );
}
