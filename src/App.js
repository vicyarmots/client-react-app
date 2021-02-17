import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import ListClients from './components/ListClients';
import './style.css';

const App = () => {
	const [inputName, setInputName] = useState('');
	const [inputSpecialty, setInputSpecialty] = useState('');
	const [inputIncome, setInputIncome] = useState('');
	const [clients, setClients] = useState([]);
	const [status, setStatus] = useState('all');
	const [filteredClients, setFilteredClients] = useState([]);

	useEffect(() => {
		getLocalClients();
	}, []);

	useEffect(() => {
		filterHandler();
		saveLocalClients();
	}, [clients, status]);

	const filterHandler = () => {
		switch (status) {
			case 'vocation':
				setFilteredClients(clients.filter((item) => item.vocation));
				break;
			case 'working':
				setFilteredClients(clients.filter((item) => !item.vocation));
				break;
			default:
				setFilteredClients(clients);
				break;
		}
	};

	const saveLocalClients = () => {
		localStorage.setItem('clients', JSON.stringify(clients));
	};

	const getLocalClients = () => {
		if (localStorage.getItem('clients') === null) {
			localStorage.setItem('clients', JSON.stringify([]));
		} else {
			let clientLocal = JSON.parse(localStorage.getItem('clients'));
			setClients(clientLocal);
		}
	};

	return (
		<div className="App">
			<header className="header">Server Client App</header>
			<div className="main-content">
				<Form
					inputName={inputName}
					inputSpecialty={inputSpecialty}
					inputIncome={inputIncome}
					setInputName={setInputName}
					setInputSpecialty={setInputSpecialty}
					setInputIncome={setInputIncome}
					clients={clients}
					setClients={setClients}
				/>
				<ListClients
					clients={clients}
					setClients={setClients}
					setStatus={setStatus}
					filteredClients={filteredClients}
				/>
			</div>
		</div>
	);
};

export default App;
