import React from 'react';
import { connect } from 'react-redux';
import Form from 'components/Form';
import Card from 'components/Card';
import styled from 'styled-components';
import { addEmployee } from 'store/features/employees/actions'
import LinearProgress from '@material-ui/core/LinearProgress';

const EmptyContent = styled.p`
  font-size: 13px;
  text-align: center;
  padding: 3rem 1rem;
`

const FormEmployee = ({ list, loading, error, addEmployee }) => {
  const employeeFields = [{ 
    label: 'Select Employeer',
    type: 'select',
    name: 'employeer',
    isRequired: true,
    options: list.map(company => ({ value: company.name, label: company.name }))
  }];
  const renderForm = loading
    ? <LinearProgress /> 
    : (
      <Form
        fields={employeeFields}
        onSubmit={addEmployee}
      />
    );
  return (
    <Card title='Create new Person'>
      {list && list.length > 0
        ? renderForm
        : (
          <EmptyContent>Create at least one company in order to asociate employees with it</EmptyContent>
        )}
    </Card>
  );
};

const mapStateToProps = ({
  companies: { list },
  employees: { loading, error },
}) => ({
  list, loading, error
});

const mapDispatchToProps = { addEmployee };

export default connect(mapStateToProps, mapDispatchToProps)(FormEmployee);
