

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/calendar/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.DbFGZcan.js","_app/immutable/chunks/DZsSnbZO.js","_app/immutable/chunks/CYmdPfwe.js"];
export const stylesheets = [];
export const fonts = [];
