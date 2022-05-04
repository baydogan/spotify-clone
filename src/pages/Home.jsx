import { getMyRecentlyPlayedTracks } from "services/spotifyApi";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    getMyRecentlyPlayedTracks().then(console.log);
  }, []);

  return <div></div>;
};

export default Home;
