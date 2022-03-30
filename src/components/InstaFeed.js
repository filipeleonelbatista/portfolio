import { useEffect, useState } from "react";
import styles from "../styles/components/InstaFeed.module.css";

export default function InstaFeed() {
  const [user, setUser] = useState();
  const [posts, setPosts] = useState();

  useEffect(() => {
    // const executeAsync = async () => {
    // const url = "https://www.instagram.com/filipeleonelbatista/?__a=1";
    // const proxy = "https://cors-anywhere.herokuapp.com/";
    // const result = await axios.get(
    //   process.env.NODE_ENV === "development" ? proxy + url : url,
    //   {
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    //     },
    //   }
    // );
    // const userInfo = {
    //   id: result.data.graphql.user.id,
    //   fbid: result.data.graphql.user.fbid,
    //   full_name: result.data.graphql.user.full_name,
    //   username: result.data.graphql.user.username,
    //   avatar: result.data.graphql.user.profile_pic_url,
    // };
    // const postsArray =
    //   result.data.graphql.user.edge_owner_to_timeline_media.edges;
    // setUser(userInfo);
    // setPosts(postsArray);
    // };
    // executeAsync();
  }, []);

  // if (!user || !posts) return null;
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>Acompanhe nas redes sociais</h3>
        <p className={styles.subtitle}>Últimas postagens</p>
        <div className={styles.postList}>
          <div className={styles.postContainer}>
            <div
              title={"filipeleonelbatista"}
              style={{
                background: `url(https://desenvolvedordeaplicativos.vercel.app/_next/static/images/banner-image-1-a66ee6f73d07bb1017577a288c87ef6a.png) no-repeat center center`,
                width: "100%",
                height: "20rem",
                backgroundSize: "cover",
              }}
            ></div>
            <div className={styles.postFooter}>
              <div
                title={"filipeleonelbatista"}
                style={{
                  background: `url(https://desenvolvedordeaplicativos.vercel.app/_next/static/images/banner-image-1-a66ee6f73d07bb1017577a288c87ef6a.png) no-repeat center center`,
                  borderRadius: "50%",
                  width: "2.4rem",
                  height: "2.4rem",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className={styles.postFooterContent}>
                <strong className={styles.usernameFooter}>
                  filipeleonelbatista
                </strong>
                <p className={styles.descriptionFooter}>
                  Testando a postagem que ...
                </p>
              </div>
            </div>
          </div>
          <div className={styles.postContainer}>
            <div
              title={"filipeleonelbatista"}
              style={{
                background: `url(https://desenvolvedordeaplicativos.vercel.app/_next/static/images/banner-image-1-a66ee6f73d07bb1017577a288c87ef6a.png) no-repeat center center`,
                width: "100%",
                height: "20rem",
                backgroundSize: "cover",
              }}
            ></div>
            <div className={styles.postFooter}>
              <div
                title={"filipeleonelbatista"}
                style={{
                  background: `url(https://desenvolvedordeaplicativos.vercel.app/_next/static/images/banner-image-1-a66ee6f73d07bb1017577a288c87ef6a.png) no-repeat center center`,
                  borderRadius: "50%",
                  width: "2.4rem",
                  height: "2.4rem",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className={styles.postFooterContent}>
                <strong className={styles.usernameFooter}>
                  filipeleonelbatista
                </strong>
                <p className={styles.descriptionFooter}>
                  Testando a postagem que ...
                </p>
              </div>
            </div>
          </div>
          <div className={styles.postContainer}>
            <div
              title={"filipeleonelbatista"}
              style={{
                background: `url(https://desenvolvedordeaplicativos.vercel.app/_next/static/images/banner-image-1-a66ee6f73d07bb1017577a288c87ef6a.png) no-repeat center center`,
                width: "100%",
                height: "20rem",
                backgroundSize: "cover",
              }}
            ></div>
            <div className={styles.postFooter}>
              <div
                title={"filipeleonelbatista"}
                style={{
                  background: `url(https://desenvolvedordeaplicativos.vercel.app/_next/static/images/banner-image-1-a66ee6f73d07bb1017577a288c87ef6a.png) no-repeat center center`,
                  borderRadius: "50%",
                  width: "2.4rem",
                  height: "2.4rem",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className={styles.postFooterContent}>
                <strong className={styles.usernameFooter}>
                  filipeleonelbatista
                </strong>
                <p className={styles.descriptionFooter}>
                  Testando a postagem que ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
