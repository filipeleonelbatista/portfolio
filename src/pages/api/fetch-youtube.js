import axios from "axios";
import xml2js from "xml-js";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const channelID = "UCYUeJiqZCXcABWukG9RvQtw";
    const youtubeRSS = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelID}`;

    const { data } = await axios.get(youtubeRSS);
    const jsonData = xml2js.xml2json(data, { compact: true, spaces: 4 });
    const videoData = JSON.parse(jsonData.replace("JSON do feed XML do YouTube: ", ""));

    res.status(200).json({ lastVideoId: videoData.feed.entry[0]["yt:videoId"]._text });
  }
}
