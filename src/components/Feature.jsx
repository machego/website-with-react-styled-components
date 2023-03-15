import React from 'react'
import styled from 'styled-components';
import App from '../img/app11.png'
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
display: flex;
@media only screen and (max-width: 480px) {
  flex-direction: column;
  padding: 30px 20px;
}
`;

const Left = styled.div`
width: 50%;
@media only screen and (max-width: 480px) {
  display: none;
}
`;

const Image = styled.img`
width: 80%;
`;

const Right = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 30px;
@media only screen and (max-width: 480px) {
  width: 100%;
}
`;

const Title = styled.span`
font-size: 70px;
@media only screen and (max-width: 480px) {
  font-size: 50px;
}
`;

const SubTitle = styled.span`
font-size: 24px;
font-style: italic;
color: #333;
`;

const Description = styled.p`
font-size: 20px;
color: #777;
margin-top: 30px;
`;

const Button = styled.button`
width: 150px;
border: none;
padding: 15px 20px;
background-color: darkblue;
color: white;
font-size: 20px;
border-radius: 20px;
cursor: pointer;
margin-top: 20px;
`;


function Feature() {
  return (
      <Container>
          <Left>
              <Image src={App} />
          </Left>
          <Right>
              <Title>
                  <b>mentoring</b> business<br/>
                  <b>design</b> your <b>mind</b>
              </Title>
              <SubTitle>Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr.
              </SubTitle>
              <Description>
                  Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr,
                  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              </Description>
              <Description>
                  Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr,
                  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              </Description>
              <Button>Learn More</Button>
          </Right>
          <AnimatedShapes />
      </Container>
  )
}

export default Feature