import { useEffect, useState } from "react";
import styles from "../styles/pages/Links.module.css";
import axios from "axios";
import xml2js from 'xml-js';

export default function LastVideo() {
  const channelID = "UCYUeJiqZCXcABWukG9RvQtw";
  const youtubeRSS = `${process.env.NODE_ENV === 'development' ? "http://localhost:8080/" : ""}https://www.youtube.com/feeds/videos.xml?channel_id=${channelID}`;

  const [lastVideoId, setLastVideoId] = useState('7VyGh_i29cE');

  useEffect(() => {
    console.log(process.env.NODE_ENV)
    const executeAsync = async () => {
      try {
        const { data } = await axios.get(youtubeRSS);
        const jsonData = xml2js.xml2json(data, { compact: true, spaces: 4 });
        const videoData = JSON.parse(jsonData.replace("JSON do feed XML do YouTube: ", ""));
        console.log(videoData.feed.entry[0]["yt:videoId"]._text);
        setLastVideoId(videoData.feed.entry[0]["yt:videoId"]._text);
      } catch (error) {
        console.error("Erro ao buscar dados do feed XML do YouTube:", error);
      }
    }
    executeAsync();
  }, [])

  return (
    <iframe
      className={styles.videoFrame}
      src={`https://www.youtube.com/embed/${lastVideoId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{
        border: 0,
      }}
    ></iframe>
  )
}