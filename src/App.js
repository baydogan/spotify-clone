import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Buffer } from "buffer";
import queryString from "query-string";

//pages
import Login from "pages/Login";

function App() {
  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const token = Object.fromEntries(urlSearchParams.entries());

    if (token.code) {
      axios.post(
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
              new Buffer("f3d3f4d889e3492ead16621f6f03d90f" + ":" + "a41e67ce08ee4ac994c0a92a656132df").toString(
                "base64"
              ),
          },
        }
      );
    }
  }, []);

  const spotifyLogin = () => {
    const url = "https://accounts.spotify.com/authorize";
    const params = {
      response_type: "code",
      client_id: "f3d3f4d889e3492ead16621f6f03d90f",
      scope:
        "user-read-private user-read-email playlist-modify-private playlist-read-collaborative playlist-read-private playlist-modify-public user-read-recently-played user-top-read user-read-playback-position user-read-playback-state user-modify-playback-state user-modify-playback-state",
      show_dialog: true,
      redirect_uri: "http://localhost:3000/",
    };
    const querryParams = new URLSearchParams(params).toString();
    window.location.href = `${url}?${querryParams}`;
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login spotifyLogin={spotifyLogin} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
