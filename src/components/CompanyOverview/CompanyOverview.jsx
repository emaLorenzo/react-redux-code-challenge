import React from 'react';
import styled from 'styled-components';
import Card from 'components/Card';

const OverviewHeader = styled.h3`
  padding: 8px 30px;
  font-size: 15px;
  color: #478EE5;
  font-weight: 500;
  background-color: #DFDFDF;
`
const CardContent = styled.div`
  display: flex;
  flex-direction: row;
`
const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2.2rem 2rem;
`
const Strong = styled.strong`
  padding: 5px 0px;
`
const Footer = styled.div`
  width: 100%;
  height: 10px;
  background-color: #DFDFDF;
`

const CompanyOverview = ({ company }) => (
  <Card
    title='Profile Overview'
    Header={OverviewHeader}
    Footer={Footer}
  >
    <CardContent>
      <Column>
        <Strong>Address:</Strong>
        {company.address}
        <Strong>Revenue:</Strong>
        {company.revenue}
        <Strong>Phone:</Strong>
        {company.phone}
      </Column>
      <Column>
        <Strong>Total Employees:</Strong>
        {company.employeesCount}
      </Column>
    </CardContent>
  </Card>
);

export default CompanyOverview;
