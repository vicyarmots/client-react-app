import React from 'react';
import '../style.css';

const Form = ({
	inputName,
	inputSpecialty,
	inputIncome,
	setInputName,
	setInputSpecialty,
	setInputIncome,
	clients,
	setClients,
}) => {
	const inputNameHandler = (event) => {
		event.preventDefault();
		setInputName(event.target.value);
	};
	const inputSpecialtyHandler = (event) => {
		event.preventDefault();

		setInputSpecialty(event.target.value);
	};
	const inputIncomeHandler = (event) => {
		event.preventDefault();

		setInputIncome(event.target.value);
	};

	const submitClientsHandler = (event) => {
		event.preventDefault();
		if (inputName !== '' && inputSpecialty !== '' && inputIncome !== '') {
			setClients([
				...clients,
				{
					name: inputName,
					specialty: inputSpecialty,
					income: inputIncome + '$',
					vocation: false,
					id: Math.random() * 1000,
				},
			]);
		} else {
			return;
		}
		setInputName('');
		setInputSpecialty('');
		setInputIncome('');
	};

	return (
		<div className="form">
			Name
			<input value={inputName} onChange={inputNameHandler} className="input-name" type="text" />
			Specialty
			<input value={inputSpecialty} onChange={inputSpecialtyHandler} className="input-specialty" type="text" />
			Income
			<input value={inputIncome} onChange={inputIncomeHandler} className="input-income" type="number" />
			<button onClick={submitClientsHandler} className="form-btn" type="submit">
				Submit
			</button>
		</div>
	);
};

export default Form;
