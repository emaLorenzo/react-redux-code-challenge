import React from 'react';
import CompaniesList from 'components/CompaniesList';
import FormCompany from 'components/FormCompany';
import FormEmployee from 'components/FormEmployee';
import styled from 'styled-components';

const Container = styled.div`
	background-color: #FAFAFA;
	padding: 60px;
	display: flex;
	flex-direction: row;
`
const CompaniesContainer = styled.div`
	flex: 7;
`
const FormsContainer = styled.div`
	width: 30%;
	display: flex;
	flex-direction: column;
	padding-left: 2rem;
`
const FormCompanyContainer = styled.div`
	margin-bottom: 2rem;
`

const HomePage = () => (
	<Container>
		<CompaniesContainer>
			<CompaniesList />
		</CompaniesContainer>
		<FormsContainer>
			<FormCompanyContainer>
				<FormCompany />
			</FormCompanyContainer>
			<FormEmployee />
		</FormsContainer>
	</Container>
);

export default HomePage;
