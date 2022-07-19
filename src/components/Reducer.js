export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQCUjik6P5Uje1VEF8IF9xYNTCF3cYP4RHTgdxA5rjwTg49s6qUsqmGlpvn3SSjTr9Y1s7etNFtdZg2E6jwegp6P0p9KYYzwYV",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLITS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
