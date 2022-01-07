import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppContext } from "./AppContext"
import LoginAndRegister from "./loginAndRegister/LoginAndRegister"
import Login from "./loginAndRegister/Login"
import Register from "./loginAndRegister/Register"
import EventPage from "./eventPage/EventPage"
import Modal from "./functionalComponents/modal/Modal"
import useModal from "./functionalComponents/modal/useModal"
import { pageLinkConstants } from "./constants/pageLinkConstants"
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
            <Route path={pageLinkConstants.LOGIN} element={<LoginAndRegister innerComponent={<Login/>}/>} />
            <Route path={pageLinkConstants.REGISTER} element={<LoginAndRegister innerComponent={<Register/>}/>} />
            <Route path={pageLinkConstants.HOME} element={<EventPage/>} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
