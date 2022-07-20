import React from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import App from "./views/App";
import { RecoilRoot } from "recoil";
const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
    <React.StrictMode>
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </React.StrictMode>
);
