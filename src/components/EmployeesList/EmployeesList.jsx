import React from 'react';
import Card from 'components/Card';
import styled from 'styled-components';

const EmployeesHeader = styled.div`
  padding: 12px 30px 30px 30px;
  font-size: 15px;
  color: #478EE5;
  font-weight: 500;
  background-color: #DFDFDF;
`
const NameHeader = styled(EmployeesHeader)`
  font-size: 11px;
  padding: 10px;
`
const Footer = styled.div`
  width: 100%;
  height: 10px;
  background-color: #DFDFDF;
`
const Content = styled.div`
  padding: 1.5rem 4rem;
`
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 10px 15px 10px;
`
const Strong = styled.strong`
  padding: 5px 0px;
`

const EmployeesList = ({ employees }) => (
  <Card
    title='Employees'
    Header={EmployeesHeader}
    Footer={Footer}
  >
    <Content>
      {employees.map(
        (employee, i) => (
          <Card
            key={i}
            style={{ marginTop: '1.5rem' }}
            title={employee.name}
            Header={NameHeader}
            Footer={Footer}
          >
            <CardContent>
              <Strong>Address:</Strong>
              {employee.address}
            </CardContent>
          </Card>
        )
      )}
    </Content>
  </Card>
);

export default EmployeesList;
