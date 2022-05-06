import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();

if (localStorage.getItem("access_token")) {
  spotifyApi.setAccessToken(localStorage.getItem("access_token"));
}

export const getMe = async () => {
    return spotifyApi.getMe();
}

export const getMyRecentlyPlayedTracks = async () => {
  return spotifyApi.getMyRecentlyPlayedTracks({ limit: 50 });
};

export const getMyRecomendations = async () => {
  return spotifyApi.getRecommendations({
    limit: 50,
    seed_genres: "pop",
  });
};
