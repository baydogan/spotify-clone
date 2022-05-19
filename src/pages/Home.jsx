import { getArtists, getMyRecentlyPlayedTracks, getMyRecomendations, getCategoryPlaylists } from "services/spotifyApi";
import Section from "components/Section";
import { useEffect, useState } from "react";

const Home = () => {
  const [recommendations, setRecomendations] = useState([]);
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const [playlist1, setPlaylist1] = useState([]);

  useEffect(() => {
    getMyRecentlyPlayedTracks().then((data) => {
      const temp = data.items.slice(0, 5);
      const ids = temp.map((item) => item.track.artists[0].id);
      getArtists(ids).then((data) => {
        setRecentlyPlayed(data.artists);
      });
    });

    getMyRecomendations().then((data) => {
      const temp = data.tracks.slice(0, 10);
      console.log(temp);
      setRecomendations(temp);
    });

    getCategoryPlaylists("party").then((data) => {
      console.log(data, 'data');
      setPlaylist1(data.playlists.items);
    });

    console.log(playlist1);
  }, []);

  return (
    <div className="grid gap-y-6">
      <Section title={"Recently played"} items={recentlyPlayed} />
      <Section title={"Discover something new"} items={recommendations} />
    </div>
  );
};

export default Home;
