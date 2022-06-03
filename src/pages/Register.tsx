import React, { useState } from 'react';
import Seo from '../Layout/Seo';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';
import { register } from '../api/api';
interface IRegister {
  id: string,
  name: string,
  psword: string,
  confirmPsword?: string,
}

const Register = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<IRegister>(
    { id: "", name: "", psword: "", confirmPsword: "" }
  );

  const onRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.id === "") return alert("아이디를 입력해주세요.");
    if (inputValue.psword !== inputValue.confirmPsword) return alert("비밀번호가 일치하지 않습니다");
    
    const res = await register(inputValue);
    if(res.success) {
      navigate('/login');
    } else {
      alert(res.msg);
    }
  }

  return (
    <>
      <Seo title="회원가입 페이지"/>
      <div className="login-page">
        <div className="form">
          <form className="register-form" onSubmit={(e) => onRegister(e)}>
            <input id="id" onChange={(e) => setInputValue({...inputValue, id: e.target.value})} type="text" placeholder="아이디" />
            <input id="name" onChange={(e) => setInputValue({...inputValue, name: e.target.value})} type="text" placeholder="이름" />
            <input id="psword" onChange={(e) => setInputValue({...inputValue, psword: e.target.value})} type="password" placeholder="비밀번호" />
            <input id="confirm-psword" onChange={(e) => setInputValue({...inputValue, confirmPsword: e.target.value})} type="password" placeholder="비밀번호 확인" />
            <button type='submit' id="button">SIGN UP</button>
            <p className="message">Already registered? <Link to="/login">login</Link></p>
          </form> 
        </div>
      </div>
    </>
  );
};

export default Register;