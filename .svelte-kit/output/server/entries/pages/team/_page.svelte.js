import { c as create_ssr_component, d as add_attribute, e as escape, f as each } from "../../../chunks/ssr.js";
const css = {
  code: ".container.svelte-1ngc2ab{margin-left:auto;margin-right:auto;max-width:80rem;padding-left:1rem;padding-right:1rem\n}@media(min-width: 640px){.container.svelte-1ngc2ab{padding-left:1.5rem;padding-right:1.5rem\n    }}@media(min-width: 1024px){.container.svelte-1ngc2ab{padding-left:2rem;padding-right:2rem\n    }}.btn-secondary.svelte-1ngc2ab{display:inline-block;border-radius:0.5rem;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));padding-left:1.5rem;padding-right:1.5rem;padding-top:0.75rem;padding-bottom:0.75rem;font-weight:600;--tw-text-opacity:1;color:rgb(255 107 107 / var(--tw-text-opacity, 1));transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms\n}.btn-secondary.svelte-1ngc2ab:hover{--tw-bg-opacity:1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))\n}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  const rabbi = {\\n    name: \\"Rabbi Kyle Savitch\\",\\n    title: \\"Rabbi\\",\\n    bio: \\"Rabbi Savitch received semikha from Yeshivat Chovevei Torah in 2021. He has been active in the Harlem Jewish community since 2016 and helped to found the Harlem Moishe House in 2018. Kyle and his wife, Liran, live in Central Harlem where they enjoy having guests for Shabbat meals. In his free time, Kyle enjoys cooking and rock climbing.\\",\\n    image: \\"/images/rabbi-kyle.jpg\\"\\n  };\\n\\n  const trustees = [\\n    {\\n      name: \\"Elizabeth Aufzien\\",\\n      title: \\"Trustee\\",\\n      image: \\"/images/elizabeth-aufzien.jpg\\"\\n    },\\n    {\\n      name: \\"Mark Eckstein\\",\\n      title: \\"Trustee\\",\\n      image: \\"/images/mark-eckstein.jpg\\"\\n    },\\n    {\\n      name: \\"Arielle Flax\\",\\n      title: \\"Trustee\\",\\n      image: \\"/images/arielle-flax.jpg\\"\\n    },\\n    {\\n      name: \\"Marisa Laks\\",\\n      title: \\"Trustee\\",\\n      image: \\"/images/marisa-laks.jpg\\"\\n    },\\n    {\\n      name: \\"Adam Rosenberg\\",\\n      title: \\"Trustee\\",\\n      image: \\"/images/adam-rosenberg.jpg\\"\\n    },\\n    {\\n      name: \\"Jonathan Schachter\\",\\n      title: \\"Trustee\\",\\n      image: \\"/images/jonathan-schachter.jpg\\"\\n    },\\n    {\\n      name: \\"Jay Worenklein\\",\\n      title: \\"Trustee\\",\\n      image: \\"/images/jay-worenklein.jpg\\"\\n    }\\n  ];\\n<\/script>\\n\\n<div class=\\"bg-gray-50 min-h-screen\\">\\n  <!-- Hero Section -->\\n  <section class=\\"relative py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white\\">\\n    <div class=\\"absolute inset-0 bg-black/50 z-0\\"></div>\\n    <div class=\\"container relative z-10\\">\\n      <h1 class=\\"text-4xl md:text-5xl font-bold mb-6 text-center\\">Our Team</h1>\\n      <p class=\\"text-xl text-center max-w-2xl mx-auto\\">\\n        Meet the dedicated individuals who help make Kehillat Harlem a vibrant and welcoming community.\\n      </p>\\n    </div>\\n  </section>\\n\\n  <!-- Rabbi Section -->\\n  <section class=\\"py-16\\">\\n    <div class=\\"container\\">\\n      <div class=\\"bg-white rounded-lg shadow-md overflow-hidden\\">\\n        <div class=\\"md:flex\\">\\n          <div class=\\"md:w-1/3\\">\\n            <img \\n              src={rabbi.image} \\n              alt={rabbi.name}\\n              class=\\"w-full h-full object-cover\\"\\n            />\\n          </div>\\n          <div class=\\"p-8 md:w-2/3\\">\\n            <h2 class=\\"text-3xl font-bold mb-2\\">{rabbi.name}</h2>\\n            <div class=\\"text-primary font-semibold mb-4\\">{rabbi.title}</div>\\n            <p class=\\"text-gray-600 text-lg leading-relaxed\\">\\n              {rabbi.bio}\\n            </p>\\n          </div>\\n        </div>\\n      </div>\\n    </div>\\n  </section>\\n\\n  <!-- Trustees Section -->\\n  <section class=\\"py-16 bg-white\\">\\n    <div class=\\"container\\">\\n      <h2 class=\\"text-3xl font-bold mb-12 text-center\\">Board of Trustees</h2>\\n      <div class=\\"grid gap-8 md:grid-cols-2 lg:grid-cols-3\\">\\n        {#each trustees as trustee}\\n          <div class=\\"bg-gray-50 rounded-lg overflow-hidden\\">\\n            <div class=\\"h-64\\">\\n              <img \\n                src={trustee.image} \\n                alt={trustee.name}\\n                class=\\"w-full h-full object-cover\\"\\n              />\\n            </div>\\n            <div class=\\"p-6\\">\\n              <h3 class=\\"text-xl font-bold mb-2\\">{trustee.name}</h3>\\n              <div class=\\"text-primary font-semibold\\">{trustee.title}</div>\\n            </div>\\n          </div>\\n        {/each}\\n      </div>\\n    </div>\\n  </section>\\n\\n  <!-- Get Involved -->\\n  <section class=\\"py-16 bg-primary text-white\\">\\n    <div class=\\"container text-center\\">\\n      <h2 class=\\"text-3xl font-bold mb-6\\">Get Involved</h2>\\n      <p class=\\"text-xl mb-8 max-w-2xl mx-auto\\">\\n        Interested in contributing to our community? We're always looking for volunteers and committee members.\\n      </p>\\n      <a href=\\"/contact\\" class=\\"btn-secondary\\">\\n        Contact Us\\n      </a>\\n    </div>\\n  </section>\\n</div>\\n\\n<style lang=\\"postcss\\">\\n  .container {\\n\\n    margin-left: auto;\\n\\n    margin-right: auto;\\n\\n    max-width: 80rem;\\n\\n    padding-left: 1rem;\\n\\n    padding-right: 1rem\\n}\\n\\n@media (min-width: 640px) {\\n\\n    .container {\\n\\n        padding-left: 1.5rem;\\n\\n        padding-right: 1.5rem\\n    }\\n}\\n\\n@media (min-width: 1024px) {\\n\\n    .container {\\n\\n        padding-left: 2rem;\\n\\n        padding-right: 2rem\\n    }\\n}\\n\\n  .btn-secondary {\\n\\n    display: inline-block;\\n\\n    border-radius: 0.5rem;\\n\\n    --tw-bg-opacity: 1;\\n\\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\\n\\n    padding-left: 1.5rem;\\n\\n    padding-right: 1.5rem;\\n\\n    padding-top: 0.75rem;\\n\\n    padding-bottom: 0.75rem;\\n\\n    font-weight: 600;\\n\\n    --tw-text-opacity: 1;\\n\\n    color: rgb(255 107 107 / var(--tw-text-opacity, 1));\\n\\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\\n\\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n\\n    transition-duration: 200ms\\n}\\n\\n  .btn-secondary:hover {\\n\\n    --tw-bg-opacity: 1;\\n\\n    background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1))\\n}\\n</style> "],"names":[],"mappings":"AA0HE,yBAAW,CAET,WAAW,CAAE,IAAI,CAEjB,YAAY,CAAE,IAAI,CAElB,SAAS,CAAE,KAAK,CAEhB,YAAY,CAAE,IAAI,CAElB,aAAa,CAAE;AACnB,CAEA,MAAO,YAAY,KAAK,CAAE,CAEtB,yBAAW,CAEP,YAAY,CAAE,MAAM,CAEpB,aAAa,CAAE;AACvB,IAAI,CACJ,CAEA,MAAO,YAAY,MAAM,CAAE,CAEvB,yBAAW,CAEP,YAAY,CAAE,IAAI,CAElB,aAAa,CAAE;AACvB,IAAI,CACJ,CAEE,6BAAe,CAEb,OAAO,CAAE,YAAY,CAErB,aAAa,CAAE,MAAM,CAErB,eAAe,CAAE,CAAC,CAElB,gBAAgB,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,eAAe,CAAC,EAAE,CAAC,CAAC,CAE5D,YAAY,CAAE,MAAM,CAEpB,aAAa,CAAE,MAAM,CAErB,WAAW,CAAE,OAAO,CAEpB,cAAc,CAAE,OAAO,CAEvB,WAAW,CAAE,GAAG,CAEhB,iBAAiB,CAAE,CAAC,CAEpB,KAAK,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,EAAE,CAAC,CAAC,CAEnD,mBAAmB,CAAE,KAAK,CAAC,CAAC,gBAAgB,CAAC,CAAC,YAAY,CAAC,CAAC,qBAAqB,CAAC,CAAC,IAAI,CAAC,CAAC,MAAM,CAE/F,0BAA0B,CAAE,aAAa,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAExD,mBAAmB,CAAE;AACzB,CAEE,6BAAc,MAAO,CAEnB,eAAe,CAAE,CAAC,CAElB,gBAAgB,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,eAAe,CAAC,EAAE,CAAC;AAC/D"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const rabbi = {
    name: "Rabbi Kyle Savitch",
    title: "Rabbi",
    bio: "Rabbi Savitch received semikha from Yeshivat Chovevei Torah in 2021. He has been active in the Harlem Jewish community since 2016 and helped to found the Harlem Moishe House in 2018. Kyle and his wife, Liran, live in Central Harlem where they enjoy having guests for Shabbat meals. In his free time, Kyle enjoys cooking and rock climbing.",
    image: "/images/rabbi-kyle.jpg"
  };
  const trustees = [
    {
      name: "Elizabeth Aufzien",
      title: "Trustee",
      image: "/images/elizabeth-aufzien.jpg"
    },
    {
      name: "Mark Eckstein",
      title: "Trustee",
      image: "/images/mark-eckstein.jpg"
    },
    {
      name: "Arielle Flax",
      title: "Trustee",
      image: "/images/arielle-flax.jpg"
    },
    {
      name: "Marisa Laks",
      title: "Trustee",
      image: "/images/marisa-laks.jpg"
    },
    {
      name: "Adam Rosenberg",
      title: "Trustee",
      image: "/images/adam-rosenberg.jpg"
    },
    {
      name: "Jonathan Schachter",
      title: "Trustee",
      image: "/images/jonathan-schachter.jpg"
    },
    {
      name: "Jay Worenklein",
      title: "Trustee",
      image: "/images/jay-worenklein.jpg"
    }
  ];
  $$result.css.add(css);
  return `<div class="bg-gray-50 min-h-screen"> <section class="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white" data-svelte-h="svelte-rpy00a"><div class="absolute inset-0 bg-black/50 z-0"></div> <div class="container relative z-10 svelte-1ngc2ab"><h1 class="text-4xl md:text-5xl font-bold mb-6 text-center">Our Team</h1> <p class="text-xl text-center max-w-2xl mx-auto">Meet the dedicated individuals who help make Kehillat Harlem a vibrant and welcoming community.</p></div></section>  <section class="py-16"><div class="container svelte-1ngc2ab"><div class="bg-white rounded-lg shadow-md overflow-hidden"><div class="md:flex"><div class="md:w-1/3"><img${add_attribute("src", rabbi.image, 0)}${add_attribute("alt", rabbi.name, 0)} class="w-full h-full object-cover"></div> <div class="p-8 md:w-2/3"><h2 class="text-3xl font-bold mb-2">${escape(rabbi.name)}</h2> <div class="text-primary font-semibold mb-4">${escape(rabbi.title)}</div> <p class="text-gray-600 text-lg leading-relaxed">${escape(rabbi.bio)}</p></div></div></div></div></section>  <section class="py-16 bg-white"><div class="container svelte-1ngc2ab"><h2 class="text-3xl font-bold mb-12 text-center" data-svelte-h="svelte-1snhfkx">Board of Trustees</h2> <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">${each(trustees, (trustee) => {
    return `<div class="bg-gray-50 rounded-lg overflow-hidden"><div class="h-64"><img${add_attribute("src", trustee.image, 0)}${add_attribute("alt", trustee.name, 0)} class="w-full h-full object-cover"></div> <div class="p-6"><h3 class="text-xl font-bold mb-2">${escape(trustee.name)}</h3> <div class="text-primary font-semibold">${escape(trustee.title)}</div></div> </div>`;
  })}</div></div></section>  <section class="py-16 bg-primary text-white" data-svelte-h="svelte-8kf55w"><div class="container text-center svelte-1ngc2ab"><h2 class="text-3xl font-bold mb-6">Get Involved</h2> <p class="text-xl mb-8 max-w-2xl mx-auto">Interested in contributing to our community? We&#39;re always looking for volunteers and committee members.</p> <a href="/contact" class="btn-secondary svelte-1ngc2ab">Contact Us</a></div></section> </div>`;
});
export {
  Page as default
};
