import styled from "styled-components";
import { css } from "styled-components";
import Feature from "./components/Feature";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Service from "./components/Service";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const IntoShape = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: -1;
clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 55% 100%);
background-color: crimson;
`;

const FeatureShape = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: -1;
clip-path: polygon(0% 0%, 55% 0%, 33% 100%, 0% 100%);
background-color: pink;
`; 

const ServiceShape = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: -1;
clip-path: polygon(0% 0%, 33% 0%, 33% 100%, 0% 100%);
background-color: #f88497;
`;

function App() {
  return (
    <>
    <Container>
      <Navbar />
      <Intro />
      <IntoShape />
    </Container> 
    <Container>
        <Feature />
        <FeatureShape />
      </Container>
      <Container>
        <Service />
        <ServiceShape />
    </Container>
    </>
  );
}

export default App;
