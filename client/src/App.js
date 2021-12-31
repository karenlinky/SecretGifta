import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginAndRegister from "./loginAndRegister/LoginAndRegister"
import Login from "./loginAndRegister/Login"
import Register from "./loginAndRegister/Register"
import './styles.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginAndRegister innerComponent={<Login/>}/>} />
          <Route path="/register" element={<LoginAndRegister innerComponent={<Register/>}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
