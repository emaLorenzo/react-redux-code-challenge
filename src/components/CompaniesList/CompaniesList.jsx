import React from 'react';
import { connect } from 'react-redux';
import Card from 'components/Card';
import styled from 'styled-components';
import { Link } from "react-router-dom";


const Content = styled.div`
  padding: 5px 15px;
`
const EmptyContent = styled.p`
  font-size: 13px;
  text-align: center;
  padding: 3rem 1rem;
`
const CompanyHeader = styled.h3`
  padding: 8px 10px;
  font-size: 15px;
  color: #478EE5;
  font-weight: 500;
  background-color: #DFDFDF;
`
const CompanyFooter = styled(Link)`
  padding: 3px 10px;
  font-size: 10px;
  color: #478EE5;
  font-weight: 500;
  background-color: #DFDFDF;
`
const CardContainer = styled.div`
  margin: 15px 0px;
`
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 10px 20px 10px;
`
const Strong = styled.strong`
  padding: 5px 0px;
`

const CompaniesList = ({ list }) => (
  <Card title='Companies'>
    <Content>
      {list && list.length > 0
      ? (
        list.map(
          (company, i) => (
            <CardContainer key={i}>
              <Card
                title={company.name}
                Header={CompanyHeader}
                Footer={() => <CompanyFooter to={`/overview/${i}`}>Company Overview</CompanyFooter>}
              >
                <CardContent>
                  <Strong>Address:</Strong>
                  {company.address}
                  <Strong>Revenue:</Strong>
                  {company.revenue}
                  <Strong>Phone:</Strong>
                  {company.phone}
                </CardContent>
              </Card>
            </CardContainer>
          )
        )
      ) : (
        <EmptyContent>There are currently no companies to review</EmptyContent>
      )}
    </Content>
  </Card>
);

const mapStateToProps = ({ companies }) => ({
  list: companies.list,
});

export default connect(mapStateToProps)(CompaniesList);
