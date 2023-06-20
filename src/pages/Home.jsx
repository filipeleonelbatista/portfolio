import Floating from "components/floating";
import Layout from "components/layout";
import Modal from "components/modal";
import SEO from "components/seo";
import { StickyProvider } from "contexts/app/app.provider";
import { VideoProvider } from "contexts/video/video.provider";
import Banner from "sections/banner";
import CtaTwo from "sections/cta-two";
import FavoriteCourse from "sections/favorite-course";
import OtherProjects from "sections/other-projects";
import PopularCourse from "sections/popular-course";
import theme from "theme";
import { ThemeProvider } from "theme-ui";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StickyProvider>
          <VideoProvider>
            <Layout>
              <SEO />
              <Banner />
              <CtaTwo />
              <FavoriteCourse />
              <PopularCourse />
              <OtherProjects />
              <Modal />
            </Layout>
          </VideoProvider>
        </StickyProvider>
      </ThemeProvider>
      <Floating />
    </>
  );
}
