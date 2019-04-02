import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from 'components/Form';
import Card from 'components/Card';
import { addCompany } from 'store/features/companies/actions'

const FormCompany = ({ addCompany }) => {
  const companyFields = [
    { label: 'Name:', type: 'text', name: 'name', isRequired: true },
    { label: 'Address:', type: 'text', name: 'address', isRequired: true },
    { label: 'Revenue:', type: 'number', name: 'revenue', isRequired: true },
    { label: 'Phone:', type: 'number', name: 'phone', isRequired: true },
  ];
  return (
    <Card title='Create new Company'>
      <Form
        fields={companyFields}
        onSubmit={addCompany}
      />
    </Card>
  );
};

FormCompany.propTypes = {
	addCompany: PropTypes.func.isRequired,
};

const mapDispatchToProps = { addCompany };

export default connect(null, mapDispatchToProps)(FormCompany);
