import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();

if (localStorage.getItem("access_token")) {
  spotifyApi.setAccessToken(localStorage.getItem("access_token"));
}

export const getMe = async () => {
  return spotifyApi.getMe();
};

export const getMyRecentlyPlayedTracks = async () => {
  return spotifyApi.getMyRecentlyPlayedTracks();
};

export const getMyPlayLists = async () => {
  return spotifyApi.getUserPlaylists();
};

export const getMyRecomendations = async () => {
  return spotifyApi.getRecommendations({
    limit: 50,
    seed_genres: "rock",
  });
};

export const getMyTopArtists = async () => {
  return spotifyApi.getMyTopArtists({
    limit: 50,
    time_range: "short_term",
  });
};

export const getMySavedTracks = async () => {
  return spotifyApi.getMySavedTracks({
    limit: 50,
  });
};

export const getArtists = async (ids) => {
  return spotifyApi.getArtists(ids);
};


export const getCategoryPlaylists = async (categoryId) => {
  return spotifyApi.getCategoryPlaylists(categoryId);
}