import React from 'react'
import styled from 'styled-components'
import useForm from 'hooks/useForm';
import Button from '@material-ui/core/Button';
import Select from 'react-select'

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 10px;
`
const Input = styled.input`
  border-radius: 2px;
  border:1px solid #cccccc;
  padding: 5px 10px;
  margin-bottom: 10px;
`
const SubmitButton = styled(Button)`
  align-self: flex-start;
`
const SelectContainer = styled.div`
  margin-bottom: 10px;
`

function isDisabled(fields, values) {
  const requiredFields = fields.filter(field => field.isRequired);
  let isDisabled = false;
  requiredFields.forEach(
    field => {
      const value = values[field.name];
      if (value === undefined || value === '') {
        isDisabled = true;
      }
    }
  );
  return isDisabled;
}

const Form = ({ fields, onSubmit }) => {
  const { values, handleChange, handleSelect, handleSubmit } = useForm(onSubmit);
  const disabled = isDisabled(fields, values);
  return (
    <FormContainer onSubmit={handleSubmit}>
      {fields.map(
        (field, i) => (
          field.type === 'select'
          ? (
            <SelectContainer key={i}>
              <Select
                name={field.name}
                label={field.label}
                onChange={option => handleSelect(option, field.name)}
                options={field.options}
                required
              />
            </SelectContainer>
          ) : (
            <React.Fragment key={i}>
              <label>{field.label}</label>
              <Input
                type={field.type}
                name={field.name}
                onChange={handleChange}
                value={values[field.name] || ''}
                required={field.isRequired}
                readonly={field.readonly || false}
              />
            </React.Fragment>
          )
        )
      )}
      <SubmitButton
        type="submit"
        variant="contained"
        disabled={disabled}
      >
        Save
      </SubmitButton>
    </FormContainer>
  )
}

export default Form;
