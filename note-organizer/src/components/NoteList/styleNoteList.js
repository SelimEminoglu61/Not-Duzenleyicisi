import styled from "styled-components";

export const ListDiv = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  gap: 3rem;
`;

export const BackgroundDiv = styled.div`
  display: grid;
  background-color: #ffdd00;
  color: black;
  width: 200px;
  height: 250px;
  border-radius: 20%;
`;

export const ListH4 = styled.h4`
  margin: 0;
  padding-top: 1rem;
`;

export const ListP = styled.p`
  margin-top: 0;
  padding-top: 0.5rem;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 0.5rem;
  flex-wrap: wrap;
  padding-top: 1rem;
`;

export const ListButton = styled.button`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  width: 5rem;
  height: 2rem;
  background-color: black;
`;
