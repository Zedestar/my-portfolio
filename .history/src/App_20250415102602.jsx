import React from "react";
import MyBook from "./components/MyBook";
import "./index.css";
import BrownWooden from "./assets/images/brownWooden.png";

// Styling the background brownWooden color using the csss
const backGroundTextures = {
  backgroundImage: `url(${BrownWooden})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  width: "100%",
};
function App() {
  return (
    <div
      style={backGroundTextures}
      className="h-full w-full flex justify-center  bg-primary"
    >
      <MyBook />
    </div>
  );
}

export default App;
