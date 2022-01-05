// Action Creator

export const selectSong = (song) => {
  return {
    // return an action som en objekt.
    type: "SONG_SELECTED",
    payload: song,
  };
};
