import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Nyco3D from "/Nyco3D.svg";
import storybookLogo from "/storybook.svg";
import { Button } from "./stories/Button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://my-works-3d.web.app/" target="_blank">
          <img src={Nyco3D} className="logo n3d" alt="Nyco3D logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://storybook.js.org/docs" target="_blank">
          <img
            src={storybookLogo}
            className="logo storybook"
            alt="Storybook logo"
          />
        </a>
      </div>
      <h2>N3D + Vite + React + StoryBook</h2>
      <div className="flex-wrap flex gap-2 p-3 w-full justify-center">
        <Button
          primary
          label={`count is ${count}`}
          onClick={() => setCount((count) => count + 1)}
        ></Button>
        <div className="w-full">
          <p>
            Using a custom StoryBook <code>{"<Button/>"}</code> to display count
            from React state
          </p>
        </div>
      </div>
      <p className="read-the-docs">Click on a logo to explore</p>
    </>
  );
}

export default App;
