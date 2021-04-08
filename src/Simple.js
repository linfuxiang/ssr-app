import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getData } from "./store/action";

import logo from "./logo.png";
// import "./simple.css";
console.log(logo);
export default function Simple() {
  const info = useSelector((state) => state.info);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("1111");
    if (!info.name || info.name === "default") {
      dispatch(getData());
    }
  }, [dispatch, info.name]);

  return (
    <div>
      <div
        onClick={() => {
          console.log("click");
        }}
      >
        Home page {info.name}
      </div>
      <div>{info.desc}</div>
      <button
        onClick={() => {
          window.location.href = "/other";
        }}
      >
        go to other
      </button>
      <img src={logo} alt="" />
    </div>
  );
}

Simple.getData = (store) => {
  return new Promise((resolve, reject) => {
    store.dispatch(getData(resolve, reject));
  });
};
