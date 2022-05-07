import { getMyPlayLists } from "services/spotifyApi";
import { useEffect, useState } from "react";

const Playlists = () => {
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    getMyPlayLists().then((data) => {
      setPlaylist(data.items);
    });
  }, []);

  return (
    <div className=" flex flex-col">
      {playlist &&
        playlist.map((list, index) => {
          return (
            <span className="text-gray-400 text-sm mt-3" key={index}>
              {list.name}
            </span>
          );
        })}
    </div>
  );
};

export default Playlists;
