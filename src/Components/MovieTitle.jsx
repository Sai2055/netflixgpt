import React from "react";

export default function MovieTitle({ title, overview }) {
  return (
    <div className="pt-30 px-12">
      <h1 className="text-4xl py-4 font-bold">{title}</h1>
      <p className="w-1/3">{overview}</p>
      <div className="my-4">
        <button className="p-1.5 px-8 bg-black text-white border-1 mr-2 opacity-50">
          Play
        </button>
        <button className="p-1.5 px-8  bg-black text-white border-1 mr-2 opacity-50">
          More info
        </button>
      </div>
    </div>
  );
}
