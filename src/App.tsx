import './App.css';

function App() {
	let params = { action: 'filter', params: { price: 17500.0 } };

	fetch('http://api.valantis.store:40000/', {
		body: JSON.stringify(params),
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
			'X-Auth': '15fd1b722761a45265adeb7ae99335fe'
		}
	});

	return <></>;
}

export default App;
