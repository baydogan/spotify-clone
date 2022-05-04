import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();

if (localStorage.getItem("access_token")) {
  spotifyApi.setAccessToken(localStorage.getItem("access_token"));
}

export const getMyRecentlyPlayedTracks = async () => {
  return spotifyApi.getMyRecentlyPlayedTracks({ limit: 50 });
};
