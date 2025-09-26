import React, { useEffect, useState } from "react"

import Count from "./counter/Count"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./form/Login"
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Count/>}></Route>
      <Route path= "/login" element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
