import React from 'react';
import '../style.css';

const Client = ({ name, specialty, income, client, clients, setClients }) => {
	const deleteHandler = () => {
		setClients(clients.filter((item) => item.id !== client.id));
	};

	const vocationHandler = () => {
		setClients(
			clients.map((item) => {
				return item.id === client.id ? { ...item, vocation: !item.vocation } : item;
			})
		);
	};

	return (
		<div className="client">
			<div className={`client-info ${client.vocation ? 'onvocation' : ''}`}>
				<span>{name}</span>
				<span>{specialty}</span>
				<span>{income}</span>
			</div>
			<div>
				<button onClick={vocationHandler} className="check-btn">
					on Vocation
				</button>
				<button onClick={deleteHandler} className="delete-btn">
					Delete
				</button>
			</div>
		</div>
	);
};

export default Client;
