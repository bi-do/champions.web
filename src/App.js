import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Champions from "./page/Champions";
import Login from "./page/Login";
import Nav from "./component/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import PrivateRoute from "./Route/PrivateRoute";
import { useEffect } from "react";

function App() {
  const [userlogin, setuserlogin] = useState(false);

  const [championdata, setchampiondata] = useState([]);

  const test = async () => {
    let url = new URL(
      "http://ddragon.leagueoflegends.com/cdn/13.16.1/data/ko_KR/champion.json"
    );

    let response = await fetch(url);

    let data = await response.json();
    const champions = Object.values(data.data);
    setchampiondata(champions);
   
  };
  
  useEffect(() => {
    test();
  }, []);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Champions championdata={championdata} setchampiondata={setchampiondata}/>} />
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
