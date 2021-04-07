import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("2222");
  }, []);

  return (
    <div>
      <div
        onClick={() => {
          console.log("click Ohter");
        }}
      >
        Ohter
      </div>
      <button
        onClick={() => {
          window.location.href = "/simple";
        }}
      >
        go to simple
      </button>
    </div>
  );
}
