import styled from "styled-components";

export const Container = styled.div`
  min-width: 22vw;
  min-height: 19vh;
  border-radius: 12px;
  background-color: #729f92;
  color: white;
  padding-left: 1.43rem;
  margin-bottom: 1.25rem;
  margin-top: 5vh;

  img {
    width: 193px;
    height: 193px;
    position: relative;
    right: 236px;
    left: 11px;
    bottom: 70px;
  }

  a {
    cursor: pointer;
    text-decoration: underline;
  }

  div {
    margin-top: 1vh;
    margin-bottom: 1vh;
  }
`;
export const Pokemon = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Type = styled.div`
  display: flex;
  gap: 0.62rem;
`;

export const Link = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20vw;

  button {
    min-width: 7.6vw;
    height: 3.9vh;
    background-color: #fff;
    border-radius: 8px;
    padding: 4px 10px;
    align-items: center;
    justify-content: center;
    display: flex;
    border: none;
    cursor: pointer;
  }
`;
