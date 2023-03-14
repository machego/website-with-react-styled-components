import { sanitizeFilter } from 'mongoose';
import React from 'react'
import styled from 'styled-components'
import How from '../img/service1.png'

const Container = styled.div`
display: flex;
`;

const Left = styled.div`
width: 50%;
`;

const Right = styled.div`
width: 50%;
`;

const Image = styled.img`
height: 100%;
margin-left: 100px;
`;

const Wrapper = styled.div`
padding: 50px;
display: flex;
flex-direction: column;
`;

const Title = styled.h1``;

const Description = styled.p`
font-size: 20px;
margin-top: 20px;
color: #555;
`;

const CardContainer = styled.div`
display: flex;
justify-content:space-between;
margin-top: 50px;
`;





const Service = () => {
  return (
      <Container>
          <Left>
              <Image src={How} />
          </Left>
          <Right>
              <Wrapper>
                  <Title>How we Start</Title>
                  <Description>Lorem ipsum dolor sit amet,
                      consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                      sed diam voluptua. At
                  </Description>
                  <CardContainer></CardContainer>
              </Wrapper>
          </Right>
      </Container>
  )
}

export default Service