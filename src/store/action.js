//actions.js
// import axios from "axios";
import { INIT_DATA } from "./const";

//普通action
const initData = (data) => ({
  type: INIT_DATA,
  payload: data,
});

export const getData = (resolve) => {
  return (dispatch) => {
    return setTimeout(() => {
      dispatch(
        initData({
          name: "longlin",
          desc: "FE",
        })
      );
      resolve && resolve();
    }, 500);
  };
};
