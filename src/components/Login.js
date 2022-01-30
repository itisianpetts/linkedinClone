import React from 'react';

// Styles & Icons
import styled from 'styled-components';

const Login = () => {
  return (
    <LoginContainer>
      <Nav>
        <a href="/">
          <img src="/images/LI-Large.svg" alt="linkedin-logo" />
        </a>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  padding: 0;
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 16px 12px 16px;
  display: flex;
  height: 32px;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
  @media (max-width: 1161px) {
    padding-left: 16px;
    padding-right: 16px;
  }
  @media (max-width: 769px) {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  > a:nth-of-type(1) {
    @media (min-width: 1161px) {
      width: 135px;
      height: 34px;
    }
    @media (max-width: 1161px) and (min-width: 769px) {
      width: 84px;
      height: 21px;
    }
    @media (max-width: 769px) {
      width: 84px;
      height: 21px;
    }
    > img {
      @media (min-width: 1161px) {
        width: 135px;
        height: 34px;
      }
      @media (max-width: 1161px) and (min-width: 769px) {
        width: 84px;
        height: 21px;
      }
      @media (max-width: 769px) {
        width: 84px;
        height: 21px;
      }
    }
  }
`;

const Join = styled.a`
  font-weight: 400;
  font-size: 16px;
  padding: 0 8px;
  line-height: 32px;
  display: inline-block;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  transition: 0.3s ease-in-out;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  cursor: pointer;
  display: inline-block;
  line-height: 32px;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 600;
  outline-width: 2px;
  padding: 0 16px;
  text-align: center;
  text-decoration: none;
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
  }
`;
