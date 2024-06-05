import { Col } from "antd";
import styled from "styled-components";

export const Box = styled(Col)`
  p {
    margin-top: 7px;
  }
  img {
    width: 100%;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 20px;
`;

export const Container = styled.div`
  margin: auto;
  max-width: 1200px;
`;

export const Img = styled.img`
  max-width: 200px;
`;
