

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/events/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.BPKaCgtC.js","_app/immutable/chunks/C5pbqEUi.js","_app/immutable/chunks/DaZRgkT6.js","_app/immutable/chunks/D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/6.CioreYhl.css"];
export const fonts = [];
