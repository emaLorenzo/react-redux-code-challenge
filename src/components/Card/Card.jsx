import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-radius: 5px;
  border: 1px solid #CBCBCB;
  background-color: white;
`
const CardTitle = styled.h3`
  padding: 15px 25px;
  font-size: 15px;
  color: #545454;
  font-weight: 300;
`
const Divider = styled.div`
  height: 1px;
  background-color: #CBCBCB;
`

const Card = ({ title, Header, Footer, children, ...props }) => (
  <CardContainer {...props}>
    {Header
      ? <Header>{title}</Header>
      : <CardTitle>{title}</CardTitle>
    }
    <Divider />
    {children}
    {Footer && (
      <React.Fragment>
        <Divider />
        <Footer />
      </React.Fragment>
    )}
  </CardContainer>
)

export default Card;
