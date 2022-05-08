import { getMyTopArtists, getMyRecentlyPlayedTracks } from "services/spotifyApi";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    getMyRecentlyPlayedTracks().then((data) => {
      console.log(data);
    });
  }, []);
  return (
    <div>
   
    </div>
  );
};

export default Home;
