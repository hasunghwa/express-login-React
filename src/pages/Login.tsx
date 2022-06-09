import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { login, loginCheck } from '../api/api';
import Seo from '../Layout/Seo';
import './login.css';
interface ILogin {
  id: string,
  psword: string,
}

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<ILogin>({ id: "", psword: "" });

  useEffect(() => {
    async function isLogin() { 
      const { isLogined, loginData } = await loginCheck();
      if(isLogined) {
        //console.log(loginData); 로그인 데이터 저장
        navigate('/');
      }   
    }      
    isLogin();
  }, []);

  const loginHandler = async (Userdata: ILogin) => {
    const res = await login(Userdata);
    if(res.success) {
      navigate('/');
    } else {
      alert(res.msg);
    }
  }

  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.id === "") return alert("아이디를 입력해주세요.");
    if (inputValue.psword === "") return alert("비밀번호를 입력해주세요");
    loginHandler(inputValue);    
  }

  return (
    <>
      <Seo title="로그인 페이지"/>
      <div className="login-page">
        <div className="form">
          <form className="login-form" onSubmit={(e) => onLogin(e)}>
            <input id="id" type="text" onChange={(e) => setInputValue({id: e.target.value, psword: inputValue.psword})}placeholder="아이디" />
            <input id="psword" type="password" onChange={(e) => setInputValue({id: inputValue.id, psword: e.target.value})}placeholder="비밀번호" />
            <button type='submit' id="button">login</button>
            <p className="message">Not registered? <Link to="/register">Create an account</Link></p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;