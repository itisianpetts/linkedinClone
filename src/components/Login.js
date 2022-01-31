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
          <JoinNow>Join now</JoinNow>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Main>
        <Section>
          <Hero className="">
            <h1>Welcome to your professional community</h1>
          </Hero>
          <StyledImage src="/images/LI-SideImage.svg" alt="" />
        </Section>
      </Main>
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
  padding: 0.75rem 1rem 0.75rem 1rem;
  display: flex;
  height: 2rem;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
  @media (max-width: 1161px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (max-width: 769px) {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
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

const JoinNow = styled.a`
  font-size: 1rem;
  padding: 0 8px;
  line-height: 2rem;
  display: inline-block;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  transition: 0.2s ease-in-out;
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
  line-height: 2rem;
  border-radius: 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  outline-width: 2px;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    box-shadow: inset 0 0 0 2px #0a66c2;
  }
`;
const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const Section = styled.section`
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  min-height: 600px;
  padding: 2.5rem 1rem 0 1rem;
`;

const StyledImage = styled.img`
  width: 700px;
  height: 560px;
  flex-shrink: 1;
  display: block;
  z-index: -1;
  position: relative;
  outline: 0;
`;

const Hero = styled.div`
  display: block;
  align-self: flex-start;
  box-sizing: border-box;
  padding-right: 2.625rem;
  flex-shrink: 0;
  width: 55%;
  position: relative;
  > h1 {
    color: rgba(143, 88, 73, 1);
    font-size: 56px;
    font-weight: 200;
    outline: 0;
    display: block;
    line-height: 70px;
  }
`;
