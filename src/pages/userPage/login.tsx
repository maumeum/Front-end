import React, {useState} from "react";
import {LoginSection, LogoContainer, LogoImage, LoginForm, EmailInput, PasswordInput, LoginButton, CheckEmail, SignUpButton} from "./style"

import mainLogo from "../../assets/icons/mainlogo.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkEmail, setCheckEmail] = useState(true);

  //이메일 value
  const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  //비밀번호 value
  const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("이메일과 패스워드를 모두 입력해주세요.");
    }

    //이메일 형식 검사
    const regex = /^[a-z0-9\.\-_]+@([a-z0-9\-]+\.)+[a-z]{2,6}$/;
    if (!regex.test(email)) {
      return setCheckEmail(false);
    } else {
      return setCheckEmail(true);
    }

  }

  console.log(checkEmail);

  return (
    <LoginSection>
      <LogoContainer>
        <LogoImage src={mainLogo} alt="mainLogo" />
      </LogoContainer>
      <LoginForm onSubmit={handleSubmit}>
        <EmailInput placeholder="이메일" value={email} onChange={emailChange}/>
        <PasswordInput type="password" placeholder="비밀번호" value={password} onChange={passwordChange}/>
        {!checkEmail && <CheckEmail>이메일 형식에 맞춰 입력해주세요.</CheckEmail>}
        <LoginButton type="submit">로그인</LoginButton>
        <SignUpButton to="/sign_up">회원가입</SignUpButton>
      </LoginForm> 
    </LoginSection>
  );
}

export default Login;
