import { c as create_ssr_component, f as escape, e as each, d as add_attribute } from "../../../chunks/ssr.js";
const pageTitle = "Support Kehillat Harlem";
const mainDescription = "Please show your commitment to our community through a gift which will help us continue to grow and flourish.";
const recommendedDonation = "The recommended monthly donation for those who can afford it is $100 per person.";
const donationTiers = [
  {
    title: "Community Supporter",
    description: "Support Jewish life in Harlem with a donation of up to $36 each month!",
    options: [
      {
        amount: 18,
        label: "Make a Monthly $18 Donation",
        link: "https://buy.stripe.com/cN25m2a6Uf756gUdQR"
      },
      {
        amount: 36,
        label: "Make a Monthly $36 Donation",
        link: "https://buy.stripe.com/aEUg0G6UI2kjgVyaEG"
      }
    ]
  },
  {
    title: "Community Sustainer",
    description: "Become a community sustainer by donating up to $100 each month to keep our community going!",
    options: [
      {
        amount: 54,
        label: "Make a Monthly $54 Donation",
        link: "https://buy.stripe.com/aEUeWCcf26AzgVyfZ1"
      },
      {
        amount: 72,
        label: "Make a Monthly $72 Donation",
        link: "https://buy.stripe.com/4gwaGmfre3ongVy28c"
      },
      {
        amount: 100,
        label: "Make a Monthly $100 Donation",
        link: "https://buy.stripe.com/bIY15Mena3onbBe7sx"
      }
    ]
  },
  {
    title: "Community Builder",
    description: "Build our community in Harlem with a monthly gift of up to $360!",
    options: [
      {
        amount: 180,
        label: "Make a Monthly $180 Donation",
        link: "https://buy.stripe.com/8wM15Ma6U9ML8p2cMS"
      },
      {
        amount: 250,
        label: "Make a Monthly $250 Donation",
        link: "https://buy.stripe.com/bIY9Ci92Qe310WA6ov"
      },
      {
        amount: 360,
        label: "Make a Monthly 360 Donation",
        link: "https://buy.stripe.com/fZe15Mdj66Az7kYbIQ"
      }
    ]
  },
  {
    title: "Community Sponsor",
    description: "Sponsor all of the work we are doing in Harlem with a gift of $500 per month or more!",
    options: [
      {
        amount: 500,
        label: "Make a Monthly $500 Donation",
        link: "https://buy.stripe.com/6oE4hY3Iw6Az0WA28j"
      },
      {
        amount: 750,
        label: "Make a Monthly $750 Donation",
        link: "https://buy.stripe.com/7sIbKqa6Uf757kYaEN"
      },
      {
        amount: 1e3,
        label: "Make a Monthly $1000 Donation",
        link: "https://buy.stripe.com/cN2g0Gdj6aQPgVyfZ8"
      }
    ]
  }
];
const oneTimeGift = {
  label: "Click Here to Make a One Time Gift",
  link: "https://donate.stripe.com/8wM7uafre2kj8p2288"
};
const content = {
  pageTitle,
  mainDescription,
  recommendedDonation,
  donationTiers,
  oneTimeGift
};
const css = {
  code: '.bg-primary.svelte-omskz2{--tw-bg-opacity:1;background-color:rgb(37 99 235 / var(--tw-bg-opacity, 1))}a[href*="stripe.com"].svelte-omskz2{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity, 1));transition-property:all;transition-duration:200ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}a[href*="stripe.com"].svelte-omskz2:hover{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity, 1));text-decoration-line:none}a[href*="stripe.com"].svelte-omskz2{transform:translateY(0)}a[href*="stripe.com"].svelte-omskz2:hover{--tw-bg-opacity:1;background-color:rgb(29 78 216 / var(--tw-bg-opacity, 1));--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transform:translateY(-1px)}',
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import content from '$content/donate.json';\\n  const { pageTitle, mainDescription, recommendedDonation, donationTiers, oneTimeGift } = content;\\n<\/script>\\n\\n<div class=\\"container mx-auto px-4 py-12 max-w-6xl\\">\\n  <div class=\\"text-center mb-12\\">\\n    <h1 class=\\"text-3xl md:text-4xl font-bold mb-6\\">{pageTitle}</h1>\\n    <p class=\\"text-xl mb-4\\">\\n      {mainDescription}\\n    </p>\\n    <p class=\\"text-lg text-gray-700\\">\\n      {recommendedDonation}\\n    </p>\\n  </div>\\n\\n  <!-- Donation Tiers -->\\n  <div class=\\"grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12\\">\\n    {#each donationTiers as tier}\\n      <div class=\\"bg-white rounded-lg shadow-md overflow-hidden\\">\\n        <div class=\\"p-6\\">\\n          <h2 class=\\"text-2xl font-bold mb-4\\">{tier.title}</h2>\\n          <p class=\\"text-gray-600 mb-6\\">\\n            {tier.description}\\n          </p>\\n          <div class=\\"space-y-3\\">\\n            {#each tier.options as option}\\n              <a \\n                href={option.link}\\n                target=\\"_blank\\"\\n                rel=\\"noopener noreferrer\\"\\n                class=\\"block w-full text-center px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors duration-200\\"\\n              >\\n                {option.label}\\n              </a>\\n            {/each}\\n          </div>\\n        </div>\\n      </div>\\n    {/each}\\n  </div>\\n\\n  <!-- One Time Gift -->\\n  <div class=\\"text-center\\">\\n    <a \\n      href={oneTimeGift.link}\\n      target=\\"_blank\\"\\n      rel=\\"noopener noreferrer\\"\\n      class=\\"inline-block px-8 py-4 bg-blue-500 text-white text-xl font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200\\"\\n    >\\n      {oneTimeGift.label}\\n    </a>\\n  </div>\\n</div>\\n\\n<style lang=\\"postcss\\">\\n  .bg-primary {\\n    --tw-bg-opacity: 1;\\n    background-color: rgb(37 99 235 / var(--tw-bg-opacity, 1));\\n}\\n\\n  /* Enhanced hover styles for donation buttons */\\n  a[href*=\\"stripe.com\\"] {\\n    --tw-text-opacity: 1;\\n    color: rgb(255 255 255 / var(--tw-text-opacity, 1));\\n    transition-property: all;\\n    transition-duration: 200ms;\\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n}\\n  a[href*=\\"stripe.com\\"]:hover {\\n    --tw-text-opacity: 1;\\n    color: rgb(255 255 255 / var(--tw-text-opacity, 1));\\n    text-decoration-line: none;\\n}\\n  a[href*=\\"stripe.com\\"] {\\n    transform: translateY(0);\\n  }\\n\\n  a[href*=\\"stripe.com\\"]:hover {\\n    --tw-bg-opacity: 1;\\n    background-color: rgb(29 78 216 / var(--tw-bg-opacity, 1));\\n    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\\n    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\\n    transform: translateY(-1px);\\n}\\n</style> "],"names":[],"mappings":"AAwDE,yBAAY,CACV,eAAe,CAAE,CAAC,CAClB,gBAAgB,CAAE,IAAI,EAAE,CAAC,EAAE,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,eAAe,CAAC,EAAE,CAAC,CAC7D,CAGE,CAAC,CAAC,IAAI,EAAE,YAAY,eAAE,CACpB,iBAAiB,CAAE,CAAC,CACpB,KAAK,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,EAAE,CAAC,CAAC,CACnD,mBAAmB,CAAE,GAAG,CACxB,mBAAmB,CAAE,KAAK,CAC1B,0BAA0B,CAAE,aAAa,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAC3D,CACE,CAAC,CAAC,IAAI,EAAE,YAAY,eAAC,MAAO,CAC1B,iBAAiB,CAAE,CAAC,CACpB,KAAK,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,EAAE,CAAC,CAAC,CACnD,oBAAoB,CAAE,IAC1B,CACE,CAAC,CAAC,IAAI,EAAE,YAAY,eAAE,CACpB,SAAS,CAAE,WAAW,CAAC,CACzB,CAEA,CAAC,CAAC,IAAI,EAAE,YAAY,eAAC,MAAO,CAC1B,eAAe,CAAE,CAAC,CAClB,gBAAgB,CAAE,IAAI,EAAE,CAAC,EAAE,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,eAAe,CAAC,EAAE,CAAC,CAAC,CAC1D,WAAW,CAAE,kEAAkE,CAC/E,mBAAmB,CAAE,8EAA8E,CACnG,UAAU,CAAE,IAAI,uBAAuB,CAAC,UAAU,CAAC,CAAC,CAAC,IAAI,gBAAgB,CAAC,UAAU,CAAC,CAAC,CAAC,IAAI,WAAW,CAAC,CACvG,SAAS,CAAE,WAAW,IAAI,CAC9B"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const { pageTitle: pageTitle2, mainDescription: mainDescription2, recommendedDonation: recommendedDonation2, donationTiers: donationTiers2, oneTimeGift: oneTimeGift2 } = content;
  $$result.css.add(css);
  return `<div class="container mx-auto px-4 py-12 max-w-6xl"><div class="text-center mb-12"><h1 class="text-3xl md:text-4xl font-bold mb-6">${escape(pageTitle2)}</h1> <p class="text-xl mb-4">${escape(mainDescription2)}</p> <p class="text-lg text-gray-700">${escape(recommendedDonation2)}</p></div>  <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">${each(donationTiers2, (tier) => {
    return `<div class="bg-white rounded-lg shadow-md overflow-hidden"><div class="p-6"><h2 class="text-2xl font-bold mb-4">${escape(tier.title)}</h2> <p class="text-gray-600 mb-6">${escape(tier.description)}</p> <div class="space-y-3">${each(tier.options, (option) => {
      return `<a${add_attribute("href", option.link, 0)} target="_blank" rel="noopener noreferrer" class="block w-full text-center px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors duration-200 svelte-omskz2">${escape(option.label)} </a>`;
    })} </div></div> </div>`;
  })}</div>  <div class="text-center"><a${add_attribute("href", oneTimeGift2.link, 0)} target="_blank" rel="noopener noreferrer" class="inline-block px-8 py-4 bg-blue-500 text-white text-xl font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200 svelte-omskz2">${escape(oneTimeGift2.label)}</a></div> </div>`;
});
export {
  Page as default
};
