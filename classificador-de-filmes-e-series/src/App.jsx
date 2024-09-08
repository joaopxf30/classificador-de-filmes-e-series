import Home from "./pages/Home"
import Esportista from "./pages/Esportista"
import Treino from "./pages/Treino"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/esportista/:id" element={<Esportista/>}></Route>
          <Route path="/esportista/:id/treino/:id" element={<Treino/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

