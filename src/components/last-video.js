import { useEffect, useState } from "react";
import styles from "../styles/pages/Links.module.css";
import axios from "axios";

function LastVideo() {

  const [lastVideoId, setLastVideoId] = useState(null);

  useEffect(() => {
    const executeAsync = async () => {
      try {
        const { data } = await axios.get(`${process.env.NODE_ENV === 'development' ? "http://localhost:3000" : "https://filipeleonelbatista.vercel.app"}/api/fetch-youtube`);
        setLastVideoId(data.lastVideoId);
      } catch (error) {
        console.error("Erro:", error);
      }
    }
    executeAsync();
  }, [])

  return (
    <iframe
      className={styles.videoFrame}
      src={`https://www.youtube.com/embed/${lastVideoId ?? '7VyGh_i29cE'}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{
        border: 0,
      }}
    ></iframe>
  )
}

export default LastVideo;