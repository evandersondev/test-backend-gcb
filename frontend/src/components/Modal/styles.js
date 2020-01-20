import styled from "styled-components";

export const Container = styled.div`
  width: 96%;
  height: 400px;
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

  @media (min-width: 720px) {
    width: 70%;
    left: 15%;
  }

  @media (min-width: 900px) {
    width: 50%;
    left: 25%;
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

  @keyframes alert {
    0% {
      opacity: 0;
      border-radius: 80%;
    }
  }

  form {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;
    padding: 10px;

    @media (min-width: 420px) {
      width: 60%;
      padding: 30px;
    }

    @media (min-width: 720px) {
      width: 90%;
      padding: 10px;
    }

    h1 {
      font-size: 2em;
      margin: 20px 0 40px 0;
      text-align: center;
    }

    input {
      width: 100%;
      height: 30px;
      background: transparent;
      border-radius: 5px;
      border: 1px solid #3b3b3b;
      margin-bottom: 15px;
      padding: 0 30px;
    }

    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    input[type="number"] {
      -moz-appearance: textfield;
      appearance: textfield;
    }

    .form-group {
      width: 100%;
      height: 30px;
      display: flex;
      margin-bottom: 15px;
      border: 1px solid #3b3b3b;
      border-radius: 5px;

      input {
        border: 0;
      }

      select {
        width: 150px;
        border: 0;
        background: transparent;
      }
    }

    .specialty-group {
      width: 100%;
      height: 30px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;

      .specialty {
        width: 48%;
        background: transparent;
        border-radius: 5px;
        border: 1px solid #3b3b3b;
      }
    }

    .btn-group {
      width: 100%;
      height: 30px;
      display: flex;
      justify-content: space-between;

      button {
        width: 48%;
        height: 100%;
        border: 0;
        background: #df534b;
        padding: 0 30px;
        color: #fff;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
`;
