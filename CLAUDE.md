# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a SvelteKit static website for Kehillat Harlem, a Jewish community organization. The site is deployed to GitHub Pages and uses a content-driven architecture where all page content is stored in JSON files.

## Essential Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build  
npm run preview

# Type checking
npm run check
npm run check:watch  # Watch mode
```

## Architecture

### Technology Stack
- **SvelteKit v2.0.0** with static adapter for GitHub Pages
- **Vite v5.0.0** for build tooling
- **Tailwind CSS v3.4.1** for styling
- **Node v22.17.0** (specified in .npmrc)

### Project Structure
- `/src/routes/` - Page components and routing
- `/src/content/` - JSON files containing all page content
- `/src/components/` - Reusable components (Navbar, Footer)
- `/static/` - Static assets (images)
- Content alias: `$content` maps to `/src/content/` in imports

### Key Configuration
- **Base path**: `/kh-website` in production (configured in svelte.config.js)
- **Static site generation**: All pages are pre-rendered
- **GitHub Actions**: Automatic deployment on push to main branch

### Content Management
All page content is stored in JSON files under `/src/content/`. To update content:
1. Edit the corresponding JSON file (e.g., `about.json`, `events.json`)
2. Changes are reflected immediately in development
3. Push to main branch to deploy

### Development Patterns

#### Page Components
- Pages use dynamic imports for JSON content: `{#await import('$content/page.json') then content}`
- Alternative pattern: `import content from '$content/page.json'` (synchronous)
- All page content comes from corresponding JSON files in `/src/content/`

#### Styling
- PostCSS with Tailwind directives in `<style lang="postcss">` blocks
- Custom colors defined but often overridden (e.g., `.text-primary { @apply text-blue-600; }`)
- Consistent use of container classes: `container mx-auto px-4 py-8`
- Responsive design patterns: `flex-col md:flex-row`, `w-full md:w-1/2`

#### Image Handling
- Images use full GitHub Pages URLs: `https://eliauf23.github.io/kh-website/image.jpg`
- Images stored in `/static/` directory
- Common image classes: `w-full h-64 object-cover rounded-lg`

### Development Notes
- No linting or formatting tools are configured
- No testing framework is set up
- Mixed JavaScript/TypeScript usage
- Custom Tailwind colors: primary (#ff6b6b), secondary (#4ecdc4)