import React, {useState} from "react";
import LargeButton from "../../components/Buttons/LargeButton";
import {SignUpSection, SignUpForm, InputContainer, DataName, EmailContainer, EmailData, EmailButton, DataInput, CheckValue} from "./style"
import Swal from "sweetalert2"; 

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [phoneNum, setPhoneNum] = useState<string>("");
  const [submit, setSubmit] = useState<boolean>(false);

  // 이메일 value
  const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubmit(false);
    setEmail(e.target.value);
  };

  // nickname value
  const nicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubmit(false);
    setNickname(e.target.value);
  };

  // password value
  const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubmit(false);
    setPassword(e.target.value);
  };

  // checkPassword value
  const checkPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubmit(false);
    setCheckPassword(e.target.value);
  };

  // phoneNum value
  const phoneNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubmit(false);
    setPhoneNum(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    // 상태 초기화
    setSubmit(false);
    e.preventDefault();
    setSubmit(true);
    
    // 비밀번호 일치여부
    if (password !== checkPassword) {
      Swal.fire({
        icon: 'error',
        title: '비밀번호가 일치하지 않습니다.',
        confirmButtonColor: "#d33"
      })
    }

    // 회원가입 완료
    if (validEmail(email) && validPassword(password, checkPassword) && validPhoneNum(phoneNum)) {
      Swal.fire({
        title: `마음이음에 오신 것을 환영합니다!`,
        confirmButtonColor: "var(--button--color)"
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: '정보를 모두 입력해주세요.',
        confirmButtonColor: "#d33"
      })
    }
  };

  return (
    <SignUpSection>
      <SignUpForm>
        <InputContainer>
          <DataName>이메일</DataName>
          <EmailContainer>
            <EmailData type="text" placeholder="이메일을 입력해주세요." value={email} onChange={emailChange}/>
            <EmailButton>중복 확인</EmailButton>
          </EmailContainer>
          {!email && submit ? 
          (
          <CheckValue>이메일을 입력해주세요.</CheckValue>
          ) : (
            !email.match(/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
            && email
          ) ? <CheckValue>이메일 형식이 맞지 않습니다.</CheckValue> : ""}
        </InputContainer>
        <InputContainer>
          <DataName>닉네임</DataName>
          <DataInput 
          type="text" 
          placeholder="닉네임을 입력해주세요." 
          value={nickname} 
          onChange={nicknameChange}
          />
          {!nickname && submit && <CheckValue>닉네임을 입력해주세요.</CheckValue>}
        </InputContainer>
        <InputContainer>
          <DataName>비밀번호</DataName>
          <DataInput 
          type="password" 
          placeholder="비밀번호 4~20자 입력" 
          value={password} 
          onChange={passwordChange}
          />
          {!password && submit ? (
          <CheckValue>비밀번호를 입력해주세요.</CheckValue>
          ) : (
            password.length > 0 && password.length < 4 || password.length > 20
          ) ? <CheckValue>비밀번호는 최소 4자 이상 20자 이하입니다.</CheckValue> : ""}
        </InputContainer>
        <InputContainer>
          <DataName>비밀번호 확인</DataName>
          <DataInput 
          type="password" 
          placeholder="비밀번호 다시 입력" 
          value={checkPassword} 
          onChange={checkPasswordChange}
          />
          {!checkPassword && submit && <CheckValue>비밀번호 확인을 입력해주세요.</CheckValue>}
        </InputContainer>
        <InputContainer>
          <DataName>핸드폰 번호</DataName>
          <DataInput 
          type="text" 
          placeholder="핸드폰 번호('-'없이 입력)" 
          value={phoneNum} 
          onChange={phoneNumChange}
          />
          {!phoneNum && submit ? (
          <CheckValue>휴대폰 번호를 입력해주세요.</CheckValue>
          ) : (
            !phoneNum.match(/^\d+$/) && phoneNum
          ) ? <CheckValue>핸드폰번호는 숫자만 입력할 수 있습니다.</CheckValue> : ""}
        </InputContainer>
        <LargeButton onClick={clickHandler}>회원가입</LargeButton>
      </SignUpForm>
    </SignUpSection>
  );
}

export default SignUp;

// 유효성 검사 함수
const validEmail = (email: string) => {
  return (email.match(/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/) && email !== "")
};

const validPassword = (password: string, checkPassword: string) => {
  if (password !== checkPassword) {
    return false;
  }
  if (password.length >= 4 && password.length <= 20) {
    return true;
  }
};

const validPhoneNum = (phoneNum: string) => {
  return (phoneNum.match(/^\d+$/) && phoneNum !== "");
};