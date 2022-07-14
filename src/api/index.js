export default {
	getCategories: async ({ fetch }) => {
		const response = await fetch('/api/categories');
		const data = await response.json();
		return data.categories;
	}
};
