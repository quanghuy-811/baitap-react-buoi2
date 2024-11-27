import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChangeImg from "./assets/component/ChangeImg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ChangeImg />
    </>
  );
}

export default App;
