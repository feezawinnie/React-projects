import React, { useEffect, useState } from "react"

import Count from "./counter/Count"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ToggleSwich  from "./Toggle/ToggleSwich"
import Form from "./form/form"
import List from "./List/List"
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Count/>}></Route>
      <Route path= "/switch" element={<ToggleSwich/>}></Route>
      <Route path="/Live"element={<Form/>}></Route>
      <Route path="/list" element={<List/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )    
}