import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Nav = (props) => {
  const positionlist = ["탑", "미드", "정글", "원딜", "서폿"];
  const homenavigate = useNavigate()
  const gotohome = ()=>{
      homenavigate('/')
  }
  return (
    <div>
      <div>
        <Link to="/login">
        <div className="login-button">
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
        </Link>
      </div>
      <div className="imgbox">
        <img src="/images/lol-logo.png" height={100}  onClick={gotohome}/>
      </div>
      <div className="position-area">
        <ul className="position-list">
          {positionlist.map((item) => (
            <li>{item}</li>
          ))}
        </ul>

        <div className="search-box">
            <FontAwesomeIcon icon={faSearch}/>
            <input type="text" placeholder="챔피언 검색"/>
        </div>
      </div>
    </div>
  );
};

export default Nav;
