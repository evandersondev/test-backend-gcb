import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 60px 0;

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    h1 {
      font-size: 1.8em;

      @media (min-width: 420px) {
        font-size: 3em;
      }
    }
    img {
      width: 5em;
    }
  }

  form {
    width: 95%;
    height: 50px;
    padding: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #3b3b3b;
    border-radius: 5px;

    @media (min-width: 420px) {
      width: 450px;
    }

    select {
      height: 100%;
      width: auto;
      border: 0;
      background: transparent;
      color: #3b3b3b;
    }
    input {
      width: 100%;
      height: 100%;
      border: 0;
      background: transparent;
      padding: 0 30px;
    }

    button {
      border: 0;
      background: transparent;
      width: 60px;
      height: 40%;
      color: #3b3b3b;

      .search {
        width: 100%;
        height: 100%;
        cursor: pointer;
      }

      &:hover {
        height: 50%;
      }
    }
  }
`;
