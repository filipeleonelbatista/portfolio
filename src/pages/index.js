import Floating from 'components/floating';
import Layout from 'components/layout';
import Modal from 'components/modal';
import SEO from 'components/seo';
import { StickyProvider } from 'contexts/app/app.provider';
import { VideoProvider } from 'contexts/video/video.provider';
import React from 'react';
import Banner from 'sections/banner';
import CtaThree from 'sections/cta-three';
import CtaTwo from 'sections/cta-two';
import FavoriteCourse from 'sections/favorite-course';
import PopularCourse from 'sections/popular-course';
import theme from 'theme';
import { ThemeProvider } from 'theme-ui';

export default function IndexPage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StickyProvider>
          <VideoProvider>
            <Layout>
              <SEO
                description="Desenvolvedor de aplicativos com foco em desenvolvimento web e mobile com experiência na stack JavaScript, ReactJS, React Native e NodeJS. Tire suas idéias do papel!"
                title="Filipe Batista | Desenvolvedor de aplicativos"
              />
              <Banner />
              <CtaTwo />
              <FavoriteCourse />
              <PopularCourse />
              {/* <CtaThree /> */}
              <Modal />
            </Layout>
          </VideoProvider>
        </StickyProvider>
      </ThemeProvider>
      <Floating />
    </>
  );
}
