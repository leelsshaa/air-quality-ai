import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import AQIMap from "./pages/AQIMap/AQIMap";
import Forecast from "./pages/Forecast/Forecast";
import SourceAnalysis from "./pages/SourceAnalysis/SourceAnalysis";
import Recommendations from "./pages/Recommendations/Recommendations";
import HealthAdvisory from "./pages/HealthAdvisory/HealthAdvisory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/map" element={<AQIMap />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/source-analysis" element={<SourceAnalysis />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/health-advisory" element={<HealthAdvisory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;