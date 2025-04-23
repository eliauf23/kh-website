

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/donate/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.Da7guqdd.js","_app/immutable/chunks/C-27wdJX.js","_app/immutable/chunks/DMjTVCVj.js","_app/immutable/chunks/D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/4.DYJ_edFQ.css"];
export const fonts = [];
