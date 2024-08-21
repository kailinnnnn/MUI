import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./pages/Authentication/Authentication.jsx";
import MachineLearning from "./pages/MachineLearning/MachineLearning.jsx";
import Hosting from "./pages/Hosting/Hosting.jsx";
import Functions from "./pages/Functions/Functions.jsx";
import Database from "./pages/Database/Database.jsx";
import Storage from "./pages/Storage/Storage";
import { ThemeProvider } from "@mui/material/styles";
import { dashboardTheme } from "./dashboardTheme";

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={dashboardTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="authentication" element={<Authentication />} />
          <Route path="database" element={<Database />} />
          <Route path="functions" element={<Functions />} />
          <Route path="hosting" element={<Hosting />} />
          <Route path="machine-learning" element={<MachineLearning />} />
          <Route path="storage" element={<Storage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

reportWebVitals();
