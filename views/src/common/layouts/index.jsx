import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../navbar";

const Index = () => {
  return (
    <Container>
      <Navbar />
      <Pages>
        <Outlet />
      </Pages>
    </Container>
  );
};

const Container = styled.div``;
const Pages = styled.div`
  padding: 10vh 5% 0;
  z-index: 8;
`;

export default Index;
