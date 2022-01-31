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
          <Hero>
            <h1>Welcome to your professional community</h1>
            <StyledFormContainer>
              <StyledForm>
                <StyledGoogleButton>
                  <img src="/images/google.svg" alt="" />
                  <span>Sign in with Google</span>
                </StyledGoogleButton>
              </StyledForm>
            </StyledFormContainer>
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
  padding: 0.75rem 1rem 1rem 1rem;
  display: flex;
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
  width: 100%;
  flex-direction: column;
  /* align-content: start; */
  align-items: center;
  overflow: hidden;
`;

const Section = styled.section`
  box-sizing: border-box;
  display: flex;
  max-width: 1128px;
  width: 100%;
  flex-wrap: nowrap;
  position: relative;
  align-items: center;
  min-height: 600px;
  padding: 2.5rem 1rem 0 1rem;
  @media (max-width: 770px) {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 24px;
    flex-direction: column;
    min-height: 0;
  }
`;

const Hero = styled.div`
  position: relative;
  align-self: flex-start;
  box-sizing: border-box;
  padding-right: 2.625rem;
  flex-shrink: 0;
  width: 55%;
  @media (max-width: 770px) {
    padding-right: 0;
    width: 100%;
  }

  > h1 {
    color: rgba(143, 88, 73, 1);
    font-size: 56px;
    font-weight: 200;
    outline: 0;
    display: block;
    line-height: 1.2;
    @media (max-width: 770px) {
      padding-bottom: 24px;
      font-weight: 300;
      font-size: 32px;
    }
  }
`;

const StyledFormContainer = styled.div``;

const StyledForm = styled.div`
  margin-top: 100px;
  margin-bottom: 16px;
  width: 408px;
  @media (max-width: 770px) {
    width: 100%;
    margin-top: 0;
    margin-bottom: 16px;
  }
`;

const StyledGoogleButton = styled.button`
  border: 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  font-size: 1.6rem;
  font-family: inherit;
  overflow: hidden;
  outline-width: 2px;
  padding: 0 32px;
  position: relative;
  text-align: center;
  text-decoration: none;
  z-index: 0;
  vertical-align: middle;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%),
    inset 0 0 0 1px rgb(0 0 0 / 0%);
  height: 56px;
  width: 100%;
  border-radius: 28px;
  line-height: normal;
  font-weight: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  > span {
    margin-left: 24px;
  }
  > img {
    width: 24px;
    height: 24px;
  }
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;

const StyledImage = styled.img`
  width: 700px;
  height: 560px;
  flex-shrink: 1;
  display: block;
  z-index: -1;
  position: relative;
  outline: 0;
  @media (max-width: 770px) {
    width: 374px;
    height: 214px;
    position: static;
  }
`;
