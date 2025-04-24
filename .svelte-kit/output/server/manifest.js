export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "kh-website/_app",
	assets: new Set([".nojekyll","adam-rosenberg.png","arielle.jpg","elizabeth-aufzien.jpg","homepage-image.jpg","jay-worenklein.png","jonathan-schachter.png","logo.png","marisa-laks.jpg","mark.png","purim.png","rabbi-kyle.jpeg","rosh-chodesh.png","shteibel-sundays.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.NFKgb3xn.js",app:"_app/immutable/entry/app.5lSTBgN6.js",imports:["_app/immutable/entry/start.NFKgb3xn.js","_app/immutable/chunks/BVjwod7r.js","_app/immutable/chunks/C5pbqEUi.js","_app/immutable/entry/app.5lSTBgN6.js","_app/immutable/chunks/Cb9AzWa1.js","_app/immutable/chunks/C5pbqEUi.js","_app/immutable/chunks/DaZRgkT6.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/calendar",
				pattern: /^\/calendar\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/donate",
				pattern: /^\/donate\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/events",
				pattern: /^\/events\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/shabbat",
				pattern: /^\/shabbat\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/team",
				pattern: /^\/team\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
