import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Nyco3D from "/Nyco3D.svg";
import storybookLogo from "/storybook.svg";
import { Button } from "./stories/Button";
import "./App.css";
import { MyChart } from "./components/ui/MyChart";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebase = initializeApp({
  apiKey: import.meta.env.VITE_PUBLIC_FB_API_KEY,
  authDomain: import.meta.env.VITE_PUBLIC_FB_AUTH_DOM,
  projectId: import.meta.env.VITE_PUBLIC_FB_PROJ_ID,
  storageBucket: import.meta.env.VITE_PUBLIC_FB_STORAGE,
  messagingSenderId: import.meta.env.VITE_PUBLIC_FB_MESSAGE,
  appId: import.meta.env.VITE_PUBLIC_FB_APP_ID,
  measurementId: import.meta.env.VITE_PUBLIC_FB_MEASURE,
});

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
getAnalytics(firebase);
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
      <MyChart />
    </>
  );
}

export default App;
