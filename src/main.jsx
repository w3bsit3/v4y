import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import './index.css';
import Home from './home.jsx';
import Video1 from './video1.jsx'

// Použití správného způsobu pro načítání cesty ve Vite
const path_video1 = import.meta.env.VITE_PATH_VIDEO1;

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={path_video1} element={<Video1 />} />
    </Routes>
  </HashRouter>
);
