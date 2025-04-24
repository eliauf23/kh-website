import { c as create_ssr_component, b as subscribe, d as add_attribute, e as each, f as escape, g as null_to_empty, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const navigation = {
  logo: {
    src: "https://eliauf23.github.io/kh-website/logo.png",
    alt: "Kehillat Harlem"
  },
  links: [
    {
      text: "About",
      href: "/kh-website/about"
    },
    {
      text: "Events",
      href: "/kh-website/events"
    },
    {
      text: "Shabbat",
      href: "/kh-website/shabbat"
    },
    {
      text: "Team",
      href: "/kh-website/team"
    },
    {
      text: "Calendar",
      href: "/kh-website/calendar"
    },
    {
      text: "Donate",
      href: "/kh-website/donate",
      isPrimary: true
    }
  ]
};
const footer = {
  about: {
    title: "Kehillat Harlem",
    description: "The uptown partnership-style shul community where All Are Welcome. Always.",
    newsletter: {
      text: "Subscribe to KH newsletter",
      link: "https://us3.list-manage.com/subscribe?u=7917da8ba10966284661ed310&id=b8928661ab"
    },
    socialLinks: [
      {
        text: "Linktree",
        href: "https://linktr.ee/kehillatharlem"
      },
      {
        text: "Facebook",
        href: "https://www.facebook.com/KehillatHarlem/"
      },
      {
        text: "Instagram",
        href: "https://www.instagram.com/kehillatharlem/"
      }
    ]
  },
  quickLinks: {
    title: "Quick Links",
    links: [
      {
        text: "About",
        href: "/kh-website/about"
      },
      {
        text: "Events",
        href: "/kh-website/events"
      },
      {
        text: "Shabbat",
        href: "/kh-website/shabbat"
      },
      {
        text: "Team",
        href: "/kh-website/team"
      },
      {
        text: "Calendar",
        href: "/kh-website/calendar"
      },
      {
        text: "Donate",
        href: "/kh-website/donate"
      }
    ]
  },
  contact: {
    title: "Contact Us",
    email: "info@kehillatharlem.org",
    address: {
      street: "2248 Adam Clayton Powell Jr Blvd",
      city: "Harlem, NY 10027"
    },
    button: {
      text: "Get in Touch",
      href: "/kh-website/contact"
    }
  }
};
const content = {
  navigation,
  footer
};
const css$1 = {
  code: ".nav-link.svelte-98sj73{--tw-text-opacity:1;color:rgb(75 85 99 / var(--tw-text-opacity, 1));transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms\n}.nav-link.svelte-98sj73:hover{--tw-text-opacity:1;color:rgb(255 107 107 / var(--tw-text-opacity, 1))\n}.mobile-nav-link.svelte-98sj73{display:block;border-radius:0.375rem;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:1rem;padding-right:1rem;--tw-text-opacity:1;color:rgb(75 85 99 / var(--tw-text-opacity, 1));transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms\n}.mobile-nav-link.svelte-98sj73:hover{--tw-bg-opacity:1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1));--tw-text-opacity:1;color:rgb(255 107 107 / var(--tw-text-opacity, 1))\n}.btn-primary.svelte-98sj73{border-radius:0.375rem;--tw-bg-opacity:1;background-color:rgb(255 107 107 / var(--tw-bg-opacity, 1));padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity, 1));transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms\n}.btn-primary.svelte-98sj73:hover{background-color:rgb(255 107 107 / 0.9)\n}",
  map: `{"version":3,"file":"Navbar.svelte","sources":["Navbar.svelte"],"sourcesContent":["<script>\\n  import content from '$content/layout.json';\\n  let isMenuOpen = false;\\n  const toggleMenu = () => (isMenuOpen = !isMenuOpen);\\n  import { page } from \\"$app/stores\\";\\n<\/script>\\n\\n<nav class=\\"bg-white shadow-md sticky top-0 z-50\\">\\n  <div class=\\"container mx-auto px-4\\">\\n    <div class=\\"flex justify-between items-center h-16\\">\\n      <a\\n        href={$page.url.pathname === \\"/kh-website/\\" ? \\"/\\" : \\"/kh-website/\\"}\\n        class=\\"flex items-center space-x-3\\"\\n      >\\n        <img\\n          src={content.navigation.logo.src}\\n          alt={content.navigation.logo.alt}\\n          class=\\"h-10 w-auto\\"\\n        />\\n      </a>\\n\\n      <button\\n        class=\\"md:hidden p-2 rounded-md hover:bg-gray-100\\"\\n        on:click={toggleMenu}\\n        aria-label=\\"Toggle menu\\"\\n      >\\n        <svg\\n          class=\\"w-6 h-6\\"\\n          fill=\\"none\\"\\n          stroke=\\"currentColor\\"\\n          viewBox=\\"0 0 24 24\\"\\n        >\\n          <path\\n            stroke-linecap=\\"round\\"\\n            stroke-linejoin=\\"round\\"\\n            stroke-width=\\"2\\"\\n            d={isMenuOpen ? \\"M6 18L18 6M6 6l12 12\\" : \\"M4 6h16M4 12h16M4 18h16\\"}\\n          />\\n        </svg>\\n      </button>\\n\\n      <div class=\\"hidden md:flex items-center space-x-8\\">\\n        {#each content.navigation.links as link}\\n          <a \\n            href={link.href} \\n            class={link.isPrimary ? \\"btn-primary\\" : \\"nav-link\\"}\\n          >\\n            {link.text}\\n          </a>\\n        {/each}\\n      </div>\\n    </div>\\n\\n    {#if isMenuOpen}\\n      <div class=\\"md:hidden py-4 space-y-2\\">\\n        {#each content.navigation.links as link}\\n          <a \\n            href={link.href} \\n            class={link.isPrimary ? \\"mobile-nav-link text-primary font-semibold\\" : \\"mobile-nav-link\\"}\\n          >\\n            {link.text}\\n          </a>\\n        {/each}\\n      </div>\\n    {/if}\\n  </div>\\n</nav>\\n\\n<style lang=\\"postcss\\">\\n  .nav-link {\\n\\n    --tw-text-opacity: 1;\\n\\n    color: rgb(75 85 99 / var(--tw-text-opacity, 1));\\n\\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\\n\\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n\\n    transition-duration: 200ms\\n}\\n\\n.nav-link:hover {\\n\\n    --tw-text-opacity: 1;\\n\\n    color: rgb(255 107 107 / var(--tw-text-opacity, 1))\\n}\\n\\n  .mobile-nav-link {\\n\\n    display: block;\\n\\n    border-radius: 0.375rem;\\n\\n    padding-top: 0.5rem;\\n\\n    padding-bottom: 0.5rem;\\n\\n    padding-left: 1rem;\\n\\n    padding-right: 1rem;\\n\\n    --tw-text-opacity: 1;\\n\\n    color: rgb(75 85 99 / var(--tw-text-opacity, 1));\\n\\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\\n\\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n\\n    transition-duration: 200ms\\n}\\n\\n  .mobile-nav-link:hover {\\n\\n    --tw-bg-opacity: 1;\\n\\n    background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1));\\n\\n    --tw-text-opacity: 1;\\n\\n    color: rgb(255 107 107 / var(--tw-text-opacity, 1))\\n}\\n\\n  .btn-primary {\\n\\n    border-radius: 0.375rem;\\n\\n    --tw-bg-opacity: 1;\\n\\n    background-color: rgb(255 107 107 / var(--tw-bg-opacity, 1));\\n\\n    padding-left: 1rem;\\n\\n    padding-right: 1rem;\\n\\n    padding-top: 0.5rem;\\n\\n    padding-bottom: 0.5rem;\\n\\n    --tw-text-opacity: 1;\\n\\n    color: rgb(255 255 255 / var(--tw-text-opacity, 1));\\n\\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\\n\\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n\\n    transition-duration: 200ms\\n}\\n\\n  .btn-primary:hover {\\n\\n    background-color: rgb(255 107 107 / 0.9)\\n}\\n</style>\\n"],"names":[],"mappings":"AAqEE,uBAAU,CAER,iBAAiB,CAAE,CAAC,CAEpB,KAAK,CAAE,IAAI,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,EAAE,CAAC,CAAC,CAEhD,mBAAmB,CAAE,KAAK,CAAC,CAAC,gBAAgB,CAAC,CAAC,YAAY,CAAC,CAAC,qBAAqB,CAAC,CAAC,IAAI,CAAC,CAAC,MAAM,CAE/F,0BAA0B,CAAE,aAAa,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAExD,mBAAmB,CAAE;AACzB,CAEA,uBAAS,MAAO,CAEZ,iBAAiB,CAAE,CAAC,CAEpB,KAAK,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,EAAE,CAAC;AACtD,CAEE,8BAAiB,CAEf,OAAO,CAAE,KAAK,CAEd,aAAa,CAAE,QAAQ,CAEvB,WAAW,CAAE,MAAM,CAEnB,cAAc,CAAE,MAAM,CAEtB,YAAY,CAAE,IAAI,CAElB,aAAa,CAAE,IAAI,CAEnB,iBAAiB,CAAE,CAAC,CAEpB,KAAK,CAAE,IAAI,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,EAAE,CAAC,CAAC,CAEhD,mBAAmB,CAAE,KAAK,CAAC,CAAC,gBAAgB,CAAC,CAAC,YAAY,CAAC,CAAC,qBAAqB,CAAC,CAAC,IAAI,CAAC,CAAC,MAAM,CAE/F,0BAA0B,CAAE,aAAa,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAExD,mBAAmB,CAAE;AACzB,CAEE,8BAAgB,MAAO,CAErB,eAAe,CAAE,CAAC,CAElB,gBAAgB,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,eAAe,CAAC,EAAE,CAAC,CAAC,CAE5D,iBAAiB,CAAE,CAAC,CAEpB,KAAK,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,EAAE,CAAC;AACtD,CAEE,0BAAa,CAEX,aAAa,CAAE,QAAQ,CAEvB,eAAe,CAAE,CAAC,CAElB,gBAAgB,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,eAAe,CAAC,EAAE,CAAC,CAAC,CAE5D,YAAY,CAAE,IAAI,CAElB,aAAa,CAAE,IAAI,CAEnB,WAAW,CAAE,MAAM,CAEnB,cAAc,CAAE,MAAM,CAEtB,iBAAiB,CAAE,CAAC,CAEpB,KAAK,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,EAAE,CAAC,CAAC,CAEnD,mBAAmB,CAAE,KAAK,CAAC,CAAC,gBAAgB,CAAC,CAAC,YAAY,CAAC,CAAC,qBAAqB,CAAC,CAAC,IAAI,CAAC,CAAC,MAAM,CAE/F,0BAA0B,CAAE,aAAa,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAExD,mBAAmB,CAAE;AACzB,CAEE,0BAAY,MAAO,CAEjB,gBAAgB,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,GAAG;AAC3C"}`
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<nav class="bg-white shadow-md sticky top-0 z-50"><div class="container mx-auto px-4"><div class="flex justify-between items-center h-16"><a${add_attribute(
    "href",
    $page.url.pathname === "/kh-website/" ? "/" : "/kh-website/",
    0
  )} class="flex items-center space-x-3"><img${add_attribute("src", content.navigation.logo.src, 0)}${add_attribute("alt", content.navigation.logo.alt, 0)} class="h-10 w-auto"></a> <button class="md:hidden p-2 rounded-md hover:bg-gray-100" aria-label="Toggle menu"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${add_attribute(
    "d",
    "M4 6h16M4 12h16M4 18h16",
    0
  )}></path></svg></button> <div class="hidden md:flex items-center space-x-8">${each(content.navigation.links, (link) => {
    return `<a${add_attribute("href", link.href, 0)} class="${escape(null_to_empty(link.isPrimary ? "btn-primary" : "nav-link"), true) + " svelte-98sj73"}">${escape(link.text)} </a>`;
  })}</div></div> ${``}</div> </nav>`;
});
const css = {
  code: "footer.svelte-121l1aa.svelte-121l1aa{background:#2d3436;color:white;padding:4rem 2rem 2rem;margin-top:4rem}.footer-content.svelte-121l1aa.svelte-121l1aa{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));gap:3rem}.footer-section.svelte-121l1aa h3.svelte-121l1aa{color:var(--primary-color);margin-bottom:1.5rem}.footer-section.svelte-121l1aa p.svelte-121l1aa{margin-bottom:1rem;opacity:0.8}.social-links.svelte-121l1aa.svelte-121l1aa{display:flex;gap:1rem;margin-top:1rem}.social-links.svelte-121l1aa a.svelte-121l1aa{color:white;opacity:0.8;transition:opacity 0.2s}.social-links.svelte-121l1aa a.svelte-121l1aa:hover{opacity:1;text-decoration:none}nav.svelte-121l1aa.svelte-121l1aa{display:flex;flex-direction:column;gap:0.5rem}nav.svelte-121l1aa a{color:white;opacity:0.8;transition:opacity 0.2s}nav.svelte-121l1aa a:hover{opacity:1;text-decoration:none}.contact-button.svelte-121l1aa.svelte-121l1aa{display:inline-block;background:var(--primary-color);color:white;padding:0.5rem 1rem;border-radius:4px;margin-top:1rem;transition:background-color 0.2s}.contact-button.svelte-121l1aa.svelte-121l1aa:hover{background:#ff5252;text-decoration:none}.footer-bottom.svelte-121l1aa.svelte-121l1aa{max-width:1200px;margin:3rem auto 0;padding-top:2rem;border-top:1px solid rgba(255, 255, 255, 0.1);text-align:center;opacity:0.6}@media(max-width: 768px){.footer-content.svelte-121l1aa.svelte-121l1aa{grid-template-columns:1fr;text-align:center}.social-links.svelte-121l1aa.svelte-121l1aa{justify-content:center}nav.svelte-121l1aa.svelte-121l1aa{align-items:center}}",
  map: '{"version":3,"file":"Footer.svelte","sources":["Footer.svelte"],"sourcesContent":["<script lang=\\"ts\\">import content from \\"$content/layout.json\\";\\n<\/script>\\n\\n<footer>\\n  <div class=\\"footer-content\\">\\n    <div class=\\"footer-section\\">\\n      <h3>{content.footer.about.title}</h3>\\n      <p>{content.footer.about.description}</p>\\n\\n      <div class=\\"social-links\\">\\n        <a \\n          href={content.footer.about.newsletter.link} \\n          target=\\"_blank\\" \\n          rel=\\"noopener noreferrer\\"\\n        >\\n          {content.footer.about.newsletter.text}\\n        </a>\\n      </div>\\n\\n      <div class=\\"social-links\\">\\n        {#each content.footer.about.socialLinks as link}\\n          <a \\n            href={link.href} \\n            target=\\"_blank\\" \\n            rel=\\"noopener noreferrer\\"\\n          >\\n            {link.text}\\n          </a>\\n        {/each}\\n      </div>\\n    </div>\\n\\n    <div class=\\"footer-section\\">\\n      <h3>{content.footer.quickLinks.title}</h3>\\n      <nav>\\n        {#each content.footer.quickLinks.links as link}\\n          <a href={link.href}>{link.text}</a>\\n        {/each}\\n      </nav>\\n    </div>\\n\\n    <div class=\\"footer-section\\">\\n      <h3>{content.footer.contact.title}</h3>\\n      <p>Email: {content.footer.contact.email}</p>\\n      <p>\\n        {content.footer.contact.address.street}<br>\\n        {content.footer.contact.address.city}\\n      </p>\\n      <a \\n        href={content.footer.contact.button.href} \\n        class=\\"contact-button\\"\\n      >\\n        {content.footer.contact.button.text}\\n      </a>\\n    </div>\\n  </div>\\n\\n  <div class=\\"footer-bottom\\">\\n    <p>&copy; {new Date().getFullYear()} Kehillat Harlem. All rights reserved.</p>\\n  </div>\\n</footer>\\n\\n<style>\\n  footer {\\n    background: #2d3436;\\n    color: white;\\n    padding: 4rem 2rem 2rem;\\n    margin-top: 4rem;\\n  }\\n\\n  .footer-content {\\n    max-width: 1200px;\\n    margin: 0 auto;\\n    display: grid;\\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\\n    gap: 3rem;\\n  }\\n\\n  .footer-section h3 {\\n    color: var(--primary-color);\\n    margin-bottom: 1.5rem;\\n  }\\n\\n  .footer-section p {\\n    margin-bottom: 1rem;\\n    opacity: 0.8;\\n  }\\n\\n  .social-links {\\n    display: flex;\\n    gap: 1rem;\\n    margin-top: 1rem;\\n  }\\n\\n  .social-links a {\\n    color: white;\\n    opacity: 0.8;\\n    transition: opacity 0.2s;\\n  }\\n\\n  .social-links a:hover {\\n    opacity: 1;\\n    text-decoration: none;\\n  }\\n\\n  nav {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 0.5rem;\\n  }\\n\\n  nav :global(a) {\\n    color: white;\\n    opacity: 0.8;\\n    transition: opacity 0.2s;\\n  }\\n\\n  nav :global(a:hover) {\\n    opacity: 1;\\n    text-decoration: none;\\n  }\\n\\n  .contact-button {\\n    display: inline-block;\\n    background: var(--primary-color);\\n    color: white;\\n    padding: 0.5rem 1rem;\\n    border-radius: 4px;\\n    margin-top: 1rem;\\n    transition: background-color 0.2s;\\n  }\\n\\n  .contact-button:hover {\\n    background: #ff5252;\\n    text-decoration: none;\\n  }\\n\\n  .footer-bottom {\\n    max-width: 1200px;\\n    margin: 3rem auto 0;\\n    padding-top: 2rem;\\n    border-top: 1px solid rgba(255, 255, 255, 0.1);\\n    text-align: center;\\n    opacity: 0.6;\\n  }\\n\\n  @media (max-width: 768px) {\\n    .footer-content {\\n      grid-template-columns: 1fr;\\n      text-align: center;\\n    }\\n\\n    .social-links {\\n      justify-content: center;\\n    }\\n\\n    nav {\\n      align-items: center;\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"AA+DE,oCAAO,CACL,UAAU,CAAE,OAAO,CACnB,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CACvB,UAAU,CAAE,IACd,CAEA,6CAAgB,CACd,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,QAAQ,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,GAAG,CAAC,CAAC,CAC3D,GAAG,CAAE,IACP,CAEA,8BAAe,CAAC,iBAAG,CACjB,KAAK,CAAE,IAAI,eAAe,CAAC,CAC3B,aAAa,CAAE,MACjB,CAEA,8BAAe,CAAC,gBAAE,CAChB,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,GACX,CAEA,2CAAc,CACZ,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IAAI,CACT,UAAU,CAAE,IACd,CAEA,4BAAa,CAAC,gBAAE,CACd,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,GAAG,CACZ,UAAU,CAAE,OAAO,CAAC,IACtB,CAEA,4BAAa,CAAC,gBAAC,MAAO,CACpB,OAAO,CAAE,CAAC,CACV,eAAe,CAAE,IACnB,CAEA,iCAAI,CACF,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,MACP,CAEA,kBAAG,CAAS,CAAG,CACb,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,GAAG,CACZ,UAAU,CAAE,OAAO,CAAC,IACtB,CAEA,kBAAG,CAAS,OAAS,CACnB,OAAO,CAAE,CAAC,CACV,eAAe,CAAE,IACnB,CAEA,6CAAgB,CACd,OAAO,CAAE,YAAY,CACrB,UAAU,CAAE,IAAI,eAAe,CAAC,CAChC,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,MAAM,CAAC,IAAI,CACpB,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,gBAAgB,CAAC,IAC/B,CAEA,6CAAe,MAAO,CACpB,UAAU,CAAE,OAAO,CACnB,eAAe,CAAE,IACnB,CAEA,4CAAe,CACb,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,IAAI,CAAC,IAAI,CAAC,CAAC,CACnB,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC9C,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,GACX,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,6CAAgB,CACd,qBAAqB,CAAE,GAAG,CAC1B,UAAU,CAAE,MACd,CAEA,2CAAc,CACZ,eAAe,CAAE,MACnB,CAEA,iCAAI,CACF,WAAW,CAAE,MACf,CACF"}'
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="svelte-121l1aa"><div class="footer-content svelte-121l1aa"><div class="footer-section svelte-121l1aa"><h3 class="svelte-121l1aa">${escape(content.footer.about.title)}</h3> <p class="svelte-121l1aa">${escape(content.footer.about.description)}</p> <div class="social-links svelte-121l1aa"><a${add_attribute("href", content.footer.about.newsletter.link, 0)} target="_blank" rel="noopener noreferrer" class="svelte-121l1aa">${escape(content.footer.about.newsletter.text)}</a></div> <div class="social-links svelte-121l1aa">${each(content.footer.about.socialLinks, (link) => {
    return `<a${add_attribute("href", link.href, 0)} target="_blank" rel="noopener noreferrer" class="svelte-121l1aa">${escape(link.text)} </a>`;
  })}</div></div> <div class="footer-section svelte-121l1aa"><h3 class="svelte-121l1aa">${escape(content.footer.quickLinks.title)}</h3> <nav class="svelte-121l1aa">${each(content.footer.quickLinks.links, (link) => {
    return `<a${add_attribute("href", link.href, 0)}>${escape(link.text)}</a>`;
  })}</nav></div> <div class="footer-section svelte-121l1aa"><h3 class="svelte-121l1aa">${escape(content.footer.contact.title)}</h3> <p class="svelte-121l1aa">Email: ${escape(content.footer.contact.email)}</p> <p class="svelte-121l1aa">${escape(content.footer.contact.address.street)}<br> ${escape(content.footer.contact.address.city)}</p> <a${add_attribute("href", content.footer.contact.button.href, 0)} class="contact-button svelte-121l1aa">${escape(content.footer.contact.button.text)}</a></div></div> <div class="footer-bottom svelte-121l1aa"><p>© ${escape((/* @__PURE__ */ new Date()).getFullYear())} Kehillat Harlem. All rights reserved.</p></div> </footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="min-h-screen flex flex-col">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <main class="flex-grow">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
