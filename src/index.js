import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import "./junk.css";
import "./junk.js";
import { menuConfig } from "./menus.js";

import {Navbar} from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Navbar menuConfig={menuConfig}  />
  </StrictMode>
);