import React from 'react'
import styled from 'styled-components'
import Woman from '../img/woman.png'
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
height: calc( 100vh - 50px );
display: flex;
padding: 20px; 
`;

const Left = styled.div`
width: 60%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Title = styled.h1`
width: 60%;
font-size: 60px;
`;

const Description = styled.p`
width: 60%;
font-size: 20px;
margin-top: 20px;
`;

const Info = styled.div`
width: 60%;
margin-top: 50px;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Button = styled.button`
padding: 15px;
background-color: darkblue;
color: white;
border-radius: 10px;
font-weight: bold;
border: none;
letter-spacing: 2px;
cursor: pointer;
`;

const Contact = styled.div`
display: flex;
flex-direction: column;

`;

const Phone = styled.span`
color: #f0667d;
font-weight: bold;
`;

const ContactText = styled.span`
color: gray;
margin-top: 5px;
`;

const Right = styled.div`
width: 40%;
`;

const Image = styled.img`
width: 150%;
height: 100%;

`; 

const Intro = () => {
  return (
      <Container>
          <Left>
              <Title>Open Mindset</Title>
              <Description>Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr,
                  sed diam nonumy eirmod tempor invidunt ut labore et dolore
              </Description>
              <Info>
                  <Button>Start Consultation</Button>
                  <Contact>
                    <Phone>Call Us (111) 222- 8912</Phone>
                    <ContactText>Any Question?</ContactText>
                  </Contact>
              </Info>
          </Left>
          <Right><Image src={ Woman } /></Right>
          <AnimatedShapes />
      </Container>
  )
}

export default Intro