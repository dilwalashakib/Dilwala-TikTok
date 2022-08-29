import React, { useEffect, useState } from "react";
import Video from "./Components/Video";
import {Helmet} from "react-helmet-async";
import axios from "axios";
import "./App.css";

function App() {
  const [allData, setDatas] = useState({
    loading: false,
    datas: [],
    error: ""
  });
  const {loading, datas} = allData;

  useEffect(() => {
    const fetchData = async() => {
      try {
        setDatas({
          datas: [],
          loading: true,
          error: ''
        })
        const {data: fetchValue} = await axios.get(`http://localhost:5000/video/`);
        setDatas({
          datas: fetchValue,
          loading: false,
          error: ""
        })

      } catch (err) {
        setDatas({loading: false, datas: [], error: err.message});
      }
    }
    fetchData();
  }, [])
  return (
    <div className="app">
      <Helmet>
        <title>Dilwala TikTok</title>
      </Helmet>
      <h1>Dilwala TikTok</h1>
      <div className="appVideos">

      {loading ? "LOADING..." : (
        datas.map((vdo) => (
          <Video key={vdo.url} channel={vdo.channel} description={vdo.description} song={vdo.song} like={vdo.like} msg={vdo.message} share={vdo.share} videoSrc={vdo.url} />
        ))
      )}
      </div>
    </div>
  );
  
}

export default App;
