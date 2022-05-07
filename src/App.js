import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Buffer } from "buffer";
import queryString from "query-string";

//pages
import Login from "pages/Login";
import Sidebar from "components/SideBar/SideBar";
import Content from "components/Content/Content";
import Player from "components/Player/Player";
import Home from "pages/Home";

function App() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const token = Object.fromEntries(urlSearchParams.entries());
  const localStorageToken = localStorage.getItem("access_token");

  useEffect(() => {
    if (token.code) {
      axios
        .post(
          "https://accounts.spotify.com/api/token",
          queryString.stringify({
            code: token.code,
            redirect_uri: "http://localhost:3000/",
            grant_type: "authorization_code",
          }),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization:
                "Basic " +
                new Buffer(
                  process.env.REACT_APP_SPOTIFY_CLIENT_ID + ":" + process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
                ).toString("base64"),
            },
          }
        )
        .then((res) => {
          localStorage.setItem("access_token", res.data.access_token);
        });
    }
  }, []);

  const spotifyLogin = () => {
    const url = "https://accounts.spotify.com/authorize";
    const params = {
      response_type: "code",
      client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
      scope:
        "streaming app-remote-control user-follow-read user-follow-modify ugc-image-upload user-read-private user-library-modify user-library-read user-read-email playlist-modify-private playlist-read-collaborative playlist-read-private playlist-modify-public user-read-recently-played user-top-read user-read-currently-playing user-read-playback-position user-read-playback-state user-modify-playback-state user-modify-playback-state",
      show_dialog: true,
      redirect_uri: "http://localhost:3000/",
    };
    const querryParams = new URLSearchParams(params).toString();
    window.location.href = `${url}?${querryParams}`;
  };

  const changeBackground = () => {
    console.log(window.scrollY);
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Router>
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <Player />
      <Routes>
        <Route path="/login" element={<Login spotifyLogin={spotifyLogin} />} />
      </Routes>
    </Router>
  );
}

export default App;
