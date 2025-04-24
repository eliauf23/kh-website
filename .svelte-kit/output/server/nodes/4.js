

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/calendar/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.BBRGe-J6.js","_app/immutable/chunks/C5pbqEUi.js","_app/immutable/chunks/DaZRgkT6.js"];
export const stylesheets = [];
export const fonts = [];
