import React, { useEffect, useState } from "react"

import Count from "./counter/Count"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Switch from "./ToggleSwitch/Switch"
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Count/>}></Route>
      <Route path= "/Switch" element={<Switch/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
