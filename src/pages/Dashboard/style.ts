import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin-top: 100px;
  max-width: 433px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 714px;
  height: 72px;
  display: flex;

  input {
    flex: 1;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    
    ${(props) => props.hasError && css`
      border: 2px solid #c43433;
      border-right: 0;
    `}

    &::placeholder {
      color: #a8a8b3;
    }
  }
  
  button {
    width: 210px;
    background: #04D361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color:#fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04D361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  margin-top: 16px;
  color: #c43433;
`;

export const Repositories = styled.div`
  margin-top: 120px;
  max-width: 714px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.3s;

    & + a {
      margin-top: 16px;
    }

    &:hover{
      transform: translateX(10px);
    }

    img {
      width: 83px;
      height: 83px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #3D3D4D;
      }
      
      p{
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
        max-width: 550px;
      }
    }

    svg {
      margin-left: auto;
      color: #C9C9D4;
    }
  }
`;
