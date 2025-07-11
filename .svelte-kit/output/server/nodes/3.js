

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.Jz52glyP.js","_app/immutable/chunks/DZsSnbZO.js","_app/immutable/chunks/CYmdPfwe.js","_app/immutable/chunks/D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/3.ApPe9NVu.css"];
export const fonts = [];
