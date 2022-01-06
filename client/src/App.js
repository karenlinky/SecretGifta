import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppContext } from "./AppContext"
import LoginAndRegister from "./loginAndRegister/LoginAndRegister"
import Login from "./loginAndRegister/Login"
import Register from "./loginAndRegister/Register"
import EventList from "./eventList/EventList"
import Modal from "./functionalComponents/modal/Modal"
import useModal from "./functionalComponents/modal/useModal"
import './styles.css'

function App() {
  const modalContext = useModal();

  const appContextValue = {
    ...modalContext,
  }
  
  return (
    <div className="App">
      <AppContext.Provider value={appContextValue}>
        <Modal/>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginAndRegister innerComponent={<Login/>}/>} />
            <Route path="/register" element={<LoginAndRegister innerComponent={<Register/>}/>} />
            <Route path="/home" element={<EventList/>} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
