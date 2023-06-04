import React from 'react';

import { DataName, DataInput, CheckValue, InputContainer, EmailContainer, EmailData, EmailButton } from '@src/pages/userPage/style';

interface ErrorType {
	data: string, 
	submit: boolean,
	errorMessage: {
		existMessage: string,
		validMessage?: string,
	},
	passwordData?: string,
	validFn?: (data: string) => boolean | null,
	validPassword?: (password: string) => boolean | undefined,
}

interface InputContainerProps {
  mypage?: string | undefined;
  myInfo?: any;
  submit: boolean;
  dataName: string;
  inputType: string;
  name: string;
  placeholder: string;
  value: string;
  onChangeFn: any;
  errorMessage: {
		existMessage: string,
		validMessage?: string,
	};
  validFn?: (data: string) => boolean | null;
  passwordData?: string;
  validPassword?: (password: string) => boolean | undefined;
}

const InputForm = ({
  mypage,
  myInfo,
  submit,
  dataName,
  inputType,
  name,
  placeholder,
  value,
  onChangeFn,
  errorMessage,
  validFn,
  passwordData,
  validPassword,
}: InputContainerProps) => {

  const getError = ({
    data,
    submit,
    errorMessage,
    passwordData,
    validFn,
    validPassword,
  }: ErrorType) => {
    switch (true) {
      case data && validFn && !validFn(data):
        return <CheckValue>{errorMessage.validMessage}</CheckValue>;
      case data && validPassword && !validPassword(data):
        return <CheckValue>{errorMessage.validMessage}</CheckValue>;
      case data && passwordData && data !== passwordData:
        return <CheckValue>{errorMessage.validMessage}</CheckValue>;
      case !submit:
        return "";
      case data === "":
        return <CheckValue>{errorMessage.existMessage}</CheckValue>;
      default:
        return "";
    }
  };

  return (
    <InputContainer>
      {name !== "email" ? 
      <>
        <DataName>{dataName}</DataName>
        <DataInput
          readOnly={mypage ? true : false}
          type={inputType}
          name={name}
          placeholder={placeholder}
          className={submit ? 'submit' : ''}
          onChange={onChangeFn}
          value={mypage ? myInfo[name] : value}
        />
        {getError({ data: value, submit, errorMessage, validFn: validFn, validPassword: validPassword, passwordData: passwordData })}
      </>
    : <>
        <DataName>{dataName}</DataName>
        <EmailContainer
          className={submit && value === ""? 'submit' : '' }>
          <EmailData
            readOnly={mypage ? true : false}
            type={inputType}
            name={name}
            placeholder={placeholder}
            onChange={onChangeFn}
            value={mypage ? myInfo[name] : value}
          />
          <EmailButton mypage={mypage}>중복 확인</EmailButton>
        </EmailContainer>
        {getError({ data: value, submit, errorMessage, validFn: validFn, validPassword: validPassword, passwordData: passwordData })}
      </>}
    </InputContainer>
  );
};

export default InputForm;
