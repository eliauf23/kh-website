

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/donate/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.CBiNeNnR.js","_app/immutable/chunks/C5pbqEUi.js","_app/immutable/chunks/DaZRgkT6.js","_app/immutable/chunks/D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/5.Cy7ntc-8.css"];
export const fonts = [];
