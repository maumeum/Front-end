import React, {useState} from "react";
import {LoginSection, LogoContainer, LogoImage, LoginForm, EmailInput, PasswordInput, CheckEmail, CheckData, SignUpButton} from "./style"
import LargeButton from "../../components/Buttons/LargeButton";

import mainLogo from "../../assets/icons/mainlogo.svg";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkEmail, setCheckEmail] = useState<boolean>(true);
  const [checkData, setCheckData] = useState<boolean>(true);

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
    setCheckEmail(true);

    //이메일 형식 검사
    const regex = /^[a-z0-9\.\-_]+@([a-z0-9\-]+\.)+[a-z]{2,6}$/;
    if (email === "" || password === "") {
      return setCheckData(false);
    } else if (!regex.test(email)) {
      setCheckData(true);
      return setCheckEmail(false);
    } 
    setCheckData(true);
  };

  return (
    <LoginSection>
      <LogoContainer>
        <LogoImage src={mainLogo} alt="mainLogo" />
      </LogoContainer>
      <LoginForm onSubmit={handleSubmit}>
        <EmailInput placeholder="이메일" value={email} onChange={emailChange}/>
        <PasswordInput type="password" placeholder="비밀번호" value={password} onChange={passwordChange}/>
        {!checkData ? <CheckData>이메일과 비밀번호를 모두 입력해주세요.</CheckData> : !checkEmail && <CheckEmail>이메일 형식에 맞춰 입력해주세요.</CheckEmail>}
        <LargeButton type="submit">로그인</LargeButton>
        <SignUpButton to="/sign_up">회원가입</SignUpButton>
      </LoginForm> 
    </LoginSection>
  );
}

export default Login;
