import React from "react";
import MyBook from "./components/MyBook";
import "./index.css";
import BrownWooden from "./assets/images/brownWooden.png";

// Styling the background brownWooden color using the csss
const backGroundTextures = function App() {
  return (
    <div className="h-full w-full flex justify-center items-center bg-primary">
      <MyBook />
    </div>
  );
};

export default App;
