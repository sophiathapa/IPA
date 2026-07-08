import React from "react";
const beerOptions = [
  {
    name: "On Tap",
    detail: "",
    image: "/beer-tab.png",
    positiion: "col-start-1",
  },
  {
    name: "22 oz Bottle",
    detail: "6-Pack",
    image: "/large-bottle.png",
    positiion: "col-start-2",
  },
  {
    name: "12 oz Bottle",
    detail: "6- or 12-Pack",
    positiion: "col-start-3",
  },
  {
    name: "12 oz Can",
    detail: "",
    image: "/small-can.png",
    positiion: "col-start-4",
  },
  {
    name: "19.2 oz Can",
    detail: "",
    image: "/big-can.png",
    positiion: "col-start-5",
  },
];

const Options = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-20 p-5">
      <div className="flex flex-col items-center justify-center gap-5">
        <span className="font-caveat text-3xl">Availability</span>
        <h1>YEAR ROUND</h1>
      </div>
      <div className="grid grid-cols-5 w-full justify-center items-end">
        {beerOptions.map((option, index) => (
          <div key={index} className={`flex flex-col items-center justify-end gap-5 ${option.positiion}`}>
            {option.image && <img src={option.image} alt={option.name} className="w-full h-auto" />}
            <p>{option.name}</p>
            <p className="min-h-[20px] font-bold">{option.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Options;
