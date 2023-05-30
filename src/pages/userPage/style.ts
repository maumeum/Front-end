import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const LoginSection = styled.div`
  position: absolute;
  left: 68.5rem;
  right: 68.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
  width: 55rem;
  height: 75rem;
`

export const LogoContainer = styled.div`
  margin: 5rem 0 1.5rem;
  width: 12rem;
  height: 12rem;
`

export const LogoImage = styled.img`
  width: 12rem;
  height: 12rem;
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55rem;
  height: 55rem;
  border: 1px solid #D9D9D9;
`

export const EmailInput = styled.input`
  margin-top: 7rem;
  width: 45rem;
  height: 6rem;
  border: none;
  outline: none;
  border-bottom: 2px solid #ccc;
  font-size: 2rem;
  font-weight: bold;
`

export const PasswordInput = styled.input`
  width: 45rem;
  height: 6rem;
  border: none;
  outline: none;
  border-bottom: 2px solid #ccc;
  font-size: 2rem;
  font-weight: bold;
`
export const CheckData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  width: 45rem;
  height: 6rem;
  background-color: #fafafa;
  color: #EB5757;
  font-size: 1.3rem;
`

export const CheckEmail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  width: 45rem;
  height: 6rem;
  background-color: #fafafa;
  color: #EB5757;
  font-size: 1.3rem;
`

export const SignUpButton = styled(NavLink)`
  align-self: flex-start;
  margin: 13rem 0 3rem 5rem;
  color: #888888;
  font-size: 1.6rem;
  font-weight: 300;
  text-decoration: none;
`