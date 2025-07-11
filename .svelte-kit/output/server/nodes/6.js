

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/events/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.Cbm0j0_6.js","_app/immutable/chunks/DZsSnbZO.js","_app/immutable/chunks/CYmdPfwe.js","_app/immutable/chunks/D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/6.CioreYhl.css"];
export const fonts = [];
