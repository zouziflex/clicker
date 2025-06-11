import adapter from '@sveltejs/adapter-static';
const dev = process.argv.includes('dev');

export default {
	kit: {
		adapter: adapter({
			fallback: '404.html' // génère un 404 utilisable par GitHub Pages
		}),
		paths: {
			base: dev ? '' : `/${process.env.GITHUB_REPOSITORY?.split('/')[1]}`, // /nom-du-repo
			relative: false
		}
		// éventuellement, définir trailingSlash si ta config l'exige
	}
};
