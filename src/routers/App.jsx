import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Dashboard, Login, Start } from "../components";

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={ <Start /> } />
        <Route path='/welcome' element={ <Start /> } /> 
        <Route path='/login' element={ <Login /> } />\
        <Route path='/dashboard' element={ <Dashboard /> } />
      </Routes>
    </BrowserRouter>
  );
}