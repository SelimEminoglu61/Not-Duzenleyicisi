import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  button {
    padding: 0 1rem;
    margin: 1rem auto;
    width: 10rem;
    height: 2rem;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  label {
    text-align: start;
    color: #1a1a1a;
  }
`;

export const NullType = styled.h4`
  margin-top: 0;
  color: red;
`;

export const İnputTitle = styled.input`
  width: 261px;
  height: 21px;
`;

export const İnputBody = styled.textarea`
  width: 261px;
`;
