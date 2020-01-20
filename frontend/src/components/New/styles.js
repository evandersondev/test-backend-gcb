import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 15px;

  form {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;
    padding: 10px;
    background: rgba(0, 0, 0, 0.05);
    box-shadow: 0 5px 15px 1px rgba(223, 83, 75, 0.2);

    @media (min-width: 600px) {
      width: 60%;
      padding: 30px;
    }

    @media (min-width: 720px) {
      width: 50%;
      max-width: 580px;
      padding: 30px;
    }

    h1 {
      font-size: 2em;
      margin: 20px 0 40px 0;
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
        min-width: 50px;
        border: 0;
        background: transparent;

        &:last-child {
          min-width: 180px;
        }
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

    button {
      width: 100%;
      height: 30px;
      border: 0;
      background: #df534b;
      padding: 0 30px;
      color: #fff;
      font-weight: bold;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;
