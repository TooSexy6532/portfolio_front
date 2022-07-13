export async function get() {
	const data = await fetch(`http://localhost:5050/api/projects?showOnMainPage=${true}`);
	const res = await data.json();
	return {
		body: {
			projects: 'projects',
			array: res.projects
		}
	};
}
