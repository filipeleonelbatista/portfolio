import "rc-drawer/assets/index.css";
import "react-modal-video/css/modal-video.min.css";
import "swiper/swiper-bundle.min.css";
import "typeface-dm-sans";
import { ChallengesContextProvider } from "contexts/ChallengesContext";
import { I18nContextProvider } from "contexts/I18nContext";

export default function CustomApp({ Component, pageProps }) {
  return (
    <I18nContextProvider>
      <ChallengesContextProvider>
        <Component {...pageProps} />
      </ChallengesContextProvider>
    </I18nContextProvider>
  );
}
