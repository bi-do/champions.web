import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Nav = ({userlogin,setuserlogin,setpositionstate}) => {
  const positionlist = ["Assassin", "Fighter", "Tank", "Marksman", "Mage", "Support"];
  const homenavigate = useNavigate();
  const gotohome = () => {
    setpositionstate("")
    homenavigate("/");
  };
  const userlog = () => {
    if (userlogin == true) {
      setuserlogin(!userlogin);
    } else {
      homenavigate("/login");
    }
  };

  const enterkey = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      homenavigate(`/?q=${keyword}`);
    }
  };

  const positionbutton = (item) =>{
      setpositionstate(item)
  }

  return (
    <div>
      <div>
        <div className="login-button" onClick={userlog}>
          <FontAwesomeIcon icon={faUser} />
          <div>{userlogin == true ? "로그아웃" : "로그인"}</div>
        </div>
      </div>
      <div className="imgbox">
        <img
          src="/images/lol-logo.png"
          height={100}
          alt="lol-logo"
          onClick={gotohome}
        />
      </div>
      <div className="position-area">
        <ul className="position-list">
          {positionlist.map((item) => (
            <li onClick={()=>(positionbutton(item))}>{item}</li>
          ))}
        </ul>

        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="챔피언 검색" onKeyDown={enterkey} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
