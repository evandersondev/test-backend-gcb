import styled from "styled-components";

export const Container = styled.div`
  width: 96%;
  height: 120px;
  position: absolute;
  top: 30%;
  left: 2%;
  background: #fff;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px 10px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #444;
  border-radius: 5px;
  animation: alert 0.3s;
  box-shadow: 0 5px 10px 0 #999;

  @keyframes alert {
    0% {
      opacity: 0;
      border-radius: 80%;
    }
  }

  h1 {
    font-size: 30px;
    font-weight: 500;
  }

  p {
    text-align: center;
    margin-top: 15px;
  }
  span {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 22px;
    cursor: pointer;

    &:hover {
      font-size: 26px;
    }
  }

  @media (min-width: 480px) {
    width: 70%;
    left: 15%;
    padding: 15px 30px;
  }
`;
