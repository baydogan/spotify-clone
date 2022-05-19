import { useState, useEffect } from "react";

const ItemCard = ({ item }) => {
  const [image, setImage] = useState(null);
  useEffect(() => {
    if (item.images?.length > 0) {
      setImage(item.images[0].url);
    } else if (item.album?.images?.length > 0) {
      setImage(item.album.images[0].url);
    }
  }, [item.images]);

  return (
    <div className="w-48 h-72 p-3 bg-[#181818] hover:bg-[#282828] rounded-md hover:cursor-pointer transition-all duration-500">
      <img
        src={image}
        alt=""
        className={item.type === "artist" ? " w-48  shadow rounded-full" : "w-48 h-48 rounded-sm"}
      />
      <div className="mt-2 space-y-2">
        <h1 className="text-sm font-semibold text-white tracking-wide mt-2">{item.name}</h1>
        {
          item.type === "artist" &&
          <h2 className="text-xs tracking-wide text-gray-300 capitalize hover:underline ">{item.type}</h2>
        }
        {
          item.type === "track" &&
          <h2 className="text-xs tracking-wide text-gray-300 capitalize hover:underline ">{item.artists[0].name}</h2>
        }
      </div>
    </div>
  );
};

export default ItemCard;
