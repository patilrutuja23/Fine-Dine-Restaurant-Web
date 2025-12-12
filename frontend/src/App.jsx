import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import Home from "./Pages/Home";
import ReservationPage from "./Pages/ReservationPage";
import Success from "./Pages/Success";
import NotFound from "./Pages/NotFound";




const App = () => {
  return <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/reservation" element={<ReservationPage/>} />
      <Route path="/success" element={<Success/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>

      <Toaster/>

  </Router>
};


export default App;