import { getMe } from "services/spotifyApi";
import { useEffect, useState } from "react";
import { ProfileArrow } from "Icons";

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [image, setImage] = useState();

  useEffect(() => {
    getMe().then((data) => {
      setProfile(data);
      setImage(data.images[0].url);
    });
  }, []);

  return (
    <button className="bg-black rounded-3xl h-8 pr-2 flex items-center gap-x-2 relative mt-2 hover:bg-[#282828]">
      <img className="w-8 rounded-full " src={image} alt="" />
      <h1 className="text-white text-sm font-semibold">{profile.display_name}</h1>
      <ProfileArrow className="absolute" />
    </button>
  );
};

export default Profile;
