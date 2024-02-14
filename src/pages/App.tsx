import React from 'react';
import './App.scss';
import {Route, Routes} from "react-router-dom";
import PublicLayout from "../routes/PublicLayout";
import HomePage from "./HomePage/HomePage";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route element={<PublicLayout/>}>
            <Route path="/" element={<HomePage/>}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
