import React from "react";
import CreatePhoto from "./components/CreatePhoto";
import PhotoPage from "./components/PhotoPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => { //arrow notation test 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PhotoPage/>}/>
        <Route path="/create" element={<CreatePhoto/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
