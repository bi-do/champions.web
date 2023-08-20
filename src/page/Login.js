import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const Login = ({setuserlogin,userlogin}) => {
  const navigate = useNavigate();

  const gotohome = (event) => {
    event.preventDefault();
    setuserlogin(!userlogin);
    navigate("/");
  };
  return (
    <div className="login-back">
      <div className="login-box">
        <div>로그인</div>
        <div>
          <div>ID</div>
          <input type="text"></input>
        </div>
        <div>
          <div>password</div>
          <input type="password"></input>
        </div>
        <form onSubmit={(event) => gotohome(event)}>
          <Button variant="dark" type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
