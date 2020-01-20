import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  filter: blur(${props => (props.blur ? "2px" : "")});
`;
