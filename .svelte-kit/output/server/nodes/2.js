

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DWUlmZKi.js","_app/immutable/chunks/C5pbqEUi.js","_app/immutable/chunks/DaZRgkT6.js","_app/immutable/chunks/D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/2.BNOFKra1.css"];
export const fonts = [];
