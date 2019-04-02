import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CompanyOverview from 'components/CompanyOverview';
import EmployeesList from 'components/EmployeesList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 25%;
`
const CompanyOverviewContainer = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
`

const DetailsPage = ({ companies, employees, match: { params: { id } } }) => {
  const company = companies[id]; 
  const companyEmployees = employees.filter(emp => emp.employeer === company.name);
  const employeesCount = companyEmployees.length;

  return (
    <Container>
      <CompanyOverviewContainer>
        <CompanyOverview company={{ ...company, employeesCount }} />
      </CompanyOverviewContainer>
      <EmployeesList employees={companyEmployees} />
    </Container>
  );
}

const mapStateToProps = ({
  companies: { list: companies },
  employees: { list: employees },
}) => ({ companies, employees });

export default connect(mapStateToProps)(DetailsPage);
