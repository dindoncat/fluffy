const BASE_URL = 'http://localhost:3000/';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const apiCaller = async (url, method, body) => {
	try {
		const response = await fetch(BASE_URL + url, {
			method,
			signal: AbortSignal.timeout(10000),
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		});
		await sleep(1000); //! for testing
		const data = await response.json();
		if (data.success) {
			return data.data;
		} else if (data.error) {
			throw new Error(data.error);
		} else {
			throw new Error('Something went wrong');
		}
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export const DOLL_API = {
	getAll: () => apiCaller('dolls', 'GET'),
	getOne: (id) => apiCaller(`dolls/${id}`, 'GET'),
	create: (data) => apiCaller('dolls', 'POST', data),
	update: (id, data) => apiCaller(`dolls/${id}`, 'PUT', data),
	delete: (id) => apiCaller(`dolls/${id}`, 'DELETE'),
};

export const CANDLE_API = {
	getAll: () => apiCaller('candles', 'GET'),
	getOne: (id) => apiCaller(`candles/${id}`, 'GET'),
	create: (data) => apiCaller('candles', 'POST', data),
	update: (id, data) => apiCaller(`candles/${id}`, 'PUT', data),
	delete: (id) => apiCaller(`candles/${id}`, 'DELETE'),
};
