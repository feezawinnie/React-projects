import React, { useEffect, useState } from "react"

import Count from "./counter/Count"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ToggleSwich  from "./toggle/ToggleSwich"
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Count/>}></Route>
      <Route path= "/switch" element={<ToggleSwich/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
