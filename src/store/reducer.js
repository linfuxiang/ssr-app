import { INIT_DATA } from "./const";

const defaultState = {
  name: "default",
  desc: "default",
};

const reducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INIT_DATA:
      return { ...state, name: payload.name, desc: payload.desc };
    default:
      return state;
  }
};

export default reducer;
