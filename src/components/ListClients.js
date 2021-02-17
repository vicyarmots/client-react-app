import React from 'react';
import Client from './Client';
import '../style.css';

const ListClients = ({ clients, setClients, setStatus, filteredClients }) => {
	const statusHandler = (event) => {
		setStatus(event.target.value);
	};
	return (
		<div className="list-clients">
			<div className="list-client__wrapper">
				<div className="client-wrapper">
					{filteredClients.map((client) => {
						return (
							<Client
								name={client.name}
								specialty={client.specialty}
								income={client.income}
								key={client.id}
								client={client}
								clients={clients}
								setClients={setClients}
							/>
						);
					})}
				</div>
				<select onChange={statusHandler}>
					<option value="all">All</option>
					<option value="vocation">Vocation</option>
					<option value="working">Working</option>
				</select>
			</div>
		</div>
	);
};

export default ListClients;
