import "./App.css";
import React from "react";
import Choose__block from "./choose-module/choose__module";
import SummaryPage from "./SummaryPage";
import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'
import { CustomizationProvider, useCustomization } from './contexts/Customization';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="options__wrapper">
      <Router>
        <CustomizationProvider>
        <div className="option-left">
            <div className="App">
              <Canvas>
                <color attach="background" args={["#213547"]} />
                <Experience />
              </Canvas>
            </div>
          </div>
          <SummaryPage />
        </CustomizationProvider>
        
      </Router>

    </div>
  );
}

export default App;
