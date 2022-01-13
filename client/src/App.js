import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppContext } from "./AppContext"
import LoginAndRegister from "./loginAndRegister/LoginAndRegister"
import Login from "./loginAndRegister/Login"
import Register from "./loginAndRegister/Register"
import Logout from "./loginAndRegister/Logout"
import EventPage from "./eventPage/EventPage"
import EditEventPage from "./eventDetailPage/EditEventPage"
import ViewEventPage from "./eventDetailPage/ViewEventPage"
import Redirect from "./Redirect"
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
            <Route path={pageLinkConstants.CREATEEVENT} element={<EditEventPage/>} />
            <Route path={pageLinkConstants.VIEWEVENT + '/:event_id'} element={<ViewEventPage/>} />
            <Route path={pageLinkConstants.LOGOUT} element={<Logout/>} />
            <Route path="*" element={<Redirect />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
