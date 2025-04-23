

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/calendar/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BnaXhok5.js","_app/immutable/chunks/C-27wdJX.js","_app/immutable/chunks/DMjTVCVj.js","_app/immutable/chunks/D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/3.CPVCapd4.css"];
export const fonts = [];
