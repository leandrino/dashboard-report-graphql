import { App } from '../src/index'

describe('App', () => {
	// PexelsWrapper Library instance off from
	it('should instance of App', () => {
		const client = new App({ apiUrl: 'https://localhost:3000'});
		expect(client).toBeInstanceOf(App);
	});
});
