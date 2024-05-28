import { useState } from "react";
import "./App.css";
import Card from "./componets/Card";

function App() {
  return (
    <>
      <div className="max-w-screen-xl m-auto">
        <div className="mt-10">
          <h1 className="text-center text-4xl font-bold mb-8y ">
            Multiple Card
          </h1>

          <div className="grid grid-cols-3 gap-8 place-items-center">
            <Card
              name={"Card 1"}
              content={
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint tempore perspiciatis id praesentium! Aliquam eum commodi voluptas cum, quisquam cupiditate aperiam nisi sit quo eos. Reprehenderit, fuga ab, voluptas sit consectetur.!"
              }
            />
            <Card
              name={"Card 2"}
              content={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consequuntur quia perferendis illo magnam possimus dolorum qui, architecto velit doloribus hic odit libero praesentium ipsum iusto, iure soluta ut vel?"
              }
            />
            <Card
              name={"Card 3"}
              content={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor reprehenderit, provident deleniti a ut ea facere tempore consectetur modi corporis?"
              }
            />
            <Card
              name={"Card 4"}
              content={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos dolorem animi blanditiis ut? Soluta, consectetur! Itaque dignissimos molestiae optio repellendus earum necessitatibus consequuntur autem assumenda!"
              }
            />
            <Card
              name={"Card 5"}
              content={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis iure, alias ipsa, repellendus praesentium quam labore ducimus, temporibus cum doloremque recusandae pariatur error! Animi aliquid praesentium?"
              }
            />
            <Card
              name={"Card 6"}
              content={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, perspiciatis."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
