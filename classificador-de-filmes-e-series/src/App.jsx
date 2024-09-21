import Home from "./pages/Home"
import Audiovisual from "./pages/Audiovisual"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/audiovisual/:id" element={<Audiovisual/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

