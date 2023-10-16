import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white  px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="px-4 rounded-3xl text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("Green")}
            className="px-4 rounded-3xl text-white shadow-lg"
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("Yellow")}
            className="px-4 rounded-3xl text-black shadow-lg"
            style={{ backgroundColor: "Yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("Blue")}
            className="px-4 rounded-3xl text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("Pink")}
            className="px-4 rounded-3xl text-black shadow-lg"
            style={{ backgroundColor: "Pink" }}
          >
            Pink
          </button>

          <button
            onClick={() => setColor("Lavender")}
            className="px-4 rounded-3xl text-black shadow-lg"
            style={{ backgroundColor: "Lavender" }}
          >
            Lavender
          </button>

          <button
            onClick={() => setColor("Black")}
            className="px-4 rounded-3xl text-white shadow-lg"
            style={{ backgroundColor: "Black" }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
