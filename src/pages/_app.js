import { I18nContextProvider } from 'contexts/I18nContext';
import 'rc-drawer/assets/index.css';
import 'react-modal-video/css/modal-video.min.css';
import 'swiper/swiper-bundle.min.css';
import 'typeface-dm-sans';

export default function CustomApp({ Component, pageProps }) {
  return (
    <I18nContextProvider>
      <Component {...pageProps} />
    </I18nContextProvider>
  );
}
