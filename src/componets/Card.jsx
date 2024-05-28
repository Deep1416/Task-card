import { useState } from "react";

const Card = ({ name, content }) => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  return (
    <div
      className="w-72 h-80 border border-black rounded-md cursor-pointer"
      onClick={() => setToggle(!toggle)}
    >
      <div
        className={`p-5 w-full h-full ${
          toggle === true ? "bg-black  text-white" : "bg-white text-black"
        }`}
      >
        <h1 className="text-2xl font-semibold text-center p-2">{name}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
