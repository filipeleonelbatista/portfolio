import Floating from "components/floating";
import Layout from "components/layout";
import SEO from "components/seo";
import { StickyProvider } from "contexts/app/app.provider";
import { VideoProvider } from "contexts/video/video.provider";
import Banner from "sections/banner";
import theme from "theme";
import { ThemeProvider } from "theme-ui";

export default function BlogMainPage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StickyProvider>
          <VideoProvider>
            <Layout>
              <SEO />
              <Banner />

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignIgems: "center",
                  justifyContent: "center",
                  margin: "2rem 0",
                }}
              >
                <div
                  style={{
                    maxWidth: "720px",
                    width: "100%",
                    padding: "1.4rem",
                  }}
                >
                  <h2>BlogMain</h2>

                </div>
              </div>
            </Layout>
          </VideoProvider>
        </StickyProvider>
      </ThemeProvider>
      <Floating />
    </>
  );
}
