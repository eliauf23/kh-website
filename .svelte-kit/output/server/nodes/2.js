

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.3I0CblV-.js","_app/immutable/chunks/C-27wdJX.js","_app/immutable/chunks/DMjTVCVj.js"];
export const stylesheets = ["_app/immutable/assets/2.BNOFKra1.css"];
export const fonts = [];
