export const getCategories = async ({ fetch }) => {
	const response = await fetch('/api/categories');
	const data = await response.json();
	return data.categories;
};

export const getProjects = async ({ fetch }) => {
	const response = await fetch('/api/projects');
	const data = await response.json();
	return data.projects;
};
