import SpotifyLogo from "assets/SpotifyLogo";

const Login = ({spotifyLogin}) => {
  return (
    <div className="flex items-center justify-center h-screen flex-col gap-y-4">
      <SpotifyLogo width="100px" height="100px" />
      <button onClick={spotifyLogin} className="p-3 bg-green-500 rounded-full text-white">
        Login with Spotify
      </button>
    </div>
  );
};

export default Login;
