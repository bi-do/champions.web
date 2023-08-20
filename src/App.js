import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Champions from "./page/Champions";
import Login from "./page/Login";
import Nav from "./component/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import PrivateRoute from "./Route/PrivateRoute";



function App() {
  const [userlogin,setuserlogin] = useState(false);
  
  const [positionstate,setpositionstate] = useState("")

 
  return (
    <BrowserRouter>
      <Nav userlogin={userlogin} setuserlogin={setuserlogin} setpositionstate={setpositionstate} />
      <Routes>
        <Route path="/" element={<Champions positionstate={positionstate} setpositionstate={setpositionstate}/>} />
        <Route
          path="/login"
          element={<Login setuserlogin={setuserlogin} userlogin={userlogin} />}
        />
        <Route
          path="/detail/:id"
          element={<PrivateRoute userlogin={userlogin}/>}
        />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
