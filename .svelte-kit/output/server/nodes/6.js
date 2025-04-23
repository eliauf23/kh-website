

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/shabbat/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.B4stKQCa.js","_app/immutable/chunks/C-27wdJX.js","_app/immutable/chunks/DMjTVCVj.js","_app/immutable/chunks/D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/6.YKvlmPR1.css"];
export const fonts = [];
