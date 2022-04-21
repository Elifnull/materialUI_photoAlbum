import React from "react";
import CreatePhoto from "./components/CreatePhoto";
import PhotoPage from "./components/PhotoPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditPhoto from "./components/EditPhoto";
import ViewPhoto from "./components/ViewPhoto";

const App = () => { //arrow notation test 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PhotoPage/>}/>
        <Route path="/create" element={<CreatePhoto/>}/>
        <Route path="/edit/:id" element={<EditPhoto/>} />
        <Route path="/view/:id" element={<ViewPhoto/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
