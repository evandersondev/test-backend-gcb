import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #1e2121;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.6);

  a {
    text-decoration: none;
    color: #fff;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;

    a + a {
      margin-left: 15px;
    }

    a {
      font-size: 16px;
    }
  }
`;
