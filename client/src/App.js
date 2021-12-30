import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginAndRegister from "./loginAndRegister/LoginAndRegister"
import Login from "./loginAndRegister/Login"
import './styles.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginAndRegister innerComponent={<Login/>}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
